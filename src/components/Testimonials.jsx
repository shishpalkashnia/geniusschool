import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/schoolData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-pad bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="section-title mb-4">Trusted by <span className="text-blue-600">Parents</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Real voices from families who have experienced The Genius School difference.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass bg-white p-8 rounded-[1.5rem] relative group card-hover border border-blue-100 shadow-md">
              <Quote className="w-10 h-10 text-blue-100 mb-4" />
              <p className="text-secondary mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center font-bold font-poppins text-blue-600 shadow-sm">{t.initial}</div>
                <div>
                  <p className="font-bold text-sm text-primary">{t.name}</p>
                  <p className="text-xs text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
