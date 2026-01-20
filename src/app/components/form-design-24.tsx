import React from 'react';
import { motion } from 'motion/react';
import { Zap, MapPin, Users, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

// Design 24: Interactive Cards - Engaging card-based selection flow
export function FormDesign24() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    householdSize: 0,
    propertyType: '',
    usage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Schnell & Einfach
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">
            Finden Sie Ihren Tarif
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Beantworten Sie ein paar einfache Fragen und erhalten Sie Ihr persönliches Angebot
          </p>
        </motion.div>

        {/* Form Cards Grid */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Ihr Standort</h2>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Postleitzahl oder Ort
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium text-lg"
                placeholder="z.B. 10115 Berlin"
              />
            </div>
          </motion.div>

          {/* Household Size Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Haushaltsgröße</h2>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFormData({ ...formData, householdSize: size })}
                  className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-bold transition-all ${
                    formData.householdSize === size
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg scale-110'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {formData.householdSize > 0 && (
              <p className="mt-3 text-sm text-slate-600">
                {formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}
              </p>
            )}
          </motion.div>

          {/* Property Type Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Objekttyp</h2>
            </div>
            <div className="space-y-3">
              {[
                { value: 'apartment', label: 'Wohnung', icon: '🏢' },
                { value: 'house', label: 'Einfamilienhaus', icon: '🏠' },
                { value: 'business', label: 'Gewerbe', icon: '🏭' }
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, propertyType: type.value })}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                    formData.propertyType === type.value
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-2xl">{type.icon}</span>
                  <span className="font-semibold">{type.label}</span>
                  {formData.propertyType === type.value && (
                    <CheckCircle className="w-5 h-5 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Usage Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Verbrauch</h2>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Jährlicher Stromverbrauch (kWh)
              </label>
              <input
                type="number"
                name="usage"
                value={formData.usage}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all text-slate-900 font-medium text-lg"
                placeholder={formData.householdSize ? `ca. ${formData.householdSize * 1500} kWh` : 'z.B. 3500'}
              />
              {formData.householdSize > 0 && (
                <p className="mt-3 text-xs text-slate-500">
                  💡 Durchschnitt für {formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}: 
                  ~{formData.householdSize * 1500} kWh/Jahr
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Summary & Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bereit für Ihr Angebot?</h3>
              <div className="flex items-center gap-6 text-sm">
                {formData.postalCode && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Standort: {formData.postalCode}</span>
                  </div>
                )}
                {formData.householdSize > 0 && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>{formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}</span>
                  </div>
                )}
                {formData.usage && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>{formData.usage} kWh/Jahr</span>
                  </div>
                )}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
            >
              Tarif berechnen
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-slate-900 mb-1">500k+</p>
            <p className="text-sm text-slate-600">Zufriedene Kunden</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900 mb-1">⭐ 4.9/5</p>
            <p className="text-sm text-slate-600">Kundenbewertung</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900 mb-1">24/7</p>
            <p className="text-sm text-slate-600">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
