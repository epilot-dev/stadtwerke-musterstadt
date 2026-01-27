import React from 'react';
import { NetzNavbar } from '@/app/components/NetzNavbar';
import { Footer } from '@/app/components/Footer';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductCard } from '@/app/components/ProductCard';
import { Droplet, Construction } from 'lucide-react';

export default function WasserAnschluss() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <NetzNavbar />

      <main>
        <HeroSection
          title="Wasserhausanschluss beantragen"
          description="Sie planen einen Neubau oder benötigen einen neuen Wasseranschluss? Wir kümmern uns um die fachgerechte Umsetzung und stehen Ihnen beratend zur Seite."
          imageSrc="https://images.unsplash.com/photo-1760255766598-2f028c9e0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHBpcGVzJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY5NDE3OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          imageAlt="Water infrastructure"
          variant="netz"
        />

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ihr Weg zum Wasseranschluss
              </h2>
              <p className="text-lg text-gray-600">
                Ob dauerhafter Hausanschluss oder temporäres Bauwasser – wir haben die passende
                Lösung.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ProductCard
                title="Wasserhausanschluss im Portal beantragen"
                description="Beantragen Sie Ihren dauerhaften Wasserhausanschluss direkt online in unserem Kundenportal."
                icon={Droplet}
                href="https://grid.ecp.epilot.io/"
                cta="Zum Portal"
                variant="netz"
                external={true}
              />

              <ProductCard
                title="Bauwasser beantragen"
                description="Für Ihre Baustelle benötigen Sie temporär Wasser? Beantragen Sie Bauwasser schnell und unkompliziert."
                icon={Construction}
                href="https://grid.ecp.epilot.io/"
                cta="Bauwasser beantragen"
                variant="netz"
                external={true}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer variant="netz" />
    </div>
  );
}
