import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, MessageSquarePlus, Star, Trash2, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, INITIAL_GUESTBOOK_MESSAGES } from '../data';
import { GuestbookMessage } from '../types';

export default function GuestbookContact() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [avatarColor, setAvatarColor] = useState('bg-black text-white');
  const [rating, setRating] = useState(5);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [directMailSubject, setDirectMailSubject] = useState('');
  const [directMailBody, setDirectMailBody] = useState('');
  const [mailSentSuccess, setMailSentSuccess] = useState(false);
  const [showResetNotice, setShowResetNotice] = useState(false);

  // Avatar color swatches aligned to stark black/white scale
  const colorOptions = [
    { label: 'absolute-black', class: 'bg-black text-white border-black' },
    { label: 'dark-gray', class: 'bg-neutral-800 text-white border-black' },
    { label: 'neutral-gray', class: 'bg-neutral-550 text-white border-black' },
    { label: 'stark-white', class: 'bg-white text-black border-black/10' },
    { label: 'light-silver', class: 'bg-neutral-100 text-black border-black/15' },
  ];

  useEffect(() => {
    const cached = localStorage.getItem('portfolio_guestbook_messages');
    if (cached) {
      try {
        setMessages(JSON.parse(cached));
      } catch (err) {
        setMessages(INITIAL_GUESTBOOK_MESSAGES);
      }
    } else {
      setMessages(INITIAL_GUESTBOOK_MESSAGES);
      localStorage.setItem('portfolio_guestbook_messages', JSON.stringify(INITIAL_GUESTBOOK_MESSAGES));
    }
  }, []);

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) return;

    const newMessage: GuestbookMessage = {
      id: `m_${Date.now()}`,
      name: name.trim(),
      email: email.trim() || 'anonymous@guest.com',
      message: messageText.trim(),
      createdAt: new Date().toISOString(),
      avatarColor,
      rating,
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('portfolio_guestbook_messages', JSON.stringify(updated));

    setName('');
    setEmail('');
    setMessageText('');
    setRating(5);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const executeClearMessages = () => {
    setMessages(INITIAL_GUESTBOOK_MESSAGES);
    localStorage.setItem('portfolio_guestbook_messages', JSON.stringify(INITIAL_GUESTBOOK_MESSAGES));
    setShowResetNotice(false);
  };

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!directMailSubject.trim() || !directMailBody.trim()) return;
    
    setMailSentSuccess(true);
    setTimeout(() => {
      setMailSentSuccess(false);
      setDirectMailSubject('');
      setDirectMailBody('');
    }, 4500);

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(directMailSubject)}&body=${encodeURIComponent(directMailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="guestbook" className="py-24 bg-white text-left relative border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with technical details */}
        <div className="text-left max-w-4xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-extrabold border border-black">
            <Sparkles className="w-3 h-3" />
            <span>05_CONNECT / AUDIT WALL</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight leading-none">
            COMMISSION INQUIRIES & COAXIAL WALL
          </h2>
          <p className="text-neutral-400 text-xs font-mono uppercase font-black">
            // TRANSMIT DESIGN SPECIFICATIONS OR IMPRINT PUBLIC MATERIAL FEEDBACK
          </p>
          <div className="w-24 h-1.5 bg-black mt-2" />
        </div>

        {/* Layout: Form + Message board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact & Input Forms */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Direct Send Business Mail */}
            <div className="bg-white border-2 border-black p-6 sm:p-8 rounded-none space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black text-white border border-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs sm:text-sm uppercase tracking-tight text-black leading-none">
                    INQUIRE VIA DIRECT EMAIL
                  </h3>
                  <p className="text-[9px] font-mono text-neutral-400 mt-1">LAUNCH HOST MAIL CLIENT FOR .AI / .DXF SPECS</p>
                </div>
              </div>

              <form onSubmit={handleMailSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-black text-neutral-400 uppercase">
                    1. PROJECT INQUIRY SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    value={directMailSubject}
                    onChange={(e) => setDirectMailSubject(e.target.value)}
                    placeholder="e.g. Window Etch Decal / Dimensional Signage Placement"
                    className="w-full text-xs font-mono py-2.5 px-4 bg-white rounded-none border border-black outline-hidden hover:bg-neutral-50 focus:bg-neutral-50 transition-all font-black text-black"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-black text-neutral-400 uppercase">
                    2. FABRICATION REQUIREMENT SPECS
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={directMailBody}
                    onChange={(e) => setDirectMailBody(e.target.value)}
                    placeholder="Provide measurements, desired material (frosted white, brushed bronze, holographic warning strips), and environmental durability targets..."
                    className="w-full text-xs font-mono py-3 px-4 bg-white rounded-none border border-black outline-hidden hover:bg-neutral-50 focus:bg-neutral-50 transition-all font-black text-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs tracking-wider uppercase font-black py-4 transition-colors duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>PREPARE EMAIL ENVELOPE</span>
                </button>
              </form>

              <AnimatePresence>
                {mailSentSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="p-3 bg-black text-white border border-black text-xs font-mono flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Launching native mailto agent. Receiver: {PERSONAL_INFO.email}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Leave Message on Guestbook Form */}
            <div className="bg-white border-2 border-black p-6 sm:p-8 rounded-none space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black text-white border border-black">
                  <MessageSquarePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-sm uppercase tracking-tight text-black leading-none">
                    IMPRINT A REVIEW STUB
                  </h3>
                  <p className="text-[9px] font-mono text-neutral-400 mt-1">ADD PUBLIC ESTIMATE OR PRODUCTION AUDIT</p>
                </div>
              </div>

              <form onSubmit={handleGuestbookSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase">YOUR NAME / BRAND *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Director Lin, Apex Racing"
                      className="w-full text-xs font-mono py-2.5 px-4 bg-white rounded-none border border-black outline-hidden focus:bg-neutral-50 transition-all font-black text-black"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase">EMAIL ADDRESS (OPTIONAL)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. contact@apex.co"
                      className="w-full text-xs font-mono py-2.5 px-4 bg-white rounded-none border border-black outline-hidden focus:bg-neutral-50 transition-all font-black text-black"
                    />
                  </div>
                </div>

                {/* Rating selection (Stars) */}
                <div className="flex items-center justify-between p-3 bg-neutral-50 border border-black">
                  <span className="text-[10px] font-mono font-black text-black uppercase">FABRICATION SCORE:</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-4.5 h-4.5 transition-transform hover:scale-110 ${
                            star <= rating ? 'text-black fill-black' : 'text-neutral-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Avatar Color selector */}
                <div className="flex items-center justify-between p-3 bg-neutral-50 border border-black">
                  <span className="text-[10px] font-mono font-black text-black uppercase">AVATAR VINYL BASE:</span>
                  <div className="flex gap-1.5">
                    {colorOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setAvatarColor(opt.class)}
                        className={`w-5 h-5 rounded-none border transition-all cursor-pointer ${opt.class} ${
                          avatarColor === opt.class ? 'ring-2 ring-offset-2 ring-black border-black' : 'border-neutral-300'
                        }`}
                        title={`Select ${opt.label} base`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-black text-neutral-400 uppercase">MATERIAL THICKNESS FEEDBACK *</label>
                  <textarea
                    required
                    rows={3}
                    maxLength={140}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="e.g., Flawless polymeric release, incredible curve edge flat alignment, no water bubble. Outstanding outdoor resistance."
                    className="w-full text-xs font-mono py-3 px-4 bg-white rounded-none border border-black outline-hidden focus:bg-neutral-50 transition-all font-black text-black resize-none"
                  />
                  <div className="text-right text-[9px] text-neutral-400 font-mono">
                    {messageText.length}/140
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs tracking-wider uppercase font-black py-4 rounded-none transition-colors duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>IMPRINT TO FEEDBACK WALL</span>
                </button>
              </form>

              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="p-3 bg-neutral-900 text-white text-xs font-mono flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0 text-white" />
                    <span>✓ STUB SUCCESSFULLY WEEDED & IMPRINTED. CHECK CHRONO BOARD.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT: Live Message Wall Showcase */}
          <div className="lg:col-span-7 bg-white border-2 border-black p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <div>
                <h3 className="font-display font-black text-sm uppercase tracking-tight text-black flex items-center gap-2 leading-none">
                  <span>COMMISSION FEEDBACK BOARD</span>
                  <span className="text-[9px] font-mono py-0.5 px-2 bg-black text-white border border-black font-extrabold uppercase">
                    COAXIAL REEL
                  </span>
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 mt-2">WE HAVE {messages.length} AUTHENTICATED PRODUCTION AUDITS FROM BRANDS</p>
              </div>

              {messages.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setShowResetNotice(!showResetNotice)}
                    className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-400 hover:text-black transition-colors px-2 py-1 hover:bg-neutral-50 cursor-pointer"
                    title="Reset parameters"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>RESET</span>
                  </button>

                  <AnimatePresence>
                    {showResetNotice && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 5 }}
                        className="absolute right-0 top-8 bg-white border-2 border-black p-4 z-30 w-56 text-left"
                      >
                        <p className="font-mono text-[10px] text-black font-bold uppercase mb-3">Restore default reviews?</p>
                        <div className="flex gap-2">
                          <button
                            onClick={executeClearMessages}
                            className="bg-black text-white font-mono text-[9px] px-2 py-1 font-bold block flex-1 text-center border border-black hover:bg-neutral-800"
                          >
                            YES
                          </button>
                          <button
                            onClick={() => setShowResetNotice(false)}
                            className="bg-white text-black border border-black font-mono text-[9px] px-2 py-1 font-bold block flex-1 text-center hover:bg-neutral-50"
                          >
                            NO
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Scrollable grid messages content */}
            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
              <AnimatePresence initial={false} mode="popLayout">
                {messages.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20 text-neutral-400 space-y-2 font-mono"
                  >
                    <RefreshCw className="w-8 h-8 text-neutral-300 mx-auto animate-spin" />
                    <p className="text-xs font-bold uppercase">NO STUBS IMPRINTED // EMPTY TRACK</p>
                  </motion.div>
                ) : (
                  messages.map((msg) => {
                    const dateStr = new Date(msg.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    });

                    const initial = msg.name.trim().charAt(0) || 'G';

                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-neutral-50 p-5 border border-black hover:bg-white transition-colors flex gap-4 text-left items-start"
                      >
                        {/* Unique styled Avatar */}
                        <div className={`w-10 h-10 rounded-none shrink-0 flex items-center justify-center text-xs font-black border border-black ${msg.avatarColor}`}>
                          {initial.toUpperCase()}
                        </div>

                        {/* Text and context layout */}
                        <div className="space-y-1.5 flex-grow font-sans">
                          <div className="flex flex-wrap items-center justify-between gap-1 leading-none">
                            <span className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">{msg.name}</span>
                            <span className="text-[9px] text-neutral-400 font-mono font-bold tracking-wide">{dateStr}</span>
                          </div>

                          {/* Star display rating */}
                          {msg.rating && (
                            <div className="flex gap-0.5" title={`${msg.rating} star calibration`}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${
                                    i < (msg.rating || 5) ? 'text-black fill-black' : 'text-neutral-200'
                                  }`}
                                />
                              ))}
                            </div>
                          )}

                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans whitespace-pre-wrap">
                            {msg.message}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            {/* Note signature wrapper */}
            <div className="text-center pt-2 text-[9px] text-neutral-400 font-mono uppercase tracking-widest font-extrabold pointer-events-none">
              🛡️ PRE-FLIGHT COAXIAL CONSOLE / PERSISTENCE PORT READY
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
