import { TRUST_BADGES } from '../data/schoolData';
import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-blue-100 py-4 overflow-hidden flex items-center group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 min-w-full justify-around gap-8 px-4">
          {TRUST_BADGES.map((b, i) => (
            <div key={`badge-${i}`} className="flex items-center gap-2 shrink-0">
              <span className="text-blue-500 text-lg">✦</span>
              <span className="font-poppins font-semibold text-sm md:text-base tracking-wide text-primary whitespace-nowrap">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 min-w-full justify-around gap-8 px-4" aria-hidden="true">
          {TRUST_BADGES.map((b, i) => (
            <div key={`badge-dup-${i}`} className="flex items-center gap-2 shrink-0">
              <span className="text-blue-500 text-lg">✦</span>
              <span className="font-poppins font-semibold text-sm md:text-base tracking-wide text-primary whitespace-nowrap">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
