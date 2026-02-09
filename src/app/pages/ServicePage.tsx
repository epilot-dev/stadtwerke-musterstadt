import { Link } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import {
  Home,
  TrendingUp,
  CreditCard,
  XCircle,
  LogIn,
  Cpu,
  Calendar,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const serviceCards = [
  {
    title: 'Umzug melden',
    description:
      'Ziehen Sie um? Teilen Sie uns Ihre neue Adresse mit und wir kümmern uns um den Rest.',
    icon: Home,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    href: '/service/umzug',
    cta: 'Jetzt melden',
  },
  {
    title: 'SEPA-Mandat einrichten',
    description: 'Richten Sie ein SEPA-Lastschriftmandat ein und zahlen Sie bequem per Bankeinzug.',
    icon: CreditCard,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    href: '/service/sepa',
    cta: 'Mandat einrichten',
  },
  {
    title: 'Abschlag anpassen',
    description: 'Passen Sie Ihre monatlichen Abschlagszahlungen an Ihren aktuellen Verbrauch an.',
    icon: TrendingUp,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    href: '/service/abschlag',
    cta: 'Jetzt anpassen',
  },
  {
    title: 'Vertrag kündigen',
    description:
      'Sie möchten Ihren Vertrag beenden? Hier finden Sie alle Informationen zur Kündigung.',
    icon: XCircle,
    color: 'bg-red-100',
    iconColor: 'text-red-600',
    href: '/service/kuendigung',
    cta: 'Kündigung einreichen',
  },
];

export function ServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Service Cards Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mb-4">
                Wie können wir Ihnen helfen?
              </h2>
              <p className="text-lg text-gray-600">
                Wählen Sie Ihr Anliegen und erledigen Sie alles bequem online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group relative flex flex-col p-8 bg-gray-50 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 -mr-12 -mt-12 transition-transform group-hover:scale-110 z-0 opacity-30 ${service.iconColor}`}
                  >
                    <service.icon className="w-48 h-48" strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm text-[#222222] transition-colors duration-300 group-hover:bg-[#deff03]">
                      <service.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="relative z-10 text-2xl font-bold text-[#222222] mb-3">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="relative z-10 flex items-center font-bold text-[#222222] group-hover:text-black transition-colors">
                    {service.cta}{' '}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              {/* Kundenportal Login Card */}
              <div className="flex flex-col justify-between p-8 pb-8 bg-gradient-to-br from-[#222222] via-[#222222] to-[#2a3310] rounded-3xl text-white relative overflow-hidden">
                {/* Neon green glow from bottom right */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#deff03] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 mb-6 relative z-10">
                    <LogIn className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10">Kundenportal Login</h3>
                  <p className="text-gray-300 mb-8 relative z-10">
                    Zugriff auf Ihre Verträge, Rechnungen und Verbrauchsdaten. Jederzeit und
                    überall.
                  </p>
                </div>

                <a
                  href="https://sales-kundenportal.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-4 rounded-full bg-white text-[#222222] font-bold transition-all duration-300 relative z-10 cursor-pointer hover:bg-[#deff03] hover:shadow-[0_0_30px_rgba(222,255,3,0.8)]">
                    Zum Kundenportal
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#222222] mb-6 text-center">
                Weitere Hilfe benötigt?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#deff03] flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-[#222222]" />
                  </div>
                  <h3 className="font-bold text-[#222222] mb-1">Telefon</h3>
                  <p className="text-gray-600">0800 123 456 78</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr 8-18 Uhr</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#deff03] flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-[#222222]" />
                  </div>
                  <h3 className="font-bold text-[#222222] mb-1">E-Mail</h3>
                  <p className="text-gray-600">service@sw-musterstadt.epilot.cloud</p>
                  <p className="text-sm text-gray-500 mt-1">24/7 erreichbar</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#deff03] flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-[#222222]" />
                  </div>
                  <h3 className="font-bold text-[#222222] mb-1">Kundenzentrum</h3>
                  <p className="text-gray-600">Musterstraße 1, 12345 Musterstadt</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr 9-17 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Service Banner */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="bg-[#222222] rounded-3xl p-12 relative overflow-hidden">
              {/* Neon green glow from bottom right */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#deff03] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

              <div className="text-center mb-8 relative z-10">
                <h3 className="text-xl font-bold text-white">
                  Finde heraus wie Service MitarbeiterInnen in der Zukunft arbeiten.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto relative z-10 justify-center items-center">
                {/* Technical Prototype */}
                <a
                  href="https://www.figma.com/proto/k4DryxpriBrsU7D0wVauum/ServiceL_Usertesting_prototype_detached?node-id=0-1&p=f&viewport=-3107%2C-2972%2C0.16&t=U7R6hLRb1oVrqPBM-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A25938&show-proto-sidebar=1"
                  className="group flex items-center justify-center gap-3 p-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Cpu className="w-5 h-5 text-[#deff03]" />
                  <span className="font-bold text-white group-hover:text-[#deff03] transition-colors">
                    Q2 Service MVP
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#deff03] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* In the further future */}
                <a
                  href="https://www.figma.com/proto/VTDFdH7t6fhS2AOTW41rmw/2026-service-vision?node-id=102-41855&p=f&viewport=-156%2C-198%2C0.28&t=HGCvlF5HzFfvhQwX-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=102%3A44266&show-proto-sidebar=1"
                  className="group flex items-center justify-center gap-3 p-4 bg-white/5 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkles className="w-5 h-5 text-[#deff03]" />
                  <span className="font-bold text-white group-hover:text-[#deff03] transition-colors">
                    Service Vision
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#deff03] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="tarif" />
    </div>
  );
}
