import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, Flame } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <motion.img
          src="/hero.png"
          alt="Modern sustainable city"
          className="w-full h-full object-cover"
          style={{ opacity }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
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
              Energie für <span className="text-[#deff03]">Morgen</span>.
              <br />
              Schon heute.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              100% Ökostrom und klimaneutrales Gas für Musterstadt. Fair, transparent und lokal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#deff03] hover:bg-[#cbe600] text-black h-12 px-8 rounded-full text-lg font-semibold"
              >
                <a href="#products">Produkte entdecken</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tarif berechnen</h3>
            <p className="text-gray-500">Finden Sie den passenden Tarif für Ihr Zuhause.</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-full mb-4">
              <button className="flex items-center justify-center gap-2 bg-white shadow-sm py-2 rounded-full text-sm font-bold text-gray-900">
                <Zap className="w-4 h-4 text-[#deff03] fill-current" /> Strom
              </button>
              <button className="flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900">
                <Flame className="w-4 h-4" /> Gas
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Postleitzahl</label>
              <Input placeholder="12345" className="h-12 rounded-xl border-gray-200 bg-gray-50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Verbrauch (kWh/Jahr)</label>
              <Input placeholder="2500" className="h-12 rounded-xl border-gray-200 bg-gray-50" />
            </div>

            <Button className="w-full h-12 bg-[#222222] hover:bg-black text-white font-bold text-lg rounded-full mt-2 group">
              Jetzt berechnen{' '}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:text-[#deff03] transition-colors" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#deff03]" />
    </section>
  );
}
