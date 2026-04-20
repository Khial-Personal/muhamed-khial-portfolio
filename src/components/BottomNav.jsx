import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BottomNav.css'

const items = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    id: 'work',
    label: 'Work',
    to: '/work',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    to: '/about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    to: 'https://drive.google.com/file/d/145sY0OgvYLoQ95O5R3UOsBjznI3_ShnY/view?usp=drive_link',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
]

const scrollIds = ['home', 'about', 'resume']

function BottomNav() {
  const location = useLocation()
  const routeActive =
    location.pathname === '/work'
      ? 'work'
      : location.pathname === '/about'
        ? 'about'
        : null
  const [active, setActive] = useState(routeActive ?? 'home')

  useEffect(() => {
    if (routeActive) {
      setActive(routeActive)
      return
    }

    const sections = scrollIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [routeActive, location.pathname])

  const isHomeRoute = location.pathname === '/'

  const handleClick = (e, item) => {
    // Hash links (e.g. /#resume) — if we're already on home, smooth-scroll
    if (item.to.startsWith('/#') && isHomeRoute) {
      e.preventDefault()
      const hash = item.to.slice(2)
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(item.id)
      return
    }
    // Home link on home page: scroll to top
    if (item.id === 'home' && isHomeRoute) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActive('home')
      return
    }
    // About link while already on /about: scroll to top
    if (item.id === 'about' && location.pathname === '/about') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // Work link while already on /work: scroll to top
    if (item.id === 'work' && location.pathname === '/work') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="bnav" aria-label="Primary">
      <ul className="bnav__list">
        {items.map((item) => {
          const isActive = active === item.id
          const content = (
            <>
              <span className="bnav__icon" aria-hidden="true">{item.icon}</span>
              <span className="bnav__label">{item.label}</span>
            </>
          )
          return (
            <li key={item.id} className="bnav__item">
              {item.external ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bnav__link ${isActive ? 'bnav__link--active' : ''}`}
                >
                  {content}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className={`bnav__link ${isActive ? 'bnav__link--active' : ''}`}
                  onClick={(e) => handleClick(e, item)}
                >
                  {content}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BottomNav
