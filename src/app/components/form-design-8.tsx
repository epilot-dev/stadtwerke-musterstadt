import React from 'react';
import { motion } from 'motion/react';
import { Check, Circle } from 'lucide-react';

// Design 8: Card-based Stepped Form - Clean & Progressive
export function FormDesign8() {
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    addressAddition: '',
    textInput: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    telephone: ''
  });

  const [completedSections, setCompletedSections] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTitleClick = (title: string) => {
    setFormData({ ...formData, title });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-slate-700">Application in Progress</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-3">Sign Up for Energy</h1>
          <p className="text-xl text-slate-600">Complete the steps below to get started</p>
        </motion.div>

        {/* Progress circles */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {[
            { step: 1, label: 'Details' },
            { step: 2, label: 'Plan' },
            { step: 3, label: 'Payment' },
            { step: 4, label: 'Confirm' }
          ].map((item, idx) => (
            <div key={item.step} className="flex items-center">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                    item.step === 1
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                      : 'bg-white text-slate-400 shadow-md'
                  }`}
                >
                  {item.step === 1 ? <Circle className="w-6 h-6 fill-current" /> : item.step}
                </motion.div>
                <div className={`text-xs font-semibold ${item.step === 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                  {item.label}
                </div>
              </div>
              {idx < 3 && (
                <div className={`w-16 h-1 mx-3 rounded-full ${item.step === 1 ? 'bg-blue-300' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Cards */}
        <div className="space-y-6">
          {/* Address Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative"
          >
            {/* Card number badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
              <span className="text-white font-black text-xl">1</span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Address Information</h2>
              <p className="text-slate-600">Where should we deliver your energy?</p>
            </div>

            <div className="space-y-4">
              <div className="text-xs text-blue-600 font-semibold text-right">* Required</div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Postal Code & City*
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="e.g., 12345 Berlin"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Street*
                  </label>
                  <input
                    type="text"
                    name="street"
                    placeholder="Main Street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    House Number
                  </label>
                  <input
                    type="text"
                    name="houseNumber"
                    placeholder="42"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Addition to Address
                  </label>
                  <input
                    type="text"
                    name="addressAddition"
                    placeholder="Apartment 3B"
                    value={formData.addressAddition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Additional Notes
                </label>
                <input
                  type="text"
                  name="textInput"
                  placeholder="Any special delivery instructions"
                  value={formData.textInput}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative"
          >
            {/* Card number badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/40">
              <span className="text-white font-black text-xl">2</span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Personal Details</h2>
              <p className="text-slate-600">How can we reach you?</p>
            </div>

            {/* Title selection with cards */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Select Your Title
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Mr.', 'Ms. / Mrs.', 'Others', 'Dr.', 'Prof.', 'Prof. Dr.'].map((title) => (
                  <motion.button
                    key={title}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTitleClick(title)}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      formData.title === title
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {title}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="+49 123 456789"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-lg transition-all"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Almost there!</h3>
                <p className="text-white/90 text-sm">
                  Complete this step to continue with plan selection and pricing options.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-purple-600/40 hover:shadow-2xl hover:shadow-purple-600/60 transition-all"
          >
            Continue to Step 2
          </motion.button>
        </div>
      </div>
    </div>
  );
}
