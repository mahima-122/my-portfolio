import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-noise">
      
      {/* Background orbs */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl"
        style={{ background: 'radial-gradient(circle, #c8f04d, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl"
        style={{ background: 'radial-gradient(circle, #7eb8f7, transparent 70%)' }} />

      <div className="section-container pt-32 pb-24">

        {/* 🔥 ADD GRID HERE */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE (your original content unchanged) */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
            
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs tracking-[0.2em] text-text-secondary uppercase">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-800 leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              <span className="block text-text-primary">Mahima</span>
              <span className="block text-text-secondary">Bastola</span>
            </motion.h1>

            <motion.div variants={item} className="flex flex-wrap gap-2 mb-10">
              {['Frontend Developer', 'UI-Focused Full Stack', 'Creative Designer'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-text-secondary border border-border px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="text-text-secondary text-lg leading-relaxed mb-12 max-w-xl"
              style={{ fontWeight: 300 }}
            >
              Frontend-focused developer with experience building interactive web applications 
              and a strong eye for design. I combine development and creativity to build 
              user-friendly, visually engaging digital experiences.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
               className="btn-primary"
              >
                View Projects
                <ArrowDown size={14} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* 👉 RIGHT SIDE IMAGE (NEW ADDITION) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end items-center relative lg:-ml-10 xl:-ml-20"
          >
            <div className="relative flex items-center justify-center">

              {/* Soft background highlight */}
              <div className="absolute w-[320px] h-[320px] rounded-full blur-3xl opacity-20"
                style={{ background: '#a8cc35' }}
              />

              {/* Your image */}
              <img
                src="/Mee.png"  
                alt="Mahima Bastola"// 
                className=" relative
        w-[220px]
        sm:w-[250px]
        md:w-[280px]
        lg:w-[320px]
        xl:w-[340px]
        h-auto
        object-cover
        rounded-[28px]
        z-10"
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator (unchanged) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent"
          />
        </motion.div>

      </div>

      {/* Large decorative text (unchanged) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-800 text-text-primary select-none pointer-events-none hidden lg:block"
        style={{ fontSize: '22vw', opacity: 0.015, lineHeight: 1 }}
      >
        DEV
      </div>
    </section>
  )
}