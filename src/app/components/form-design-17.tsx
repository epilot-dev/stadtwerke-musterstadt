import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Flame, Droplets, Plug, Users } from 'lucide-react';
import { unsplash_tool } from '@/tools';

// Design 17: Launcher Form - Modern Gradient Tabs with Split Layout
export function FormDesign17() {
  const [activeTab, setActiveTab] = React.useState('electricity');
  const [formData, setFormData] = React.useState({
    postalCode: '',
    usage: '',
    householdSize: '1'
  });

  const tabs = [
    { id: 'electricity', label: 'Strom', icon: Zap, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { id: 'gas', label: 'Gas', icon: Flame, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50' },
    { id: 'water', label: 'Wasser', icon: Droplets, color: 'from-teal-500 to-blue-500', bgColor: 'bg-teal-50' },
    { id: 'charging', label: 'Ladestrom', icon: Plug, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50' }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all ${
                  isActive
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-xl`
                    : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-12 items-center"
          >
            {/* Left - Illustration */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activeTabData.color} opacity-20 blur-3xl rounded-full`} />
              <div className="relative bg-white rounded-[3rem] p-12 shadow-2xl">
                <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${activeTabData.color} flex items-center justify-center`}>
                    <activeTabData.icon className="w-24 h-24 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {activeTabData.label === 'Strom' && '100% Ökostrom garantiert'}
                    {activeTabData.label === 'Gas' && 'Klimaneutrales Erdgas'}
                    {activeTabData.label === 'Wasser' && 'Frisches Trinkwasser'}
                    {activeTabData.label === 'Ladestrom' && 'Schnellladen für E-Autos'}
                  </h3>
                  <p className="text-slate-600">
                    {activeTabData.label === 'Strom' && 'Aus erneuerbaren Energiequellen'}
                    {activeTabData.label === 'Gas' && 'CO₂-kompensiert und regional'}
                    {activeTabData.label === 'Wasser' && 'Höchste Qualitätsstandards'}
                    {activeTabData.label === 'Ladestrom' && 'Günstige Tarife für Elektromobilität'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-10 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  In wenigen Schritten zu Ihrem {activeTabData.label}tarif
                </h2>
                <p className="text-slate-600 text-lg">Jetzt Tarif berechnen</p>
              </div>

              <form className="space-y-6">
                {/* Household Size Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    {activeTabData.label === 'Strom' || activeTabData.label === 'Ladestrom' ? 'Ihr Stromverbrauch' : 'Ihr Verbrauch'}
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {[1, 2, 3, 4, '5+'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, householdSize: String(size) })}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                          formData.householdSize === String(size)
                            ? `bg-gradient-to-br ${activeTabData.color} text-white shadow-lg`
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Users className="w-6 h-6 mb-1" />
                        <span className="font-bold">{size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Usage Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    {activeTabData.label}verbrauch in kWh pro Jahr *
                  </label>
                  <div className="relative">
                    <activeTabData.icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="z.B. 3500"
                    />
                  </div>
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Postleitzahl & Ort *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                    placeholder="Postleitzahl oder Wohnort"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full bg-gradient-to-r ${activeTabData.color} text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all`}
                >
                  Tarif berechnen
                </motion.button>

                <p className="text-center text-sm text-slate-500">
                  * Pflichtangabe
                </p>
              </form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
