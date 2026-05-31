import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills } from '../data'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 md:py-36 bg-bg-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            What I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-6 group hover:border-border-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-accent font-mono text-xl">{group.icon}</span>
                <p className="font-display font-600 text-sm text-text-primary tracking-wide">
                  {group.category}
                </p>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-text-muted group-hover:bg-accent/50 transition-colors duration-300" />
                    <span className="text-sm text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Horizontal scrolling marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap"
            style={{
              animation: 'marquee 30s linear infinite',
            }}
          >
            {[...Array(3)].flatMap(() =>
              ['React', 'Python', 'Django', 'Flask', 'JavaScript', 'Tailwind', 'Figma', 'Git', 'REST APIs', 'UI Design', 'Framer Motion', 'PostgreSQL'].map((t) => (
                <span key={Math.random()} className="font-mono text-xs text-text-muted tracking-widest uppercase">
                  {t} <span className="text-accent mx-2">·</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  )
}
