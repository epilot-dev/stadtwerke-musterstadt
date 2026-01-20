import React from 'react';
import { motion } from 'motion/react';
import { Grid3x3, Zap, MapPin, User, Mail, Phone, FileText, CheckCircle2, Shield } from 'lucide-react';

// Design 16: Grid-Based Professional - Organized grid layout with sections
export function FormDesign16() {
  const [formData, setFormData] = React.useState({
    // Address
    postalCode: '',
    street: '',
    houseNumber: '',
    city: '',
    state: '',
    // Personal
    title: 'Mr.',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    // Contact
    email: '',
    phone: '',
    mobile: '',
    // Energy
    meterNumber: '',
    currentProvider: '',
    contractEndDate: '',
    estimatedUsage: '',
    // Preferences
    greenEnergy: true,
    paperlessBilling: false,
    marketingConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const sections = [
    { id: 'address', title: 'Address', icon: MapPin, color: 'blue' },
    { id: 'personal', title: 'Personal', icon: User, color: 'purple' },
    { id: 'contact', title: 'Contact', icon: Mail, color: 'green' },
    { id: 'energy', title: 'Energy', icon: Zap, color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 px-8 border-b-4 border-blue-500">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-9 h-9" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">EIN ENERGIE</h1>
              <p className="text-slate-300 font-medium">Professional Energy Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-slate-400">Service Hotline</p>
              <p className="text-xl font-bold">0800 346 3637</p>
            </div>
            <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between">
            {sections.map((section, idx) => (
              <React.Fragment key={section.id}>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-${section.color}-100 rounded-xl flex items-center justify-center`}>
                    <section.icon className={`w-6 h-6 text-${section.color}-600`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Step {idx + 1}</p>
                    <p className="font-bold text-slate-900">{section.title}</p>
                  </div>
                </div>
                {idx < sections.length - 1 && (
                  <div className="flex-1 mx-6 h-1 bg-slate-200 rounded-full">
                    <div className="h-full w-0 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-slate-900 mb-3">New Customer Application</h2>
          <p className="text-xl text-slate-600">Please complete all sections to process your energy contract</p>
        </div>

        <form>
          {/* Grid Layout */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Address Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-2 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Service Address</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="Berlin"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Street *
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    placeholder="Alexanderplatz"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      House No. *
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    >
                      <option value="">Select</option>
                      <option value="BE">Berlin</option>
                      <option value="BY">Bayern</option>
                      <option value="HH">Hamburg</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-2 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Personal Data</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Title
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Mr.', 'Ms.', 'Mx.', 'Dr.'].map((title) => (
                      <button
                        key={title}
                        type="button"
                        onClick={() => setFormData({ ...formData, title })}
                        className={`py-2.5 rounded-lg font-bold text-sm transition-all ${
                          formData.title === title
                            ? 'bg-purple-500 text-white'
                            : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-purple-300'
                        }`}
                      >
                        {title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="Müller"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-slate-900 font-semibold"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-2 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Contact Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    placeholder="max.muller@email.de"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="+49 30 123456"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Mobile (Optional)
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-all text-slate-900 font-semibold"
                      placeholder="+49 151 123456"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Energy Details Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-2 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Energy Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Meter Number
                  </label>
                  <input
                    type="text"
                    name="meterNumber"
                    value={formData.meterNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    placeholder="DE1234567890123456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Current Provider
                    </label>
                    <select
                      name="currentProvider"
                      value={formData.currentProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    >
                      <option value="">Select</option>
                      <option value="eon">E.ON</option>
                      <option value="octopus">Octopus Energy</option>
                      <option value="badenova">Badenova</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                      Contract End Date
                    </label>
                    <input
                      type="date"
                      name="contractEndDate"
                      value={formData.contractEndDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">
                    Estimated Annual Usage (kWh)
                  </label>
                  <input
                    type="number"
                    name="estimatedUsage"
                    value={formData.estimatedUsage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-semibold"
                    placeholder="3500"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Preferences Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900 text-white rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Your Preferences</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <label className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border-2 border-white/10 cursor-pointer hover:border-blue-400 transition-all">
                <input
                  type="checkbox"
                  name="greenEnergy"
                  checked={formData.greenEnergy}
                  onChange={handleChange}
                  className="mt-1 w-6 h-6 rounded border-2 border-white/30 text-green-500 focus:ring-green-500"
                />
                <div>
                  <p className="font-black mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    100% Green Energy
                  </p>
                  <p className="text-sm text-slate-400">Renewable sources only</p>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border-2 border-white/10 cursor-pointer hover:border-blue-400 transition-all">
                <input
                  type="checkbox"
                  name="paperlessBilling"
                  checked={formData.paperlessBilling}
                  onChange={handleChange}
                  className="mt-1 w-6 h-6 rounded border-2 border-white/30 text-blue-500 focus:ring-blue-500"
                />
                <div>
                  <p className="font-black mb-1">Paperless Billing</p>
                  <p className="text-sm text-slate-400">Digital invoices only</p>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border-2 border-white/10 cursor-pointer hover:border-blue-400 transition-all">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 w-6 h-6 rounded border-2 border-white/30 text-purple-500 focus:ring-purple-500"
                />
                <div>
                  <p className="font-black mb-1">Marketing Updates</p>
                  <p className="text-sm text-slate-400">Special offers & news</p>
                </div>
              </label>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-blue-200 transition-all"
          >
            SUBMIT APPLICATION
          </motion.button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Protected by SSL encryption • All data is transmitted securely
          </p>
        </form>
      </div>
    </div>
  );
}
