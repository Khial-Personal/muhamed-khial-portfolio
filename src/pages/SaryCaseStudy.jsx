import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import fullstoryFunnel from '../assets/case-studies/sary/fullstory-funnel.png'
import sessionReplays from '../assets/case-studies/sary/Session Replays.png'
import heuristicEvaluation from '../assets/case-studies/sary/Heuristic Evaluation.png'
import homepageRedesign from '../assets/case-studies/sary/Homepage.png'
import basketRedesign from '../assets/case-studies/sary/Basket.png'
import checkoutRedesign from '../assets/case-studies/sary/Checkout.png'
import confirmationRedesign from '../assets/case-studies/sary/Order Confirmation.png'
import './SaryCaseStudy.css'

function SaryCaseStudy() {
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
            Refining Sary's Checkout Flow
          </span>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="cs-section cs-hero">
        <div className="cs-container">
          <div className="cs-hero__tags">
            <span>E-commerce</span>
            <span>·</span>
            <span>B2B</span>
          </div>
          <h1 className="cs-hero__title">
            Refining Sary's <em>Checkout Flow</em>
          </h1>
          <p className="cs-hero__teaser">
            The redesign of Sary's B2B marketplace checkout, working with
            Sary teams to increase conversion rate from 62% to 81% and
            cutting average checkout time from 5m 36s to 2m 24s.
          </p>

          <div className="cs-hero__meta">
            <div>
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">
                UX Research, Interaction Design
              </span>
            </div>
            <div>
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Sary</span>
            </div>
            <div>
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">Winter 2021</span>
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
                <strong>38% abandonment rate</strong> between cart and order
                confirmation - the checkout averaged <strong>5m 36s</strong>.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">My role</span>
              <p>
                Led UX research and interaction design across analytics,
                heuristic evaluation, and stakeholder interviews.
              </p>
            </div>
            <div className="cs-glance__cell">
              <span className="cs-glance__label">Outcome</span>
              <p>
                Redesigned multiple key surfaces: Cart, checkout and order
                confirmation - shipped as the new default experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Context */}
      <section className="cs-section">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">Context</span>
          <h2 className="cs-h2">About Sary</h2>
          <p>
            Sary is an e-commerce B2B marketplace trusted by
            <strong> +50,000 business owners</strong> across Saudi Arabia and
            Egypt to source their daily stock — connecting them with
            <strong> +30,000 products</strong> from
            <strong> +1,800 brands &amp; wholesalers</strong>.
          </p>
          <p>
            Sary's mission is to empower businesses by providing them with
            everything they need to run and grow, in one place. Checkout is
            the most commercially critical moment in that journey — and
            where the most friction was hiding.
          </p>
        </div>
      </section>

      {/* 4. The Challenge */}
      <section className="cs-section cs-challenge">
        <div className="cs-container">
          <span className="cs-eyebrow">The Challenge</span>
          <h2 className="cs-h2">
            A long, leaky checkout was <em>costing orders.</em>
          </h2>

          <div className="cs-stats">
            <div className="cs-stat cs-stat--accent">
              <span className="cs-stat__number">28%</span>
              <span className="cs-stat__label">
                Abandonment Rate
                <br />
                From <strong>Cart</strong> to <strong>Checkout</strong>
              </span>
            </div>
            <div className="cs-stat cs-stat--accent">
              <span className="cs-stat__number">38%</span>
              <span className="cs-stat__label">
                Abandonment Rate
                <br />
                From <strong>Cart</strong> to <strong>Confirmed orders</strong>
              </span>
            </div>
            <div className="cs-stat cs-stat--accent">
              <span className="cs-stat__number">5m 36s</span>
              <span className="cs-stat__label">
                Average time
                <br />
                From <strong>Cart</strong> to <strong>checkout</strong>
              </span>
            </div>
          </div>

          <p className="cs-lead">
            My task was to discover every weakness in the checkout flow and
            revamp the experience to match the target persona "a busy
            retailer placing high-frequency restock orders who needs speed,
            clarity, and confidence in every tap".
          </p>
        </div>
      </section>

      {/* 5. Goals — User & Business */}
      <section className="cs-section cs-goals">
        <div className="cs-container">
          <span className="cs-eyebrow">Goals &amp; Objectives</span>
          <h2 className="cs-h2">What success looked like</h2>
          <div className="cs-goals__grid">
            <div className="cs-goals__col">
              <h3 className="cs-h3">User goals</h3>
              <ul>
                <li>A linear, seamless, simple experience.</li>
                <li>Clear visibility when applying a promo code.</li>
                <li>Know exactly which steps lie ahead.</li>
                <li>Easy to edit, add and remove cart items.</li>
                <li>Improved shipment scheduling.</li>
                <li>Faster payment.</li>
                <li>Precise order status with clear states.</li>
              </ul>
            </div>
            <div className="cs-goals__col">
              <h3 className="cs-h3">Business objectives</h3>
              <ul>
                <li>
                  Increase order confirmation rate and convert more carts.
                </li>
                <li>Optimize data entry for speed and accuracy.</li>
                <li>
                  Faster checkout directly impacts how much Sary can grow.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Research approach */}
      <section className="cs-section">
        <div className="cs-container">
          <span className="cs-eyebrow">Research approach</span>
          <h2 className="cs-h2">
            Three methods, pressure-testing every assumption.
          </h2>
          <div className="cs-methods">
            <a href="#method-fullstory" className="cs-method">
              <span className="cs-method__num">01</span>
              <h3>Quantitative — Fullstory</h3>
              <p>Funnel analysis + session replays across a 10-day window.</p>
            </a>
            <a href="#method-heuristic" className="cs-method">
              <span className="cs-method__num">02</span>
              <h3>Heuristic evaluation</h3>
              <p>Task-based audit of the 5 key user actions in checkout.</p>
            </a>
            <a href="#method-other" className="cs-method">
              <span className="cs-method__num">03</span>
              <h3>Competitive + stakeholders</h3>
              <p>
                Benchmarked 5 marketplaces; interviewed Growth, Logistics, PM.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 7a. Fullstory */}
      <section id="method-fullstory" className="cs-section">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">01 — Quantitative analysis</span>
          <h2 className="cs-h2">Fullstory analytics &amp; session replays</h2>
          <p>
            Fullstory is a customer experience platform for quantitative
            funnel analysis and qualitative session replays. I spent a full
            weekend watching how real retailers moved through the flow.
          </p>

          <div className="cs-datacards">
            <div className="cs-datacard">
              <span className="cs-datacard__title">
                Cart view → Checkout view
              </span>
              <ul>
                <li>Cart view: 1,930 sessions</li>
                <li>Checkout view: 1,384 (71% conversion)</li>
                <li>
                  Abandonment: <strong>28%</strong>
                </li>
                <li>Average time: 3m 30s</li>
              </ul>
            </div>
            <div className="cs-datacard">
              <span className="cs-datacard__title">
                Cart view → Order confirmed
              </span>
              <ul>
                <li>Cart view: 1,930 sessions</li>
                <li>Order confirmed: 1,195 (62% conversion)</li>
                <li>
                  Abandonment: <strong>38%</strong>
                </li>
                <li>Average time: 5m 36s</li>
              </ul>
            </div>
          </div>

          <div className="cs-infobox">
            Measurements taken between 27/10/2021 and 3/11/2021.
          </div>

          <div className="cs-imagebox">
            <img
              src={fullstoryFunnel}
              alt="Fullstory funnel analysis — cart_viewed to checkout_viewed (71.71%, 3m 32s) and cart_viewed to order_confirmation_confirmed (61.92%, 5m 36s)"
            />
          </div>

          <div className="cs-imagebox">
            <img
              src={sessionReplays}
              alt="Fullstory session replays — qualitative review of real retailer sessions"
            />
          </div>

          <h3 className="cs-h3">What I saw in the replays</h3>
          <ul className="cs-findings">
            <li>
              Many users couldn't get past KYC — account activation blocked
              first-order completion entirely.
            </li>
            <li>
              Promo code appeared in two different places (basket and
              checkout) — inconsistent and confusing.
            </li>
            <li>
              Applying a single promo across multiple items required
              repeating the same action per item.
            </li>
            <li>
              The app crashed on iOS when opening search and adding to cart.
            </li>
            <li>
              After placing an order, there was no clear success message —
              users reopened the order to verify it went through.
            </li>
            <li>
              The minimum order value was only revealed after pressing the
              checkout CTA — far too late in the journey.
            </li>
          </ul>
        </div>
      </section>

      {/* 7b. Heuristic evaluation */}
      <section id="method-heuristic" className="cs-section">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">02 — Heuristic evaluation</span>
          <h2 className="cs-h2">An expert audit of the 5 key tasks</h2>

          <div className="cs-infobox">
            This is not the full evaluation — only the highlights. For the
            detailed report, please get in touch.
          </div>

          <p>
            Heuristic evaluation reviews an interface against usability
            principles to surface problems. I ran the audit task-first,
            carrying out each key user action myself, scoring each dimension.
          </p>

          <h3 className="cs-h3">User key tasks</h3>
          <div className="cs-pills">
            <span>View cart</span>
            <span>Edit cart items</span>
            <span>Apply promo code</span>
            <span>Choose payment</span>
            <span>Schedule shipment</span>
          </div>

          <h3 className="cs-h3">Process</h3>
          <ol className="cs-numbered">
            <li>Walked the full flow, performing each task end-to-end.</li>
            <li>Flagged usability strengths and pain points.</li>
            <li>
              Captured screenshots — good examples and bad ones alike.
            </li>
            <li>
              Scored each dimension against heuristic principles using a
              three-grade system: <strong>A</strong> (80%+ — good),
              <strong> B</strong> (50% or less — poor), <strong>C</strong> (in
              between).
            </li>
            <li>
              Totaled scores per section to define severity and priority.
            </li>
            <li>Recommended corrections for the most serious issues.</li>
          </ol>

          <div className="cs-imagebox">
            <img
              src={heuristicEvaluation}
              alt="Heuristic evaluation board — scored audit across the 5 key user tasks"
            />
          </div>

          <h3 className="cs-h3">Audit findings</h3>
          <ul className="cs-findings">
            <li>
              The cart icon badge summed
              <em> quantities</em> instead of unique items — 1 product at
              quantity 300 displayed as "300" on the badge.
            </li>
            <li>
              The cart could take several seconds to load, with no loading
              state or feedback.
            </li>
            <li>
              The promo code popup had no clear affordance — users weren't
              sure whether or how it had been applied.
            </li>
            <li>
              Deleting a single item from the cart required up to
              <strong> 10 taps</strong>.
            </li>
            <li>
              Users only discovered they'd selected the wrong business
              location <em>after</em> placing the order.
            </li>
            <li>
              On checkout, no summary, no next-step clarity, no preview of
              shipment or payment decisions.
            </li>
            <li>
              Checkout and cart CTAs were inconsistent in style
              and behavior.
            </li>
            <li>
              Floating CTA in the cart vs. fixed CTA in checkout —
              disorienting shift mid-flow.
            </li>
            <li>
              The <strong>400 SAR minimum order value</strong> only surfaced
              after pressing the CTA — a jarring surprise.
            </li>
          </ul>
        </div>
      </section>

      {/* 7c. Other research */}
      <section id="method-other" className="cs-section">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">03 — Other research</span>
          <h2 className="cs-h2">Competitive &amp; stakeholder work</h2>

          <div className="cs-otherresearch">
            <div>
              <h3 className="cs-h3">Competitive analysis</h3>
              <p>
                Benchmarked how peers handle checkout: Alibaba, Amazon,
                Udaan, Nana Business, Instacart.
              </p>
            </div>
            <div>
              <h3 className="cs-h3">Stakeholder interviews</h3>
              <p>
                Interviewed the Growth team, Logistics team, and the Demand
                Product Manager to align on business constraints.
              </p>
            </div>
            <div>
              <h3 className="cs-h3">User interviews</h3>
              <p>
                Light-touch — Fullstory and heuristics had already given us
                dense, reliable user signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Key insights */}
      <section className="cs-section cs-insights">
        <div className="cs-container">
          <span className="cs-eyebrow">Synthesis</span>
          <h2 className="cs-h2">
            Four themes emerged from <em>~20 findings.</em>
          </h2>

          <div className="cs-insights__grid">
            <article className="cs-insight">
              <span className="cs-insight__num">01</span>
              <h3>The cart is a dead end, not a decision point</h3>
              <p>
                Basket clarity was poor, editing was friction-heavy, and
                minimum-order thresholds were invisible until you acted.
              </p>
            </article>
            <article className="cs-insight">
              <span className="cs-insight__num">02</span>
              <h3>Promo code is a lottery</h3>
              <p>
                Two entry points, unclear placement, and a tedious flow to
                apply a code across multiple items.
              </p>
            </article>
            <article className="cs-insight">
              <span className="cs-insight__num">03</span>
              <h3>The path is invisible</h3>
              <p>
                No progress indicator, surprising payment and shipment
                decisions, inconsistent CTAs between cart and checkout.
              </p>
            </article>
            <article className="cs-insight">
              <span className="cs-insight__num">04</span>
              <h3>Success feels uncertain</h3>
              <p>
                Confirmation didn't feel confirmed, order status lacked
                precision, and there was no way to repeat an order.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 9. Design principles */}
      <section className="cs-section cs-principles">
        <div className="cs-container">
          <span className="cs-eyebrow">Design principles</span>
          <h2 className="cs-h2">The lens I applied to every screen</h2>
          <ol className="cs-principles__list">
            <li>
              <strong>Linear, never branching.</strong> One decision per
              screen.
            </li>
            <li>
              <strong>Confirm, never surprise.</strong> Minimums, totals and
              statuses are always visible.
            </li>
            <li>
              <strong>Edit anything, anywhere.</strong> Reduce tap cost for
              small corrections.
            </li>
          </ol>
        </div>
      </section>

      {/* 10. Redesign */}
      <section className="cs-section">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">The redesign</span>
          <h2 className="cs-h2">Four surfaces, one continuous experience</h2>

          <div className="cs-redesign__block">
            <h3 className="cs-h3">Homepage</h3>
            <p>
              Introduced a persistent cart summary widget — surfacing item
              count, total, minimum-order progress, and a direct path to
              basket without forcing users to open it to check where they
              stand.
            </p>
            <div className="cs-imagebox cs-imagebox--narrow">
              <img
                src={homepageRedesign}
                alt="Homepage redesign — persistent cart summary widget"
              />
            </div>
          </div>

          <div className="cs-redesign__block">
            <h3 className="cs-h3">Basket</h3>
            <p>
              Rebuilt the basket around visibility and control: every item
              visible at a glance with inline quantity edits, per-item
              discounts, a running total saved, and a single, unambiguous
              promo code entry point.
            </p>
            <div className="cs-imagebox cs-imagebox--narrow">
              <img
                src={basketRedesign}
                alt="Basket redesign — items, discounts, totals, and promo entry"
              />
            </div>
          </div>

          <div className="cs-redesign__block">
            <h3 className="cs-h3">Checkout</h3>
            <p>
              Linearized the flow into predictable steps with a clear
              progress indicator. Users can change the delivery location
              without leaving checkout, pick a shipment interval, and see
              their wallet balance applied in real time — consistent CTAs
              throughout.
            </p>
            <div className="cs-imagebox">
              <img
                src={checkoutRedesign}
                alt="Checkout redesign — step-by-step flow"
              />
            </div>
          </div>

          <div className="cs-redesign__block">
            <h3 className="cs-h3">Order confirmation &amp; recurring orders</h3>
            <p>
              Confirmation now <em>feels</em> confirmed — clear summary,
              precise status, and a new option to schedule the same order
              as a recurring delivery on a weekly or monthly cadence.
            </p>
            <div className="cs-imagebox">
              <img
                src={confirmationRedesign}
                alt="Confirmation redesign + recurring orders"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Impact */}
      <section className="cs-section cs-impact">
        <div className="cs-container">
          <span className="cs-eyebrow">Impact</span>
          <h2 className="cs-h2">
            A faster, clearer path from <em>Cart to Order Confirmation</em>
          </h2>
          <p className="cs-lead">
            The redesign shipped across all four surfaces and reshaped the
            core purchasing journey for every retailer on Sary. Three
            months after launch we measured the conversion again and the
            results were great.
          </p>

          <div className="cs-stats cs-stats--impact">
            <div className="cs-stat cs-stat--dark">
              <span className="cs-stat__number">81%</span>
              <span className="cs-stat__label">
                Order conversion rate — highest ever recorded
              </span>
            </div>
            <div className="cs-stat cs-stat--dark">
              <span className="cs-stat__number">2m 24s</span>
              <span className="cs-stat__label">
                Average checkout time — 57% reduction
              </span>
            </div>
            <div className="cs-stat cs-stat--dark">
              <span className="cs-stat__number">19%</span>
              <span className="cs-stat__label">
                Cart abandonment — half the users now completing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Reflections */}
      <section className="cs-section cs-reflections">
        <div className="cs-container cs-prose">
          <span className="cs-eyebrow">Reflections</span>
          <h2 className="cs-h2">What I'd do differently</h2>
          <p>
            Analytics and heuristics gave us a dense, reliable picture of
            <em> what</em> was broken — but not always <em>why</em>. Next
            time, I'd run a small round of moderated interviews alongside
            the Fullstory review to pressure-test intent, and I'd lock a
            shared measurement plan with Growth up front so the
            "after" story is sharper from day one.
          </p>
        </div>
      </section>

      {/* 13. Up Next */}
      <section className="cs-section cs-upnext">
        <div className="cs-container">
          <span className="cs-eyebrow">Up next</span>
          <h2 className="cs-h2">Keep exploring</h2>
          <div className="cs-upnext__grid">
            <Link to="/work" className="cs-upnext__card">
              <span className="cs-upnext__year">2023</span>
              <h3>Zyda CRM</h3>
              <p>Customer segmentation for restaurant loyalty.</p>
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

export default SaryCaseStudy
