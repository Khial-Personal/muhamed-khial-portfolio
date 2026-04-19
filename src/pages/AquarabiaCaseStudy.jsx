import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import './SaryCaseStudy.css'

function AquarabiaCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cs">
      {/* Sticky mini-header */}
      <header className="cs__stickynav">
        <div className="cs__stickynav-inner">
          <Link to="/work" className="cs__back">
            <span aria-hidden="true">←</span> Back to work
          </Link>
          <span className="cs__stickynav-title">
            Aquarabia Qiddiya City
          </span>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="cs-section cs-hero">
        <div className="cs-container">
          <div className="cs-hero__tags">
            <span>Entertainment</span>
            <span>·</span>
            <span>B2C</span>
          </div>
          <h1 className="cs-hero__title">
            <em>Aquarabia <span style={{ color: '#000' }}>Qiddiya City</span></em>
          </h1>
          <p className="cs-hero__teaser">
            Designed the end-to-end booking flow for Aquarabia at
            Qiddiya City, one of Saudi Arabia's most anticipated
            entertainment destinations, covering both web and mobile
            platforms, a wide product catalog, and the full journey
            from ticket discovery to gate redemption.
          </p>

          <div className="cs-hero__meta">
            <div>
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">User Research, Product Design</span>
            </div>
            <div>
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Globant</span>
            </div>
            <div>
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Overview</span>
          <h2 className="cs-h2">
            A flagship destination inside <em style={{ color: '#000' }}>Qiddiya City.</em>
          </h2>
          <p>
            Aquarabia is one of the flagship entertainment destinations
            within Qiddiya City — Saudi Arabia's ambitious giga-project
            designed to redefine leisure, culture, and tourism in the
            region.
          </p>
          <p>
            As the technology arm powering Qiddiya's digital experience,
            Globant was brought in to design and build the website and
            mobile app that visitors would use to discover and book their
            visits.
          </p>
        </div>
      </section>

      {/* 4. The Challenge */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">The challenge</span>
          <h2 className="cs-h2">
            A booking flow that had to carry <em style={{ color: '#000' }}>the whole catalog.</em>
          </h2>
          <ul className="cs-list">
            <li>
              I was part of the team responsible for designing the
              booking flow — one of the most critical touchpoints in
              the entire product. My work covered both the website and
              the mobile app, ensuring that visitors could find the
              right ticket, understand their options, and complete
              their purchase without friction. The flow had to support
              a wide product catalog (Single Day, Annual, VIP, Ladies
              Only, Surftopia packages), multi-visitor ticketing with
              name assignment, real-time calendar availability,
              optional experience upsells, and deferred login at
              checkout — all without overwhelming the user.
            </li>
            <li>
              Working under pressure in a high-stakes national project
              sharpened decision-making and pushed the quality of the
              work forward with each iteration. Feedback received in
              review sessions was incorporated quickly, shortening the
              design cycle and keeping momentum high throughout the
              project.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Impact */}
      <section className="cs-section cs-impact">
        <div className="cs-container">
          <span className="cs-eyebrow">The outcome</span>
          <h2 className="cs-h2">
            <em style={{ color: '#000' }}>Successfully delivered and launched.</em>
          </h2>
          <p className="cs-lead">
            The booking journey was delivered as part of the full
            Aquarabia digital product launch — a live, real-world
            experience now used by visitors planning their trips to one
            of Saudi Arabia's most anticipated entertainment
            destinations.
          </p>
          <div className="cs-impact__links">
            <a
              className="cs-impact__link"
              href="https://aquarabiaqiddiyacity.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live website <span aria-hidden="true">↗</span>
            </a>
            <a
              className="cs-impact__link"
              href="https://apps.apple.com/by/app/aquarabia-qiddiya-city/id6757916282"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download iOS app <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Up Next */}
      <section className="cs-section cs-upnext">
        <div className="cs-container">
          <span className="cs-eyebrow">Up next</span>
          <h2 className="cs-h2">Keep exploring</h2>
          <div className="cs-upnext__grid">
            <Link to="/work/sary" className="cs-upnext__card">
              <span className="cs-upnext__year">2021</span>
              <h3>Refining Sary's Checkout Flow</h3>
              <p>
                Reducing drop-off in Sary's B2B marketplace checkout.
              </p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
            <Link to="/work/zyda" className="cs-upnext__card">
              <span className="cs-upnext__year">2021</span>
              <h3>Zyda CRM</h3>
              <p>Customer segmentation for restaurant loyalty.</p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AquarabiaCaseStudy
