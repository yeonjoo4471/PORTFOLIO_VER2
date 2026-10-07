import '../../styles/project-story.css'

export default function ProjectStory({ project }) {
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '')
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim() !== '')

  const scrollToDetail = (e) => {
    e.preventDefault()
    const detailEl = document.getElementById('project-detail')
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="project-story-section" aria-label="Project Story Overview">
      <div className="container">
        <div className="editorial-header">
          <span className="editorial-tag">PROJECT STORY · WHY</span>
          <span className="editorial-subtitle">EP.{project.episode} / BACKGROUND &amp; MOTIVATION</span>
        </div>

        <div className="story-layout-grid">
          {/* Left: Narrative & Metadata */}
          <div className="story-narrative-col">
            <div className="story-header-block">
              <span className="story-kicker">EPISODE {project.episode} CONCEPT</span>
              <h2 className="story-main-title font-title">
                THE ORIGIN
                <br />
                &amp; OBJECTIVE
              </h2>
            </div>

            <p className="story-summary-lead">{project.summary}</p>

            <div className="story-why-box">
              <div className="story-sub-block">
                <span className="story-block-tag">WHY THIS PROJECT</span>
                <p className="story-block-desc">{project.story.why}</p>
              </div>

              <div className="story-sub-block">
                <span className="story-block-tag">PROJECT GOAL</span>
                <p className="story-block-desc">{project.story.goal}</p>
              </div>

              {project.story.keywords && (
                <div className="story-keywords-row">
                  {project.story.keywords.map((kw) => (
                    <span key={kw} className="story-kw-badge">
                      #{kw}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Project Data Metadata Table */}
            <div className="project-data-card">
              <span className="data-card-title">PROJECT METRICS</span>
              <dl className="data-metrics-grid">
                <div className="metric-row">
                  <dt>ROLE</dt>
                  <dd>{project.role}</dd>
                </div>
                <div className="metric-row">
                  <dt>PERIOD</dt>
                  <dd>{project.period}</dd>
                </div>
                <div className="metric-row">
                  <dt>CONTRIBUTION</dt>
                  <dd>{project.contribution}</dd>
                </div>
                <div className="metric-row">
                  <dt>TOOLS</dt>
                  <dd>{project.tools.join(' · ')}</dd>
                </div>
              </dl>
            </div>

            {/* Action Bar */}
            <div className="story-actions-bar">
              <a href="#project-detail" onClick={scrollToDetail} className="btn-view-detail">
                <span>VIEW SETTING BOOK (DETAIL)</span>
                <span aria-hidden="true">↓</span>
              </a>

              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live-link"
                >
                  <span>{project.liveLabel || 'LIVE SITE'}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github-link"
                >
                  <span>GITHUB REPO</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Key Hero Visual Frame */}
          <div className="story-visual-col">
            <div className="story-figure-frame">
              <img
                src={project.assets.hero || project.assets.cover || project.assets.mainMockup}
                alt={`${project.title} 대표 화면`}
                className="story-figure-img"
              />
              <div className="editorial-caption">
                <span className="figure-badge">FIG.00</span>
                <span>KEY ARTWORK / REPRESENTATIVE VISUAL SPECIFICATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
