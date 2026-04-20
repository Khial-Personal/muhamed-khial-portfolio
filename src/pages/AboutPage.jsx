import { useLayoutEffect } from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import useSnapScroll from '../hooks/useSnapScroll'
import '../components/Hero.css'
import '../styles/page-enter.css'
import './AboutPage.css'

function AboutPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useSnapScroll('.about-page, .experience-page, .footer')

  return (
    <div className="page-enter-stagger">
      <div className="about-page">
        <div className="about-page__nav-wrap">
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
        </div>
        <About variant="page" />
      </div>
      <div className="experience-page">
        <Experience />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
