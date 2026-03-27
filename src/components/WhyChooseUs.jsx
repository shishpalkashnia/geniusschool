import { motion } from 'framer-motion';
import { MonitorSmartphone, Atom, Bot, Globe, Heart, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolData';

const ICON_MAP = {
  MonitorSmartphone, Atom, Bot, Globe, Heart, ShieldCheck
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-bg-alt" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">
            The Genius Advantage
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="section-title mb-4">
            Why Parents Choose <span className="gradient-text">The Genius School</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }} className="text-secondary text-lg max-w-2xl mx-auto">
            Six pillars that make us the most trusted school in Rania — where every child receives world-class education with personal care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass p-6 md:p-8 rounded-2xl card-hover relative group overflow-hidden bg-white/60">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-poppins text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
