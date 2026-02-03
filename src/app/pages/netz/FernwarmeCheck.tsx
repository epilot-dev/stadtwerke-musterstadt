import { NetzNavbar } from '@/app/components/NetzNavbar';
import { Footer } from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import JourneyWebComponent from '@/app/components/JourneyComponent';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function FernwarmeCheck() {
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
                src="/fernwarme-grid.png"
                alt="District heating infrastructure"
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
                  Fernwärme Verfügbarkeitscheck
                </h1>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Prüfen Sie, ob Fernwärme an Ihrer Adresse verfügbar ist. Umweltfreundlich heizen
                  mit der Kraft der Kraft-Wärme-Kopplung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verfügbarkeitscheck Section with Embedded Journey */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
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
              <div className="w-full">
                <JourneyWebComponent journeyId={JOURNEY_IDS.fernwarmeGrid} isPage />
              </div>
            </div>
          </div>
        </section>

        {/* Portal Card Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Anschluss direkt beantragen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sie möchten einen Fernwärmeanschluss beantragen? Starten Sie Ihren Antrag bequem
                online in unserem Netzkundenportal. Der Prozess führt Sie Schritt für Schritt durch
                alle notwendigen Angaben und Sie können alle erforderlichen Unterlagen direkt
                hochladen.
              </p>
              <Button
                asChild
                className="bg-[#63BEF8] hover:bg-[#63BEF8] text-black h-12 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,190,248,0.8)]"
              >
                <a href="https://netz.ecp.epilot.io/" target="_blank" rel="noopener noreferrer">
                  Zum Kundenportal
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="netz" />
    </div>
  );
}
