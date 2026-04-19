import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import './SaryCaseStudy.css'

function TalentHavenCaseStudy() {
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
            Talent Haven — HR Software for Kuwaiti SMEs
          </span>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="cs-section cs-hero">
        <div className="cs-container">
          <div className="cs-hero__tags">
            <span>SaaS</span>
            <span>·</span>
            <span>HR</span>
            <span>·</span>
            <span>Payroll</span>
          </div>
          <h1 className="cs-hero__title">
            Talent Haven: <em>the complete HR software</em> for people,
            payroll &amp; finance
          </h1>
          <p className="cs-hero__teaser">
            Working with the Tremoloo team and partners to design an HR
            solution for Kuwaiti SMEs — following the resolutions that
            regulate the conditions of employment under Kuwaiti labour
            law.
          </p>

          <div className="cs-hero__meta">
            <div>
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">
                Research, User Flows, Wireframing, Visual Design
              </span>
            </div>
            <div>
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Tremoloo</span>
            </div>
            <div>
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. At a glance */}
      <section className="cs-section cs-glance">
        <div className="cs-container">
          <span className="cs-eyebrow">At a glance</span>
          <div className="cs-glance__grid">
            <div className="cs-glance__cell">
              <span className="cs-glance__label">The problem</span>
              <p>
                No HR product in market followed{' '}
                <strong>Kuwaiti labour law</strong> — SMEs were stuck with
                tools built for large enterprises abroad.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">The approach</span>
              <p>
                Two products, one system: a{' '}
                <strong>web dashboard</strong> for HR specialists and a{' '}
                <strong>native iOS app</strong> for employees.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">The outcome</span>
              <p>
                After an extended beta and Guerrilla testing,{' '}
                <strong>payroll runs</strong> and{' '}
                <strong>geo-located time tracking</strong> emerged as the
                two features that drove adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Background */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Background</span>
          <h2 className="cs-h2">
            A cloud-based HR stack for <em>startups and SMEs.</em>
          </h2>
          <p>
            Talent Haven is a cloud-based solution for startup and SME
            owners that relieves them from the burden of HR-related
            operational work.
          </p>
          <p>
            It makes it easy to onboard new employees, manage
            compensation, and develop company culture — designed to set
            teams free to focus on what matters most to their people.
          </p>
          <p>
            It includes the full HR toolkit that makes managing people
            easy — from streamlined onboarding and PTO tracking to org
            charts and beyond.
          </p>
        </div>
      </section>

      {/* 4. The Challenge */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">The challenge</span>
          <h2 className="cs-h2">
            Empower Kuwaiti companies <em>🇰🇼</em>
          </h2>
          <p>
            The entrepreneurs and employees in small and mid-sized
            businesses power the economy of Kuwait. Their tenacity,
            perseverance, and dreams represent the backbone of the
            workforce.
          </p>
          <p>
            But these businesses face challenges disproportionate to their
            size and resources. And technology providers largely focus on
            the needs of large companies — creating services that feel
            out-of-touch and out-of-reach for SMEs.
          </p>
          <p>
            On top of that, there isn't a system personalised to serve
            the Kuwaiti employee under the regulations of Kuwaiti labour
            law.
          </p>
        </div>
      </section>

      {/* 5. The Problem */}
      <section className="cs-section cs-challenge">
        <div className="cs-container">
          <span className="cs-eyebrow">The problem</span>
          <h2 className="cs-h2">
            What owners kept telling us <em>in scoping.</em>
          </h2>
          <p className="cs-lead">
            In the planning &amp; scope-definition meetings with two
            project managers, I worked to uncover insights and translate
            concepts into features that address customer behaviours and
            motivations. I evangelised customer goals and balanced
            business goals to solve these problems:
          </p>

          <ul className="cs-list">
            <li>
              "I can't find any software that follows the resolutions
              that regulate the conditions of employment and are subject
              to the provisions of Kuwait labour law."
            </li>
            <li>
              "Run payroll quickly and accurately from a laptop, tablet,
              or smartphone — and make a normal workplace process feel
              more human."
            </li>
            <li>
              "Make it easy to onboard new employees, manage
              compensation, and PTO tracking — all the way to org
              charts."
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Customer Insights */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Customer insights</span>
          <h2 className="cs-h2">Two very different users</h2>

          <div className="cs-imagebox cs-placeholder">
            [ Customer insights — personas ]
          </div>

          <div className="cs-infobox">
            <h4>HR specialist</h4>
            <p>
              Recruiters are busy people. Daily team meetings, dozens of
              interviews, business travel. Working in that mode makes it
              easy to lose track of time and miss relevant details.
            </p>
          </div>

          <div className="cs-infobox">
            <h4>Employee</h4>
            <p>
              Some employees aren't highly adapted to technology and
              need to report issues to their managers quickly and
              efficiently — many are non-office-based workers.
            </p>
          </div>

          <h3 className="cs-h3">
            Part of my research was reading the Kuwaiti labour law
          </h3>
          <p>
            To make the software truly personalised for the Kuwaiti
            employee, I had to read the Kuwaiti labour law — following
            the resolutions that regulate employment conditions, plus
            advantageous benefits and rights granted to workers in
            individual or collective contracts (leaves, social and medical
            insurance, and other employment benefits in Kuwait).
          </p>
          <p>
            <a
              href="https://www.kuwaitlaborlaw.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              kuwaitlaborlaw.com
            </a>
          </p>
        </div>
      </section>

      {/* 7. Competitive Analysis */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Competitive analysis</span>
          <h2 className="cs-h2">
            Reading the industry <em>before drawing a line.</em>
          </h2>
          <p>
            To get deeper into industry standards I started identifying
            current competitors, reflecting on their strengths and
            weaknesses — surfacing opportunities in the gaps.
          </p>

          <div className="cs-imagebox cs-placeholder">
            [ Competitive analysis matrix ]
          </div>
        </div>
      </section>

      {/* 8. Ideation — HR specialist */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Ideation</span>
          <h2 className="cs-h2">
            Designing for the <em>HR specialist.</em>
          </h2>
          <p>
            To optimise the experience for the HR specialist, we decided
            — based on research — to design a web dashboard with these
            objectives:
          </p>
          <ul className="cs-list">
            <li>
              Set up a company account and add any organisation-related
              information.
            </li>
            <li>
              Use auto-generated leave policies or custom ones based on
              their org structure.
            </li>
            <li>List all employees with positions hierarchy.</li>
            <li>Set compensation and pay schedules for employees.</li>
            <li>Manage attendance and leaves for every employee.</li>
            <li>
              Run regular, off-cycle, bonus, and termination payrolls.
            </li>
          </ul>

          <div className="cs-imagebox cs-placeholder">
            [ HR specialist dashboard ]
          </div>
        </div>
      </section>

      {/* 9. Employee app */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Ideation</span>
          <h2 className="cs-h2">
            Designing for the <em>employee.</em>
          </h2>
          <p>
            To optimise the experience for employees we designed a native
            iOS app with these objectives:
          </p>
          <ul className="cs-list">
            <li>Clock in &amp; clock out, and edit their working hours.</li>
            <li>
              View accrued leaves and request leaves in a convenient way.
            </li>
            <li>Track their monthly attendance.</li>
            <li>View the team directory and teammates' presence.</li>
            <li>
              Open tickets to report any problems to their managers.
            </li>
          </ul>

          <div className="cs-imagebox cs-placeholder">
            [ Employee iOS app ]
          </div>
        </div>
      </section>

      {/* 10. Information Architecture */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Information architecture</span>
          <h2 className="cs-h2">From insights to a product map</h2>
          <p>
            Based on all insights from interviews and the competitive
            analysis, I started to think through every piece of
            information the product would need to carry.
          </p>
          <p>
            From there I created a mindmap that translated the user
            insights into features — accounting for everything we knew.
          </p>

          <div className="cs-imagebox cs-placeholder">
            [ Information architecture mindmap ]
          </div>
        </div>
      </section>

      {/* 11. Bringing it to life */}
      <section className="cs-section">
        <div className="cs-container">
          <span className="cs-eyebrow">Bringing it all to life</span>
          <h2 className="cs-h2">Three principles that shaped the UI</h2>

          <div className="cs-datacards">
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Brand colour</h3>
              <p>
                Psychologically, when people perceive the colour blue it
                reminds them of reliability, orderliness, loyalty, and
                security — while also promoting credibility and focus.
                The right fit for a system handling payroll and
                sensitive HR data.
              </p>
            </div>
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Accessibility</h3>
              <p>
                Use colour and icons to carry important information, and
                keep components consistent so the same visual always
                means the same behaviour.
              </p>
            </div>
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Guided experience</h3>
              <p>
                Step-by-step sequences help users achieve goals without
                thinking too hard. No jargon. Always lead with headings.
              </p>
            </div>
          </div>

          <div className="cs-container">
            <div className="cs-imagebox cs-placeholder">
              [ Design system ]
            </div>
          </div>
        </div>
      </section>

      {/* 12. Testing assumptions */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Validation</span>
          <h2 className="cs-h2">
            Testing our assumptions <em>before launch.</em>
          </h2>
          <p>
            Once the team had a prototype ready for use, we knew we had
            to put it in the hands of our customers.
          </p>
          <p>
            Two months before launch we doubled down on validating our
            convictions — an extended beta plus Guerrilla user testing
            that highlighted the top risks and the features users were
            most excited about:
          </p>
          <ul className="cs-list">
            <li>
              <strong>Payrolls</strong> — specifically regular payroll
              runs. The most requested capability.
            </li>
            <li>
              <strong>Time tracking with geo-location.</strong> The most
              unexpectedly-loved feature in testing.
            </li>
          </ul>
        </div>
      </section>

      {/* 13. Learnings */}
      <section className="cs-section cs-reflections">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">Learnings &amp; takeaways</span>
          <h2 className="cs-h2">
            What I carried out of <em>this project.</em>
          </h2>
          <p>
            Overall, I really enjoyed this experience and learned a lot
            about the HR industry.
          </p>

          <h3 className="cs-h3">Plan ahead</h3>
          <p>
            I couldn't deliver a finished product without the help of
            the people who would use it. Arranging research and user
            testing early was the biggest unlock.
          </p>

          <h3 className="cs-h3">Detail matters</h3>
          <p>
            I had to revisit the copywriting several times to finally
            meet industry terminology standards. They may not look like
            big innovations, but these changes clear real user
            frustrations — and eventually lift conversion.
          </p>

          <h3 className="cs-h3">Users first</h3>
          <p>
            Seeing the product from a user's perspective, I challenged
            myself to ask the same question on every screen: does the
            user know where to go next from here? If not, what do I need
            to change so they do?
          </p>
        </div>
      </section>

      {/* 14. Up Next */}
      <section className="cs-section cs-upnext">
        <div className="cs-container">
          <span className="cs-eyebrow">Up next</span>
          <h2 className="cs-h2">Keep exploring</h2>
          <div className="cs-upnext__grid">
            <Link to="/work/zyda" className="cs-upnext__card">
              <span className="cs-upnext__year">2021</span>
              <h3>Zyda CRM</h3>
              <p>Customer segmentation for restaurant loyalty.</p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
            <Link to="/work/sary" className="cs-upnext__card">
              <span className="cs-upnext__year">2021</span>
              <h3>Refining Sary's Checkout Flow</h3>
              <p>
                Reducing drop-off in Sary's B2B marketplace checkout.
              </p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TalentHavenCaseStudy
