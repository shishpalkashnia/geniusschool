import { motion } from 'framer-motion';
import { Trophy, Music, Palette } from 'lucide-react';
import { ACTIVITIES } from '../data/schoolData';

const ICON_MAP = { Trophy, Music, Palette };
const COLOR_MAP = { 
  accent: 'text-blue-600 border-blue-200 bg-blue-50', 
  glow: 'text-sky-500 border-sky-200 bg-sky-50', 
  highlight: 'text-indigo-500 border-indigo-200 bg-indigo-50' 
};

export default function Activities() {
  return (
    <section className="section-pad bg-bg-main" id="activities">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Beyond Academics</span>
          <h2 className="section-title mb-4">Co-Curricular <span className="gradient-text">Activities</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Building well-rounded personalities through sports, arts, and creative expression.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ACTIVITIES.map((act, i) => {
            const Icon = ICON_MAP[act.icon];
            const colors = COLOR_MAP[act.color];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass bg-white p-7 rounded-[1.5rem] card-hover group border border-blue-50 shadow-sm hover:shadow-lg">
                <div className={`w-12 h-12 rounded-xl ${colors} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-poppins text-2xl font-bold mb-3 text-primary">{act.category}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-5">{act.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {act.items.map((item, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
