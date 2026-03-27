import { useState } from 'react';
import { motion } from 'framer-motion';
import { ADMISSION_STEPS, SCHOOL } from '../data/schoolData';
import { Phone, MessageCircle } from 'lucide-react';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section-pad bg-bg-main" id="admissions">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold mb-3 block">Join Our Family</span>
          <h2 className="section-title mb-4">Start Your Child's <span className="gradient-text">Journey</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">A simple, transparent admission process — because your time matters as much as your child's future.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
            <div className="space-y-6 mb-10">
              {ADMISSION_STEPS.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 shadow-sm ${i === ADMISSION_STEPS.length - 1 ? 'bg-blue-100 text-blue-700 border border-blue-200' : (i === 0 ? 'bg-blue-600 text-white' : 'bg-white border text-primary border-blue-100')}`}>{s.step}</div>
                  <div className="pt-1">
                    <h4 className="font-poppins font-bold text-lg text-primary">{s.title}</h4>
                    <p className="text-secondary text-sm mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Quick Actions */}
            <div className="glass bg-white p-6 rounded-2xl space-y-4 border border-blue-50 shadow-md">
              <p className="font-poppins font-bold text-lg mb-3 text-primary">Prefer to talk? Reach us directly.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SCHOOL.phone[0]}`} className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 px-5 py-3 rounded-xl font-semibold transition-colors text-sm">
                  <Phone className="w-4 h-4" /> +91 {SCHOOL.phone[0]}
                </a>
                <a href={`https://wa.me/${SCHOOL.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
              <p className="text-xs text-secondary font-medium">Available Mon–Sat, 9 AM – 3 PM</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="glass bg-white shadow-xl p-8 md:p-10 rounded-[2rem] border border-blue-100">
            <h3 className="font-poppins text-2xl font-bold mb-6 text-center text-primary">Admission Enquiry</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 text-blue-500 text-3xl">✓</div>
                <p className="font-poppins font-bold text-xl mb-2 text-primary">Thank You!</p>
                <p className="text-secondary">Our counselor will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-secondary mb-1.5 font-semibold">Parent / Student Name</label>
                  <input type="text" required className="w-full bg-bg-alt border border-slate-200 rounded-xl px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all font-medium" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1.5 font-semibold">WhatsApp / Phone Number</label>
                  <input type="tel" required className="w-full bg-bg-alt border border-slate-200 rounded-xl px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all font-medium" placeholder="+91 99925 80400" />
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1.5 font-semibold">Admission for Class</label>
                  <select required className="w-full bg-bg-alt border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all appearance-none font-medium">
                    <option value="" disabled selected>Select Class</option>
                    <option value="playway">Playway (Nursery – KG)</option>
                    <option value="primary">Primary (I – V)</option>
                    <option value="middle">Middle (VI – VIII)</option>
                    <option value="secondary">Secondary (IX – X)</option>
                    <option value="senior">Senior Secondary (XI – XII)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1.5 font-semibold">Any Message (Optional)</label>
                  <textarea rows="3" className="w-full bg-bg-alt border border-slate-200 rounded-xl px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all font-medium resize-none" placeholder="Questions or special requirements..." />
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg mt-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Start Your Child's Journey
                </button>
                <p className="text-center text-xs text-secondary mt-4 font-medium">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
