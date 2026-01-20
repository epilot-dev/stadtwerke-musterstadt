import React from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Radio } from 'lucide-react';

// Design 6: Neon Electric - Futuristic & Glowing
export function FormDesign6() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTitleClick = (title: string) => {
    setFormData({ ...formData, title });
  };

  return (
    <div className="min-h-screen bg-black py-16 px-6 relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-30 animate-pulse animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] opacity-20 animate-pulse animation-delay-4000" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Neon header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              textShadow: [
                '0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6)',
                '0 0 20px rgba(255,0,255,0.8), 0 0 40px rgba(255,0,255,0.6)',
                '0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4"
          >
            ELECTRIC
          </motion.div>
          <p className="text-cyan-400 text-xl font-bold tracking-widest">POWER YOUR FUTURE</p>
        </motion.div>

        {/* Neon progress */}
        <div className="flex justify-center items-center gap-1 mb-12">
          {[1, 2, 3, 4].map((step, idx) => (
            <React.Fragment key={step}>
              <motion.div
                animate={step === 1 ? { 
                  boxShadow: [
                    '0 0 10px rgba(0,255,255,0.8)',
                    '0 0 20px rgba(0,255,255,1)',
                    '0 0 10px rgba(0,255,255,0.8)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-14 h-14 flex items-center justify-center font-black border-2 ${
                  step === 1
                    ? 'bg-cyan-500 border-cyan-400 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-600'
                }`}
              >
                {step}
              </motion.div>
              {idx < 3 && (
                <div className={`w-12 h-0.5 ${step === 1 ? 'bg-cyan-500 shadow-lg shadow-cyan-500/50' : 'bg-zinc-800'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Neon form card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-950 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-10"
        >
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 shadow-lg shadow-cyan-400/50" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400 shadow-lg shadow-pink-400/50" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 shadow-lg shadow-purple-400/50" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 shadow-lg shadow-cyan-400/50" />

          {/* Energy meter */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-zinc-900 border border-cyan-500/30 p-4 relative overflow-hidden group">
              <Zap className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-3xl font-black text-cyan-400">98%</div>
              <div className="text-xs text-cyan-600 uppercase tracking-widest">Efficiency</div>
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-zinc-900 border border-purple-500/30 p-4 relative overflow-hidden group">
              <Cpu className="w-6 h-6 text-purple-400 mb-2" />
              <div className="text-3xl font-black text-purple-400">24/7</div>
              <div className="text-xs text-purple-600 uppercase tracking-widest">Active</div>
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-zinc-900 border border-pink-500/30 p-4 relative overflow-hidden group">
              <Radio className="w-6 h-6 text-pink-400 mb-2" />
              <div className="text-3xl font-black text-pink-400">5G</div>
              <div className="text-xs text-pink-600 uppercase tracking-widest">Connected</div>
              <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-wider">Location Data</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="text-xs text-pink-500 text-right uppercase tracking-widest">* Required Input</div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="POSTAL CODE & CITY"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-cyan-500/30 text-cyan-100 placeholder-cyan-900 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="street"
                    placeholder="STREET"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-purple-500/30 text-purple-100 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="houseNumber"
                    placeholder="HOUSENUMBER"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-pink-500/30 text-pink-100 placeholder-pink-900 focus:outline-none focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="addressAddition"
                    placeholder="ADDITION"
                    value={formData.addressAddition}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-cyan-500/30 text-cyan-100 placeholder-cyan-900 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="textInput"
                  placeholder="TEXT INPUT"
                  value={formData.textInput}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black border-2 border-purple-500/30 text-purple-100 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/50 transition-all uppercase text-sm tracking-widest"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
              <h2 className="text-2xl font-black text-pink-400 uppercase tracking-wider">Contact Info</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
            </div>

            {/* Neon title buttons */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {['Mr.', 'Ms. / Mrs.', 'Others', 'Dr.', 'Prof.', 'Prof. Dr.'].map((title, idx) => {
                const colors = ['cyan', 'purple', 'pink', 'cyan', 'purple', 'pink'];
                const color = colors[idx];
                return (
                  <motion.button
                    key={title}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTitleClick(title)}
                    className={`px-5 py-2 border-2 font-bold uppercase text-xs tracking-widest transition-all ${
                      formData.title === title
                        ? `bg-${color}-500 border-${color}-400 text-black shadow-lg shadow-${color}-500/50`
                        : `border-${color}-500/30 text-${color}-500 hover:bg-${color}-500/10`
                    }`}
                    style={formData.title === title ? {
                      backgroundColor: `var(--color-${color}-500)`,
                      borderColor: `var(--color-${color}-400)`,
                      boxShadow: `0 10px 25px -5px rgba(${color === 'cyan' ? '6,182,212' : color === 'purple' ? '168,85,247' : '236,72,153'},0.5)`
                    } : {
                      borderColor: `rgba(${color === 'cyan' ? '6,182,212' : color === 'purple' ? '168,85,247' : '236,72,153'},0.3)`,
                      color: `rgb(${color === 'cyan' ? '34,211,238' : color === 'purple' ? '192,132,252' : '244,114,182'})`
                    }}
                  >
                    {title}
                  </motion.button>
                );
              })}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-cyan-500/30 text-cyan-100 placeholder-cyan-900 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-purple-500/30 text-purple-100 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-MAIL*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-pink-500/30 text-pink-100 placeholder-pink-900 focus:outline-none focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative group">
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="TELEPHONE"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black border-2 border-cyan-500/30 text-cyan-100 placeholder-cyan-900 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/50 transition-all uppercase text-sm tracking-widest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Neon submit button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(168,85,247,0.3)',
                '0 0 40px rgba(168,85,247,0.5), 0 0 60px rgba(236,72,153,0.3)',
                '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(168,85,247,0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full mt-10 px-8 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-black text-xl uppercase tracking-widest relative overflow-hidden group"
          >
            <span className="relative z-10">Activate Power</span>
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
