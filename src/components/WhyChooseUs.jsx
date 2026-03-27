import { motion } from 'framer-motion';
import { MonitorSmartphone, Atom, Bot, Globe, Heart, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolData';

const ICON_MAP = {
  MonitorSmartphone, Atom, Bot, Globe, Heart, ShieldCheck
};

const IMG_MAP = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", // Smart Classrooms
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", // JEE / NEET
  "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800", // Robotics AI Lab
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // International Standard
  "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800", // Caring Faculty
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"  // Safe Campus
];

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
            const imgSrc = IMG_MAP[i];
            
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group glass bg-white/80 p-3 rounded-[2rem] card-hover relative flex flex-col h-full border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.12)]">
                
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 rounded-2xl md:rounded-[1.5rem] overflow-hidden mb-5 shrink-0">
                  <img src={imgSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  
                  {/* Premium shading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Glass Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center text-white group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6" /> }
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-3 pb-4 flex-1 flex flex-col">
                  <h3 className="font-poppins text-lg font-bold mb-2 text-primary group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
