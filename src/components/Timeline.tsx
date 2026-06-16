import { Calendar, Briefcase, GraduationCap, Trophy, ChevronRight, Sparkles } from 'lucide-react';
import { TIMELINE_DATA } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white text-left border-b-2 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with technical details */}
        <div className="text-left max-w-4xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-extrabold border border-black">
            <Sparkles className="w-3 h-3" />
            <span>04_PATHWAYS / MILESTONES</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight leading-none">
            ACADEMIC PROFILE & MANUFACTURING TIMELINE
          </h2>
          <p className="text-neutral-400 text-xs font-mono uppercase font-black">
            // STEADY VECTOR EVOLUTION: REFINING DESIGN PRINCIPLES THROUGH MATERIAL PRACTICE
          </p>
          <div className="w-24 h-1.5 bg-black mt-2" />
        </div>

        {/* Milestone Vertical Tree */}
        <div className="relative max-w-3xl mx-auto">
          {/* Centered raw dashed cutting path centerline */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] border-l-2 border-dashed border-black transform -translate-x-1/2 hidden sm:block pointer-events-none" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] border-l-2 border-dashed border-black sm:hidden pointer-events-none" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((event, index) => {
              const isEven = index % 2 === 0;
              const IconType = event.type === 'work' 
                ? Briefcase 
                : event.type === 'education' 
                ? GraduationCap 
                : Trophy;

              const badgeColorClass = 'bg-black text-white border-black';

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Tree central plotter blade pointer */}
                  <div className="absolute left-6 sm:left-1/2 w-10 h-10 -translate-x-1/2 rounded-none bg-white border border-black flex items-center justify-center z-10">
                    <IconType className="w-4 h-4 text-black" />
                  </div>

                  {/* Empty spatial balancer for side alignment in desktop */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Real Content container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-white border-2 border-black p-6  hover:bg-neutral-50 transition-colors">
                      
                      {/* Period Badge */}
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 border rounded-none mb-4 ${badgeColorClass}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.period}</span>
                      </span>

                      {/* Role and Organization */}
                      <h3 className="font-display font-black text-base sm:text-lg text-black leading-tight uppercase tracking-tight">
                        {event.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-mono font-bold uppercase tracking-wider mb-4 mt-1">
                        {event.company}
                      </p>

                      {/* Responsibilities list */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-4 whitespace-pro-line">
                        {event.description}
                      </p>

                      {/* Focus traits Specs list */}
                      <div className="pt-3 border-t border-black">
                        <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-neutral-400 block mb-2">
                          // CORE COMPETENCIES ACQUIRED
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {event.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center text-[10px] font-mono bg-neutral-150 text-black border border-black px-2 py-0.5 font-bold"
                            >
                              <ChevronRight className="w-2.5 h-2.5 text-black mr-0.5" />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
