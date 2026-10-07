import '../../styles/episode-intro.css'

export default function EpisodeIntro({ project }) {
  return (
    <section className="episode-intro-section" aria-label={`Episode ${project.episode} Title Card`}>
      <div className="episode-intro-inner container">
        <div className="intro-meta-top">
          <span className="intro-tag">SETTING BOOK · ARCHIVE EPISODE</span>
          <span className="intro-spec">EP.{project.episode} / SPEC.FILE</span>
        </div>

        <div className="intro-center-block">
          <div className="intro-ep-num-wrap">
            <span className="intro-ep-label">EPISODE</span>
            <span className="intro-ep-digit font-title">{project.episode}</span>
          </div>

          <div className="intro-titles">
            <h1 className="intro-main-title">{project.title}</h1>
            <p className="intro-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <div className="intro-meta-bottom">
          <div className="intro-meta-col">
            <span className="intro-lbl">CATEGORY</span>
            <span className="intro-val">{project.category}</span>
          </div>
          <div className="intro-meta-col">
            <span className="intro-lbl">PRODUCTION YEAR</span>
            <span className="intro-val">{project.year}</span>
          </div>
          <div className="intro-meta-col">
            <span className="intro-lbl">STATUS</span>
            <span className="intro-val">DOCUMENTED &amp; VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  )
}
