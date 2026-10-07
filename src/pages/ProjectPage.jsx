import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'
import EpisodeIntro from '../components/Project/EpisodeIntro'
import ProjectStory from '../components/Project/ProjectStory'
import ProjectDetail from '../components/Project/ProjectDetail'
import ProjectNavigation from '../components/Project/ProjectNavigation'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="container" style={{ padding: '10rem 1rem 6rem', textAlign: 'center' }}>
        <h1 className="font-title" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-deep-navy)' }}>
          EPISODE NOT FOUND
        </h1>
        <p style={{ color: 'var(--color-body-slate)', marginBottom: '2rem' }}>
          요청하신 프로젝트 에피소드를 찾을 수 없습니다.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.75rem',
            background: 'var(--color-clear-blue)',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '2px'
          }}
        >
          포트폴리오 홈으로 돌아가기
        </Link>
      </main>
    )
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main className="project-detail-main">
      <EpisodeIntro project={project} />
      <ProjectStory project={project} />
      <ProjectDetail project={project} />
      <ProjectNavigation
        prevProject={prev}
        nextProject={next}
        currentEpisode={project.episode}
      />
    </main>
  )
}
