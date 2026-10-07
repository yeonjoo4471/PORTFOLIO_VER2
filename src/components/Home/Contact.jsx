import { useState } from 'react'
import nightSkyImg from '../../assets/images/contact/contact-night-sky.png'
import '../../styles/contact.css'

const credits = [
  { role: 'PLANNING & ARCHITECTURE', lines: ['LEE YEON JOO (이연주)'] },
  { role: 'UI / UX DESIGN & PROTOTYPE', lines: ['LEE YEON JOO (이연주)'] },
  { role: 'WEB PUBLISHING & FRONT-END', lines: ['LEE YEON JOO (이연주)'] },
  { role: 'DESIGN TOOLS', lines: ['Figma · Photoshop · Illustrator'] },
  { role: 'DEVELOPMENT STACK', lines: ['HTML5 · CSS3 · JavaScript · React · Vite'] },
  { role: 'AI ASSISTED VIBE CODING', lines: ['Claude · ChatGPT'] },
  { role: 'SPECIAL THANKS', lines: ['포트폴리오의 마지막 에피소드까지 함께해 주신 분들께 감사드립니다.'] },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'duswn4471@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section" aria-label="Epilogue and Contact Section">
      {/* Epilogue Block: Open Daylight Transition */}
      <div className="epilogue-block">
        <div className="container">
          <div className="editorial-header">
            <span className="editorial-tag">EPILOGUE · FILE 05</span>
            <span className="editorial-subtitle">THE CONTINUOUS JOURNEY</span>
          </div>

          <div className="epilogue-content">
            <span className="epilogue-kicker">CLOSING STATEMENT</span>
            <h2 className="epilogue-title font-title">
              DESIGNING,
              <br />
              BUILDING,
              <br />
              <span className="epilogue-highlight">AND CONTINUING.</span>
            </h2>
            <p className="epilogue-text">
              좋아하는 것을 더 잘하기 위해 시작했던 고민들은 하나의 화면, 하나의 코드가 되어 8개의 에피소드로 완성되었습니다.
              사용자에게 직관적인 편의를 제공하고 비즈니스의 가치를 시각화하는 웹퍼블리셔로 나아가겠습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Contact & Night Sky Block: Open Cinematic Finale */}
      <div className="contact-night-block">
        <div className="contact-night-bg" aria-hidden="true">
          <img src={nightSkyImg} alt="" loading="lazy" />
          <div className="contact-night-overlay"></div>
        </div>

        <div className="container contact-container">
          <div className="contact-editorial-layout">
            {/* Left: Message & Contact Open Typography */}
            <div className="contact-left-col">
              <span className="contact-meta-tag">LET'S CONNECT · ARCHIVE FINAL</span>
              <h3 className="contact-heading font-title">
                THANK YOU
                <br />
                FOR WATCHING.
              </h3>
              <p className="contact-subtext">
                성실하고 유연한 태도로 팀과 함께 성장할 준비가 되어 있습니다.
                새로운 프로젝트와 인연에 대해 편하게 연락해 주세요.
              </p>

              {/* Direct Email: Large Typography & Open Action */}
              <div className="contact-email-unit">
                <span className="method-label">DIRECT EMAIL INQUIRY</span>
                <div className="email-row">
                  <a href={`mailto:${emailAddress}`} className="email-link font-title">
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    className="email-copy-action"
                    onClick={handleCopyEmail}
                    aria-label="이메일 주소 복사"
                  >
                    <span>{copied ? 'COPIED! ✓' : 'COPY ADDRESS'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels: Open Text Links */}
              <div className="contact-social-unit">
                <span className="method-label">EXTERNAL ARCHIVES</span>
                <div className="social-links-list">
                  <a
                    href="https://github.com/yeonjoo4471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                  >
                    <span>GITHUB</span>
                    <span className="link-arrow" aria-hidden="true">↗</span>
                  </a>
                  <span className="social-sep" aria-hidden="true">/</span>
                  <a
                    href="https://www.instagram.com/yeon_j._.0416/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                  >
                    <span>INSTAGRAM</span>
                    <span className="link-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Open Rolling Credits Plate (No Card Box) */}
            <div className="contact-right-col">
              <div className="credits-editorial-plate">
                <div className="credits-plate-header">
                  <span className="credits-badge">PRODUCTION ROLL</span>
                  <span className="credits-file">SETTING BOOK CREDITS</span>
                </div>

                <div className="credits-scroll-region" tabIndex={0} role="region" aria-label="제작 크레딧 목록">
                  <dl className="credits-list">
                    {credits.map((item) => (
                      <div key={item.role} className="credit-entry">
                        <dt>{item.role}</dt>
                        <dd>
                          {item.lines.map((line, idx) => (
                            <span key={idx}>{line}</span>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
