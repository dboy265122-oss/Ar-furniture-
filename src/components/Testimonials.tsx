import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-charcoal-900 overflow-hidden">
      {/* Large quote decoration */}
      <div className="absolute top-10 left-10 text-gold-500/5 pointer-events-none">
        <Quote className="w-40 h-40" />
      </div>
      <div className="absolute bottom-10 right-10 text-gold-500/5 pointer-events-none rotate-180">
        <Quote className="w-40 h-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Client Stories
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Customer <span className="text-gold-gradient italic">Experience</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            Real words from real homeowners who chose AR Furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'active' : ''} group relative p-8 lg:p-10 rounded-2xl glass hover:border-gold-500/20 transition-all duration-500`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-gold-400 fill-gold-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-charcoal-100 text-lg leading-relaxed font-light mb-8 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-500/30 flex-shrink-0"
          style={{
            backgroundImage: `url(${testimonial.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div>
          <h4 className="text-white font-semibold text-base">
            {testimonial.name}
          </h4>
          <p className="text-gold-400 text-sm font-light">{testimonial.role}</p>
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
