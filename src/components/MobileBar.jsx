import { Phone } from 'lucide-react';

export default function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 w-full z-50 glass bg-white/90 border-t border-blue-100 p-3 flex gap-3 shadow-[0_-4px_20px_rgba(15,23,42,0.05)]">
      <a href="tel:9992580400" className="flex-1 flex items-center justify-center gap-2 bg-blue-50 border border-blue-100 rounded-xl py-3 font-semibold text-blue-700 text-sm hover:bg-blue-100 transition-colors">
        <Phone className="w-4 h-4" /> Call
      </a>
      <a href="#admissions" className="flex-1 flex items-center justify-center gap-2 btn-primary rounded-xl py-3 font-semibold text-sm shadow-lg">
        Apply Now
      </a>
    </div>
  );
}
