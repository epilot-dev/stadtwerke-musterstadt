import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Flame, Droplets, Plug, Home, TrendingDown } from 'lucide-react';

// Design 19: Launcher Form - Pill-Shaped Floating Tabs with Card-Based Form
export function FormDesign19() {
  const [activeTab, setActiveTab] = React.useState('electricity');
  const [formData, setFormData] = React.useState({
    postalCode: '',
    usage: '',
    tariffType: 'standard'
  });

  const tabs = [
    { id: 'electricity', label: 'Strom', icon: Zap, gradient: 'from-blue-600 via-blue-500 to-cyan-500' },
    { id: 'gas', label: 'Gas', icon: Flame, gradient: 'from-orange-600 via-orange-500 to-yellow-500' },
    { id: 'water', label: 'Wasser', icon: Droplets, gradient: 'from-cyan-600 via-teal-500 to-blue-500' },
    { id: 'charging', label: 'Ladestrom', icon: Plug, gradient: 'from-purple-600 via-purple-500 to-pink-500' }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeTabData.gradient} transition-all duration-700`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Floating Pill Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white/20 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-white/30">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xl'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="pillTab"
                      className="absolute inset-0 bg-white rounded-full"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {/* Left Card - Info */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <activeTabData.icon className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-black mb-4">
                  {activeTab === 'electricity' && '100% Ökostrom'}
                  {activeTab === 'gas' && 'Klimaneutrales Gas'}
                  {activeTab === 'water' && 'Premium Wasser'}
                  {activeTab === 'charging' && 'E-Auto Laden'}
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  {activeTab === 'electricity' && 'Nachhaltige Energie aus 100% erneuerbaren Quellen. Gut für Sie und die Umwelt.'}
                  {activeTab === 'gas' && 'CO₂-kompensiertes Erdgas für umweltbewusstes Heizen in Ihrem Zuhause.'}
                  {activeTab === 'water' && 'Sauberes Trinkwasser in höchster Qualität für Ihren täglichen Bedarf.'}
                  {activeTab === 'charging' && 'Günstiger Ladestrom für Ihr Elektrofahrzeug. Laden Sie smart und sparen Sie.'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Faire Preise</p>
                    <p className="text-white/70 text-sm">Transparente Kostenstruktur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Lokaler Service</p>
                    <p className="text-white/70 text-sm">Persönliche Betreuung vor Ort</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Form */}
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Tarif berechnen
                </h3>
                <p className="text-slate-600 text-lg">
                  Finden Sie das beste Angebot für Ihren Bedarf
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Postleitzahl oder Wohnort *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                    placeholder="z.B. 10115 Berlin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Verbrauch in kWh pro Jahr *
                  </label>
                  <div className="relative">
                    <activeTabData.icon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      className="w-full pl-14 pr-5 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-slate-900 font-medium text-lg"
                      placeholder="3500"
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Durchschnitt: 1 Person ≈ 1.500 kWh | 2 Personen ≈ 2.500 kWh
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Tarifart
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'standard', label: 'Standard', desc: 'Bewährt & günstig' },
                      { value: 'premium', label: 'Premium', desc: 'Extra Leistungen' }
                    ].map((tariff) => (
                      <button
                        key={tariff.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, tariffType: tariff.value })}
                        className={`p-4 rounded-xl text-left transition-all ${
                          formData.tariffType === tariff.value
                            ? 'bg-slate-900 text-white shadow-xl'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <p className="font-bold mb-1">{tariff.label}</p>
                        <p className="text-xs opacity-70">{tariff.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full bg-gradient-to-r ${activeTabData.gradient} text-white py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all`}
                >
                  Jetzt Tarif berechnen
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  Kostenlos und unverbindlich • Sofortige Berechnung
                </p>
              </form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
