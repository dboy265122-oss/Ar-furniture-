import { materials } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Materials() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-32 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Built to Last
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Material <span className="text-gold-gradient italic">Showcase</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            Only the finest materials make it into our furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat, i) => (
            <MaterialCard key={mat.name} material={mat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  material,
  index,
}: {
  material: (typeof materials)[number];
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal-scale ${visible ? 'active' : ''} group relative h-80 rounded-2xl overflow-hidden cursor-pointer`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={material.image}
        alt={material.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-xl font-semibold text-white mb-2">
          {material.name}
        </h3>
        <p className="text-charcoal-200 text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
          {material.description}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-500/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
