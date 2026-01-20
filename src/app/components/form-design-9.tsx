import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Mail, Phone, Zap, Home, Calculator } from 'lucide-react';

// Design 9: Sectioned Professional - Clean sections with accent colors
export function FormDesign9() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    city: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    usage: '',
    propertyType: 'apartment'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sections = [
    { id: 'location', title: 'Standort', icon: MapPin, color: 'blue' },
    { id: 'personal', title: 'Kontakt', icon: User, color: 'indigo' },
    { id: 'energy', title: 'Energie', icon: Zap, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">StromRechner</h1>
                <p className="text-sm text-slate-600">Ihr individueller Tarifrechner</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calculator className="w-4 h-4" />
              <span>3 Schritte zur Berechnung</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Sidebar - Section Navigation */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-slate-900 mb-4">Ihre Schritte</h3>
              <div className="space-y-3">
                {sections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className={`w-10 h-10 bg-${section.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${section.color}-600`} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{section.title}</p>
                        <p className="text-xs text-slate-500">Schritt {idx + 1}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold mb-3">Warum wir?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>Faire & transparente Preise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>100% Ökostrom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✓</span>
                  <span>Persönlicher Service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-10"
            >
              <form className="space-y-8">
                {/* Location Section */}
                <div className="pb-8 border-b-2 border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Standort</h2>
                      <p className="text-sm text-slate-600">Wo soll der Strom geliefert werden?</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Postleitzahl *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Stadt
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Berlin"
                        />
                      </div>
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
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Hauptstraße"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Hausnr.
                        </label>
                        <input
                          type="text"
                          name="houseNumber"
                          value={formData.houseNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Objekttyp
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'apartment', label: 'Wohnung', icon: '🏢' },
                          { value: 'house', label: 'Haus', icon: '🏠' }
                        ].map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, propertyType: type.value })}
                            className={`p-4 rounded-lg text-left transition-all ${
                              formData.propertyType === type.value
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-2 border-slate-200'
                            }`}
                          >
                            <span className="text-2xl block mb-2">{type.icon}</span>
                            <p className="font-semibold">{type.label}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Section */}
                <div className="pb-8 border-b-2 border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Kontaktdaten</h2>
                      <p className="text-sm text-slate-600">Wie können wir Sie erreichen?</p>
                    </div>
                  </div>

                  <div className="space-y-4">
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
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Energy Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Verbrauch</h2>
                      <p className="text-sm text-slate-600">Wie viel Strom benötigen Sie?</p>
                    </div>
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
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="z.B. 3500"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Durchschnittswerte: 1 Person ≈ 1.500 kWh • 2 Personen ≈ 2.500 kWh • 3 Personen ≈ 3.500 kWh
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Tarif jetzt berechnen
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  * Pflichtangaben • Kostenlose & unverbindliche Berechnung
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
