import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/schoolData';

function Counter({ value, suffix, raw }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-50px' });

  useEffect(() => {
    if (!inView || raw) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, raw]);

  return (
    <span ref={ref} className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
      {raw || count}{!raw && <span className="text-blue-400">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-pad bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="section-title mb-4">A Legacy of <span className="gradient-text">Excellence</span></h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">Numbers that speak louder than words — two decades of creating confident, capable future leaders.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: i * 0.08, duration: 0.5 }} className="glass bg-white p-4 md:p-6 rounded-2xl text-center card-hover flex flex-col items-center justify-center border border-blue-100 shadow-sm">
              <Counter value={s.value} suffix={s.suffix} raw={s.raw} />
              <p className="text-secondary font-medium text-[0.65rem] md:text-xs uppercase tracking-wider mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
