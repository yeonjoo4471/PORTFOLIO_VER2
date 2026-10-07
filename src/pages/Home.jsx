import Hero from '../components/Home/Hero'
import Profile from '../components/Home/Profile'
import Skills from '../components/Home/Skills'
import History from '../components/Home/History'
import ProjectIndex from '../components/Home/ProjectIndex'
import Contact from '../components/Home/Contact'

export default function Home() {
  return (
    <main className="home-main">
      <Hero />
      <Profile />
      <Skills />
      <History />
      <ProjectIndex />
      <Contact />
    </main>
  )
}
