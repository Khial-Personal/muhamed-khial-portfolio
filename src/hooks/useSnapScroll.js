import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/**
 * Fullpage-style section snap.
 *
 * Each panel is locked to 100vh. A single scroll gesture (wheel tick,
 * touch swipe, or arrow/page key) advances exactly one section. During
 * the animation, further input is ignored until the tween completes
 * plus a short cooldown — this prevents trackpad momentum from
 * skipping multiple sections.
 */

const DURATION = 0.5 // s — snap tween length
const COOLDOWN = 80 // ms after tween before the next gesture is accepted
const WHEEL_THRESHOLD = 10 // px — ignore micro-wheel noise
const TOUCH_THRESHOLD = 40 // px — min swipe to trigger a step

export default function useSnapScroll(
  targetSelector = '.hero, .work-page__intro, .work__card, .footer',
) {
  useEffect(() => {
    const mqCoarse = window.matchMedia('(pointer: coarse)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqShort = window.matchMedia('(max-height: 1100px)')
    if (mqReduce.matches) return
    // On short viewports the content of a panel can exceed 100vh; the
    // overflow would be unreachable because wheel is hijacked. Let the
    // page scroll naturally instead.
    if (mqShort.matches) return

    const root = document.documentElement
    root.classList.add('snap-scroll')

    let panels = []
    let current = 0
    let animating = false
    let unlockAt = 0

    const computePanels = () => {
      panels = Array.from(document.querySelectorAll(targetSelector))
      // Resync `current` with the panel closest to the current scroll position
      const y = window.scrollY
      let best = 0
      let bestDist = Infinity
      panels.forEach((el, i) => {
        const top = el.getBoundingClientRect().top + window.scrollY
        const d = Math.abs(top - y)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      current = best
    }

    const goTo = (index) => {
      if (!panels.length) return
      const clamped = Math.max(0, Math.min(panels.length - 1, index))
      if (clamped === current && !animating) {
        // Re-align if somehow drifted
        const el = panels[clamped]
        const top = el.getBoundingClientRect().top + window.scrollY
        if (Math.abs(top - window.scrollY) < 2) return
      }
      const el = panels[clamped]
      const top = el.getBoundingClientRect().top + window.scrollY

      animating = true
      current = clamped
      gsap.to(window, {
        scrollTo: { y: top, autoKill: false },
        duration: DURATION,
        ease: 'power2.inOut',
        overwrite: true,
        onComplete: () => {
          animating = false
          unlockAt = performance.now() + COOLDOWN
        },
      })
    }

    const canAccept = () => !animating && performance.now() >= unlockAt

    // ---------- Wheel ----------
    const onWheel = (e) => {
      e.preventDefault()
      if (!canAccept()) return
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return
      goTo(current + (e.deltaY > 0 ? 1 : -1))
    }

    // ---------- Touch ----------
    let touchStartY = 0
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }
    const onTouchMove = (e) => {
      // Block native scroll while we handle it
      if (mqCoarse.matches) return // let mobile scroll natively
      e.preventDefault()
    }
    const onTouchEnd = (e) => {
      if (mqCoarse.matches) return
      if (!canAccept()) return
      const dy = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(dy) < TOUCH_THRESHOLD) return
      goTo(current + (dy > 0 ? 1 : -1))
    }

    // ---------- Keyboard ----------
    const onKey = (e) => {
      if (!canAccept()) return
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          goTo(current + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          goTo(current - 1)
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(panels.length - 1)
          break
        default:
          break
      }
    }

    // ---------- Resize ----------
    const onResize = () => {
      computePanels()
      if (!animating && panels[current]) {
        const top = panels[current].getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top, behavior: 'instant' in document.body.style ? 'instant' : 'auto' })
      }
    }

    // Initial setup — after layout settles.
    // Always start at the FIRST panel on route mount, otherwise a
    // preserved scroll from the previous route can make us land mid-list.
    panels = Array.from(document.querySelectorAll(targetSelector))
    current = 0
    window.scrollTo({ top: 0, behavior: 'instant' })
    requestAnimationFrame(() => {
      panels = Array.from(document.querySelectorAll(targetSelector))
      current = 0
      if (panels[0]) {
        const top = panels[0].getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top, behavior: 'instant' })
      }
    })

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      root.classList.remove('snap-scroll')
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      gsap.killTweensOf(window)
    }
  }, [targetSelector])
}
