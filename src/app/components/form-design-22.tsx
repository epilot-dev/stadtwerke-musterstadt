import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Zap, X, ChevronDown } from 'lucide-react';

// Design 22: Map Form - Full-Screen Map with Floating Form Card Overlay
export function FormDesign22() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: '',
    householdSize: 1
  });

  const [isFormExpanded, setIsFormExpanded] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Full-Screen Google Maps */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409873734829!2d13.404953999999999!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-black">Energieportal</h1>
              <p className="text-sm text-white/70">Ihr lokaler Versorger</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all">
            Kontakt
          </button>
        </div>
      </div>

      {/* Floating Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          height: isFormExpanded ? 'auto' : '80px'
        }}
        transition={{ duration: 0.4 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-[480px] z-30"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header - Always Visible */}
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 cursor-pointer"
            onClick={() => setIsFormExpanded(!isFormExpanded)}
          >
            <div className="flex items-center justify-between text-white">
              <div>
                <h2 className="text-2xl font-black mb-1">Tarif berechnen</h2>
                <p className="text-sm text-white/80">100% Ökostrom garantiert</p>
              </div>
              <motion.button
                animate={{ rotate: isFormExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Form Content - Collapsible */}
          {isFormExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8"
            >
              <form className="space-y-6">
                {/* Address */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Postleitzahl & Ort *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="Postleitzahl oder Wohnort"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Straße
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="Straße"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Nr.
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="123"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-xs text-slate-500 font-semibold uppercase">
                      Verbrauch
                    </span>
                  </div>
                </div>

                {/* Household Size Slider */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Personen im Haushalt
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, householdSize: size })}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                          formData.householdSize === size
                            ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>{formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}</span>
                  </div>
                </div>

                {/* Usage Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Verbrauch kWh/Jahr *
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder={`ca. ${formData.householdSize * 1500} kWh`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Durchschnitt für {formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}: 
                    ~{formData.householdSize * 1500} kWh/Jahr
                  </p>
                </div>

                {/* Eco Badge */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌱</span>
                    </div>
                    <div>
                      <p className="font-bold text-green-900 text-sm">100% Ökostrom</p>
                      <p className="text-xs text-green-700">Aus erneuerbaren Energien</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Jetzt berechnen
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  * Pflichtfelder • Kostenlos & unverbindlich
                </p>
              </form>
            </motion.div>
          )}
        </div>

        {/* Floating Hint */}
        {!isFormExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <button
              onClick={() => setIsFormExpanded(true)}
              className="px-6 py-3 bg-white rounded-full shadow-xl font-bold text-slate-900 hover:shadow-2xl transition-all"
            >
              Formular öffnen
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-slate-900/80 to-transparent backdrop-blur-sm p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-white text-sm">
            <p>📍 Verfügbar in ganz Deutschland</p>
            <p>✓ Über 500.000 zufriedene Kunden</p>
            <p>🌱 100% Ökostrom garantiert</p>
          </div>
        </div>
      </div>
    </div>
  );
}
