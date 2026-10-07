import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import '../../styles/project-index.css'

export default function ProjectIndex() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section id="projects" className="projects-index-section" aria-label="Project Index Section">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <span className="editorial-tag">SETTING BOOK · FILE 04</span>
          <span className="editorial-subtitle">EPISODE TABLE OF CONTENTS</span>
        </div>

        {/* Section Intro: Typography & Whitespace */}
        <div className="index-intro">
          <div className="index-intro-left">
            <span className="index-badge">CONTENTS INDEX</span>
            <h2 className="index-title font-title">
              PROJECT
              <br />
              EPISODES
            </h2>
          </div>
          <div className="index-intro-right">
            <p>
              웹퍼블리셔로서 제작한 8편의 에피소드 아카이브입니다.
              브랜드 웹 리디자인, 대형 사이트 클론 코딩, AI 기반 바이브 코딩 서비스까지
              각 프로젝트의 기획 의도(WHY)와 기술적 구현 상세(HOW)를 확인하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Table of Contents Layout */}
        <div className="index-main-layout">
          {/* Left: Open Episode Table of Contents */}
          <div className="episode-toc" role="list">
            <div className="toc-header-row" aria-hidden="true">
              <span className="toc-th toc-th-ep">EPISODE</span>
              <span className="toc-th toc-th-title">TITLE &amp; CONCEPT</span>
              <span className="toc-th toc-th-cat">CATEGORY</span>
              <span className="toc-th toc-th-year">YEAR</span>
              <span className="toc-th toc-th-arrow">VIEW</span>
            </div>

            {projects.map((project) => {
              const isActive = activeProject.slug === project.slug
              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className={`episode-toc-row ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  role="listitem"
                >
                  <div className="toc-col-ep">
                    <span className="toc-ep-prefix">EP.</span>
                    <span className="toc-ep-num font-title">{project.episode}</span>
                  </div>

                  <div className="toc-col-title">
                    <div className="toc-title-single-line">
                      <h3 className="toc-title">{project.title}</h3>
                      <span className="toc-title-sep" aria-hidden="true">/</span>
                      <span className="toc-subtitle">{project.subtitle}</span>
                    </div>
                  </div>

                  <div className="toc-col-cat">
                    <span className="toc-category">{project.category}</span>
                  </div>

                  <div className="toc-col-year">
                    <span className="toc-year">{project.year}</span>
                  </div>

                  <div className="toc-col-arrow" aria-hidden="true">
                    <span className="toc-arrow">→</span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right: Editorial Figure Preview Sheet */}
          <aside className="episode-preview-sheet" aria-label="선택된 에피소드 미리보기">
            <div className="preview-sheet-sticky">
              <div className="preview-sheet-header">
                <span className="preview-figure-label">FIG.0{activeProject.id}</span>
                <span className="preview-sheet-spec">
                  SPEC. EP.{activeProject.episode} / ARCHIVE PLATE
                </span>
              </div>

              <div className="preview-figure-media">
                <img
                  src={activeProject.assets.cover || activeProject.assets.thumbnail || activeProject.assets.hero}
                  alt={`${activeProject.title} 미리보기`}
                  className="preview-figure-img"
                  loading="lazy"
                />
              </div>

              <div className="preview-figure-caption">
                <span className="figure-badge">FIG.0{activeProject.id}</span>
                <span className="caption-text">
                  <strong>{activeProject.title}</strong> — {activeProject.category}
                </span>
              </div>

              <div className="preview-sheet-spec-list">
                <div className="spec-row">
                  <span className="spec-dt">ROLE</span>
                  <span className="spec-dd">{activeProject.role}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-dt">PERIOD</span>
                  <span className="spec-dd">{activeProject.period}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-dt">TOOLS</span>
                  <span className="spec-dd">{activeProject.tools.join(' · ')}</span>
                </div>
              </div>

              <Link
                to={`/projects/${activeProject.slug}`}
                className="preview-sheet-action"
                aria-label={`${activeProject.title} 에피소드 설정집 열기`}
              >
                <span>OPEN EPISODE {activeProject.episode} SETTING BOOK</span>
                <span className="action-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
