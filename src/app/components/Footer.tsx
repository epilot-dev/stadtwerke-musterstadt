import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white pt-20 pb-10">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="w-48">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ihr zuverlässiger Partner für Energie in Musterstadt. Wir gestalten die Zukunft
              nachhaltig.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#deff03] hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#deff03] hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#deff03] hover:text-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column (Moved before Service) */}
          <div>
            <h4 className="text-lg font-bold mb-6">Produkte</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Ökostrom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Wärmestromtarife
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Wärmepumpe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Gastarife
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Fernwärme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Ladestromtarife
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Wallbox
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Photovoltaik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Balkonkraftwerke
                </a>
              </li>
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Kundenportal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Rechnungserklärung
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Zählerstand melden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Umzugsservice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#deff03] transition-colors">
                  Störung melden
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Stadtwerke Musterstadt GmbH</li>
              <li>Musterstraße 1</li>
              <li>12345 Musterstadt</li>
              <li className="pt-4">
                <span className="block text-sm text-gray-500">Kostenlose Service-Hotline</span>
                <a
                  href="tel:08001234567"
                  className="text-xl font-bold text-white hover:text-[#deff03]"
                >
                  0800 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@sw-musterstadt.de" className="hover:text-[#deff03]">
                  info@sw-musterstadt.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Stadtwerke Musterstadt GmbH</p>
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
