import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/schoolData';

export default function Programs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-pad" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Academic Excellence</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="section-title mb-4">Progressive <span className="text-blue-600">Learning Paths</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }} className="text-secondary text-lg max-w-2xl mx-auto">From early childhood exploration to competitive exam mastery.</motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
            {PROGRAMS.map((p, i) => (
              <button key={i} onClick={() => setActiveTab(i)} className={`text-left px-4 md:px-6 py-4 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 font-poppins font-semibold border whitespace-nowrap lg:whitespace-normal shrink-0 ${activeTab === i ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30 lg:translate-x-2' : 'bg-white text-secondary border-blue-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm md:text-base">{p.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${activeTab === i ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>{p.grades}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="glass bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] h-full shadow-lg border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -z-10" />
                
                <h3 className="font-poppins text-3xl font-bold mb-4 text-primary">{PROGRAMS[activeTab].title}</h3>
                <p className="text-secondary text-lg mb-8 leading-relaxed">{PROGRAMS[activeTab].desc}</p>
                
                <h4 className="font-semibold text-primary mb-4 uppercase tracking-wider text-sm">Key Focus Areas</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {PROGRAMS[activeTab].highlights.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-secondary font-medium text-sm text-balance">{f}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-blue-100 flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Admissions Open</span>
                  <a href="#admissions" className="btn-ghost px-6 py-2 text-sm">Apply Now</a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
