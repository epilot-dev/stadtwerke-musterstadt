import React from 'react';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function NetzHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <motion.div className="absolute inset-0 z-0 opacity-10" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,190,248,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,190,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,190,248,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-white max-w-2xl">
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

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8"
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#63BEF8] rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Netzanschluss beantragen</h3>
            <p className="text-gray-500">Schnell und unkompliziert zu Ihrem Netzanschluss.</p>
          </div>

          <div className="space-y-3">
            <Button
              asChild
              className="w-full h-12 bg-[#63BEF8] hover:bg-[#4FA8D8] text-black font-bold text-base rounded-full group"
            >
              <a href="/netz/strom/einspeiser">
                Stromanschluss{' '}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-[#63BEF8] hover:bg-[#63BEF8] hover:text-black text-gray-700 font-bold text-base rounded-full group"
            >
              <a href="/netz/wasser/anschluss">
                Wasseranschluss{' '}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-[#63BEF8] hover:bg-[#63BEF8] hover:text-black text-gray-700 font-bold text-base rounded-full group"
            >
              <a href="/netz/fernwarme/check">
                Fernwärme-Check{' '}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#63BEF8]" />
    </section>
  );
}
