import React from 'react';
import { motion } from 'motion/react';
import { Wind, MapPin, User, Mail, Phone, Calendar, Info } from 'lucide-react';

// Design 15: Minimalist Premium - Clean, sophisticated with subtle animations
export function FormDesign15() {
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
    moveInDate: '',
    previousProvider: '',
    annualConsumption: '',
    newsletter: false
  });

  const [focusedField, setFocusedField] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Wind className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-light text-slate-900 tracking-tight">
              baden<span className="font-bold">ova</span>
            </h1>
          </div>
          <h2 className="text-5xl font-light text-slate-900 mb-4 tracking-tight">Switch to Sustainable Energy</h2>
          <p className="text-xl text-slate-600 font-light">A cleaner future starts with a simple form</p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 p-12 border border-white/50"
        >
          <form className="space-y-10">
            {/* Address Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Your Location</h3>
              </div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <motion.div
                    animate={{
                      scale: focusedField === 'postalCode' ? 1.02 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('postalCode')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="79098"
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: focusedField === 'city' ? 1.02 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('city')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="Freiburg"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-3 gap-5">
                  <div className="col-span-2">
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Street
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('street')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="Tullastraße"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Number
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('houseNumber')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="64"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-slate-400">Personal Information</span>
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">About You</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-600 mb-3 font-medium">
                    Title
                  </label>
                  <div className="flex gap-3">
                    {['Mr.', 'Ms.', 'Mx.', 'Dr.'].map((title) => (
                      <button
                        key={title}
                        type="button"
                        onClick={() => setFormData({ ...formData, title })}
                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                          formData.title === title
                            ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="Maria"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="Weber"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="maria.weber@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="+49 761 123456"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-slate-400">Contract Details</span>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-900">Service Setup</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-600 mb-2 font-medium">
                    Desired Move-In Date
                  </label>
                  <input
                    type="date"
                    name="moveInDate"
                    value={formData.moveInDate}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Previous Provider
                    </label>
                    <select
                      name="previousProvider"
                      value={formData.previousProvider}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                    >
                      <option value="">Select provider</option>
                      <option value="eon">E.ON</option>
                      <option value="evm">EVM</option>
                      <option value="enercity">Enercity</option>
                      <option value="other">Other</option>
                      <option value="none">None (new connection)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2 font-medium">
                      Annual Consumption (kWh)
                    </label>
                    <input
                      type="number"
                      name="annualConsumption"
                      value={formData.annualConsumption}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-all text-slate-900 text-lg bg-transparent"
                      placeholder="3500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Info className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-2">100% Renewable Energy</h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    All our energy comes from certified renewable sources in the Black Forest region. 
                    By switching to badenova, you're supporting local green energy production and 
                    reducing your carbon footprint.
                  </p>
                  <label className="flex items-center gap-3 mt-4 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-2 border-emerald-400 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-emerald-800">
                      Subscribe to our sustainability newsletter
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-5 rounded-2xl font-medium text-lg shadow-xl shadow-emerald-200/50 hover:shadow-2xl hover:shadow-emerald-300/50 transition-all"
              >
                Complete Registration
              </button>
            </motion.div>

            <p className="text-center text-sm text-slate-500">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
