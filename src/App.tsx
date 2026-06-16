/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Header from './components/Header';
import HeroIntro from './components/HeroIntro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import GuestbookContact from './components/GuestbookContact';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'portfolio', 'timeline', 'guestbook'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-white text-black flex flex-col relative">
      
      {/* Floating Active Header Area */}
      <Header activeSection={activeSection} />

      {/* Main Sections Assembly */}
      <main className="flex-grow">
        <section id="hero" className="w-full">
          <HeroIntro />
        </section>
        <About />
        <Portfolio />
        <Timeline />
        <GuestbookContact />
      </main>

      {/* Aesthetic humble Footer Area (Avoiding unsolicited status logs/telemetry) */}
      <footer className="bg-black text-neutral-400 py-12 border-t border-black">
        <div className="max-w-7xl mx-auto px-6 text-left space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800">
            {/* Signature */}
            <div className="space-y-1">
              <h4 className="font-display font-black text-white text-base tracking-tight uppercase">
                {PERSONAL_INFO.name} STUDIO & LAB
              </h4>
              <p className="text-xs text-neutral-500 font-mono uppercase">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* External tags */}
            <div className="flex flex-wrap gap-4 text-xs font-mono font-bold uppercase">
              <a
                href="#about"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                02_ABOUT
              </a>
              <span className="text-neutral-800">/</span>
              <a
                href="#portfolio"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                03_WORKS
              </a>
              <span className="text-neutral-800">/</span>
              <a
                href="#guestbook"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('guestbook')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                05_CONNECT
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
            <p>
              © 2026 {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
            </p>
            <p className="flex items-center gap-1.5 font-bold">
              <span>MADE WITH REACT 19 & TAILWIND CSS</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

