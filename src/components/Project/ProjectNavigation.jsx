import { Link } from 'react-router-dom'
import '../../styles/project-navigation.css'

export default function ProjectNavigation({ prevProject, nextProject, currentEpisode }) {
  return (
    <nav className="project-navigation-section" aria-label="Episode Navigation">
      <div className="container">
        <div className="editorial-header">
          <span className="editorial-tag">EPISODE TRANSITION</span>
          <span className="editorial-subtitle">END OF EPISODE {currentEpisode}</span>
        </div>

        <div className="ep-nav-grid">
          {/* Previous Episode */}
          <div className="ep-nav-col prev-col">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="ep-nav-card prev-card">
                <span className="ep-nav-direction">← PREVIOUS EPISODE {prevProject.episode}</span>
                <h4 className="ep-nav-title">{prevProject.title}</h4>
                <span className="ep-nav-cat">{prevProject.category}</span>
              </Link>
            ) : (
              <Link to="/" className="ep-nav-card home-card">
                <span className="ep-nav-direction">← PORTFOLIO HOME</span>
                <h4 className="ep-nav-title">OVERVIEW</h4>
                <span className="ep-nav-cat">RETURN TO TOP</span>
              </Link>
            )}
          </div>

          {/* Next Episode */}
          <div className="ep-nav-col next-col">
            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`} className="ep-nav-card next-card">
                <span className="ep-nav-direction">NEXT EPISODE {nextProject.episode} →</span>
                <h4 className="ep-nav-title">{nextProject.title}</h4>
                <span className="ep-nav-cat">{nextProject.category}</span>
              </Link>
            ) : (
              <Link to="/" className="ep-nav-card end-card">
                <span className="ep-nav-direction">ALL EPISODES COMPLETED →</span>
                <h4 className="ep-nav-title">EPILOGUE &amp; CONTACT</h4>
                <span className="ep-nav-cat">BACK TO ARCHIVE</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
