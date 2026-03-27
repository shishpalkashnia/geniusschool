import { motion } from 'framer-motion';
import { FACILITIES } from '../data/schoolData';

export default function Facilities() {
  return (
    <section className="section-pad bg-bg-main" id="facilities">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Campus Life</span>
            <h2 className="section-title">World-Class <span className="text-primary">Facilities</span></h2>
          </div>
          <a href="#admissions" className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 btn-primary text-sm">Book Campus Visit</a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative h-64 md:h-96 rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-md">
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <h3 className="font-poppins text-xl font-bold text-white mb-1.5 drop-shadow-md">{f.title}</h3>
                <p className="text-sm text-blue-50 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <a href="#admissions" className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-primary text-sm">Book Campus Visit</a>
        </div>
      </div>
    </section>
  );
}
