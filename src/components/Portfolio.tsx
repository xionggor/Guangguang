import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ZoomIn, X, Calendar, Award, Layers, Sparkles, Copy, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web' | 'Mobile' | 'Design' | 'AI'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedIndex, setCopiedIndex] = useState(false);

  const categories: { id: 'All' | 'Web' | 'Mobile' | 'Design' | 'AI'; label: string }[] = [
    { id: 'All', label: 'All Projects' },
    { id: 'Design', label: 'Window Etch / Decal' },
    { id: 'Web', label: 'Dimensional Signs' },
    { id: 'Mobile', label: 'Automotive Livery' },
    { id: 'AI', label: 'Holographic warning' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const handleCopyVectors = () => {
    setCopiedIndex(true);
    setTimeout(() => setCopiedIndex(false), 2000);
  };

  return (
    <section id="portfolio" className="py-24 bg-white text-left border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with crop signs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b-2 border-black">
          <div className="space-y-4 max-w-xl text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-extrabold border border-black">
              <Sparkles className="w-3 h-3" />
              <span>03_SPECIALTY SERVICES / CASE ARCHIVE</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-black uppercase tracking-tight leading-none">
              FABRICATED MONOCHROME SIGNAGE & VECTOR DIECUT PORTFOLIO
            </h2>
            <p className="text-neutral-400 text-xs font-mono uppercase font-black">
              // NO GRAPHIC MOCKUPS: 100% REAL-WORLD CALIBRATED METALS & ACRYLIC MEDIA
            </p>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 h-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 px-4 text-xs font-mono font-bold uppercase transition-colors focus:outline-none ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-500 hover:text-black hover:bg-neutral-50 border border-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="group bg-white border-2 border-black overflow-hidden flex flex-col h-full hover:bg-neutral-50"
              >
                {/* Project Image & Cut Marks Overlays */}
                <div className="relative aspect-video w-full bg-neutral-100 overflow-hidden shrink-0 border-b-2 border-black">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-black text-white text-[9px] uppercase font-mono font-bold tracking-widest px-2 py-0.5 border border-black">
                    {project.category === 'Design' ? 'DECAL' : project.category === 'Web' ? 'SIGNAGE' : project.category === 'Mobile' ? 'FLEET WRAP' : 'PRISMATIC'}
                  </div>

                  {/* Cut line indicators */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-black opacity-100" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-black opacity-100" />

                  {/* Focus Action Overlay */}
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      id={`project-zoom-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="p-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors cursor-pointer"
                      title="Open full structural plan"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-400 font-extrabold">{project.completedDate}</span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono font-black text-white bg-black px-1.5 py-0.2">
                          ★ SIGN MASTERPIECE
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display font-black text-lg text-black uppercase leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-neutral-500 leading-relaxed min-h-[40px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills/Tags listed */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-neutral-100 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 border border-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-mono bg-white text-neutral-400 px-2 py-0.5 border border-dashed border-neutral-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      id={`project-details-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-center bg-white hover:bg-black hover:text-white border-2 border-black py-2.5 text-xs font-mono font-bold uppercase transition-all cursor-pointer"
                    >
                      VIEW DESIGN SHEETS & ANALYSIS
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-2 border-black overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero Banner */}
                <div className="relative aspect-video w-full bg-neutral-900 border-b border-black">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Close icon */}
                  <button
                    id="modal-close"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black text-white border border-black hover:bg-neutral-800 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-white bg-black border border-black px-2 py-0.5 mb-2 inline-block">
                      {selectedProject.category === 'Design' ? 'DIECUT POLYMERIC' : selectedProject.category === 'Web' ? 'TITANIUM BUILD' : selectedProject.category === 'Mobile' ? 'FLEET LIVERY' : 'PRISMATIC FILM'} CLASSIFICATION
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Information Content inside modal */}
                <div className="p-6 sm:p-8 space-y-6 text-left bg-white">
                  
                  {/* Specification banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-neutral-50 border border-black">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 font-bold uppercase">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span>COMPLETION DATE</span>
                      </div>
                      <p className="text-sm font-black text-black font-mono">{selectedProject.completedDate}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 font-bold uppercase">
                        <Layers className="w-3.5 h-3.5 text-black" />
                        <span>MATERIAL PROCESS</span>
                      </div>
                      <p className="text-xs font-black text-black font-mono">
                        {selectedProject.category === 'Design' ? 'Matte cast polymeric white film' : selectedProject.category === 'Web' ? 'Satin brushed metal + diffuser led' : selectedProject.category === 'Mobile' ? 'Oracal cast wrap with anti-lift' : 'Diffractive holographic vinyl'}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 font-bold uppercase">
                        <Award className="w-3.5 h-3.5 text-black" />
                        <span>TOLERANCE PARAMETER</span>
                      </div>
                      <p className="text-[10px] font-black text-white bg-black border border-black px-1.5 py-0.5 inline-block font-mono">
                        {selectedProject.featured ? '0.1mm micro-weeded' : '0.25mm calibrated'}
                      </p>
                    </div>
                  </div>

                  {/* Case Study Long Description */}
                  <div className="space-y-3 font-sans">
                    <h4 className="font-display font-black text-sm text-black uppercase tracking-tight">
                      FABRICATION WORKFLOW & QUALITY PARAMETERS
                    </h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Impact and Metrics Showcase */}
                  {selectedProject.metrics && (
                    <div className="p-4 bg-black text-white border border-black space-y-1">
                      <h4 className="text-[9px] font-mono font-black tracking-wider text-neutral-400 uppercase">
                        // PHYSICAL TOLERANCE & ENVIRONMENT RESISTANCES
                      </h4>
                      <p className="text-xs sm:text-sm text-white font-bold font-mono uppercase">
                        ✓ {selectedProject.metrics}
                      </p>
                    </div>
                  )}

                  {/* Technical Spec List */}
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-black text-xs uppercase font-mono tracking-wider">
                      // PROCESS SPECIFICATIONS & EQUIPMENT USED
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 text-black border border-neutral-300 font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vector asset prompt - Replacing window.alert with beautiful inline toggle */}
                  <div className="pt-4 border-t border-black flex flex-col gap-3">
                    <button
                      onClick={handleCopyVectors}
                      className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs tracking-wider uppercase font-bold py-3.5 px-4 transition-colors"
                    >
                      {copiedIndex ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedIndex ? "VECTOR FILES COPIED TO CLIPBOARD" : "REQUEST ORIGINAL HIGH-SPEC VECTOR (.AI / .DXF)"}</span>
                    </button>
                    {copiedIndex && (
                      <p className="text-center font-mono text-[9px] text-neutral-400 uppercase tracking-widest animate-pulse">
                        ✓ File stub has been copied. Contact guangxionghuu@gmail.com with this ID reference to receive full CAD specs.
                      </p>
                    )}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
