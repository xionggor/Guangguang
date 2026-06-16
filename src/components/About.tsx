import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Award, Layers, Scissors, Eye, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA } from '../data';

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Design & UX' | 'Frontend' | 'Backend'>('All');

  const categories: ('All' | 'Design & UX' | 'Frontend' | 'Backend')[] = [
    'All',
    'Design & UX',
    'Frontend',
    'Backend',
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  const coreValues = [
    {
      icon: Eye,
      title: 'TYPOGRAPHY & GRID OBSESSIVE',
      description: 'Trained in rigorous grid systems and modern Bauhaus layout paradigms. Deep pixel-level sensitivity to stroke widths, vector alignment, and character tracking.',
      color: 'text-white bg-black border-black',
    },
    {
      icon: Scissors,
      title: 'ADVANCED SUBSTRATE MASTERY',
      description: 'Studied thermal Expansion and adhesion properties of 24+ high-end polymeric vinyl films. Ensures 5-year weatherproof and lifting-free endurance on vehicle liveries.',
      color: 'text-black bg-white border-black',
    },
    {
      icon: Layers,
      title: 'VECTOR CALIBRATION & HARDWARE',
      description: 'Expert in Boolean operations and high-order Bezier curve optimization. Designed custom weed-trap boundaries for zero cutter-blade drag or fiber fraying.',
      color: 'text-white bg-black border-black',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b-2 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with technical crop indicators */}
        <div className="text-left max-w-4xl mb-16 space-y-4 relative">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-extrabold border border-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02_ABOUT GUANG</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight leading-none">
            SHAPING PHYSICAL DIMENSIONS VIA GEOMETRIC VECTOR INTEGRITIES.
          </h2>
          <p className="text-xs font-mono text-neutral-400 uppercase">
            // FROM VECTOR FILES TO THE STREETS: HIGH-PRECISION SPATIAL IDENTITIES
          </p>
          <div className="w-24 h-1.5 bg-black mt-2" />
        </div>

        {/* Narrative & Philosophy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Biography and Values */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6 text-sm sm:text-base font-sans">
              <p className="leading-relaxed">
                Hello, I am <strong>GUANG</strong>. As a graphic designer and hands-on maker, I have bridged the gap between digital coordinates and real-world media by specializing in 
                <strong> precision dimensional signage</strong> and <strong>die-cut polymeric decals</strong>.
              </p>
              <p className="leading-relaxed">
                In my practice, geometric sans-serif typeface systems are not merely a style; they are an absolute visual standard of balance. I celebrate raw circular curves, long vertical lines, and 90-degree orthogonal corners.
              </p>
              <p className="leading-relaxed">
                Whether applying window etchings on glass partitions for cafes, mounting high-tension vehicle graphics, or fabricating dimensional metal plates with backlit LEDs, I optimize the vector paths beforehand to ensure a swift, seamless release process.
              </p>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="pt-4">
              <h3 className="font-display font-black text-lg text-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-black" />
                <span>CRAFT CORE VALUES (CRAFT PRINCIPLES)</span>
              </h3>
              <div className="space-y-4">
                {coreValues.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-5 border border-black bg-white hover:bg-neutral-50 transition-all"
                    >
                      <div className={`p-3 h-fit shrink-0 border border-black ${value.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-black text-black text-sm sm:text-base uppercase tracking-tight">
                          {value.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Skills list */}
          <div className="lg:col-span-6 bg-white border-2 border-black p-6 sm:p-8 text-left">
            <div className="space-y-6">
              
              <div>
                <h3 className="font-display font-black text-lg text-black uppercase tracking-tight">
                  TOLERANCE & ENGINEERING CAPABILITIES
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1 uppercase">
                  // CATEGORIZED SKLL COEFFICIENTS WITH MILLIMETER METRICS
                </p>
              </div>

              {/* Toggles (Brutalist style) */}
              <div className="flex flex-wrap gap-1 bg-neutral-150 p-1 border border-black">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-1 py-1.5 px-2 text-[10px] sm:text-xs font-mono uppercase font-black transition-all ${
                      selectedCategory === cat
                        ? 'bg-black text-white'
                        : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
                    }`}
                  >
                    {cat === 'All' ? 'ALL' : cat}
                  </button>
                ))}
              </div>

              {/* Skills Listing */}
              <div className="space-y-4 min-h-[280px]">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-1.5 bg-neutral-50 p-4 border border-black"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-black uppercase">{skill.name}</span>
                        <span className="font-extrabold text-white bg-black border border-black px-2 py-0.5">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Industrial block progress bar with NO rounded corners */}
                      <div className="h-3 w-full bg-neutral-200 border border-black overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-black"
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Hardware / Software Tools used */}
              <div className="pt-4 border-t border-black text-left">
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-extrabold uppercase block mb-3">
                  // HARDWARE & SOFTWARE PRODUCTION TOOLCHAINS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Roland GS Pro Cutting Plotter',
                    'UV High-Bond Polymeric Flatbed',
                    'Adobe Illustrator Vector Drafting',
                    'Bezier Smooth Path Optimization',
                    'Oracal 970 High-Performance Cast',
                    '3M Conformable Fleet Adhesives',
                    'Laser-Grid Alignment Framing',
                    'CNC Brushed-Alloy Plate Machining'
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1.5 bg-neutral-50 text-black border border-black font-extrabold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
