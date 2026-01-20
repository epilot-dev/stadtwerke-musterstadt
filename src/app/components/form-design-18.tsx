import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Flame, Droplets, Plug, ChevronRight } from 'lucide-react';

// Design 18: Launcher Form - Vertical Side Tabs with Icon Badges
export function FormDesign18() {
  const [activeTab, setActiveTab] = React.useState('electricity');
  const [formData, setFormData] = React.useState({
    postalCode: '',
    street: '',
    houseNumber: '',
    usage: ''
  });

  const tabs = [
    { 
      id: 'electricity', 
      label: 'Strom', 
      icon: Zap, 
      color: 'blue',
      title: '100% Ökostrom',
      subtitle: 'Grüne Energie für Ihr Zuhause'
    },
    { 
      id: 'gas', 
      label: 'Gas', 
      icon: Flame, 
      color: 'orange',
      title: 'Klimaneutrales Gas',
      subtitle: 'Umweltfreundlich heizen'
    },
    { 
      id: 'water', 
      label: 'Wasser', 
      icon: Droplets, 
      color: 'cyan',
      title: 'Trinkwasser',
      subtitle: 'Beste Qualität garantiert'
    },
    { 
      id: 'charging', 
      label: 'Ladestrom', 
      icon: Plug, 
      color: 'purple',
      title: 'E-Mobilität',
      subtitle: 'Laden Sie günstiger'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { bg: 'bg-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600' },
      orange: { bg: 'bg-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-600' },
      cyan: { bg: 'bg-cyan-500', bgLight: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-600' },
      purple: { bg: 'bg-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600' }
    };
    return colors[color];
  };

  const colorClasses = getColorClasses(activeTabData.color);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="flex min-h-screen">
        {/* Vertical Sidebar Tabs */}
        <div className="w-80 bg-slate-900 p-8 flex flex-col">
          <div className="mb-12">
            <h1 className="text-2xl font-black text-white mb-2">Energieportal</h1>
            <p className="text-slate-400 text-sm">Wählen Sie Ihre Energieart</p>
          </div>

          <div className="space-y-4 flex-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const colors = getColorClasses(tab.color);
              
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all relative ${
                    isActive
                      ? 'bg-white text-slate-900'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      isActive ? colors.bg : 'bg-slate-700'
                    }`}>
                      <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-lg mb-0.5 ${isActive ? 'text-slate-900' : 'text-slate-300'}`}>
                        {tab.label}
                      </p>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-sm text-slate-600"
                        >
                          Aktiv
                        </motion.p>
                      )}
                    </div>
                    {isActive && (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeVerticalTab"
                      className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bg} rounded-r-full`}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 p-5 bg-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm mb-2">Hilfe benötigt?</p>
            <p className="text-white font-bold">0800 123 4567</p>
            <p className="text-slate-400 text-xs mt-1">Mo-Fr: 8:00 - 18:00 Uhr</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {/* Header */}
              <div className={`inline-block px-4 py-2 rounded-full ${colorClasses.bgLight} ${colorClasses.text} font-semibold text-sm mb-6`}>
                {activeTabData.label}
              </div>
              
              <h2 className="text-5xl font-black text-slate-900 mb-4">
                {activeTabData.title}
              </h2>
              <p className="text-xl text-slate-600 mb-12">
                {activeTabData.subtitle}
              </p>

              {/* Pattern Background */}
              <div className="relative">
                <div className={`absolute inset-0 ${colorClasses.bgLight} opacity-30 rounded-3xl`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, ${activeTabData.color === 'blue' ? '#3b82f6' : activeTabData.color === 'orange' ? '#f97316' : activeTabData.color === 'cyan' ? '#06b6d4' : '#a855f7'} 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    opacity: 0.1
                  }} />
                </div>

                {/* Form Card */}
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-slate-100">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        Postleitzahl & Ort *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:${colorClasses.border} focus:outline-none transition-all text-slate-900 font-semibold text-lg`}
                        placeholder="Postleitzahl oder Wohnort"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                          Straße
                        </label>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:${colorClasses.border} focus:outline-none transition-all text-slate-900 font-semibold`}
                          placeholder="Straßenname"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                          Nr.
                        </label>
                        <input
                          type="text"
                          name="houseNumber"
                          value={formData.houseNumber}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:${colorClasses.border} focus:outline-none transition-all text-slate-900 font-semibold`}
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        {activeTabData.label}verbrauch in kWh/Jahr *
                      </label>
                      <div className="relative">
                        <activeTabData.icon className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${colorClasses.text}`} />
                        <input
                          type="number"
                          name="usage"
                          value={formData.usage}
                          onChange={handleChange}
                          className={`w-full pl-14 pr-5 py-4 border-2 border-slate-200 rounded-xl focus:${colorClasses.border} focus:outline-none transition-all text-slate-900 font-semibold text-lg`}
                          placeholder="z.B. 3500"
                        />
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className={`${colorClasses.bgLight} border-2 ${colorClasses.border} rounded-xl p-5`}>
                      <p className="text-sm text-slate-700">
                        <strong>Tipp:</strong> Ein durchschnittlicher Haushalt mit 3 Personen verbraucht ca. 3.500 kWh pro Jahr.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={`w-full ${colorClasses.bg} text-white py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2`}
                    >
                      Tarif berechnen
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
