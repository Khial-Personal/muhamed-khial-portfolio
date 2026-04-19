import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Work.css'

const DEFAULT_HEADING = Symbol('default')

function Work({
  limit,
  showCta = false,
  heading = DEFAULT_HEADING,
  label = 'Selected work',
  showHeader = true,
}) {
  const list = typeof limit === 'number' ? projects.slice(0, limit) : projects

  return (
    <section id="work" className="work">
      {showHeader && (
        <header className="work__header">
          <div className="work__header-text">
            <div className="work__label">
              <span className="work__star">✦</span> {label}
            </div>
            <h2 className="work__heading">
              {heading === DEFAULT_HEADING ? (
                <>
                  A few things I've been
                  <br />
                  <em>cooking up</em> lately.
                </>
              ) : (
                heading
              )}
            </h2>
          </div>
          {showCta && (
            <Link to="/work" className="work__header-cta">
              See all projects <span aria-hidden="true">→</span>
            </Link>
          )}
        </header>
      )}

      <div className="work__grid">
        {list.map((project, idx) => {
          const href = project.slug ? `/work/${project.slug}` : null
          return (
            <article
              key={project.id}
              className={`work__card ${idx % 2 === 0 ? 'work__card--left' : 'work__card--right'} ${
                href ? 'work__card--linked' : ''
              }`}
              style={{ '--card-color': project.color }}
            >
              <div className="work__thumb">
                {href ? (
                  <Link
                    to={href}
                    className="work__thumb-link"
                    aria-label={`View ${project.title} case study`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="work__image"
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work__image"
                    loading="lazy"
                  />
                )}
                <span className="work__year">{project.year}</span>
              </div>
              <div className="work__info">
                <h3 className="work__title">
                  {href ? (
                    <Link to={href} className="work__title-link">
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="work__desc">{project.description}</p>
                <div className="work__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {href ? (
                  <Link to={href} className="work__link">
                    View case study <span className="work__arrow">→</span>
                  </Link>
                ) : (
                  <span className="work__link work__link--disabled">
                    Case study coming soon
                  </span>
                )}
              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default Work
