import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, Compass, HelpCircle, LayoutGrid, CheckSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import Grainient from './Grainient';

const GLYPHS = "X$#@%&*+=?_-[{]}/^<>~|0123456789";

const IMAGES = [
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?auto=format&fit=crop&w=400&q=80"
];

export default function HeroIntro() {
  const [displayText, setDisplayText] = useState('HELLO');
  const [stage, setStage] = useState<'intro_hello' | 'intro_this_is' | 'intro_guang' | 'docking'>('intro_hello');
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Text Shuffle Decryption helper
  const runShuffle = (targetWord: string, callback: (txt: string) => void) => {
    return new Promise<void>((resolve) => {
      let currentIteration = 0;
      const targetLength = targetWord.length;
      
      const interval = setInterval(() => {
        const text = targetWord
          .split('')
          .map((char, index) => {
            if (index < currentIteration) {
              return targetWord[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
        
        callback(text);

        if (currentIteration >= targetLength) {
          clearInterval(interval);
          resolve();
        }
        currentIteration += 0.35; // Settle speed coefficient
      }, 35);
    });
  };

  // Stage Transitions Sequence for the user's requested words
  useEffect(() => {
    const runSequence = async () => {
      // 1. Initial pause at "H E L L O"
      await new Promise((r) => setTimeout(r, 1200));

      // 2. Shuffle decryption to "T H I S I S"
      setStage('intro_this_is');
      await runShuffle('THIS IS', setDisplayText);
      await new Promise((r) => setTimeout(r, 1200));

      // 3. Shuffle decryption to "G U A N G"
      setStage('intro_guang');
      await runShuffle('GUANG', setDisplayText);
      await new Promise((r) => setTimeout(r, 800));

      // 4. Reveal Editorial Homepage Canvas & Unlock scrolling
      setStage('docking');
      document.body.style.overflow = '';
    };

    runSequence();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 56; // Standard navbar offset
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

  const isDocking = stage === 'docking';

  return (
    <div ref={containerRef} className="relative select-none bg-white min-h-screen flex flex-col overflow-hidden border-b-2 border-black pt-6 pb-0">
      
      {/* Background Grainient */}
      <AnimatePresence>
        {isDocking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Grainient
              color1="#ffffff"
              color2="#000000"
              color3="#ffb0b0"
              timeSpeed={0.25}
              colorBalance={0.14}
              warpStrength={0}
              warpFrequency={5}
              warpSpeed={3}
              warpAmplitude={50}
              blendAngle={0}
              blendSoftness={0.18}
              rotationAmount={500}
              noiseScale={2}
              grainAmount={0.06}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={0.95}
              centerX={0}
              centerY={1}
              zoom={1.15}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Coordinates Watermarks (Only visible when not docking) */}
      <AnimatePresence>
        {!isDocking && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none z-10"
          >
            <div className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-neutral-400">
              [FITTING VECTOR GRAPHIC MATRIX]
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-widest text-neutral-400">
              SYS_INIT_SEQ: OK // ALIEN_BLOCK_ACTIVE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* State hooks for HeroIntro */}

      {/* 3. Main Stage Content for Transitioning Text */}
      <motion.div 
        className="absolute left-0 w-full pointer-events-none flex flex-col justify-end"
        initial={false}
        animate={{
          top: isDocking ? "100%" : "50%",
          y: isDocking ? "-100%" : "-50%",
          scale: isDocking ? 1 : 0.55,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 19,
          mass: 1.1
        }}
      >
        <div className="w-full overflow-hidden leading-none">
          <h1 className="w-full text-center text-black font-alien uppercase select-none tracking-tighter whitespace-nowrap text-[22vw] sm:text-[24vw] md:text-[25vw] lg:text-[26vw] leading-[0.76]">
            {displayText}
          </h1>
        </div>
      </motion.div>



    </div>
  );
}
