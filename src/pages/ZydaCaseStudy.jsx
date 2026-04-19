import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import './SaryCaseStudy.css'
import zydaSketches from '../assets/case-studies/Zyda/Zyda sketches.png'
import zydaFlow from '../assets/case-studies/Zyda/Zyda flow.png'
import zydaUI1 from '../assets/case-studies/Zyda/Zyda UI 1.png'
import zydaSegments from '../assets/case-studies/Zyda/Zyda segments.png'
import zydaCalculation from '../assets/case-studies/Zyda/Zyda calculation.png'
import zydaRFM from '../assets/case-studies/Zyda/Zyda RFM.png'
import zydaSMS from '../assets/case-studies/Zyda/Zyda SMS.png'
import zydaRevenue from '../assets/case-studies/Zyda/Zyda revenue.png'
import zydaUI2 from '../assets/case-studies/Zyda/Zyda UI  2.png'
import zydaUI3 from '../assets/case-studies/Zyda/Zyda UI  3.png'

function ZydaCaseStudy() {
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
            Drive Loyalty with RFM Customer Segmentation
          </span>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="cs-section cs-hero">
        <div className="cs-container">
          <div className="cs-hero__tags">
            <span>SaaS</span>
            <span>·</span>
            <span>F&amp;B</span>
            <span>·</span>
            <span>CRM</span>
          </div>
          <h1 className="cs-hero__title">
            Drive Loyalty with <em>RFM Customer Segmentation</em>
          </h1>
          <p className="cs-hero__teaser">
            Building Zyda's first CRM and layering RFM segmentation on top —
            giving restaurant owners a clear way to understand their
            customers, act on the insights, and run personalised campaigns
            that actually move revenue.
          </p>

          <div className="cs-hero__meta">
            <div>
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">
                User Research, Wireframing, Prototyping
              </span>
            </div>
            <div>
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Zyda</span>
            </div>
            <div>
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">Summer 2021</span>
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
                Restaurant owners on Zyda had{' '}
                <strong>zero-commission access</strong> to their customer
                data, but no tool to turn it into growth.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">The approach</span>
              <p>
                Ship the <strong>CRM core first</strong>, then layer{' '}
                <strong>RFM segmentation</strong> and targeted campaigns on
                top.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">The outcome</span>
              <p>
                Exponential adoption growth — the feature became{' '}
                <strong>a paid add-on</strong> outside of the standard Zyda
                plan.
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
            An online store, <em>fully equipped.</em>
          </h2>
          <p>
            Zyda is a digital solution for F&amp;B businesses that provides
            an online store to display products and conduct sales. Like a
            physical store, where owners rent a location to set up shop,
            Zyda lets business owners acquire an online store that is fully
            equipped and ready to use immediately.
          </p>
        </div>
      </section>

      {/* 4. The Problem */}
      <section className="cs-section cs-challenge">
        <div className="cs-container">
          <span className="cs-eyebrow">The problem</span>
          <h2 className="cs-h2">
            Owners had the data — <em>not the tools.</em>
          </h2>

          <blockquote className="cs-quote">
            <p>
              "Talabat / Deliveroo is the devil — they take 20% commission,
              and they don't even share enough customer data with us!"
            </p>
            <p>
              "We love Zyda because you guys are zero commission and share
              customer data with us. But it is challenging and complex to
              analyse all of this data. It could help me solve many
              problems I have — I can even make a list."
            </p>
          </blockquote>

          <ul className="cs-list">
            <li>My average order value is low.</li>
            <li>My retention rate could be higher.</li>
            <li>Revenue hasn't been growing.</li>
          </ul>

          <p className="cs-lead">
            We at Zyda wanted to help restaurant owners analyse customer
            data efficiently and solve these problems.
          </p>
        </div>
      </section>

      {/* 5. The Challenge */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">The challenge</span>
          <h2 className="cs-h2">
            Build a CRM that gets owners{' '}
            <em>closer to their customers.</em>
          </h2>
          <p>
            Building a new CRM (Customer Relationship Manager) that would
            include all of the owner's customer information — name, phone
            number, join date, last order, total orders, and total sales —
            and incorporate personalisation so every customer felt treated
            uniquely.
          </p>
          <p>
            Retention is increasingly difficult in this space. Competition
            is fierce; people buying from you often tend to spend more,
            which affects average order value and overall sales.
          </p>
        </div>
      </section>

      {/* 6. Other Challenges */}
      <section className="cs-section">
        <div className="cs-container">
          <span className="cs-eyebrow">Other challenges</span>
          <div className="cs-datacards">
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Changing customer behavior</h3>
              <p>
                Customer behavior is constantly changing, and restaurant
                owners must stay ahead of these changes to remain
                competitive. RFM analysis helps owners understand behavior
                patterns and preferences, so they can make data-driven
                decisions about menu offerings, promotions, and marketing
                strategies.
              </p>
            </div>
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Limited marketing budgets</h3>
              <p>
                Many restaurant owners have limited marketing budgets and
                must use their resources wisely to attract and retain
                customers. RFM analysis helps optimise marketing spend by
                targeting the most valuable customers with personalised
                promotions and offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Goals & Objectives */}
      <section className="cs-section cs-goals">
        <div className="cs-container">
          <span className="cs-eyebrow">Goals &amp; objectives</span>
          <div className="cs-goals__grid">
            <div className="cs-goals__col">
              <h3 className="cs-h3">User goals</h3>
              <ul>
                <li>
                  <strong>Identify the most valuable customers.</strong>{' '}
                  Based on past purchasing behaviour, so owners can tailor
                  marketing and offer personalised experiences.
                </li>
                <li>
                  <strong>
                    Increase customer engagement and loyalty.
                  </strong>{' '}
                  Use preferences and behaviour to develop targeted
                  promotions and loyalty programs that incentivise
                  customers to return.
                </li>
                <li>
                  <strong>Optimise pricing and product offerings.</strong>{' '}
                  Adjust pricing strategy and menu to better meet the needs
                  of the most valuable customers.
                </li>
              </ul>
            </div>
            <div className="cs-goals__col">
              <h3 className="cs-h3">Zyda objectives</h3>
              <ul>
                <li>
                  Provide a high-quality, user-friendly digital solution
                  that meets the needs of F&amp;B businesses and helps them
                  grow sales and revenue.
                </li>
                <li>
                  Help clients grow by acquiring new customers and
                  expanding their reach in the market.
                </li>
                <li>
                  Differentiate Zyda from competitors with a comprehensive
                  online store solution that is easy to use and provides
                  real value.
                </li>
                <li>
                  Become a leading provider of online store solutions for
                  F&amp;B businesses — known for expertise, quality, and
                  customer satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Approach — CRM "The Core" */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Our approach</span>
          <h2 className="cs-h2">
            CRM — <em>the core.</em>
          </h2>
          <p>
            Building the RFM feature typically requires a CRM first,
            because CRM provides the data and insights about customer
            behaviour that RFM analysis depends on.
          </p>
          <p>
            CRM software is designed to help businesses collect, organise,
            and analyse customer data — purchase history, demographics, and
            interactions.
          </p>
          <p>
            By leveraging the data from a CRM system, businesses can gain a
            better understanding of their customers' behaviour,
            preferences, and needs — all essential inputs for RFM. Zyda
            didn't have one yet, so we started there.
          </p>

          <div className="cs-imagebox">
            <img src={zydaFlow} alt="Zyda CRM flow" />
          </div>
          <div className="cs-imagebox">
            <img src={zydaSketches} alt="Zyda CRM sketches" />
          </div>

          <p>
            We thought through the user flow, then started to ideate how
            it would look — after lots of inspiration and benchmarking.
            From the initial conceptual sketches, we moved into the UI
            using our design system components.
          </p>

          <div className="cs-infobox">
            <h4>Introducing CRM</h4>
            <p>
              CRM will get you closer than ever with your customers — it
              includes all your customers and info on last order, total
              orders, and total value.
            </p>
          </div>

          <div className="cs-imagebox">
            <img src={zydaUI1} alt="Zyda CRM UI — customers list & customer detail" />
          </div>
        </div>
      </section>

      {/* 9. Segment Customers According to RFM Factors */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Segmentation</span>
          <h2 className="cs-h2">
            Segment customers according to <em>RFM factors.</em>
          </h2>
          <p>
            RFM analysis numerically ranks a customer across three
            categories — Recency, Frequency, and Monetary Value — generally
            on a 1–5 scale (the higher, the better). The "best" customer
            receives a top score in every category, e.g. 555.
          </p>
          <p>
            Instead of complicating this for our users and handing them
            raw scores like 5, 3, or 4 — which is what lazy tools do — we
            created easy-to-understand segments on top of those scores.
          </p>

          <div className="cs-imagebox">
            <img src={zydaSegments} alt="RFM segment grid" />
          </div>
        </div>
      </section>

      {/* 10. How to Calculate the RFM Analysis */}
      <section className="cs-section">
        <div className="cs-container">
          <span className="cs-eyebrow">Method</span>
          <h2 className="cs-h2">How to calculate the RFM analysis</h2>

          <ul className="cs-list">
            <li>
              <h3 className="cs-h3">Calculate per customer</h3>
              <p>
                How many days since the last order (Recency), how many
                orders placed (Frequency), and the monetary value
                generated (Monetary Value).
              </p>
            </li>
            <li>
              <h3 className="cs-h3">Score each customer</h3>
              <p>
                Rank customers on recency first and score them from 1 to
                5, then repeat for frequency and monetary.
              </p>
            </li>
            <li>
              <h3 className="cs-h3">Separate into quartiles</h3>
              <p>
                Once the numbers are sorted, split customer data into
                quintiles — five equal groups of 20%. The lowest 20%
                receive a score of 1, the next 20% a 2, and so on.
              </p>
            </li>
          </ul>

          <div className="cs-imagebox">
            <img src={zydaCalculation} alt="RFM calculation diagram" />
          </div>
        </div>
      </section>

      {/* 11. Visualizing the RFM Scoring */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Visualisation</span>
          <h2 className="cs-h2">Visualising the RFM scoring</h2>
          <p>
            After sorting and assigning scores to each factor, we needed to
            visualise the result — so owners could quickly determine each
            customer's RFM score and understand behaviour patterns at a
            glance.
          </p>

          <div className="cs-imagebox">
            <img src={zydaUI3} alt="RFM score visualisation" />
          </div>

          <h3 className="cs-h3">
            RFM segmentation readily answers these questions for your
            business…
          </h3>
          <ul className="cs-list">
            <li>Who are my best customers?</li>
            <li>Which customers are on the verge of churning?</li>
            <li>
              Who has the potential to be converted into more profitable
              customers?
            </li>
            <li>Who are lost customers I don't need to pay much attention to?</li>
            <li>Which customers must I retain?</li>
            <li>Who are my loyal customers?</li>
            <li>
              Which group of customers is most likely to respond to my
              current campaign?
            </li>
          </ul>
        </div>
      </section>

      {/* 12. Use Cases */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Use cases</span>
          <h2 className="cs-h2">Traits per segment, not averages</h2>
          <p>
            Instead of analysing the entire customer base as a whole, we
            started to understand the traits of each group and engage them
            with relevant campaigns.
          </p>

          <div className="cs-imagebox">
            <img src={zydaRFM} alt="Use cases per segment" />
          </div>
        </div>
      </section>

      {/* 13. RFM Campaigns */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">Campaigns</span>
          <h2 className="cs-h2">
            RFM campaigns — <em>the marketing budget, spent smart.</em>
          </h2>
          <p>
            Remember the limited marketing budget? Many owners have to use
            their resources wisely. RFM helps them optimise spend by
            targeting the most valuable customers with personalised
            promotions and offers.
          </p>
          <p>
            Once businesses segment and label each customer, personalised
            messaging follows: at-risk customers get offers, discounts or
            freebies; loyal customers get superior service so they feel
            valued; recent customers receive product recommendations; and
            Champions get early access and are used as a feedback channel
            before wider launches. All of this runs simultaneously.
          </p>

          <div className="cs-imagebox">
            <img src={zydaUI2} alt="RFM campaign builder" />
          </div>
        </div>
      </section>

      {/* 14. SMS Campaigns */}
      <section className="cs-section cs-prose">
        <div className="cs-container">
          <span className="cs-eyebrow">SMS campaigns</span>
          <h2 className="cs-h2">Personalised messaging, by segment</h2>
          <p>
            We also used RFM analysis to let users create customised and
            personalised messaging — streamlining the messages sent to a
            specific customer and keeping them within a consistent type.
            Less annoyance, higher satisfaction.
          </p>

          <div className="cs-imagebox">
            <img src={zydaSMS} alt="SMS campaign UI" />
          </div>
        </div>
      </section>

      {/* 15. Measuring Success */}
      <section className="cs-section cs-impact">
        <div className="cs-container">
          <span className="cs-eyebrow">The impact</span>
          <h2 className="cs-h2">
            Measuring <em>success.</em>
          </h2>

          <div className="cs-datacards">
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Adoption rate</h3>
              <p>
                We measured user engagement by monitoring the percentage
                of users actively using the CRM feature — and we saw
                exponential growth.
              </p>
            </div>
            <div className="cs-datacard">
              <h3 className="cs-datacard__title">Business impact</h3>
              <p>
                Thanks to the value this feature created for restaurants —
                lifting total orders, average order value, and retention —
                we monetised it as a paid add-on outside of the standard
                Zyda subscription plan.
              </p>
            </div>
          </div>

          <div className="cs-imagebox">
            <img src={zydaRevenue} alt="Adoption & revenue chart" />
          </div>
        </div>
      </section>

      {/* 16. Reflections */}
      <section className="cs-section cs-reflections">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">Reflections</span>
          <h2 className="cs-h2">What I'd carry forward</h2>
          <p>
            Shipping the CRM core first, then layering RFM on top, kept
            the feature grounded in real owner behaviour instead of
            abstract scoring. The hardest work wasn't the math — it was
            translating quintile scores into segments owners could act on
            without a data team behind them.
          </p>
        </div>
      </section>

      {/* 17. Up Next */}
      <section className="cs-section cs-upnext">
        <div className="cs-container">
          <span className="cs-eyebrow">Up next</span>
          <h2 className="cs-h2">Keep exploring</h2>
          <div className="cs-upnext__grid">
            <Link to="/work/sary" className="cs-upnext__card">
              <span className="cs-upnext__year">2021</span>
              <h3>Refining Sary's Checkout Flow</h3>
              <p>
                Reducing drop-off in Sary's B2B marketplace by rethinking
                the checkout from cart to confirmation.
              </p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
            <Link to="/work" className="cs-upnext__card">
              <span className="cs-upnext__year">2024</span>
              <h3>Six Flags Qiddiya City</h3>
              <p>A thrilling companion app for the theme park.</p>
              <span className="cs-upnext__arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ZydaCaseStudy
