import React from 'react';
import { motion } from 'motion/react';
import { Zap, MapPin, Calculator, TrendingUp, Phone, Mail } from 'lucide-react';

// Design 10: Modern Calculator - Professional calculation-focused design
export function FormDesign10() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    usage: '',
    currentCost: ''
  });

  const [estimate, setEstimate] = React.useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Simple estimation logic
    if (e.target.name === 'usage' && e.target.value) {
      const usage = parseInt(e.target.value);
      const estimatedCost = (usage * 0.30).toFixed(2); // Example calculation
      setEstimate(parseFloat(estimatedCost));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-5 gap-8">
          {/* Left - Calculator Display (2 cols) */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-12"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold">Tarifrechner</h1>
                    <p className="text-blue-200">Stromkosten berechnen</p>
                  </div>
                </div>
              </div>

              {/* Estimate Display */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-6">
                <p className="text-blue-200 text-sm mb-2">Geschätzte Jahreskosten</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-white">
                    {estimate ? estimate.toLocaleString('de-DE') : '—'}
                  </span>
                  <span className="text-2xl text-blue-200">€</span>
                </div>
                {estimate && (
                  <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">Bis zu 30% Ersparnis möglich</span>
                  </div>
                )}
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-3">
                {[
                  { icon: Zap, title: '100% Ökostrom', desc: 'Nachhaltig & sicher' },
                  { icon: TrendingUp, title: 'Preisgarantie', desc: '12 Monate fest' },
                  { icon: Phone, title: 'Support 24/7', desc: 'Immer für Sie da' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-blue-200">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Form (3 cols) */}
          <div className="col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-10"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-3">
                  Berechnen Sie Ihren Tarif
                </h2>
                <p className="text-lg text-slate-600">
                  Geben Sie Ihre Daten ein und erhalten Sie sofort eine Kostenschätzung
                </p>
              </div>

              <form className="space-y-8">
                {/* Location */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Ihre Postleitzahl
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                    placeholder="z.B. 10115"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Wir prüfen die Verfügbarkeit in Ihrer Region
                  </p>
                </div>

                {/* Consumption */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    <Zap className="w-4 h-4 inline mr-2" />
                    Jährlicher Stromverbrauch *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full px-6 py-4 pr-16 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="z.B. 3500"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">
                      kWh
                    </span>
                  </div>

                  {/* Household Size Helper */}
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      Durchschnittswerte als Orientierung:
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { persons: '1 Person', kwh: '1.500' },
                        { persons: '2 Personen', kwh: '2.500' },
                        { persons: '3+ Personen', kwh: '3.500' }
                      ].map((hint, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, usage: hint.kwh })}
                          className="p-3 bg-white rounded-lg hover:bg-blue-100 transition-all text-left border border-blue-200"
                        >
                          <p className="text-xs text-blue-700 mb-1">{hint.persons}</p>
                          <p className="font-bold text-blue-900">{hint.kwh} kWh</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Cost (Optional) */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Aktuelle Jahreskosten (optional)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="currentCost"
                      value={formData.currentCost}
                      onChange={handleChange}
                      className="w-full px-6 py-4 pr-16 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="z.B. 1200"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">
                      €
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Wir berechnen Ihr Sparpotenzial
                  </p>
                </div>

                {/* Savings Potential */}
                {formData.currentCost && estimate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-900 text-lg mb-1">
                          Sparpotenzial: {(parseFloat(formData.currentCost) - estimate).toFixed(2)}€
                        </p>
                        <p className="text-sm text-green-700">
                          Das sind {((1 - estimate / parseFloat(formData.currentCost)) * 100).toFixed(0)}% Ersparnis pro Jahr!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Contact Options */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      E-Mail (optional)
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="max@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Detailliertes Angebot anfordern
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  * Pflichtangabe • Kostenlos & unverbindlich
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
