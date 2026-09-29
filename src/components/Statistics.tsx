import { stats } from '@/data/content';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';

export default function Statistics() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative py-20 lg:py-28 bg-charcoal-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #c8932e 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c8932e 0%, transparent 50%)',
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${visible ? 'active' : ''} text-center mb-12`}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Numbers That <span className="text-gold-gradient italic">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  start,
}: {
  stat: (typeof stats)[number];
  index: number;
  start: boolean;
}) {
  const count = useCountUp(stat.value, 2000, start);

  return (
    <div
      className="text-center group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative inline-block">
        <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gold-gradient">
          {count.toLocaleString()}
          <span className="text-gold-400">{stat.suffix}</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-px bg-gold-500/40 group-hover:w-20 transition-all duration-500" />
      </div>
      <p className="mt-4 text-charcoal-300 text-sm md:text-base font-medium tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
}
