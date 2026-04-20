import './About.css'

const jobs = [
  {
    period: '2024 — Present',
    company: 'Globant',
    role: 'UX Designer Senior Lvl 3',
    blurb:
      'Designing digital products for global enterprise clients. Collaborating across engineering, strategy and research teams.',
    bg: '#96D511',
    current: true,
  },
  {
    period: 'Oct 2021 — 2024',
    company: 'Sary',
    role: 'Senior Product Designer',
    blurb:
      'Logistics & supply chain platform. End-to-end service ecosystem and design system leadership.',
    bg: '#1abc9c',
  },
  {
    period: 'Jan 2021 — Oct 2021',
    company: 'Zyda',
    role: 'Senior Product Designer',
    blurb:
      'F&B SaaS. Launched the CRM with RFM analysis and owned Sales, Payments, Marketing and Analytics surfaces.',
    bg: '#0e0e0e',
  },
  {
    period: 'Apr 2019 — Dec 2020',
    company: 'Tremoloo',
    role: 'User Experience Designer',
    blurb:
      'Design agency. Shipped products across e-commerce, edtech, fintech and more — and mentored a team of designers.',
    bg: '#6c5ce7',
  },
  {
    period: 'Aug 2018 — Mar 2019',
    company: 'Evaaz',
    role: 'User Experience Designer',
    blurb:
      'E-commerce. Crafted a seamless checkout funnel grounded in user research and prototype-led validation.',
    bg: '#1e9fd8',
  },
]

function Experience() {
  return (
    <section className="about about--experience">
      <div className="about__experience about__experience--standalone">
        <div className="about__experience-head">
          <span className="about__eyebrow">
            <span className="about__star">✦</span> Experience
          </span>
          <h2 className="about__experience-title">
            Places I've <em>designed</em> with.
          </h2>
        </div>

        <ol className="about__timeline">
          {jobs.map((job) => (
            <li
              key={job.company}
              className="about__tl-item"
              style={{ '--job-color': job.current ? job.bg : '#c9c9c9' }}
            >
              <span className="about__tl-rail" aria-hidden="true">
                <span className="about__tl-dot" />
              </span>
              <article className="about__tl-card">
                <div className="about__tl-meta">
                  <span className="about__tl-period">{job.period}</span>
                  {job.current && (
                    <span className="about__tl-current">
                      <span className="about__tl-pulse" /> Current
                    </span>
                  )}
                </div>
                <h3 className="about__tl-company">{job.company}</h3>
                <p className="about__tl-role">{job.role}</p>
                <p className="about__tl-blurb">{job.blurb}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
