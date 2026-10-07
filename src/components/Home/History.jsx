import '../../styles/history.css'

const historyItems = [
  {
    phase: 'PHASE 04',
    fig: 'LOG.04',
    title: '포트폴리오 구축 & 인터랙션 통합',
    summary: 'ANIME OPENING × SETTING BOOK 컨셉의 개인 포트폴리오 기획 및 반응형 셀렉트숍(ANIME GOODS) 완성',
    details: [
      '8개 프로젝트의 정보 아키텍처 및 설정자료집 에디토리얼 그리드 설계',
      'React Router 기반 SPA 라우팅 및 전역 오디오 시스템 구현',
      '웹 애니메이션 오프닝 및 디바이스 반응형 스터디 레이아웃 체계화'
    ]
  },
  {
    phase: 'PHASE 03',
    fig: 'LOG.03',
    title: 'VIBE CODING & 서비스 프로토타이핑',
    summary: 'AI 도구(Claude/ChatGPT)를 활용한 기능 중심 웹서비스 및 대시보드 제작',
    details: [
      'DuckSpot: 카카오맵 API 기반 취향 굿즈샵 지도 검색 및 방문 기록 등록 서비스',
      'WISH SHOP: 선택지에 따라 서사와 분위기가 달라지는 인터랙티브 스토리 웹',
      'CINEOPS: 영화관 실시간 상영관 관리 및 매출 KPI 데이터 시각화 대시보드'
    ]
  },
  {
    phase: 'PHASE 02',
    fig: 'LOG.02',
    title: '웹 리디자인 & 대형 사이트 클론 코딩',
    summary: '실무 웹 환경 분석을 위한 상용 브랜드 사이트 리디자인 및 클론 프로젝트 수행',
    details: [
      '뚜레쥬르: 브랜드 이미지 제고 및 제품 탐색/매장 찾기 동선 개선 웹 리디자인',
      '메가박스: 영화관 메인 화면, 박스오피스 카드, 복합 사이트맵 클론 코딩',
      'Apple Korea: 여백과 절제된 타이포그래피 기반의 정교한 제품 그리드 클론 코딩',
      '메가박스 모바일 앱: 사용자 경험(UX) 중심 영화 예매 및 선호 극장 리디자인'
    ]
  },
  {
    phase: 'PHASE 01',
    fig: 'LOG.01',
    title: '웹퍼블리싱 & UI/UX 디자인 기초 확립',
    summary: '웹 표준, 시맨틱 마크업, CSS Flex/Grid 및 반응형 웹 프레임워크 학습',
    details: [
      'HTML5/CSS3 웹 표준 및 웹 접근성 지침 준수 마크업 훈련',
      'Figma, Photoshop, Illustrator를 활용한 UI 디자인 시스템 및 컴포넌트 설계',
      'JavaScript 기초 문법, 이벤트 제어, DOM 인터랙션 및 Git 버전 관리'
    ]
  }
]

export default function History() {
  return (
    <section id="history" className="history-section" aria-label="History Section">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <span className="editorial-tag">SETTING BOOK · FILE 03</span>
          <span className="editorial-subtitle">GROWTH &amp; TIMELINE LOG</span>
        </div>

        {/* Section Intro: Typography & Whitespace */}
        <div className="history-intro">
          <div className="history-intro-left">
            <span className="history-badge">TIMELINE ARCHIVE</span>
            <h2 className="history-title font-title">
              DEVELOPMENT
              <br />
              HISTORY
            </h2>
          </div>
          <div className="history-intro-right">
            <p>
              웹퍼블리싱의 기본기부터 대형 사이트 분석, Vibe Coding을 접목한 서비스 제작까지
              단계별로 발전해 온 학습 과정과 프로젝트 기록입니다.
            </p>
          </div>
        </div>

        {/* Open Timeline Grid (No Dates, No Box Wrappers) */}
        <div className="history-timeline">
          {historyItems.map((item) => (
            <article key={item.phase} className="timeline-row">
              <div className="timeline-col-phase">
                <span className="timeline-phase-label font-title">{item.phase}</span>
                <span className="timeline-fig">{item.fig}</span>
              </div>

              <div className="timeline-col-node" aria-hidden="true">
                <div className="timeline-dot"></div>
                <div className="timeline-stem"></div>
              </div>

              <div className="timeline-col-content">
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-summary">{item.summary}</p>
                <ul className="timeline-details-list">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx}>
                      <span className="detail-dash" aria-hidden="true">―</span>
                      <span className="detail-text">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
