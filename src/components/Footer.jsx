import './Footer.css'

const EMAIL = 'muhamed.khial@gmail.com'
const RESUME_URL =
  'https://drive.google.com/file/d/145sY0OgvYLoQ95O5R3UOsBjznI3_ShnY/view?usp=drive_link'
const DRIBBBLE_URL = 'https://dribbble.com/MoKhial'
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhamed-khial/'

const contactLinks = [
  { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: 'Resume', href: RESUME_URL, external: true },
  { label: 'Dribbble', href: DRIBBBLE_URL, external: true },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__left reveal">
            <h2 className="footer__statement">
              <em>Let's Connect</em>
            </h2>
            <p className="footer__intro">
              I help teams <strong>identify business opportunities</strong> and{' '}
              <strong>collaborate with stakeholders</strong> to develop
              effective solutions. From{' '}
              <strong>user research and design strategy</strong> to{' '}
              <strong>UI/UX design and testing</strong>, I streamline projects
              to <strong>deliver products to market efficiently</strong> across
              both web and mobile apps.
            </p>
          </div>

          <nav className="footer__right reveal" aria-label="Contact" style={{ '--r-delay': '0.12s' }}>
            <span className="footer__contact-label">Get in touch</span>
            <ul className="footer__links">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="footer__link"
                  >
                    <span className="footer__link-label">{l.label}</span>
                    <span className="footer__link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__marquee reveal" aria-hidden="true">
          <div className="footer__marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="footer__marquee-item">
                Thank you <span className="footer__marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Muhamed Khial</span>
          <span>Designed &amp; built with AI</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
