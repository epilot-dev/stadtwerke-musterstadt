import { NetzNavbar } from '@/app/components/NetzNavbar';
import { Footer } from '@/app/components/Footer';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductCard } from '@/app/components/ProductCard';
import { ThermometerSun } from 'lucide-react';

export default function FernwarmeCheck() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <NetzNavbar />

      <main>
        <HeroSection
          title="Fernwärme Verfügbarkeitscheck"
          description="Prüfen Sie, ob Fernwärme an Ihrer Adresse verfügbar ist. Umweltfreundlich heizen mit der Kraft der Kraft-Wärme-Kopplung."
          imageSrc="https://images.unsplash.com/photo-1767789083299-28d17c4ffb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmljdCUyMGhlYXRpbmclMjBwbGFudHxlbnwxfHx8fDE3Njk0MTc5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          imageAlt="District heating infrastructure"
          variant="netz"
        />

        {/* Verfügbarkeitscheck Section with Embedded Journey */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ist Fernwärme bei Ihnen verfügbar?
              </h2>
              <p className="text-lg text-gray-600">
                Nutzen Sie unseren Verfügbarkeitscheck und finden Sie heraus, ob Sie von Fernwärme
                profitieren können.
              </p>
            </div>

            {/* Embedded Journey */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden border border-gray-200">
                <div className="w-full">
                  <iframe
                    src="https://journey.epilot.cloud/fernwaerme-verfuegbarkeit"
                    className="w-full h-full"
                    style={{ minHeight: '600px', height: '600px' }}
                    frameBorder="0"
                    title="Fernwärme Verfügbarkeitscheck"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Card Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Anschluss direkt beantragen
              </h2>
              <p className="text-lg text-gray-600">
                Sie haben sich für Fernwärme entschieden? Beantragen Sie Ihren Anschluss jetzt
                online.
              </p>
            </div>

            {/* Portal Card */}
            <div className="max-w-2xl mx-auto">
              <ProductCard
                title="Fernwärmeanschluss im Portal beantragen"
                description="Stellen Sie Ihren Antrag für einen Fernwärmeanschluss bequem online in unserem Netzkundenportal. Alle erforderlichen Unterlagen können Sie direkt hochladen."
                icon={ThermometerSun}
                href="https://netz.ecp.epilot.io/"
                cta="Jetzt beantragen"
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
