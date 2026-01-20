import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Layers, Users, Zap, CheckCircle2, Info } from 'lucide-react';

// Design 21: Map Form - Map 40% Width, Form 60%, with Overlay Controls
export function FormDesign21() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: '',
    householdSize: 2
  });

  const [mapView, setMapView] = React.useState('map');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
      <div className="flex min-h-screen">
        {/* Left - Map (40%) */}
        <div className="w-[40%] relative bg-slate-100">
          <div className="sticky top-0 h-screen">
            {/* Google Maps Iframe */}
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

            {/* Map View Toggle */}
            <div className="absolute top-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-2 flex gap-2">
                <button
                  onClick={() => setMapView('map')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    mapView === 'map'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  Map
                </button>
                <button
                  onClick={() => setMapView('satellite')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    mapView === 'satellite'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Satellite
                </button>
              </div>
            </div>

            {/* Coverage Info Card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Verfügbar in Ihrer Region</p>
                    <p className="text-sm text-slate-600">
                      100% Ökostrom lieferbar • Keine Wartezeit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form (60%) */}
        <div className="w-[60%] bg-gradient-to-br from-slate-50 to-blue-50 p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
              >
                <Zap className="w-9 h-9 text-white" />
              </motion.div>
              <h1 className="text-5xl font-black text-slate-900 mb-4">
                100% Ökostrom garantiert
              </h1>
              <p className="text-xl text-slate-600">
                Berechnen Sie jetzt Ihren individuellen Stromtarif
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2" />

              <div className="p-10">
                <form className="space-y-8">
                  {/* Address Inputs */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-black">
                        1
                      </span>
                      Ihre Adresse
                    </h3>
                    <div className="space-y-4 ml-10">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Postleitzahl & Ort *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                            placeholder="Postleitzahl oder Wohnort"
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
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                            placeholder="Straßenname"
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
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t-2 border-slate-100" />

                  {/* Consumption Inputs */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-black">
                        2
                      </span>
                      Ihr Verbrauch
                    </h3>
                    <div className="space-y-6 ml-10">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Wie viele Personen leben in Ihrem Haushalt?
                        </label>
                        <div className="flex gap-3">
                          {[1, 2, 3, 4, 5].map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => setFormData({ ...formData, householdSize: size })}
                              className={`flex-1 aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                                formData.householdSize === size
                                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl scale-110'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              <Users className="w-6 h-6 mb-1" />
                              <span className="font-bold">{size}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Stromverbrauch in kWh/Jahr *
                        </label>
                        <div className="relative">
                          <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="number"
                            name="usage"
                            value={formData.usage}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                            placeholder="z.B. 3500"
                          />
                        </div>
                      </div>

                      {/* Info Box */}
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-900">
                          <strong>Tipp:</strong> Für einen {formData.householdSize}-Personen-Haushalt empfehlen wir einen 
                          durchschnittlichen Verbrauch von ca. {formData.householdSize * 1500} kWh/Jahr.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Tarif berechnen
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                🔒 SSL-verschlüsselt • ✓ Kostenlos & unverbindlich • ⚡ Sofortige Berechnung
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
