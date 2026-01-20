import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Zap, User, Mail, Phone, Award, TrendingDown, Leaf, ChevronRight } from 'lucide-react';

// Design 25: Premium Comparison - Elegant comparison-focused design
export function FormDesign25() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    usage: '',
    currentProvider: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Wechseln Sie jetzt & sparen Sie bis zu 30%
              </h1>
              <p className="text-xl text-blue-200 mb-6">
                Kostenloser Vergleich • Unverbindlich • In nur 2 Minuten
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">TÜV-geprüft</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-400" />
                  <span className="text-sm">100% Ökostrom</span>
                </div>
              </div>
            </div>
            {/* Savings Highlight */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <p className="text-sm text-blue-200 mb-2">Durchschnittliche Ersparnis</p>
              <p className="text-6xl font-black mb-2">320€</p>
              <p className="text-sm text-blue-200 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                pro Jahr bei 3.500 kWh
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Form - 2 columns */}
          <div className="col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Jetzt Tarif berechnen
                </h2>
                <p className="text-slate-600">
                  Füllen Sie das Formular aus und erhalten Sie Ihr individuelles Angebot
                </p>
              </div>

              <form className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    Lieferadresse
                  </h3>
                  <div className="space-y-4 ml-10">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Postleitzahl *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="12345"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Straße
                        </label>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Musterstraße"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nr.
                        </label>
                        <input
                          type="text"
                          name="houseNumber"
                          value={formData.houseNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-slate-100" />

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    Kontaktdaten
                  </h3>
                  <div className="space-y-4 ml-10">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Max"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Mustermann"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="max@email.de"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-slate-100" />

                {/* Energy */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    Verbrauchsdaten
                  </h3>
                  <div className="space-y-4 ml-10">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Aktueller Anbieter
                      </label>
                      <select
                        name="currentProvider"
                        value={formData.currentProvider}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="eon">E.ON</option>
                        <option value="octopus">Octopus Energy</option>
                        <option value="enercity">Enercity</option>
                        <option value="other">Sonstiger</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Jährlicher Verbrauch (kWh) *
                      </label>
                      <input
                        type="number"
                        name="usage"
                        value={formData.usage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="z.B. 3500"
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Kostenloses Angebot anfordern
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  * Pflichtfelder • 100% kostenlos & unverbindlich
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar - Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-bold text-xl mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>Bis zu 30% sparen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>100% Ökostrom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>Keine Wechselgebühren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>Persönlicher Service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Warum wechseln?</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">320€</p>
                  <p className="text-sm text-slate-600">Ø Ersparnis pro Jahr</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-3xl font-bold text-green-600 mb-1">500k+</p>
                  <p className="text-sm text-slate-600">Zufriedene Kunden</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-3xl font-bold text-purple-600 mb-1">⭐ 4.9/5</p>
                  <p className="text-sm text-slate-600">Kundenbewertung</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">💡 Wussten Sie?</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Ein durchschnittlicher Haushalt kann durch einen Wechsel zu einem günstigeren Anbieter bis zu 30% seiner Stromkosten sparen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
