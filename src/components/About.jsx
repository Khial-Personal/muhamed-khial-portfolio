import './About.css'

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
                Design that makes people <em>feel</em> something.
              </h1>
              <p className="about__page-subtitle">
                A peek into who I am, how I work, and the little obsessions that
                shape the things I make.
              </p>
            </>
          ) : (
            <h2 className="about__heading">
              I turn <span className="about__highlight">complex problems</span>{' '}
              into <em>delightful</em> experiences.
            </h2>
          )}
          <p className="about__bio">
            I'm a UX designer based wherever the wifi is good. For the last few
            years I've been helping startups and teams ship products that
            actually make sense — and occasionally make people smile.
          </p>
          <p className="about__bio">
            I believe great design is invisible, playful, and a little bit weird.
            When I'm not in Figma, you'll find me sketching, sipping coffee, or
            falling down rabbit holes about typography.
          </p>
        </div>

        <div className="about__collage" aria-label="Dribbble shots">
          <a
            href="#"
            className="about__shot about__shot--1"
            style={{ '--bg': '#ffd6a5' }}
          >
            <span className="about__shot-placeholder">Shot 1</span>
          </a>
          <a
            href="#"
            className="about__shot about__shot--2"
            style={{ '--bg': '#bdb2ff' }}
          >
            <span className="about__shot-placeholder">Shot 2</span>
          </a>
          <a
            href="#"
            className="about__shot about__shot--3"
            style={{ '--bg': '#caffbf' }}
          >
            <span className="about__shot-placeholder">Shot 3</span>
          </a>
          <a
            href="#"
            className="about__shot about__shot--4"
            style={{ '--bg': '#a0e7e5' }}
          >
            <span className="about__shot-placeholder">Shot 4</span>
          </a>
          <a
            href="#"
            className="about__shot about__shot--5"
            style={{ '--bg': '#ffadad' }}
          >
            <span className="about__shot-placeholder">Shot 5</span>
          </a>
          <a
            href="#"
            className="about__shot about__shot--6"
            style={{ '--bg': '#fdffb6' }}
          >
            <span className="about__shot-placeholder">Shot 6</span>
          </a>
        </div>
      </div>

      <div className="about__toolbelt">
        <span className="about__toolbelt-label">Toolbelt →</span>
        <div className="about__tools">
          {[
            { name: 'Figma', slug: 'figma', color: 'F24E1E' },
            { name: 'Framer', slug: 'framer', color: '0055FF' },
            { name: 'Webflow', slug: 'webflow', color: '146EF5' },
            { name: 'Notion', slug: 'notion', color: '000000' },
            { name: 'Miro', slug: 'miro', color: 'FFD02F' },
            { name: 'Sketch', slug: 'sketch', color: 'F7B500' },
            { name: 'Photoshop', slug: 'adobephotoshop', color: '31A8FF' },
            { name: 'Illustrator', slug: 'adobeillustrator', color: 'FF9A00' },
          ].map((tool) => (
            <span key={tool.name} className="about__tool" aria-label={tool.name}>
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                alt={tool.name}
                width="28"
                height="28"
              />
              <span className="about__tool-tip">{tool.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
