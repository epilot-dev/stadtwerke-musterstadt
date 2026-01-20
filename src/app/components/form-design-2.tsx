import React from 'react';
import { motion } from 'motion/react';

// Design 2: Dark Luxury
export function FormDesign2() {
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Elegant header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    step === 1 ? 'bg-amber-400 w-8' : 'bg-zinc-700'
                  }`} />
                  {idx < 3 && <div className="w-12 h-px bg-zinc-800" />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <h1 className="text-5xl font-serif text-amber-400 mb-2 tracking-wide">Personal Information</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">Step 1 of 4</p>
        </motion.div>

        {/* Luxury card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900 border border-amber-900/30 rounded-sm p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-400/20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-400/20" />

          {/* Address Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
              <h2 className="text-2xl font-serif text-amber-400 tracking-wider">ADRESSE</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            </div>

            <div className="space-y-6">
              <div className="text-xs text-zinc-600 text-right tracking-wider">* ERFORDERLICH</div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="POSTAL CODE & CITY"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="street"
                    placeholder="STREET"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="houseNumber"
                  placeholder="HOUSENUMBER"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
                <input
                  type="text"
                  name="addressAddition"
                  placeholder="ADDITION"
                  value={formData.addressAddition}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
              </div>

              <input
                type="text"
                name="textInput"
                placeholder="TEXT INPUT"
                value={formData.textInput}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
              <h2 className="text-2xl font-serif text-amber-400 tracking-wider">KONTAKT</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            </div>

            {/* Title selection - luxury style */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {['Mr.', 'Ms. / Mrs.', 'Others', 'Dr.', 'Prof.', 'Prof. Dr.'].map((title) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => handleTitleClick(title)}
                  className={`px-5 py-2 border transition-all font-light tracking-widest text-sm ${
                    formData.title === title
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                      : 'border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
                  }`}
                >
                  {title.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="TELEPHONE"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-black/50 border-b-2 border-zinc-800 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-all font-light tracking-wide"
                />
              </div>
            </div>
          </div>

          {/* Luxury submit button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full mt-12 px-8 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-serif text-xl tracking-widest shadow-lg shadow-amber-900/50 hover:shadow-amber-800/70 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">WEITER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Footer accent */}
        <div className="text-center mt-8">
          <p className="text-zinc-700 text-xs tracking-widest">LUXURY FORM EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
}
