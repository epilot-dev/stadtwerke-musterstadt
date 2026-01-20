import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Zap, Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

// Design 3: Card-Based Progressive - Professional step cards with visual progress
export function FormDesign3() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: '',
    householdSize: 2,
    startDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    { id: 1, title: 'Standort', icon: MapPin },
    { id: 2, title: 'Verbrauch', icon: Zap },
    { id: 3, title: 'Start', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Ihr Weg zu grüner Energie
          </h1>
          <p className="text-xl text-slate-600">
            In 3 einfachen Schritten zu Ihrem persönlichen Tarif
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 -z-10" />
            <div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isActive = currentStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: step.id * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-blue-600 text-white shadow-lg scale-110'
                        : 'bg-white text-slate-400 border-2 border-slate-200'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <p className={`text-sm font-semibold ${isActive ? 'text-blue-600' : 'text-slate-600'}`}>
                    {step.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-10"
        >
          {/* Step 1: Location */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Wo wohnen Sie?</h2>
              <p className="text-slate-600 mb-8">Geben Sie Ihre Adresse ein, um Ihre Verfügbarkeit zu prüfen</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Postleitzahl & Ort *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg bg-transparent"
                    placeholder="z.B. 10115 Berlin"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Straße
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium bg-transparent"
                      placeholder="Straßenname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Hausnr.
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium bg-transparent"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Usage */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Wie viel Strom verbrauchen Sie?</h2>
              <p className="text-slate-600 mb-8">Helfen Sie uns, den besten Tarif für Sie zu finden</p>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4">
                    Personen im Haushalt
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {[1, 2, 3, 4, 5].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, householdSize: size })}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                          formData.householdSize === size
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl scale-110'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <Users className="w-7 h-7 mb-2" />
                        <span className="font-bold text-lg">{size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Jährlicher Verbrauch (kWh) *
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full pl-0 pr-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg bg-transparent"
                      placeholder={`ca. ${formData.householdSize * 1500} kWh`}
                    />
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    💡 Durchschnitt für {formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}: ~{formData.householdSize * 1500} kWh/Jahr
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Start Date */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Wann möchten Sie starten?</h2>
              <p className="text-slate-600 mb-8">Wählen Sie Ihr gewünschtes Startdatum</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Gewünschtes Startdatum
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg bg-transparent"
                  />
                </div>

                {/* Summary */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-blue-900 mb-4">Ihre Angaben</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-blue-800"><strong>Standort:</strong> {formData.postalCode} {formData.street} {formData.houseNumber}</p>
                    <p className="text-blue-800"><strong>Haushaltsgröße:</strong> {formData.householdSize} {formData.householdSize === 1 ? 'Person' : 'Personen'}</p>
                    <p className="text-blue-800"><strong>Verbrauch:</strong> {formData.usage || '–'} kWh/Jahr</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t-2 border-slate-100">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 1
                  ? 'text-slate-400 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Zurück
            </button>

            {currentStep < 3 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Weiter
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Tarif berechnen
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}