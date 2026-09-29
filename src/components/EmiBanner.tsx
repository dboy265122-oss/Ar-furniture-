import { Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function EmiBanner() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-charcoal-900 border-y border-gold-500/10">
      <div
        ref={ref}
        className={`reveal ${visible ? 'active' : ''} max-w-7xl mx-auto px-6 lg:px-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* EMI */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-7 h-7 text-charcoal-950" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Easy EMI Options
              </h3>
              <p className="text-charcoal-300 text-sm font-light">
                Flexible plans on all premium furniture
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-5 md:border-x md:border-white/10 md:px-8">
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
              <Truck className="w-7 h-7 text-charcoal-950" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Free White-Glove Delivery
              </h3>
              <p className="text-charcoal-300 text-sm font-light">
                Across Kolkata &amp; nearby areas
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-charcoal-950" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Quality Warranty
              </h3>
              <p className="text-charcoal-300 text-sm font-light">
                Extended coverage on solid wood pieces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
