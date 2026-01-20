import React from 'react';
import { motion } from 'motion/react';
import { Zap, MapPin, User, Mail, Phone, Calendar, CreditCard, CheckCircle } from 'lucide-react';

// Design 13: Two-Column Professional - Side-by-side layout with branding
export function FormDesign13() {
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
    birthDate: '',
    meterReading: '',
    preferredStartDate: '',
    iban: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-900" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 py-6 px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">ENERCITY</h1>
              <p className="text-teal-100 text-sm">Power for Tomorrow</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-bold">Customer Hotline</p>
            <p className="text-teal-100">0800 123 4567</p>
          </div>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-black text-slate-900 mb-3">New Customer Registration</h2>
              <p className="text-slate-600 text-lg">Join the sustainable energy revolution</p>
            </div>

            <form className="space-y-8">
              {/* Address Section */}
              <div className="pb-6 border-b-2 border-slate-100">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Address</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="12345"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Hannover"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Street
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="Glockseestraße"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      House Number
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="35"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="pb-6 border-b-2 border-slate-100">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Personal Details</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Title
                    </label>
                    <div className="flex gap-2">
                      {['Mr.', 'Ms.', 'Mx.'].map((title) => (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setFormData({ ...formData, title })}
                          className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all ${
                            formData.title === title
                              ? 'bg-teal-600 text-white'
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
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Anna"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                        placeholder="Schmidt"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pb-6 border-b-2 border-slate-100">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Contact</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="anna.schmidt@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="+49 511 123456"
                    />
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Contract Setup</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Current Meter Reading (kWh)
                    </label>
                    <input
                      type="number"
                      name="meterReading"
                      value={formData.meterReading}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                      IBAN (for direct debit)
                    </label>
                    <input
                      type="text"
                      name="iban"
                      value={formData.iban}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-slate-900 font-medium"
                      placeholder="DE89 3704 0044 0532 0130 00"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                SUBMIT APPLICATION
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Plan Card */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black">Green Energy Plan</h3>
                <Zap className="w-12 h-12" />
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-teal-100">Base Price (monthly)</span>
                  <span className="font-bold text-2xl">€9.90</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-teal-100">Energy Price (per kWh)</span>
                  <span className="font-bold text-2xl">€0.28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-100">Contract Duration</span>
                  <span className="font-bold text-xl">12 months</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-teal-50">
                  <strong>100% Renewable Energy</strong> sourced from wind and solar farms across Germany.
                  Fixed price guarantee for your entire contract period.
                </p>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, title: 'No Setup Fees', desc: 'Start immediately with zero activation cost' },
                  { icon: Zap, title: 'Smart Meter', desc: 'Free installation and monitoring included' },
                  { icon: Phone, title: '24/7 Support', desc: 'German-speaking customer service team' },
                  { icon: CreditCard, title: 'Flexible Payment', desc: 'Monthly billing via SEPA or transfer' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {['TÜV Certified', 'ISO 14001', 'OK Power'].map((badge, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-8 h-8 text-teal-400" />
                    </div>
                    <p className="text-xs font-bold text-white">{badge}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
