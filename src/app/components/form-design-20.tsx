import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Users, Zap, Navigation } from 'lucide-react';

// Design 20: Map Form - Clean Split with Minimalist Form
export function FormDesign20() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: '',
    householdSize: '1'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="flex min-h-screen">
        {/* Left - Map */}
        <div className="w-2/5 relative">
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
            
            {/* Map Controls Overlay */}
            <div className="absolute top-6 left-6 right-6">
              <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600">Verfügbarkeit prüfen</p>
                  <p className="font-bold text-slate-900">Deutschland</p>
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-6 left-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <p className="text-xs font-bold text-slate-700 mb-2">Verfügbarkeit</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-slate-600">Verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-4">
                100% Ökostrom garantiert
              </div>
              <h1 className="text-5xl font-black text-slate-900 mb-4">
                Ihr Stromverbrauch
              </h1>
              <p className="text-xl text-slate-600">
                Geben Sie Ihre Daten ein, um Ihren persönlichen Tarif zu berechnen
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8">
              {/* Location Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Standort</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Postleitzahl oder Wohnort *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="z.B. 10115 Berlin"
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
                        className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
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
                        className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Verbrauch</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Haushaltsgröße
                    </label>
                    <div className="grid grid-cols-5 gap-3">
                      {['1', '2', '3', '4', '5+'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({ ...formData, householdSize: size })}
                          className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                            formData.householdSize === size
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <Users className="w-6 h-6 mb-1" />
                          <span className="font-bold text-sm">{size}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Stromverbrauch in kWh pro Jahr *
                    </label>
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="z.B. 3500"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Durchschnittswerte: 1 Person ≈ 1.500 kWh • 2 Personen ≈ 2.500 kWh • 3 Personen ≈ 3.500 kWh
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

              <p className="text-center text-sm text-slate-500">
                * Pflichtangabe • Ihre Daten werden verschlüsselt übertragen
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
