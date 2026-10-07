import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Opening from './components/Opening'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

function AppContent() {
  const [showOpening, setShowOpening] = useState(() => {
    try {
      if (typeof window === 'undefined') return false
      // 프로젝트 상세 페이지 직접 접근 시에는 바로 본문으로, 그 외(홈/루트 새로고침)에는 매번 오프닝 실행
      const isDirectProject = window.location.hash.includes('/projects')
      return !isDirectProject
    } catch {
      return false
    }
  })

  const handleOpeningComplete = () => {
    setShowOpening(false)
  }

  return (
    <div className="portfolio-app-root">
      {showOpening && <Opening onComplete={handleOpeningComplete} />}
      <ScrollToTop />
      <Header />
      <div className="portfolio-page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
