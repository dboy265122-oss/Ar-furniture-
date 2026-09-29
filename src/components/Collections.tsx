import { ArrowUpRight } from 'lucide-react';
import { collections } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Collections() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="collections" className="relative py-24 lg:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Curated Selection
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured <span className="text-gold-gradient italic">Collections</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            Each piece is thoughtfully designed and meticulously crafted to
            elevate your living space.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, i) => (
            <CollectionCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({
  item,
  index,
}: {
  item: (typeof collections)[number];
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
  once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal-scale ${visible ? 'active' : ''} group relative overflow-hidden rounded-2xl bg-charcoal-900 cursor-pointer`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
        <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/10 transition-colors duration-500" />

        {/* Items badge */}
        <div className="absolute top-4 right-4 glass-light px-3 py-1.5 rounded-full">
          <span className="text-xs font-medium text-gold-300">{item.items}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-1">
          {item.tagline}
        </p>
        <div className="flex items-end justify-between">
          <h3 className="font-serif text-2xl font-semibold text-white">
            {item.name}
          </h3>
          <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-charcoal-950 transition-all duration-400">
            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-charcoal-950 transition-colors duration-400" />
          </div>
        </div>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-500/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
