import './About.css'
import shot1 from '../assets/about/shot-1.png'
import shot2 from '../assets/about/shot-2.png'
import shot3 from '../assets/about/shot-3.webp'
import shot4 from '../assets/about/shot-4.png'
import shot5 from '../assets/about/shot-5.webp'
import shot6 from '../assets/about/shot-6.webp'

function About({ variant = 'default' }) {
  const isPage = variant === 'page'
  return (
    <section id="about" className="about">
      {!isPage && (
        <div className="about__label">
          <span className="about__star">✦</span> About me
        </div>
      )}

      <div className="about__grid">
        <div className="about__text">
          {isPage ? (
            <>
              <span className="about__eyebrow">
                <span className="about__star">✦</span> About me
              </span>
              <h1 className="about__page-title">
                Turning complex problems into{' '}
                <em>human-centered</em> products.
              </h1>
              <p className="about__page-subtitle">
                My passion about problem-solving and the empathetic nature has
                landed me in the world of user experience design. With 8 years
                of experience I approach problems with a strong sense of
                curiosity and excitement, and love the challenge of crafting an
                inclusive, impactful solution.
              </p>
              <p className="about__page-subtitle">
                My expertise spans across diverse industries including
                E-commerce (B2B and B2C), fintech, logistics and supply chain,
                edu-tech, healthcare, HR, entertainment, and blockchain and
                successfully developed inclusive, impactful solutions in the
                MENA region.
              </p>
              <p className="about__page-subtitle">
                I am dedicated to creating innovative and user-centric
                solutions that seamlessly blend aesthetics with functionality,
                elevating the digital experiences in every domain I touch.
              </p>
            </>
          ) : (
            <h2 className="about__heading">
              I turn <span className="about__highlight">complex problems</span>{' '}
              into <em>delightful</em> experiences.
            </h2>
          )}
          {!isPage && (
            <>
              <p className="about__bio">
                I'm a UX designer based wherever the wifi is good. For the last
                few years I've been helping startups and teams ship products
                that actually make sense — and occasionally make people smile.
              </p>
              <p className="about__bio">
                I believe great design is invisible, playful, and a little bit
                weird. When I'm not in Figma, you'll find me sketching, sipping
                coffee, or falling down rabbit holes about typography.
              </p>
            </>
          )}
        </div>

        <div className="about__collage" aria-label="Dribbble shots">
          <a
            href="#"
            className="about__shot about__shot--1"
            style={{ '--bg': `url(${shot1})` }}
            aria-label="Shot 1"
          />

          <a
            href="#"
            className="about__shot about__shot--2"
            style={{ '--bg': `url(${shot2})` }}
            aria-label="Shot 2"
          />
          <a
            href="#"
            className="about__shot about__shot--3"
            style={{ '--bg': `url(${shot3})` }}
            aria-label="Shot 3"
          />
          <a
            href="#"
            className="about__shot about__shot--4"
            style={{ '--bg': `url(${shot4})` }}
            aria-label="Shot 4"
          />

          <a
            href="#"
            className="about__shot about__shot--5"
            style={{ '--bg': `url(${shot5})` }}
            aria-label="Shot 5"
          />
          <a
            href="#"
            className="about__shot about__shot--6"
            style={{ '--bg': `url(${shot6})` }}
            aria-label="Shot 6"
          />
        </div>
      </div>

      <div className="about__toolbelt">
        <span className="about__toolbelt-label">Toolbelt →</span>
        <div className="about__tools">
          {[
            { name: 'Figma', slug: 'figma', color: 'F24E1E' },
            { name: 'Framer', slug: 'framer', color: '0055FF' },
            { name: 'Webflow', slug: 'webflow', color: '146EF5' },
            { name: 'Claude', slug: 'claude', color: 'D97757' },
            { name: 'AI', mono: 'AI', color: '#10A37F' },
            { name: 'Miro', slug: 'miro', color: 'FFD02F' },
            { name: 'Fullstory', mono: 'FS', color: '#ED2C1A' },
            { name: 'Protopie', mono: 'Pi', color: '6B3EFF' },
          ].map((tool) => (
            <span key={tool.name} className="about__tool" aria-label={tool.name}>
              {tool.mono ? (
                <span
                  className="about__tool-mono"
                  style={{ color: tool.color }}
                >
                  {tool.mono}
                </span>
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                  alt={tool.name}
                  width="28"
                  height="28"
                />
              )}
              <span className="about__tool-tip">{tool.name}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About
