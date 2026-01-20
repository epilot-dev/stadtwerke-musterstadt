import React from 'react';
import { motion } from 'motion/react';
import { Building2, MapPin, User, Mail, Phone, Shield, ChevronRight } from 'lucide-react';

// Design 11: Split View Corporate - Professional energy provider with left info panel
export function FormDesign11() {
  const [formData, setFormData] = React.useState({
    companyName: '',
    postalCode: '',
    streetAddress: '',
    houseNumber: '',
    city: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentProvider: '',
    annualConsumption: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex min-h-screen">
        {/* Left Panel - Information */}
        <div className="w-2/5 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Secure & Trusted</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Switch to Cleaner Energy Today
              </h1>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Join thousands of businesses making the sustainable choice with our premium energy solutions.
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  { icon: Building2, title: '100% Renewable', desc: 'Certified green energy sources' },
                  { icon: Shield, title: 'Fixed Pricing', desc: 'No hidden fees or surprises' },
                  { icon: MapPin, title: 'Local Support', desc: '24/7 customer service team' }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-blue-200 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative z-10">
            <p className="text-blue-200 text-sm">
              Trusted by over 50,000 businesses across Europe
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-slate-800 mb-3">Get Your Quote</h2>
              <p className="text-slate-600 text-lg">Fill in your details to receive a personalized energy plan</p>
            </div>

            {/* Form */}
            <form className="space-y-8">
              {/* Company Information */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Company Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Business Address
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="Street name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      House Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="No."
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Contact Person
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                    <div className="flex gap-3">
                      {['Mr.', 'Ms.', 'Mx.', 'Dr.'].map((title) => (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setFormData({ ...formData, title })}
                          className={`px-6 py-3 rounded-xl font-medium transition-all ${
                            formData.title === title
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                        placeholder="+49 123 456789"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Information */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Energy Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Provider
                    </label>
                    <select
                      name="currentProvider"
                      value={formData.currentProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                    >
                      <option value="">Select provider</option>
                      <option value="eon">E.ON</option>
                      <option value="enercity">Enercity</option>
                      <option value="evm">EVM</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Annual Consumption (kWh)
                    </label>
                    <input
                      type="number"
                      name="annualConsumption"
                      value={formData.annualConsumption}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800 bg-white"
                      placeholder="e.g., 50000"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transition-all flex items-center justify-center gap-2"
              >
                Get Your Custom Quote
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-sm text-slate-500">
                By submitting this form, you agree to our Terms & Conditions
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
