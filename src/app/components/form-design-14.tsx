import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Home, Zap, BarChart3, Settings, Bell, Search, ChevronDown } from 'lucide-react';

// Design 14: Dashboard Style - Modern utility company portal feel
export function FormDesign14() {
  const [formData, setFormData] = React.useState({
    accountType: 'residential',
    postalCode: '',
    street: '',
    houseNumber: '',
    apartment: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentProvider: '',
    estimatedUsage: '',
    tariffType: 'standard'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-100" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-black text-slate-900">EVM PORTAL</h1>
                  <p className="text-xs text-slate-500">Energy • Gas • Services</p>
                </div>
              </div>
              <nav className="flex gap-6">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard', active: true },
                  { icon: Home, label: 'My Contracts', active: false },
                  { icon: BarChart3, label: 'Usage', active: false },
                  { icon: Settings, label: 'Settings', active: false }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      item.active
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <ChevronDown className="w-4 h-4 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 mb-2">New Service Request</h2>
          <p className="text-slate-600">Set up your energy supply in just a few minutes</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Form - 2 columns */}
          <div className="col-span-2 space-y-6">
            {/* Account Type Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Account Type</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'residential', label: 'Residential', desc: 'Private household' },
                  { value: 'business', label: 'Business', desc: 'Company or organization' }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: type.value })}
                    className={`p-5 rounded-lg border-2 text-left transition-all ${
                      formData.accountType === type.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-slate-900 mb-1">{type.label}</p>
                    <p className="text-sm text-slate-600">{type.desc}</p>
                    {formData.accountType === type.value && (
                      <div className="mt-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Service Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Service Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    POSTAL CODE *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                    placeholder="56068"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    STREET *
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                    placeholder="Street name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    HOUSE NUMBER *
                  </label>
                  <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                    placeholder="123"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    APARTMENT (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                    placeholder="Apt 4B"
                  />
                </div>
              </div>
            </motion.div>

            {/* Personal Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    TITLE
                  </label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mx.">Mx.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                      placeholder="+49 261 123456"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Energy Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Energy Requirements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    CURRENT PROVIDER
                  </label>
                  <select
                    name="currentProvider"
                    value={formData.currentProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                  >
                    <option value="">Select provider</option>
                    <option value="eon">E.ON</option>
                    <option value="badenova">Badenova</option>
                    <option value="enercity">Enercity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    ESTIMATED ANNUAL USAGE (kWh)
                  </label>
                  <input
                    type="number"
                    name="estimatedUsage"
                    value={formData.estimatedUsage}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-900"
                    placeholder="3500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    TARIFF TYPE
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'standard', label: 'Standard' },
                      { value: 'eco', label: 'Eco Green' },
                      { value: 'premium', label: 'Premium' }
                    ].map((tariff) => (
                      <button
                        key={tariff.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, tariffType: tariff.value })}
                        className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                          formData.tariffType === tariff.value
                            ? 'bg-orange-500 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {tariff.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Submit Service Request
            </motion.button>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg"
            >
              <h3 className="font-bold text-lg mb-4 opacity-90">Estimated Monthly Cost</h3>
              <div className="text-5xl font-black mb-2">€42</div>
              <p className="text-sm opacity-80">Based on average household usage</p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between mb-2">
                  <span className="text-sm opacity-80">Base price</span>
                  <span className="font-bold">€9.90</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Usage (est.)</span>
                  <span className="font-bold">€32.10</span>
                </div>
              </div>
            </motion.div>

            {/* Help Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">Customer Service</p>
                    <p className="text-xs text-slate-600">Mon-Fri: 8am - 6pm</p>
                    <p className="text-sm font-bold text-orange-600 mt-1">0800 123 4567</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Documents Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">Required Documents</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Valid ID or passport
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Proof of address
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Previous energy bill (optional)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
