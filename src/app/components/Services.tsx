import { Zap, ThermometerSun, Factory, PlugZap, Sun, MessageCircle } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';

const services = [
  {
    title: 'Wärmepumpe',
    description: 'Heizen Sie effizient und umweltfreundlich mit modernster Wärmepumpentechnik.',
    icon: ThermometerSun,
    color: 'bg-[#deff03]',
    href: '/warmepumpe',
    image: '/warmepump.png',
    imageSize: 'w-[280px] h-[280px] -mr-24 -mt-24',
  },
  {
    title: 'Fernwärme',
    description: 'Komfortable Wärme direkt aus unserem effizienten Fernwärmenetz.',
    icon: Factory,
    color: 'bg-red-100',
    iconColor: 'text-red-600',
    href: '/fernwarme',
    image: '/fernwarme.png',
  },
  {
    title: 'Wallbox',
    description:
      'Die eigene Ladestation für Ihr E-Auto. Schnell, sicher und bequem zu Hause laden.',
    icon: PlugZap,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    href: '/wallbox',
    image: '/wallbox.png',
    imageSize: 'w-80 h-80 -mr-20 -mt-28',
  },
  {
    title: 'Photovoltaik',
    description: 'Produzieren Sie Ihren eigenen Solarstrom und machen Sie sich unabhängig.',
    icon: Sun,
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    href: '/photovoltaik',
    image: '/photovoltaik.png',
    imageSize: 'w-[280px] h-[280px] -mr-24 -mt-24',
  },
  {
    title: 'Balkonkraftwerke',
    description: 'Solarstrom für Mieter: Einfach einstecken und Stromkosten senken.',
    icon: Zap,
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    href: '/balkonkraftwerke',
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
          {services.map((service, index) => (
            <ProductCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              cta="Mehr erfahren"
              variant="tarif"
              image={service.image}
              imageSize={service.imageSize}
            />
          ))}

          {/* Call to Action Card */}
          <div className="flex flex-col justify-between p-8 pb-8 bg-gradient-to-br from-[#222222] via-[#222222] to-[#2a3310] rounded-3xl text-white relative overflow-hidden">
            {/* Neon green glow from bottom right */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#deff03] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 mb-6 relative z-10">
                <MessageCircle className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">Sie haben Fragen?</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Unser Kundenservice ist für Sie da. Persönlich, telefonisch oder online.
              </p>
            </div>

            <button className="w-full py-4 rounded-full bg-white text-[#222222] font-bold transition-all duration-300 relative z-10 cursor-pointer hover:bg-[#deff03] hover:shadow-[0_0_30px_rgba(222,255,3,0.8)]">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
