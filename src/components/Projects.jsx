// src/components/Projects.jsx
// This is your filterable work overview, including both web and detailed design projects.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data'; 
import { designCategoryFilters } from '../designGalleryData';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';

// Filters for the Projects section
const filters = ['Web Development', 'Design']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-base p-7 group hover:border-border-hover flex flex-col"
    >
      {/* Project Thumbnail */}
      {project.imageUrl && (
        <div className="mb-5 h-48 w-full overflow-hidden rounded-lg bg-bg-tertiary">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-2 block">
            {project.year} — {project.status}
          </span>
          <h3 className="font-display font-700 text-xl text-text-primary group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary mt-0.5">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.links?.github && ( // Optional chaining for robustness
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-text-primary transition-colors">
              <Github size={14} />
            </a>
          )}
          {project.links?.live && ( // Optional chaining for robustness
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-text-primary transition-colors">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1" style={{ fontWeight: 300 }}>
        {project.description}
      </p>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <ul className="space-y-1.5 mb-6">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="text-accent mt-0.5 shrink-0">→</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

function DesignCategoryCard({ category, index, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(category)}
      className="card-base group cursor-pointer overflow-hidden hover:border-border-accent"
    >
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden bg-bg-tertiary"
        // style={{ background: item.bg }} // If you want a background color here
      >
        {category.cardThumbnail ? (
          <img
            src={category.cardThumbnail}
            alt={category.category}
            loading="lazy"
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        ) : (
          // Fallback if no thumbnail is provided
          <div className="text-text-muted text-lg font-display">{category.category}</div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-white text-sm font-display font-600">
            <ArrowUpRight size={16} />
            View Gallery
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-600 text-sm text-text-primary mt-1 group-hover:text-accent transition-colors duration-200">
          {category.category}
        </h3>
        <p className="text-xs text-text-secondary mt-1" style={{ fontWeight: 300 }}>{category.cardDescription}</p>
      </div>
    </motion.div>
  );
}


function DesignCategoryLightbox({ category, onClose }) {
  if (!category) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="card-base max-w-4xl w-full h-5/6 flex flex-col overflow-hidden" // Max-width increased, added h-5/6 and flex-col
      >
        <div className="p-6 flex items-center justify-between border-b border-border">
          <h3 className="font-display font-700 text-2xl text-text-primary">{category.category} Gallery</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Close gallery"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar"> {/* Added custom-scrollbar for styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category.items.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="relative overflow-hidden rounded-lg aspect-square bg-bg-tertiary flex items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-mono tracking-widest uppercase px-2 py-1 rounded-full border border-white/20">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {category.items.length === 0 && (
            <p className="text-center text-text-muted mt-10">No images in this gallery yet.</p>
          )}
        </div>
        
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.25);
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}


export default function Projects() {
  const [ref, inView] = useInView()
  const [activeFilter, setActiveFilter] = useState('Web Development')
  const [designCategoryLightboxItem, setDesignCategoryLightboxItem] = useState(null);

  // Combine both types of items from data.js
  const filteredDisplayItems = activeFilter === 'Web Development' ? projects : designCategoryFilters;

  return (
    <>
      <section id="projects" className="py-28 md:py-36">
        <div className="section-container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="section-label">Work</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="section-title">Selected projects</h2>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-bg-secondary border border-border rounded-full p-1 self-start sm:self-auto">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`relative font-mono text-xs tracking-wide px-4 py-2 rounded-full transition-colors duration-200 ${
                      activeFilter === f ? 'text-bg-primary' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {activeFilter === f && (
                      <motion.span
                        layoutId="filter-bg"
                        className="absolute inset-0 rounded-full bg-accent"
                        style={{ zIndex: -1 }}
                      />
                    )}
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {activeFilter === 'Web Development' ? (
                filteredDisplayItems.map((project, i) => (
                  // Render ProjectCard for web dev items
                  <ProjectCard key={project.id} project={project} index={i} /> ))
                ) : (
                  // When 'Design' filter is active, display the DesignCategoryCards
                filteredDisplayItems.map((category, i) => (
                  <DesignCategoryCard 
                    key={category.id} 
                    category={category} 
                    index={i} 
                    onClick={setDesignCategoryLightboxItem} 
                  />
                ))
              )}
            </AnimatePresence>
          </motion.div>

          {filteredDisplayItems.length === 0 && (
            <div className="text-center py-20 text-text-muted font-mono text-sm">
              No items in this category yet.
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {designCategoryLightboxItem && (
          <DesignCategoryLightbox
            category={designCategoryLightboxItem}
            onClose={() => setDesignCategoryLightboxItem(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
