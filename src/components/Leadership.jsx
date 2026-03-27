import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEADERS } from '../data/schoolData';

export default function Leadership() {
  const [active, setActive] = useState(0);
  const leader = LEADERS[active];

  return (
    <section className="section-pad bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Our Visionaries</span>
          <h2 className="section-title mb-4">Words from Our <span className="gradient-text">Leaders</span></h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-3 mb-10 md:mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {LEADERS.map((l, i) => (
            <button key={i} onClick={() => setActive(i)} className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${active === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white text-secondary hover:text-blue-600 hover:bg-blue-50 border border-blue-100'}`}>
              {l.role}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="glass bg-white border-l-4 border-l-blue-500 rounded-2xl md:rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center shadow-lg border border-blue-100">
            <div className="w-full md:w-1/3 shrink-0 flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue-50">
                <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2 text-primary">{leader.role}'s Message</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-6" />
              <p className="text-secondary text-base md:text-lg leading-relaxed italic mb-8">"{leader.message}"</p>
              <div>
                <p className="font-poppins font-bold text-xl text-primary">{leader.name}</p>
                <p className="text-blue-600 text-sm uppercase tracking-widest font-semibold mt-1">{leader.role}, The Genius School</p>
                <div className="mt-3 font-poppins text-lg italic text-blue-300 font-light tracking-widest">{leader.name.split(' ').pop()}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
