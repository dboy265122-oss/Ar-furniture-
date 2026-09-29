import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { showroomInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'active' : ''} text-center mb-16`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Visit Our <span className="text-gold-gradient italic">Showroom</span>
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-xl mx-auto text-lg font-light">
            Book a free consultation or drop by — we'd love to help you create
            your dream space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="p-6 lg:p-8 rounded-2xl glass group hover:border-gold-500/20 transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-charcoal-950" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">
                    Showroom Address
                  </h3>
                  <p className="text-charcoal-300 text-sm font-light mb-3">
                    {showroomInfo.address}
                  </p>
                  <p className="text-charcoal-400 text-xs">
                    {showroomInfo.location}
                  </p>
                  <a
                    href={showroomInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors duration-300"
                  >
                    View on Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl glass group hover:border-gold-500/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-charcoal-950" />
                </div>
                <h3 className="font-serif text-base font-semibold text-white mb-1">
                  Call Us
                </h3>
                <a
                  href={`tel:${showroomInfo.phone.replace(/\s/g, '')}`}
                  className="text-charcoal-300 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {showroomInfo.phone}
                </a>
              </div>

              <div className="p-6 rounded-2xl glass group hover:border-gold-500/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-charcoal-950" />
                </div>
                <h3 className="font-serif text-base font-semibold text-white mb-1">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${showroomInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-300 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {showroomInfo.whatsapp}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl glass group hover:border-gold-500/20 transition-all duration-500">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-charcoal-950" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${showroomInfo.email}`}
                    className="text-charcoal-300 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                  >
                    {showroomInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-base font-semibold text-white">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2">
                {showroomInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-charcoal-300 font-light">
                      {h.day}
                    </span>
                    <span className="text-gold-300 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation form */}
          <div className="p-6 lg:p-8 rounded-2xl glass">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Book a Free Consultation
            </h3>
            <p className="text-charcoal-300 text-sm font-light mb-8">
              Fill in your details and our team will reach out within 24 hours.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-gold-400 mb-4" />
                <h4 className="font-serif text-xl font-semibold text-white mb-2">
                  Thank You!
                </h4>
                <p className="text-charcoal-300 text-sm font-light">
                  Your consultation request has been received. We'll be in
                  touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-gold-400 font-medium tracking-wide uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-charcoal-800/50 border border-white/10 rounded-xl text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gold-400 font-medium tracking-wide uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-charcoal-800/50 border border-white/10 rounded-xl text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gold-400 font-medium tracking-wide uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 bg-charcoal-800/50 border border-white/10 rounded-xl text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gold-400 font-medium tracking-wide uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your space and what you're looking for..."
                    className="w-full px-4 py-3 bg-charcoal-800/50 border border-white/10 rounded-xl text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold tracking-wide text-charcoal-950 bg-gold-gradient rounded-xl hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-400 hover:scale-[1.02]"
                >
                  Send Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
