import { motion } from 'framer-motion';
import { Sun, Monitor, Bot, Trophy, Palette, Users } from 'lucide-react';
import { STUDENT_LIFE_TIMELINE } from '../data/schoolData';

const ICON_MAP = { Sun, Monitor, Bot, Trophy, Palette, Users };

export default function StudentLife() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Holistic Development</span>
          <h2 className="section-title mb-4">A Day in <span className="gradient-text">Student Life</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">From morning assembly to mentoring — every moment is designed to nurture curious minds.</p>
        </motion.div>

        <div className="relative py-4">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent" />

          <div className="space-y-10 md:space-y-0">
            {STUDENT_LIFE_TIMELINE.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative pl-14 md:pl-0 md:flex items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`glass bg-white p-6 rounded-2xl card-hover inline-block border border-blue-100 shadow-md ${isLeft ? 'md:ml-auto' : ''} w-full md:w-auto text-left ${isLeft ? 'md:text-right' : ''}`}>
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          {Icon && <Icon className="w-5 h-5" />}
                        </div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.time}</span>
                      </div>
                      <h4 className="font-poppins font-bold text-lg mb-1 text-primary">{item.title}</h4>
                      <p className="text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-[3px] md:border-4 border-blue-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
