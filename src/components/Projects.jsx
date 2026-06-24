// src/components/Projects.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data'; 
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';

// Filters for the Projects section
export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-10 md:py-14">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Data Analytics Portfolio</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-base p-7 group hover:border-border-hover flex flex-col"
            >
              {project.imageUrl && (
                <div className="mb-5 h-48 w-full overflow-hidden rounded-lg bg-bg-tertiary">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <h3 className="font-display font-700 text-xl text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-text-secondary mt-1 mb-4">{project.subtitle}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1" style={{ fontWeight: 300 }}>{project.description}</p>
              
              <ul className="space-y-1.5 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-accent shrink-0">→</span>{f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-auto">
                {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              
              <div className="mt-4 flex gap-2">
                <a href={project.links.github} target="_blank" className="text-xs flex items-center gap-1 text-accent hover:underline">
                  <Github size={14} /> View Github
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}