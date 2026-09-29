import { ArrowRight } from 'lucide-react';
import { ctaBgImage } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CtaBanner() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBgImage}
          alt="Luxury interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
      </div>

      <div
        ref={ref}
        className={`reveal ${visible ? 'active' : ''} relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold-400" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Let's Begin
          </span>
          <span className="w-8 h-px bg-gold-400" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Transform
          <br />
          <span className="text-gold-gradient italic">Your Home?</span>
        </h2>

        <p className="mt-6 text-charcoal-200 text-lg font-light max-w-xl mx-auto">
          Book a free consultation with our design team. Visit our showroom or
          let us come to you — your dream space is one conversation away.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-charcoal-950 bg-gold-gradient rounded-full hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-400 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollTo('#collections')}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-white glass-light rounded-full hover:bg-white/10 transition-all duration-400 hover:scale-105"
          >
            Browse Collections
          </button>
        </div>
      </div>
    </section>
  );
}
