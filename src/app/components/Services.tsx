import React from 'react';
import { Zap, Flame, ThermometerSun, Factory, PlugZap, Sun, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Wärmepumpe',
    description: 'Heizen Sie effizient und umweltfreundlich mit modernster Wärmepumpentechnik.',
    icon: ThermometerSun,
    color: 'bg-[#deff03]',
    href: '#',
    image: '/warmepump.png',
    imageSize: 'w-[280px] h-[280px] -mr-24 -mt-24',
  },
  {
    title: 'Fernwärme',
    description: 'Komfortable Wärme direkt aus unserem effizienten Fernwärmenetz.',
    icon: Factory,
    color: 'bg-red-100',
    iconColor: 'text-red-600',
    href: '#',
    image: '/fernwarme.png',
  },
  {
    title: 'Wallbox',
    description:
      'Die eigene Ladestation für Ihr E-Auto. Schnell, sicher und bequem zu Hause laden.',
    icon: PlugZap,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    href: '#',
    image: '/wallbox.png',
    imageSize: 'w-80 h-80 -mr-20 -mt-28',
  },
  {
    title: 'Photovoltaik',
    description: 'Produzieren Sie Ihren eigenen Solarstrom und machen Sie sich unabhängig.',
    icon: Sun,
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    href: '#',
    image: '/photovoltaik.png',
    imageSize: 'w-[280px] h-[280px] -mr-24 -mt-24',
  },
  {
    title: 'Balkonkraftwerke',
    description: 'Solarstrom für Mieter: Einfach einstecken und Stromkosten senken.',
    icon: Zap,
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    href: '#',
    image: '/balkon.png',
    imageSize: 'w-[280px] h-[280px] -mr-24 -mt-[88px]',
  },
];

export function Services() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mb-4">
            Unsere Leistungen für Sie
          </h2>
          <p className="text-lg text-gray-600">
            Wir versorgen Musterstadt zuverlässig mit Energie.
            <br />
            Nachhaltig, sicher und zu fairen Preisen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon as React.ElementType;
            return (
              <a
                key={index}
                href={service.href}
                className="group relative flex flex-col p-8 bg-gray-50 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {service.image ? (
                  <div
                    className={`absolute top-0 right-0 ${service.imageSize || 'w-80 h-80 -mr-28 -mt-28'} transition-all duration-500 group-hover:scale-105 z-0 pointer-events-none opacity-60 group-hover:opacity-100`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain object-center"
                      loading="lazy"
                      decoding="async"
                      width="280"
                      height="280"
                    />
                  </div>
                ) : (
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 ${service.color}`}
                  />
                )}

                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm text-[#222222] transition-colors duration-300 group-hover:bg-[#deff03]">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="relative z-10 text-2xl font-bold text-[#222222] mb-3">
                  {service.title}
                </h3>

                <p className="relative z-10 text-gray-600 mb-6 flex-grow">{service.description}</p>

                <div className="relative z-10 flex items-center font-bold text-[#222222] group-hover:text-black transition-colors">
                  Mehr erfahren{' '}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}

          {/* Call to Action Card */}
          <div className="flex flex-col justify-center p-8 bg-[#222222] rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#deff03] rounded-full blur-[80px] opacity-10 translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-2xl font-bold mb-4 relative z-10">Sie haben Fragen?</h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Unser Kundenservice ist für Sie da. Persönlich, telefonisch oder online.
            </p>
            <button className="w-full py-4 rounded-full bg-white text-[#222222] font-bold hover:bg-[#deff03] transition-colors relative z-10 cursor-pointer">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
