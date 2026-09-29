import {
  MousePointerClick,
  Settings2,
  Factory,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';
import { processSteps } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof MousePointerClick> = {
  MousePointerClick,
  Settings2,
  Factory,
  ShieldCheck,
  Truck,
  Wrench,
};

export default function Process() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              From Vision to Reality
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gold-gradient italic">Process</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            A seamless journey from your first idea to the final installation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? MousePointerClick;
              return (
                <ProcessCard
                  key={step.step}
                  step={step}
                  icon={Icon}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  icon: Icon,
  index,
}: {
  step: { step: string; title: string; description: string };
  icon: typeof MousePointerClick;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'active' : ''} group relative p-8 rounded-2xl bg-charcoal-800/50 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Step number */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 flex items-center justify-center group-hover:from-gold-gradient group-hover:to-gold-600 transition-all duration-500">
          <Icon className="w-7 h-7 text-gold-400 group-hover:text-charcoal-950 transition-colors duration-500" />
        </div>
        <span className="font-serif text-5xl font-bold text-white/5 group-hover:text-gold-500/15 transition-colors duration-500">
          {step.step}
        </span>
      </div>

      <h3 className="font-serif text-xl font-semibold text-white mb-3">
        {step.title}
      </h3>
      <p className="text-charcoal-300 text-sm leading-relaxed font-light">
        {step.description}
      </p>

      {/* Arrow connector for desktop */}
      {index < 5 && (
        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <svg className="w-6 h-6 text-gold-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}
