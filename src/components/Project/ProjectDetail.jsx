import '../../styles/project-detail.css'

export default function ProjectDetail({ project }) {
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '')

  return (
    <section id="project-detail" className="project-detail-section" aria-label="Project Setting Book Detail">
      <div className="container">
        <div className="editorial-header">
          <span className="editorial-tag">SETTING BOOK · HOW</span>
          <span className="editorial-subtitle">EP.{project.episode} / TECHNICAL SPECIFICATION &amp; STUDY</span>
        </div>

        <div className="detail-intro-block">
          <span className="detail-spec-kicker">TECHNICAL BLUEPRINT</span>
          <h2 className="detail-blueprint-title font-title">
            DESIGN &amp; IMPLEMENTATION
            <br />
            DOCUMENTATION
          </h2>
          <p className="detail-lead">
            실제 구현된 화면 구성, 컴포넌트 인터랙션, 반응형 브레이크포인트 및 디자인 시스템 분석 자료입니다.
          </p>
        </div>

        {/* Setting Book Sections */}
        <div className="detail-sections-container">
          {project.sections.map((section, idx) => (
            <article
              key={section.id || idx}
              className={`setting-book-section layout-${section.layout || 'contained'}`}
            >
              {/* Section Header */}
              <div className="section-meta-bar">
                <div className="section-fig-wrap">
                  <span className="figure-badge">{section.figNumber || `FIG.0${idx + 1}`}</span>
                  <span className="section-label-text">{section.label}</span>
                </div>
                <span className="section-number-idx">0{idx + 1}</span>
              </div>

              <div className="section-content-grid">
                <div className="section-text-col">
                  <h3 className="section-heading">{section.title}</h3>
                  <p className="section-description">{section.description}</p>
                </div>

                {/* Section Visuals */}
                {section.layout === 'responsive' && section.images && (
                  <div className="section-responsive-viewer">
                    <div className="responsive-devices-grid">
                      {section.images.map((dev, dIdx) => (
                        <div key={dIdx} className="device-spec-card">
                          <div className="device-spec-header">
                            <span className="device-tag">{dev.label}</span>
                          </div>
                          <div className="device-img-frame">
                            <img src={dev.src} alt={dev.alt} loading="lazy" />
                          </div>
                        </div>
                      ))}
                    </div>
                    {section.caption && (
                      <div className="editorial-caption">
                        <span className="figure-badge">{section.figNumber || `FIG.0${idx + 1}`}</span>
                        <span>{section.caption}</span>
                      </div>
                    )}
                  </div>
                )}

                {section.layout !== 'responsive' && section.image && (
                  <div className={`section-image-viewer viewer-${section.layout}`}>
                    <div className="image-frame">
                      <img src={section.image} alt={section.alt || section.title} loading="lazy" />
                    </div>
                    {section.caption && (
                      <div className="editorial-caption">
                        <span className="figure-badge">{section.figNumber || `FIG.0${idx + 1}`}</span>
                        <span>{section.caption}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Live Site Final CTA (if URL is set) */}
        {hasLiveUrl && (
          <div className="project-live-cta-banner">
            <div className="live-cta-inner">
              <div className="live-cta-text">
                <span className="cta-spec-tag">LIVE VERIFICATION</span>
                <h3 className="cta-heading font-title">EXPERIENCE LIVE WORK</h3>
                <p>배포된 실제 웹 환경에서 인터랙션과 반응형 동작을 직접 확인하실 수 있습니다.</p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live-launch"
              >
                <span>{project.liveLabel || 'OPEN LIVE SITE'}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
