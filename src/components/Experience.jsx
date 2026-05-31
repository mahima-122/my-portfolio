import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" style={{ left: '140px' }} />

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="md:grid md:gap-12 py-10 border-b border-border last:border-none"
                style={{ gridTemplateColumns: '140px 1fr' }}
              >
                {/* Period */}
                <div className="mb-4 md:mb-0 md:text-right md:pt-1">
                  <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                </div>

                {/* Content */}
                <div className="md:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[49px] top-1.5 w-2 h-2 rounded-full bg-accent hidden md:block" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-700 text-lg text-text-primary">{exp.company}</h3>
                      <p className="text-text-secondary text-sm">{exp.role}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
