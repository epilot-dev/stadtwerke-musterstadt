import { NetzNavbar } from '@/app/components/NetzNavbar';
import { Footer } from '@/app/components/Footer';
import { ProductCard } from '@/app/components/ProductCard';
import { Droplet, Construction } from 'lucide-react';

export default function WasserAnschluss() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <NetzNavbar />

      <main>
        {/* Full-width Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-white flex justify-center">
          {/* Background Image - constrained to 1920px */}
          <div className="absolute inset-0 flex justify-center bg-white">
            <div className="w-full max-w-[1920px] h-full relative">
              <img
                src="/wasser-grid.png"
                alt="Water infrastructure"
                className="w-full h-full object-cover"
              />
              {/* Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative h-full w-full max-w-[1920px] mx-auto">
            <div className="container mx-auto max-w-[1440px] px-4 md:px-6 flex items-center h-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Wasserhausanschluss beantragen
                </h1>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Sie planen einen Neubau oder benötigen einen neuen Wasseranschluss? Wir kümmern
                  uns um die fachgerechte Umsetzung und stehen Ihnen beratend zur Seite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
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
                href="https://netz.ecp.epilot.io/"
                cta="Zum Portal"
                variant="netz"
                external={true}
              />

              <ProductCard
                title="Bauwasser beantragen"
                description="Für Ihre Baustelle benötigen Sie temporär Wasser? Beantragen Sie Bauwasser schnell und unkompliziert."
                icon={Construction}
                href="https://netz.ecp.epilot.io/"
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
