import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { heroImage, showroomInfo } from '@/data/content';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0003})`,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src={heroImage}
          alt="Luxury living room interior"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold-400" />
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">
              {showroomInfo.tagline}
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] text-shadow-luxury max-w-4xl">
            Furniture That
            <br />
            <span className="text-gold-gradient italic">Defines</span> Your
            Lifestyle.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-charcoal-200 max-w-2xl leading-relaxed font-light">
            Premium Sofas &bull; Beds &bull; Wardrobes &bull; Dining Sets &bull;
            Office Furniture &bull; Custom Interior Solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#collections')}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-charcoal-950 bg-gold-gradient rounded-full hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-400 hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-white glass-light rounded-full hover:bg-white/10 transition-all duration-400 hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              Visit Showroom
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-charcoal-950 overflow-hidden bg-charcoal-700"
                    style={{
                      backgroundImage: `url(https://images.pexels.com/photos/${
                        [7580763, 39486701, 7580937, 27086953][i - 1]
                      }/pexels-photo-${
                        [7580763, 39486701, 7580937, 27086953][i - 1]
                      }.jpeg?auto=compress&cs=tinysrgb&w=100)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">5,000+</p>
                <p className="text-charcoal-300 text-xs">Happy Homes</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="flex items-center gap-1 text-gold-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-sm">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-charcoal-300 text-xs mt-1">Trusted in Kolkata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-charcoal-300 uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
