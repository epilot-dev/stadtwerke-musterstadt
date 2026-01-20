import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Home, User, Zap, FileCheck } from 'lucide-react';

// Design 12: Multi-Step Wizard - Professional step-by-step energy contract form
export function FormDesign12() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    // Step 1: Address
    postalCode: '',
    street: '',
    houseNumber: '',
    city: '',
    // Step 2: Personal
    title: 'Mr.',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    // Step 3: Energy
    meterNumber: '',
    currentUsage: '',
    heatingType: 'gas',
    greenEnergy: true,
    // Step 4: Contract
    startDate: '',
    paymentMethod: 'sepa',
    termsAccepted: false
  });

  const steps = [
    { id: 1, name: 'Address', icon: Home, desc: 'Your location' },
    { id: 2, name: 'Personal', icon: User, desc: 'Contact details' },
    { id: 3, name: 'Energy', icon: Zap, desc: 'Usage details' },
    { id: 4, name: 'Contract', icon: FileCheck, desc: 'Finalize' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 mb-3"
          >
            Energy Contract Setup
          </motion.h1>
          <p className="text-xl text-slate-600">Complete your registration in 4 simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                          : isActive
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-300'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-8 h-8" strokeWidth={3} />
                      ) : (
                        <Icon className="w-8 h-8" />
                      )}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-4 border-blue-400"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`font-bold text-sm mb-1 ${isActive ? 'text-blue-600' : 'text-slate-600'}`}>
                        {step.name}
                      </p>
                      <p className="text-xs text-slate-400">{step.desc}</p>
                    </div>
                  </motion.div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 max-w-[120px] h-1 bg-slate-200 rounded-full overflow-hidden mb-12">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                        initial={{ width: '0%' }}
                        animate={{ width: currentStep > step.id ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-xl max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Address */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Property Address</h2>
                <p className="text-slate-600 mb-8">Where should we deliver energy?</p>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="12345"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="Berlin"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                      placeholder="Hauptstraße"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      House Number *
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                      placeholder="123"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Personal Information</h2>
                <p className="text-slate-600 mb-8">Tell us about yourself</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Title
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {['Mr.', 'Ms.', 'Mx.', 'Dr.'].map((title) => (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setFormData({ ...formData, title })}
                          className={`py-3 rounded-xl font-bold transition-all ${
                            formData.title === title
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="max@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                        placeholder="+49 123 456789"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Energy */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Energy Details</h2>
                <p className="text-slate-600 mb-8">Help us customize your plan</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Meter Number
                    </label>
                    <input
                      type="text"
                      name="meterNumber"
                      value={formData.meterNumber}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                      placeholder="DE0012345678901234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Estimated Annual Usage (kWh)
                    </label>
                    <input
                      type="number"
                      name="currentUsage"
                      value={formData.currentUsage}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                      placeholder="3500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Heating Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'gas', label: 'Gas' },
                        { value: 'electric', label: 'Electric' },
                        { value: 'oil', label: 'Oil' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, heatingType: type.value })}
                          className={`py-4 rounded-xl font-bold transition-all ${
                            formData.heatingType === type.value
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        name="greenEnergy"
                        checked={formData.greenEnergy}
                        onChange={handleChange}
                        className="mt-1 w-6 h-6 rounded border-2 border-green-400 text-green-600 focus:ring-green-500"
                      />
                      <div>
                        <p className="font-bold text-green-900 mb-1">100% Green Energy</p>
                        <p className="text-sm text-green-700">
                          Choose renewable energy sources for the same price. Help protect our environment.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contract */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Finalize Contract</h2>
                <p className="text-slate-600 mb-8">Last step before activation</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Contract Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 text-lg font-medium bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'sepa', label: 'SEPA Direct Debit' },
                        { value: 'transfer', label: 'Bank Transfer' }
                      ].map((method) => (
                        <button
                          key={method.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: method.value })}
                          className={`py-4 rounded-xl font-bold transition-all ${
                            formData.paymentMethod === method.value
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {method.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-1 w-6 h-6 rounded border-2 border-blue-400 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="text-sm text-slate-700">
                        <p className="font-bold text-blue-900 mb-1">I accept the terms and conditions *</p>
                        <p>
                          I have read and agree to the General Terms and Conditions, Privacy Policy, and confirm that all information provided is accurate.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t-2 border-slate-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                currentStep === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Check className="w-5 h-5" />
                Complete Registration
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
