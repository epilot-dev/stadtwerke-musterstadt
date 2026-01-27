import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  variant?: 'tarif' | 'netz';
}

export function Footer({ variant = 'tarif' }: FooterProps) {
  const hoverColor = variant === 'netz' ? 'hover:text-[#63BEF8]' : 'hover:text-[#deff03]';
  const hoverBgColor = variant === 'netz' ? 'hover:bg-[#63BEF8]' : 'hover:bg-[#deff03]';

  return (
    <footer className="bg-[#222222] text-white pt-20 pb-10">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="w-32 xl:w-40">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ihr zuverlässiger Partner für Energie in Musterstadt. Wir gestalten die Zukunft
              nachhaltig.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${hoverBgColor} hover:text-black transition-colors`}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${hoverBgColor} hover:text-black transition-colors`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${hoverBgColor} hover:text-black transition-colors`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Produkte</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/okostrom" className={`${hoverColor} transition-colors`}>
                  Ökostrom
                </Link>
              </li>
              <li>
                <Link to="/gas" className={`${hoverColor} transition-colors`}>
                  Gas
                </Link>
              </li>
              <li>
                <Link to="/warmestrom" className={`${hoverColor} transition-colors`}>
                  Wärmestrom
                </Link>
              </li>
              <li>
                <Link to="/warmepumpe" className={`${hoverColor} transition-colors`}>
                  Wärmepumpe
                </Link>
              </li>
              <li>
                <Link to="/fernwarme" className={`${hoverColor} transition-colors`}>
                  Fernwärme
                </Link>
              </li>
              <li>
                <Link to="/ladestrom" className={`${hoverColor} transition-colors`}>
                  Ladestrom
                </Link>
              </li>
              <li>
                <Link to="/wallbox" className={`${hoverColor} transition-colors`}>
                  Wallbox
                </Link>
              </li>
              <li>
                <Link to="/photovoltaik" className={`${hoverColor} transition-colors`}>
                  Photovoltaik
                </Link>
              </li>
              <li>
                <Link to="/balkonkraftwerke" className={`${hoverColor} transition-colors`}>
                  Balkonkraftwerke
                </Link>
              </li>
            </ul>
          </div>

          {/* Netz Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Netz</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/netz" className="hover:text-[#63BEF8] transition-colors">
                  Netz-Übersicht
                </Link>
              </li>
              <li>
                <Link
                  to="/netz/strom/einspeiser"
                  className="hover:text-[#63BEF8] transition-colors"
                >
                  Einspeiser und Verbraucher
                </Link>
              </li>
              <li>
                <a
                  href="https://grid.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#63BEF8] transition-colors"
                >
                  Stromanschluss beantragen
                </a>
              </li>
              <li>
                <a
                  href="https://grid.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#63BEF8] transition-colors"
                >
                  Erdgasanschluss beantragen
                </a>
              </li>
              <li>
                <Link
                  to="/netz/wasser/anschluss"
                  className="hover:text-[#63BEF8] transition-colors"
                >
                  Wasserhausanschluss beantragen
                </Link>
              </li>
              <li>
                <Link to="/netz/fernwarme/check" className="hover:text-[#63BEF8] transition-colors">
                  Verfügbarkeitscheck Fernwärme
                </Link>
              </li>
              <li>
                <a
                  href="https://installateur.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#63BEF8] transition-colors"
                >
                  Für Installateure
                </a>
              </li>
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/service" className={`${hoverColor} transition-colors`}>
                  Service-Übersicht
                </Link>
              </li>
              <li>
                <a href="/service#umzug" className={`${hoverColor} transition-colors`}>
                  Umzug melden
                </a>
              </li>
              <li>
                <a href="/service#sepa" className={`${hoverColor} transition-colors`}>
                  SEPA-Mandat einrichten
                </a>
              </li>
              <li>
                <a href="/service#abschlag" className={`${hoverColor} transition-colors`}>
                  Abschlag anpassen
                </a>
              </li>
              <li>
                <a href="/service#kuendigung" className={`${hoverColor} transition-colors`}>
                  Vertrag kündigen
                </a>
              </li>
              <li>
                <a href="#" className={`${hoverColor} transition-colors`}>
                  Kundenportal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="leading-relaxed">
                  <p>2PUNKT0 AG</p>
                  <p>Musterstraße 1</p>
                  <p>12345 Musterstadt</p>
                </div>
              </li>
              <li className="pt-2">
                <span className="block text-sm text-gray-500">Kostenlose Service-Hotline</span>
                <a href="tel:08001234567" className={`text-xl font-bold text-white ${hoverColor}`}>
                  0800 123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:service@sw-musterstadt.epilot.cloud" className={hoverColor}>
                  service@sw-musterstadt.epilot.cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 2PUNKT0 AG</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Impressum
            </a>
            <a href="#" className="hover:text-white">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
