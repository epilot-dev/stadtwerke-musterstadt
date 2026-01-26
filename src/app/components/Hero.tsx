import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import HomeJourneyComponent from './HomeJourneyComponent';

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
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl"
        >
          <HomeJourneyComponent journeyId="cc98b7b0-9363-11ee-bc35-45ee5da64d24" />
        </motion.div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#deff03]" />
    </section>
  );
}
