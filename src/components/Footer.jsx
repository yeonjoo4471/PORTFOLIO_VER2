import '../styles/footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="global-footer">
      {/* Ending Banner: Dramatic contrast to Deep Navy / Black */}
      <div className="ending-banner">
        <div className="container">
          <div className="ending-content">
            <span className="ending-label">EPILOGUE / CONTINUATION</span>
            <h2 className="ending-title font-title">TO BE CONTINUED.</h2>
            <p className="ending-desc">
              포트폴리오는 마침표를 찍지만, 웹퍼블리셔로서의 학습과 성장은 계속됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Credits */}
      <div className="credits-bar">
        <div className="container-wide credits-inner">
          <div className="credits-col">
            <span className="credit-role">PROJECT SPECIFICATION</span>
            <span className="credit-desc">ANIME OPENING × SETTING BOOK VER.2</span>
          </div>

          <div className="credits-col">
            <span className="credit-role">PRODUCTION CREDITS</span>
            <span className="credit-names">
              PLANNED BY YEON JOO · DESIGNED BY YEON JOO · PUBLISHED BY YEON JOO
            </span>
          </div>

          <div className="credits-col credits-right">
            <span className="credit-year">© 2026 LEE YEON JOO</span>
            <button
              type="button"
              className="back-top-btn"
              onClick={scrollToTop}
              aria-label="맨 위로 스크롤"
            >
              <span>BACK TO TOP</span>
              <span className="arrow-top" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
