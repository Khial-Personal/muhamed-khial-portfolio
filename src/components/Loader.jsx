import { useEffect, useState } from 'react'
import './Loader.css'

/**
 * First-visit loading overlay.
 *
 * Shows a signature-style intro, a progress bar, and a curtain reveal.
 * Runs once per browser session (tracked via sessionStorage), then
 * the overlay fades/slides out of the way.
 */

const SESSION_KEY = 'mk_loader_seen'
const MIN_DURATION = 3600 // ms — total loader time before reveal
const EXIT_DURATION = 900 // ms — exit animation length (must match CSS)

const NAME = 'Muhamed Khial'

function Loader() {
  const [stage, setStage] = useState(() => {
    if (typeof window === 'undefined') return 'idle'
    return sessionStorage.getItem(SESSION_KEY) ? 'idle' : 'enter'
  })

  useEffect(() => {
    if (stage !== 'enter') return
    const exitTimer = setTimeout(() => setStage('exit'), MIN_DURATION)
    return () => clearTimeout(exitTimer)
  }, [stage])

  useEffect(() => {
    if (stage !== 'exit') return
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setStage('idle')
    }, EXIT_DURATION)
    return () => clearTimeout(doneTimer)
  }, [stage])

  // Lock body scroll + hide the app behind the loader so the site
  // doesn't flash into view before the loader paints on top.
  useEffect(() => {
    const root = document.documentElement
    if (stage === 'enter') {
      document.body.style.overflow = 'hidden'
      root.classList.add('loader-active')
      root.classList.remove('loader-exiting')
    } else if (stage === 'exit') {
      root.classList.add('loader-active')
      root.classList.add('loader-exiting')
    } else {
      document.body.style.overflow = ''
      root.classList.remove('loader-active')
      root.classList.remove('loader-exiting')
    }
  }, [stage])

  if (stage === 'idle') return null

  return (
    <div
      className={`loader ${stage === 'exit' ? 'loader--exit' : ''}`}
      aria-hidden={stage === 'exit'}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader__shape loader__shape--a" />
      <div className="loader__shape loader__shape--b" />
      <div className="loader__shape loader__shape--c" />

      <div className="loader__content">
        <span className="loader__eyebrow">
          <span className="loader__star" aria-hidden="true">
            ✦
          </span>
          Portfolio
        </span>

        <h1 className="loader__name" aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="loader__letter"
              style={{ animationDelay: `${0.25 + i * 0.04}s` }}
              aria-hidden="true"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>

        <div className="loader__bar" aria-hidden="true">
          <span className="loader__bar-fill" />
        </div>

        <span className="loader__tag">Crafting experiences…</span>
      </div>
    </div>
  )
}

export default Loader
