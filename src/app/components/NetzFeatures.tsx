import React from 'react';
import { ProductCard } from '@/app/components/ProductCard';
import { Zap, Droplet, ThermometerSun, Flame } from 'lucide-react';

const SERVICES = [
  {
    icon: Zap,
    title: 'Stromnetz',
    description: 'Zuverlässige Stromversorgung für alle Verbraucher und Einspeiser in Musterstadt.',
    href: '/netz/strom/einspeiser',
    cta: 'Mehr erfahren',
  },
  {
    icon: Flame,
    title: 'Erdgasnetz',
    description: 'Sichere Gasversorgung mit modernem Leitungsnetz für Haushalte und Gewerbe.',
    href: '#erdgas',
    cta: 'Mehr erfahren',
  },
  {
    icon: Droplet,
    title: 'Wassernetz',
    description: 'Qualitativ hochwertiges Trinkwasser aus unserem gut ausgebauten Versorgungsnetz.',
    href: '/netz/wasser/anschluss',
    cta: 'Mehr erfahren',
  },
  {
    icon: ThermometerSun,
    title: 'Fernwärmenetz',
    description: 'Umweltfreundliche Wärmeversorgung direkt in Ihr Zuhause geliefert.',
    href: '/netz/fernwaerme/check',
    cta: 'Mehr erfahren',
  },
];

export function NetzFeatures() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Netzleistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir sorgen für eine zuverlässige und sichere Versorgung in allen Bereichen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ProductCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              cta={service.cta}
              variant="netz"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
