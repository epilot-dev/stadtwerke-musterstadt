import React from 'react';
import { motion } from 'motion/react';
import { Leaf, MapPin, Zap, TrendingDown, Award, ChevronRight } from 'lucide-react';

// Design 5: Premium Eco - Sophisticated sustainable energy form
export function FormDesign5() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: '',
    greenPreference: 'premium'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left - Branding */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-6">
                <Leaf className="w-4 h-4" />
                100% Erneuerbare Energie
              </div>
              <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Nachhaltig.<br />
                Transparent.<br />
                <span className="text-green-600">Regional.</span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Wechseln Sie jetzt zu 100% Ökostrom aus regionalen Quellen und leisten Sie einen aktiven Beitrag zum Klimaschutz.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '500k+', label: 'Kunden' },
                  { value: '100%', label: 'Ökostrom' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-green-600 mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Tarif berechnen
                </h2>
                <p className="text-slate-600">
                  Erhalten Sie in wenigen Sekunden Ihr persönliches Angebot
                </p>
              </div>

              <form className="space-y-6">
                {/* Address */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Standort
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Postleitzahl oder Ort"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className="col-span-2 px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Straße"
                      />
                      <input
                        type="text"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleChange}
                        className="px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Nr."
                      />
                    </div>
                  </div>
                </div>

                {/* Usage */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Verbrauch pro Jahr
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full pl-12 pr-20 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="3500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                      kWh
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    Durchschnitt: 1 Person ≈ 1.500 kWh • 2 Personen ≈ 2.500 kWh
                  </p>
                </div>

                {/* Green Options */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Öko-Tarif wählen
                  </label>
                  <div className="space-y-3">
                    {[
                      {
                        id: 'standard',
                        title: 'Öko Standard',
                        desc: '100% Ökostrom aus Deutschland',
                        badge: '🌱'
                      },
                      {
                        id: 'premium',
                        title: 'Öko Premium',
                        desc: 'Regional + Investition in neue Anlagen',
                        badge: '⭐'
                      }
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, greenPreference: option.id })}
                        className={`w-full p-4 rounded-xl text-left transition-all ${
                          formData.greenPreference === option.id
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-2 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold mb-1 flex items-center gap-2">
                              <span>{option.badge}</span>
                              {option.title}
                            </p>
                            <p className={`text-sm ${
                              formData.greenPreference === option.id ? 'text-white/90' : 'text-slate-600'
                            }`}>
                              {option.desc}
                            </p>
                          </div>
                          {formData.greenPreference === option.id && (
                            <Award className="w-5 h-5" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Certificate Badge */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-green-900 mb-1">TÜV-Zertifiziert</p>
                      <p className="text-sm text-green-700">
                        Geprüfte Herkunft aus 100% erneuerbaren Energien
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Jetzt berechnen
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  Kostenlos & unverbindlich • Sofortige Berechnung
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-1">Auszeichnung</p>
              <p className="font-bold">Testsieger 2024</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-1">Bewertung</p>
              <p className="font-bold">⭐⭐⭐⭐⭐ 4.9/5.0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-1">Zertifikat</p>
              <p className="font-bold">TÜV OK-Power</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
