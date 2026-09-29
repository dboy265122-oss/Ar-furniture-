import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, showroomInfo } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <span
              className={`text-2xl font-serif font-bold tracking-wider transition-colors duration-300 ${
                scrolled ? 'text-gold-gradient' : 'text-gold-gradient'
              }`}
            >
              AR
            </span>
            <span className="hidden sm:block">
              <span
                className={`block text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-charcoal-100' : 'text-white'
                }`}
              >
                Furniture
              </span>
              <span className="block text-[10px] tracking-[0.15em] text-gold-400 uppercase">
                {showroomInfo.tagline}
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  scrolled
                    ? 'text-charcoal-200 hover:text-gold-400'
                    : 'text-white/90 hover:text-gold-300'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${showroomInfo.phone.replace(/\s/g, '')}`}
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-charcoal-100 hover:text-gold-400'
                  : 'text-white/90 hover:text-gold-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Showroom</span>
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-charcoal-950 bg-gold-gradient rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
            >
              Visit Showroom
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? 'text-charcoal-100' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] glass border-l border-white/10 p-8 pt-24 transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-lg font-medium text-charcoal-100 hover:text-gold-400 transition-colors duration-300 border-b border-white/5"
                style={{
                  animation: menuOpen
                    ? `fadeUp 0.5s ${i * 0.08}s both`
                    : 'none',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-6 px-6 py-3 text-center text-sm font-medium text-charcoal-950 bg-gold-gradient rounded-full"
            >
              Visit Showroom
            </button>
            <a
              href={`tel:${showroomInfo.phone.replace(/\s/g, '')}`}
              className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gold-400 glass-light rounded-full"
            >
              <Phone className="w-4 h-4" />
              {showroomInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
