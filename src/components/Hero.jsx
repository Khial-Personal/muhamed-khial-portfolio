import './Hero.css'

const heroSkills = [
  {
    label: 'Product design',
    color: '#ff6b6b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7 12 12l8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    label: 'Interaction design',
    color: '#6c5ce7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
      </svg>
    ),
  },
  {
    label: 'Design System',
    color: '#0ea5e9',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: 'User research',
    color: '#10b981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    label: 'Vibe Coding',
    color: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 6-6 6 6 6" />
        <path d="m16 6 6 6-6 6" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    label: 'Product Strategy',
    color: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
      <div className="hero__shape hero__shape--3" />

      <nav className="hero__nav">
        <span className="hero__brand">
          <span className="hero__logo">Muhamed Khial</span>
          <span className="hero__version">Portfolio v335</span>
        </span>
        <ul className="hero__links">
          <li>
            <a
              href="https://calendar.app.google/UsCvccCXAB5uJa2X8"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta"
            >
              Say hi <span className="hero__cta-wave" aria-hidden="true">👋</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero__content">
        <p className="hero__subtitle">
          Hey, I'm <span className="hero__name">Khial</span>
        </p>
        <h1 className="hero__title">
          I turn complex problems into beautiful, user-friendly solutions.
        </h1>
        <div className="hero__skills" aria-label="Skills">
          <div className="hero__skills-track">
            {[...heroSkills, ...heroSkills].map((skill, i) => (
              <span key={i} className="hero__skill">
                <span
                  className="hero__skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
