import './Skills.css'

interface SkillCategory {
  name: string
  icon: string
  skills: { name: string; level: number }[]
}

const CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Vue / Nuxt', level: 75 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    name: 'DevOps',
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'Linux', level: 82 },
    ],
  },
  {
    name: 'Design',
    icon: '✨',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'UI/UX Design', level: 78 },
      { name: 'Motion Design', level: 70 },
      { name: 'Design Systems', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__name">{cat.name}</h3>
              </div>
              <div className="skill-card__list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar">
                    <div className="skill-bar__info">
                      <span className="skill-bar__name">{skill.name}</span>
                      <span className="skill-bar__level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar__track">
                      <div
                        className="skill-bar__fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
