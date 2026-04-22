import { useEffect } from 'react'

/**
 * Global scroll-triggered reveal.
 *
 * Watches any element with class `.reveal` and adds `.reveal--in` when it
 * enters the viewport. Fires once per element, then stops observing it so
 * animations can't replay on subsequent scrolls.
 *
 * Works on mobile and desktop — pairs with `.reveal` CSS in
 * `src/styles/reveal.css` to give every section a consistent "fade up on
 * scroll" feel regardless of snap-scroll or native scroll.
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Reduced motion: mark everything revealed so layout is stable, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document
        .querySelectorAll('.reveal')
        .forEach((el) => el.classList.add('reveal--in'))
      return
    }

    const reveal = (el) => {
      if (!el.classList.contains('reveal--in')) {
        el.classList.add('reveal--in')
      }
      observer.unobserve(el)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target)
        })
      },
      {
        // Trigger slightly before the element is fully on screen so the
        // fade finishes roughly when the element reaches its resting
        // position. 12% visible is a good compromise.
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    )

    // Scroll-past fallback. IntersectionObserver does NOT fire a callback
    // when an element goes straight from "below viewport" to "above
    // viewport" in a single frame (snap-scroll, jump links, anchor navs),
    // because `isIntersecting` never flipped to true. We back it up with a
    // cheap scroll check that reveals anything whose bottom is already
    // above the viewport — it's been seen, or skipped past, either way
    // the animation should be out of the way.
    const sweepScrolledPast = () => {
      document
        .querySelectorAll('.reveal:not(.reveal--in)')
        .forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.bottom <= 0) reveal(el)
        })
    }

    const observeAll = () => {
      document
        .querySelectorAll('.reveal:not(.reveal--in)')
        .forEach((el) => observer.observe(el))
    }

    observeAll()
    sweepScrolledPast()

    // Re-observe when the DOM changes (route transitions add new nodes).
    const mo = new MutationObserver(() => {
      observeAll()
      sweepScrolledPast()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // Listen on capture phase so snap-scroll containers (which scroll
    // themselves, not window) still trigger the sweep.
    window.addEventListener('scroll', sweepScrolledPast, {
      passive: true,
      capture: true,
    })

    return () => {
      observer.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', sweepScrolledPast, { capture: true })
    }
  }, [])
}
