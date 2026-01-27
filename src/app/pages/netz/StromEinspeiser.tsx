import React from 'react';
import { NetzNavbar } from '@/app/components/NetzNavbar';
import { Footer } from '@/app/components/Footer';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductCard } from '@/app/components/ProductCard';
import { BatteryCharging, LineChart } from 'lucide-react';

export default function StromEinspeiser() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <NetzNavbar />

      <main>
        <HeroSection
          title="Einspeiser und Verbraucher"
          description="Ob Sie Strom ins Netz einspeisen oder beziehen möchten – wir begleiten Sie durch den gesamten Prozess. Melden Sie Ihre Anlage an oder teilen Sie uns Ihren Zählerstand mit."
          imageSrc="https://images.unsplash.com/photo-1662023027736-0cab9f911b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBlbGVjdHJpY2l0eXxlbnwxfHx8fDE3Njk0MTc5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          imageAlt="Power grid infrastructure"
          variant="netz"
        />

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ihre Möglichkeiten
              </h2>
              <p className="text-lg text-gray-600">
                Wählen Sie die passende Option für Ihr Anliegen.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ProductCard
                title="Erzeugungs- und Verbrauchsanlagen anmelden"
                description="Melden Sie Ihre Photovoltaikanlage, Wärmepumpe oder andere Anlagen schnell und einfach bei uns an."
                icon={BatteryCharging}
                href="https://grid.ecp.epilot.io/"
                cta="Jetzt anmelden"
                variant="netz"
                external={true}
              />

              <ProductCard
                title="Zählerstand mitteilen"
                description="Teilen Sie uns Ihren aktuellen Zählerstand bequem online mit – einfach und sicher."
                icon={LineChart}
                href="https://grid.ecp.epilot.io/"
                cta="Zählerstand übermitteln"
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
