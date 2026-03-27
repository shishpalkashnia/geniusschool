import { SCHOOL } from '../data/schoolData';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import logoImg from '../assets/logo.webp';

const QUICK_LINKS = [
  { label: 'About School', href: '#about' },
  { label: 'Academic Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Admissions', href: '#admissions' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0 bg-white">
              <img src={logoImg} alt="The Genius School Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-poppins font-bold text-2xl tracking-wide text-white">{SCHOOL.name}</span>
          </a>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
            Established in {SCHOOL.est}, {SCHOOL.name} is the leading CBSE school in Rania, Haryana offering holistic education from Playway to Class XII with Smart Classrooms, Robotics Labs, and a focus on values.
          </p>
          <a href={SCHOOL.androidApp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-blue-400 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            <ExternalLink className="w-4 h-4" /> Download Android App
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(l => (
              <li key={l.href}><a href={l.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
              <a href="https://share.google/UbCFFcibaO6Q6aqIr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                {SCHOOL.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
              <span>+91 {SCHOOL.phone[0]}<br />+91 {SCHOOL.phone[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
              <span>{SCHOOL.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Integration */}
      <div className="max-w-7xl mx-auto mb-12 h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
        <div className="absolute inset-0 bg-blue-500/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
        <iframe 
          src="https://maps.google.com/maps?q=The%20Genius%20School,%20Rania&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.2) brightness(0.9)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="The Genius School Location"
          className="relative z-0"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium tracking-wide">
        <p>© {new Date().getFullYear()} {SCHOOL.name}, Rania. All rights reserved.</p>
        <p>Designed for Excellence.</p>
      </div>
    </footer>
  );
}
