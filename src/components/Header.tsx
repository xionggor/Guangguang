import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, MessageSquarePlus, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 56; // Fixed top header height is 56px (h-14)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 h-14 bg-white/90 backdrop-blur-md transition-all duration-300 border-b border-black select-none ${
        isScrolled ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        
        {/* Desktop Architecture */}
        <div className="hidden md:flex justify-between w-full h-full items-center">
          
          {/* Left Navigation */}
          <div className="flex items-center space-x-1 justify-start">
            <button
              onClick={() => handleNavClick('hero')}
              className={`px-3 py-1 font-mono font-bold text-xs uppercase transition-colors rounded-none ${
                activeSection === 'hero' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1 font-mono font-bold text-xs uppercase transition-colors rounded-none ${
                activeSection === 'about' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick('timeline')}
              className={`px-3 py-1 font-mono font-bold text-xs uppercase transition-colors rounded-none ${
                activeSection === 'timeline' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
            >
              SERVICE
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-3 py-1 font-mono font-bold text-xs uppercase transition-colors rounded-none ${
                activeSection === 'portfolio' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
            >
              WORK
            </button>
            <button
              onClick={() => handleNavClick('guestbook')}
              className={`px-3 py-1 font-mono font-bold text-xs uppercase transition-colors rounded-none ${
                activeSection === 'guestbook' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1 font-mono font-bold text-xs uppercase text-black hover:bg-neutral-100 transition-colors"
            >
              (Menu)
            </button>
          </div>

        </div>

        {/* Mobile View Structure */}
        <div className="md:hidden flex items-center justify-between w-full h-full">
          {/* Symmetrical gap is on mobile hidden, so we show a clean header label */}
          <button
            onClick={() => handleNavClick('hero')}
            className="font-display font-black text-sm uppercase tracking-wide"
          >
            {isScrolled ? "GUANG" : "PRE-FLIGHT"}
          </button>

          <div className="flex items-center space-x-2">
            <span className="px-1.5 py-0.5 font-mono text-[9px] bg-black text-white font-extrabold uppercase">
              ONLINE
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 border border-black text-black hover:bg-neutral-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.12 }}
            className="bg-white border-b border-black text-left w-full absolute top-14 left-0 z-50 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2 flex flex-col">
              {['hero', 'about', 'timeline', 'portfolio', 'guestbook'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  className={`w-full text-left py-2 px-3 font-mono font-bold text-xs uppercase border transition-colors ${
                    activeSection === sec ? 'bg-black text-white border-black' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  {sec === 'hero' ? 'HOME' : sec === 'about' ? 'ABOUT' : sec === 'timeline' ? 'SERVICE' : sec === 'portfolio' ? 'WORK' : 'CONTACT'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
