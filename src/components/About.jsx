import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '2+', label: 'Years building' },
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Companies worked with' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-10 md:py-14">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">About</p>
            <h2 className="section-title mb-8">
              Finding Patterns,<br />
              <span className="text-text-secondary">Solving Problem</span>
            </h2>
            <div className="space-y-5 text-text-secondary" style={{ fontWeight: 300 }}>
              <p>
  My interest in technology has always been driven by curiosity and problem-solving. Over time, I found myself becoming increasingly interested in the data behind products, businesses, and everyday decisions.
</p>

<p>
  My focus is now centered on <span className="text-text-primary font-400">Data Analytics</span>,
  where I work with SQL, Python, Pandas, PostgreSQL, and Power BI to clean, analyze, visualize, and interpret data. I enjoy uncovering patterns, identifying trends, and turning raw datasets into meaningful insights.
</p>

<p>
  I'm interested in solving <span className="text-text-primary font-400">real-world business problems through data</span>,
  combining analytical thinking with practical tools to support better decision-making. Currently, I am building hands-on analytics projects, strengthening my technical skills, and continuously exploring how data can create measurable impact.
</p>
            </div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="card-base p-5 text-center"
                >
                  <p className="font-display font-800 text-3xl text-accent mb-1">{stat.value}</p>
                  <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Visual card */}
            <div className="card-base p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5"
                style={{ background: 'radial-gradient(circle, #c8f04d, transparent 70%)' }} />
              
              <p className="font-mono text-xs text-text-muted mb-6 tracking-widest uppercase">Currently working with</p>
              
              <div className="flex flex-wrap gap-2">
                {[
  'SQL',
  'Python',
  'Pandas',
  'PostgreSQL',
  'Power BI',
  'Data Cleaning',
  'Data Visualization',
  'Jupyter Notebook',
  'Git',
  'Matplotlib'
].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <p className="text-sm text-text-secondary">
                    Open to <span className="text-text-primary">freelance & full-time</span> opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
