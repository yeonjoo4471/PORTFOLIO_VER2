import skyCloudImg from '../../assets/images/opening/atmosphere/sky-cloud.png'
import '../../styles/hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      <div className="hero-atmosphere" aria-hidden="true">
        <img src={skyCloudImg} alt="" className="hero-sky-img" />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-meta-top">
          <span className="hero-spec">FILE 00 / OPENING OVERVIEW</span>
          <span className="hero-year">2026 ARCHIVE</span>
        </div>

        <div className="hero-content">
          <p className="hero-kicker">WEB PUBLISHER PORTFOLIO</p>
          <h1 className="hero-title font-title">
            <span>BETWEEN</span>
            <br />
            <span className="hero-title-accent">DESIGN &amp; CODE.</span>
          </h1>

          <div className="hero-bottom-grid">
            <div className="hero-identity">
              <span className="hero-name">YEON JOO</span>
              <span className="hero-subrole">UI/UX DESIGN · FRONT-END PUBLISHING</span>
            </div>

            <div className="hero-statement">
              <p>
                디자인의 감성과 코드의 정교함 사이에서 균형을 맞춥니다.
                사용자의 시선을 사로잡는 모션과 정보를 명확하게 전달하는 에디토리얼 구조로
                완성도 높은 웹 경험을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-text">SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
        </div>
      </div>
    </section>
  )
}
