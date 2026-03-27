import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import heroImg from '../assets/hero.webp';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[95vh] flex items-center pt-28 pb-16 px-6 overflow-hidden bg-bg-main" id="home">
      {/* Absolute Background Image with Light Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 lg:w-[60%] lg:left-auto lg:right-0">
        <img 
          src={heroImg} 
          alt="The Genius School Campus" 
          className="w-full h-full object-cover object-[75%_center]"
          loading="eager"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-bg-main via-bg-main/90 to-bg-main/40 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-white/40 lg:hidden backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="lg:col-span-7 max-w-2xl mt-8 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-blue-800 uppercase">Admissions Open 2026–27</span>
          </div>

          <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] mb-5 text-slate-900 text-balance [text-shadow:_0_2px_12px_rgba(255,255,255,0.6)] lg:[text-shadow:none]">
            <span className="block">Where Every</span>
            <span className="block text-slate-800">Child Discovers</span>
            <span className="block text-blue-600 mt-1 pb-2 [text-shadow:_0_2px_16px_rgba(59,130,246,0.25)] lg:[text-shadow:none]">Their Genius.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-semibold max-w-xl text-balance [text-shadow:_0_1px_8px_rgba(255,255,255,0.7)] lg:[text-shadow:none]">
            Established in 2004, blending modern pedagogy with deep ethical values. Creating safe, smart, and inspiring spaces where 2,500+ students thrive every day in Rania.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#admissions" className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 btn-primary text-base md:text-lg shadow-xl shadow-blue-500/20">Begin Admissions</a>
            <a href="#facilities" className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 btn-ghost text-base md:text-lg bg-white/90 backdrop-blur-md border-blue-200">Explore Campus</a>
          </div>

          {/* Mobile-only compact badges — right after CTAs */}
          <div className="flex gap-3 mt-6 lg:hidden">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold shrink-0">★</div>
              <div>
                <p className="text-[0.6rem] text-secondary uppercase tracking-wider font-semibold leading-none">Legacy</p>
                <p className="font-poppins font-bold text-sm text-primary">Since 2004</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold shrink-0">✓</div>
              <div>
                <p className="text-[0.6rem] text-secondary uppercase tracking-wider font-semibold leading-none">Affiliation</p>
                <p className="font-poppins font-bold text-sm text-primary">CBSE</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 lg:mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="Student" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm bg-blue-50" />
              <img src="https://i.pravatar.cc/100?img=5" alt="Student" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm bg-blue-50" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Student" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm bg-blue-50" />
              <div className="w-11 h-11 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">+2k</div>
            </div>
            <div className="text-sm font-medium text-slate-700">
              <span className="block font-bold text-primary text-base">2,500+</span> Happy Students
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Floating Cards (Right side, transparent overlay) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.9, delay: 0.3 }} 
          className="hidden lg:flex lg:col-span-5 relative h-full flex-col justify-center items-end gap-6"
        >
          {/* Float badge 1 */}
          <div className="glass rounded-2xl p-5 border border-white/60 shadow-xl card-hover w-72 backdrop-blur-xl bg-white/50 translate-x-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">★</div>
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Legacy</p>
                <p className="font-poppins font-bold text-xl text-primary">Since 2004</p>
              </div>
            </div>
          </div>

          {/* Float badge 2 */}
          <div className="glass rounded-2xl p-5 border border-white/60 shadow-xl card-hover w-72 backdrop-blur-xl bg-white/50 -translate-x-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">✓</div>
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Affiliation</p>
                <p className="font-poppins font-bold text-xl text-primary">CBSE Recognized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
