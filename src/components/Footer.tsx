import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import { showroomInfo, navLinks } from '@/data/content';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal-950 border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-serif font-bold text-gold-gradient">
                AR
              </span>
              <div>
                <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-charcoal-100">
                  Furniture
                </span>
                <span className="block text-[10px] tracking-[0.15em] text-gold-400 uppercase">
                  {showroomInfo.tagline}
                </span>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed font-light mb-6 max-w-xs">
              Premium furniture showroom in Kolkata, crafting modern living
              spaces with passion and precision for over a decade.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal-300 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-charcoal-400 text-sm font-light hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-charcoal-400 text-sm font-light">
                    {showroomInfo.address}
                  </p>
                  <p className="text-charcoal-500 text-xs">
                    {showroomInfo.location}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${showroomInfo.phone.replace(/\s/g, '')}`}
                  className="text-charcoal-400 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {showroomInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${showroomInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-400 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {showroomInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${showroomInfo.email}`}
                  className="text-charcoal-400 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {showroomInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">
              Business Hours
            </h4>
            <ul className="space-y-4">
              {showroomInfo.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal-300 text-sm font-medium">
                      {h.day}
                    </p>
                    <p className="text-charcoal-500 text-xs font-light">
                      {h.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={showroomInfo.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-gold-400 glass-light rounded-full hover:bg-gold-gradient hover:text-charcoal-950 transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5" />
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} AR Furniture. All rights reserved.
            Crafted for Modern Living.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-charcoal-500 text-xs hover:text-gold-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-charcoal-500 text-xs hover:text-gold-400 transition-colors duration-300">
              Terms of Service
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-gold-400 hover:bg-gold-gradient hover:text-charcoal-950 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
