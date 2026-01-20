import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Mail, Phone, Zap, ChevronRight, Shield } from 'lucide-react';

// Design 1: Modern Professional Split - Clean gradient with professional layout
export function FormDesign1() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    city: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    usage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">EnergiePortal</h1>
              <p className="text-sm text-white/80">100% Ökostrom</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">SSL-gesichert</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left - Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-12"
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
                Tarif berechnen
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Jetzt zu Ökostrom wechseln
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Berechnen Sie in wenigen Schritten Ihren persönlichen Stromtarif und profitieren Sie von 100% erneuerbarer Energie.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6 mt-12">
              {[
                {
                  title: 'Transparente Preise',
                  desc: 'Keine versteckten Kosten oder Überraschungen',
                  icon: '💰'
                },
                {
                  title: '100% Ökostrom',
                  desc: 'Aus erneuerbaren Energiequellen',
                  icon: '🌱'
                },
                {
                  title: 'Schnelle Aktivierung',
                  desc: 'In nur 5 Minuten zu Ihrem neuen Tarif',
                  icon: '⚡'
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl"
                >
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-xl">
              <form className="space-y-6">
                {/* Address Section */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Ihre Adresse
                  </h3>
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Musterstraße"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-slate-100" />

                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Persönliche Daten
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Anrede
                      </label>
                      <div className="flex gap-3">
                        {['Mr.', 'Ms.', 'Mx.'].map((title) => (
                          <button
                            key={title}
                            type="button"
                            onClick={() => setFormData({ ...formData, title })}
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                              formData.title === title
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {title}
                          </button>
                        ))}
                      </div>
                    </div>
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
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
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="Mustermann"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="max@email.de"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-slate-100" />

                {/* Usage */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Verbrauch
                  </h3>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Jährlicher Stromverbrauch (kWh) *
                    </label>
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="z.B. 3500"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Durchschnitt: 1 Person ≈ 1.500 kWh • 2 Personen ≈ 2.500 kWh
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Tarif berechnen
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  * Pflichtfelder • Ihre Daten sind bei uns sicher
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
