import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function NetzHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-white py-12 md:py-0">
      {/* Background Image - constrained to 1920px */}
      <motion.div className="absolute inset-0 z-0 flex justify-center bg-white" style={{ y }}>
        <div className="w-full max-w-[1920px] h-full relative">
          <img
            src="/grid-hero.png"
            alt="Smart Grid Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent" />
        </div>
      </motion.div>

      {/* Content wrapper with 1920px max */}
      <div className="w-full max-w-[1920px] mx-auto relative z-10">
        <div className="container mx-auto max-w-[1440px] px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-shrink-0 text-white max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Ihr Netz für <span className="text-[#63BEF8]">sichere</span> Energie.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                Zuverlässige Infrastruktur für Strom, Gas, Wasser und Fernwärme in Musterstadt. Ihr
                Partner für Netzanschlüsse und mehr.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-[#63BEF8] hover:bg-[#63BEF8] text-black h-12 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,190,248,0.8)]"
                >
                  <a href="#services">Leistungen entdecken</a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Container for Info Card - takes remaining space */}
          <div className="flex-1 flex items-center justify-center w-full">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md bg-gradient-to-br from-[#1a1f2e] via-[#1e2433] to-[#1a2a3a] rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Blue glow from bottom right */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#63BEF8] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

              <div className="mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                  Netzanschluss beantragen
                </h3>
                <p className="text-gray-300 relative z-10">
                  Schnell und unkompliziert zu Ihrem Netzanschluss.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="/netz/strom/einspeiser"
                  className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10 relative z-10"
                >
                  <span className="font-bold text-white group-hover:text-[#63BEF8] transition-colors">
                    Stromanschluss
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#63BEF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://netz.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10 relative z-10"
                >
                  <span className="font-bold text-white group-hover:text-[#63BEF8] transition-colors">
                    Erdgasanschluss
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#63BEF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="/netz/wasser/anschluss"
                  className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10 relative z-10"
                >
                  <span className="font-bold text-white group-hover:text-[#63BEF8] transition-colors">
                    Wasseranschluss
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#63BEF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="/netz/fernwarme/check"
                  className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10 relative z-10"
                >
                  <span className="font-bold text-white group-hover:text-[#63BEF8] transition-colors">
                    Fernwärme-Check
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#63BEF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
