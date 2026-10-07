import aboutCharacter from '../../assets/images/about/profile/about-character-cutout-expanded.png'
import photographyImage from '../../assets/images/about/interest/photography.jpg'
import musicImage from '../../assets/images/about/interest/music.jpg'
import writingImage from '../../assets/images/about/interest/writing.jpg'
import '../../styles/profile.css'

const interests = [
  { name: '사진 촬영', label: 'PHOTOGRAPHY', image: photographyImage, caption: '순간의 빛과 구도를 기록' },
  { name: '음악 감상', label: 'MUSIC', image: musicImage, caption: '집중과 영감을 주는 사운드' },
  { name: '글쓰기', label: 'WRITING', image: writingImage, caption: '생각과 배움을 텍스트로 정리' },
]

export default function Profile() {
  return (
    <section id="profile" className="profile-section" aria-label="Profile Section">
      <div className="container">
        {/* Editorial Header */}
        <div className="editorial-header">
          <span className="editorial-tag">SETTING BOOK · FILE 01</span>
          <span className="editorial-subtitle">YJ PROFILE ARCHIVE 001</span>
        </div>

        {/* 3-Column Editorial Spread (No Box Containers) */}
        <div className="profile-editorial-spread">
          {/* Left Column: Character Data & Statement */}
          <div className="profile-col-meta">
            <div className="profile-title-block">
              <span className="profile-spec-no">SPEC. 01 / PROFILE</span>
              <h2 className="profile-title font-title">
                CHARACTER
                <br />
                DATA FILE
              </h2>
            </div>

            <dl className="profile-meta-list">
              <div className="profile-meta-item">
                <dt>NAME</dt>
                <dd>LEE YEON JOO / 이연주</dd>
              </div>
              <div className="profile-meta-item">
                <dt>FIELD</dt>
                <dd>UI/UX DESIGN &amp; WEB PUBLISHING</dd>
              </div>
              <div className="profile-meta-item">
                <dt>CORE VALUE</dt>
                <dd>좋아하는 것을, 끝까지 탐구하여 잘하는 것으로.</dd>
              </div>
              <div className="profile-meta-item">
                <dt>KEYWORD</dt>
                <dd>성실성 · 집요한 문제 해결 · 사용자 중심 시각</dd>
              </div>
            </dl>

            <div className="profile-statement-block">
              <span className="statement-label">STATEMENT</span>
              <p className="statement-quote">
                &ldquo;사용자가 마주하는 첫 화면의 인상부터 버튼 하나의 미세한 인터랙션까지,
                웹 환경의 디테일을 깊이 있게 고민하고 코드로 구현합니다.&rdquo;
              </p>
              <p className="statement-subtext">
                새로운 웹 표준과 기술을 적극적으로 학습하며 기능성과 시각적 완성도가 공존하는 인터페이스를 지향합니다.
              </p>
            </div>
          </div>

          {/* Center Column: Character Figure Cutout & Core Strengths */}
          <div className="profile-col-figure">
            <div className="figure-display">
              <div className="figure-backdrop">
                <img
                  src={aboutCharacter}
                  alt="웹퍼블리셔 이연주 캐릭터 프로필 일러스트"
                  className="figure-portrait-img"
                  loading="lazy"
                />
                <span className="figure-watermark">FIG.001</span>
              </div>
              <div className="editorial-caption">
                <span className="figure-badge">FIG.001</span>
                <span>OFFICIAL PROFILE ARCHIVE / CHARACTER FIGURE CUTOUT</span>
              </div>
            </div>

            <div className="profile-strengths-block">
              <div className="strengths-header">
                <span className="strengths-spec">TRAIT &amp; APTITUDE</span>
                <h3 className="strengths-title">MY STRENGTHS</h3>
              </div>
              <ul className="strengths-list">
                <li>
                  <span className="strength-bullet">01</span>
                  <div className="strength-content">
                    <strong className="strength-name">문제 해결의 끈기</strong>
                    <p className="strength-desc">어려운 구현 난관에 부딪혀도 끝까지 원인을 분석하고 논리적인 해결책을 찾아냅니다.</p>
                  </div>
                </li>
                <li>
                  <span className="strength-bullet">02</span>
                  <div className="strength-content">
                    <strong className="strength-name">긍정적인 실행력</strong>
                    <p className="strength-desc">피드백을 유연하게 수용하고 디자인과 코드의 품질 개선에 즉각 반영합니다.</p>
                  </div>
                </li>
                <li>
                  <span className="strength-bullet">03</span>
                  <div className="strength-content">
                    <strong className="strength-name">지속적인 학습</strong>
                    <p className="strength-desc">최신 인터랙션 트렌드와 프론트엔드 도구를 능동적으로 흡수하여 작업에 적용합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Personal Interests & Philosophy */}
          <div className="profile-col-interests">
            <div className="interest-header">
              <span className="spec-label">INTERESTS &amp; INSPIRATION</span>
              <h3 className="interest-title">시각을 넓히는 일상</h3>
            </div>

            <div className="interests-editorial-list">
              {interests.map((item, idx) => (
                <article key={item.label} className="interest-entry">
                  <div className="interest-thumb-wrap">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="interest-info">
                    <div className="interest-meta-row">
                      <span className="interest-tag">{item.label}</span>
                      <span className="interest-idx">FIG.0{idx + 2}</span>
                    </div>
                    <strong className="interest-name">{item.name}</strong>
                    <p className="interest-desc">{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="philosophy-block">
              <span className="philosophy-tag">PHILOSOPHY</span>
              <blockquote className="philosophy-quote">
                &ldquo;건강한 신체와 마음으로, 사용자와 동료 모두에게 신뢰를 주는 결과물을 만듭니다.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
