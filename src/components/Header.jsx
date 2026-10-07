import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AudioController from './AudioController'
import '../styles/header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (isHome) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className={`global-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container-wide">
        <Link to="/" className="header-logo" onClick={() => setMobileMenuOpen(false)} aria-label="홈으로 이동">
          <span className="logo-badge">YJ</span>
          <div className="logo-text">
            <span className="logo-name">YEON JOO</span>
            <span className="logo-role">WEB PUBLISHER</span>
          </div>
        </Link>

        <nav className={`header-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="메인 네비게이션">
          <ul className="nav-list">
            <li>
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
                <span className="nav-num">00</span>
                <span className="nav-text">HOME</span>
              </a>
            </li>
            <li>
              <a href="#profile" onClick={(e) => handleNavClick(e, 'profile')}>
                <span className="nav-num">01</span>
                <span className="nav-text">ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
                <span className="nav-num">02</span>
                <span className="nav-text">SKILLS</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                <span className="nav-num">03</span>
                <span className="nav-text">PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <span className="nav-num">04</span>
                <span className="nav-text">CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <AudioController />
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
