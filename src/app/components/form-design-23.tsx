import React from 'react';
import { motion } from 'motion/react';
import { Zap, MapPin, Calendar, CreditCard, Check, ArrowRight, User, Mail, Phone } from 'lucide-react';

// Design 23: Horizontal Timeline - Professional step-by-step horizontal flow
export function FormDesign23() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    city: '',
    usage: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    paymentMethod: 'sepa'
  });

  const steps = [
    { id: 0, title: 'Standort', icon: MapPin, color: 'blue' },
    { id: 1, title: 'Verbrauch', icon: Zap, color: 'purple' },
    { id: 2, title: 'Kontakt', icon: User, color: 'green' },
    { id: 3, title: 'Start', icon: Calendar, color: 'orange' },
    { id: 4, title: 'Zahlung', icon: CreditCard, color: 'red' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Progress Timeline */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 -z-10" />
            <div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 -z-10 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCompleted = currentStep > idx;
              const isActive = currentStep === idx;

              return (
                <div key={step.id} className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                      isCompleted
                        ? 'bg-green-500 text-white shadow-lg'
                        : isActive
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl'
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </motion.div>
                  <p className={`text-sm font-semibold ${isActive ? 'text-blue-600' : 'text-slate-600'}`}>
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Location */}
          {currentStep === 0 && (
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Wo benötigen Sie Strom?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Geben Sie Ihre vollständige Adresse ein
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Postleitzahl *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Stadt *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="Berlin"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Straße *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="Musterstraße"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Hausnr. *
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Usage */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Wie hoch ist Ihr Verbrauch?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Schätzen Sie Ihren jährlichen Stromverbrauch
              </p>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Verbrauch in kWh/Jahr *
                </label>
                <input
                  type="number"
                  name="usage"
                  value={formData.usage}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                  placeholder="z.B. 3500"
                />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: '1 Person', value: '1500' },
                    { label: '2 Personen', value: '2500' },
                    { label: '3+ Personen', value: '3500' }
                  ].map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, usage: preset.value })}
                      className="p-4 bg-slate-100 hover:bg-purple-100 transition-all text-left"
                    >
                      <p className="text-xs text-slate-600 mb-1">{preset.label}</p>
                      <p className="font-bold text-slate-900">{preset.value} kWh</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Ihre Kontaktdaten
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Wie können wir Sie erreichen?
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                    placeholder="max.mustermann@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-green-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Start Date */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Wann soll es losgehen?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Wählen Sie Ihr gewünschtes Startdatum
              </p>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Startdatum
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-medium text-xl bg-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Wie möchten Sie bezahlen?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Wählen Sie Ihre bevorzugte Zahlungsart
              </p>
              <div className="space-y-4">
                {[
                  { value: 'sepa', label: 'SEPA-Lastschrift', desc: 'Automatischer Einzug' },
                  { value: 'transfer', label: 'Überweisung', desc: 'Manuelle Zahlung' }
                ].map((method) => (
                  <button
                    key={method.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: method.value })}
                    className={`w-full p-6 text-left transition-all ${
                      formData.paymentMethod === method.value
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-xl'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <p className="font-bold text-lg mb-1">{method.label}</p>
                    <p className={`text-sm ${formData.paymentMethod === method.value ? 'text-white/80' : 'text-slate-600'}`}>
                      {method.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`px-6 py-3 font-semibold transition-all ${
              currentStep === 0
                ? 'text-slate-400 cursor-not-allowed'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Zurück
          </button>

          {currentStep < 4 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Weiter
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Angebot anfordern
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
