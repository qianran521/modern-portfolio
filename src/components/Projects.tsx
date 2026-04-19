import { useState } from 'react'
import './Projects.css'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  color: string
}

const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    color: '#38bdf8',
  },
  {
    title: 'AI Chat Interface',
    description: 'Conversational AI interface with streaming responses, context memory, and multi-model support.',
    tags: ['TypeScript', 'WebSocket', 'LLM'],
    link: '#',
    color: '#818cf8',
  },
  {
    title: 'Design System',
    description: 'Component library with 50+ tokens, dark/light themes, and comprehensive documentation.',
    tags: ['React', 'Storybook', 'CSS'],
    link: '#',
    color: '#34d399',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard with custom charts, filters, and export capabilities.',
    tags: ['D3.js', 'React', 'GraphQL'],
    link: '#',
    color: '#f472b6',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking with workout plans, progress charts, and social features.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    link: '#',
    color: '#fb923c',
  },
  {
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline with multi-environment deployments and monitoring integration.',
    tags: ['Docker', 'Kubernetes', 'Terraform'],
    link: '#',
    color: '#a78bfa',
  },
]

const FILTERS = ['All', 'React', 'TypeScript', 'Node.js', 'D3.js', 'Docker']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t.includes(activeFilter)))

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${activeFilter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card"
              style={{ '--card-accent': project.color } as React.CSSProperties}
            >
              <div className="project-card__icon" />
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
