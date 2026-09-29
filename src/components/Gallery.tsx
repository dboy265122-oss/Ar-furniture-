import { galleryItems } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Our Portfolio
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Signature <span className="text-gold-gradient italic">Living Spaces</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            A glimpse into the homes we've transformed across Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[number];
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal-scale ${visible ? 'active' : ''} group relative overflow-hidden rounded-xl ${item.span} cursor-pointer`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
      <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-gold-400 text-[10px] tracking-[0.2em] uppercase font-medium">
          {item.category}
        </span>
        <h3 className="font-serif text-lg md:text-xl font-semibold text-white mt-1">
          {item.title}
        </h3>
      </div>

      <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass-light flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
