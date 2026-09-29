import {
  Gem,
  Palette,
  Ruler,
  BadgePercent,
  Hammer,
  Truck,
} from 'lucide-react';
import { features } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Gem> = {
  Gem,
  Palette,
  Ruler,
  BadgePercent,
  Hammer,
  Truck,
};

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-charcoal-900">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              The AR Difference
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Why Choose <span className="text-gold-gradient italic">AR Furniture</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            Six reasons why thousands of families in Kolkata trust us with
            their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Gem;
            return (
              <FeatureCard
                key={feature.title}
                feature={feature}
                icon={Icon}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  icon: Icon,
  index,
}: {
  feature: { title: string; description: string };
  icon: typeof Gem;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'active' : ''} group relative p-8 rounded-2xl glass hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/10 flex items-center justify-center group-hover:from-gold-gradient group-hover:to-gold-600 transition-all duration-500">
          <Icon className="w-7 h-7 text-gold-400 group-hover:text-charcoal-950 transition-colors duration-500" />
        </div>
      </div>

      <h3 className="font-serif text-xl font-semibold text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-charcoal-300 text-sm leading-relaxed font-light">
        {feature.description}
      </p>

      {/* Check mark accent */}
      <div className="absolute top-6 right-6 text-gold-500/20 group-hover:text-gold-500/40 transition-colors duration-500">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
        </svg>
      </div>
    </div>
  );
}
