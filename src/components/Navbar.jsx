import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SCHOOL } from '../data/schoolData';
import logoImg from '../assets/logo.webp';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Admissions', href: '#admissions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = scrolled || open;

  return (
    <nav
      className="fixed w-full z-50 top-0 transition-all duration-300"
      style={{
        backgroundColor: isActive ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: isActive ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isActive ? 'blur(20px)' : 'none',
        boxShadow: isActive ? '0 4px 30px rgba(15,23,42,0.06)' : 'none',
        borderBottom: isActive ? '1px solid rgba(241,245,249,0.5)' : 'none',
        padding: isActive ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0 bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-sm">
            <img src={logoImg} alt="The Genius School Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-lg md:text-xl leading-tight tracking-wide text-primary">{SCHOOL.name}</span>
            <span className="text-[0.6rem] text-secondary uppercase tracking-[0.15em] font-medium">{SCHOOL.tagline}</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/60 shadow-sm">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-secondary hover:text-blue-600 transition-colors duration-200">{l.label}</a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a href="#admissions" className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 btn-primary text-sm">Apply Now</a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2 bg-white/50 rounded-lg backdrop-blur-sm" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Premium Floating Glass Card */}
      {open && (
        <div
          className="lg:hidden mx-4 mt-3 p-3 rounded-[1.5rem] flex flex-col gap-1 shadow-[0_16px_40px_-12px_rgba(2,132,199,0.15)] border border-white/60"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'saturate(200%) blur(24px)',
            WebkitBackdropFilter: 'saturate(200%) blur(24px)',
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full text-left px-5 py-3.5 rounded-xl text-[0.95rem] font-semibold text-slate-700 active:bg-blue-50/80 active:text-blue-600 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
