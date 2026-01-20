import React from 'react';
import { motion } from 'motion/react';

// Design 4: Minimal Brutalism
export function FormDesign4() {
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

  const [currentStep] = React.useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTitleClick = (title: string) => {
    setFormData({ ...formData, title });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Bold header */}
      <div className="bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4"
          >
            FORM
          </motion.h1>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black">STEP</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-16 h-3 ${
                    step === currentStep ? 'bg-yellow-400' : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>
            <div className="text-2xl font-black">01/04</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Address Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="mb-10">
            <h2 className="text-5xl font-black uppercase mb-2 tracking-tighter">
              PERSÖNLICHE
            </h2>
            <h2 className="text-5xl font-black uppercase mb-4 tracking-tighter text-yellow-400">
              DETAILS
            </h2>
            <div className="h-2 w-32 bg-black" />
          </div>

          <div className="space-y-1">
            <div className="text-sm font-black uppercase tracking-wider text-right mb-6 text-red-600">
              * REQUIRED INPUT
            </div>
            
            <div className="mb-6">
              <div className="text-2xl font-black uppercase mb-4">ADRESSE</div>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  POSTAL CODE & CITY
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  STREET
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-8">
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  HOUSENUMBER
                </label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  ADDITION
                </label>
                <input
                  type="text"
                  name="addressAddition"
                  value={formData.addressAddition}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                TEXT INPUT
              </label>
              <input
                type="text"
                name="textInput"
                value={formData.textInput}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-10">
            <h2 className="text-5xl font-black uppercase mb-2 tracking-tighter">
              KONTAKT
            </h2>
            <h2 className="text-5xl font-black uppercase mb-4 tracking-tighter text-yellow-400">
              INFORMATIONEN
            </h2>
            <div className="h-2 w-32 bg-black" />
          </div>

          {/* Title selection - brutalist style */}
          <div className="mb-8">
            <div className="text-xs font-black uppercase mb-4 tracking-wider">SELECT TITLE</div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
              {['Mr.', 'Ms. / Mrs.', 'Others', 'Dr.', 'Prof.', 'Prof. Dr.'].map((title) => (
                <motion.button
                  key={title}
                  type="button"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTitleClick(title)}
                  className={`px-4 py-4 border-4 font-black uppercase text-sm transition-all ${
                    formData.title === title
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-black hover:bg-yellow-400'
                  }`}
                >
                  {title}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <div className="grid grid-cols-2 gap-1">
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  FIRST NAME*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  LAST NAME*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold uppercase focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-8">
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  E-MAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 tracking-wider">
                  TELEPHONE
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-4 border-black text-xl font-bold focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brutalist submit button */}
        <motion.button
          whileHover={{ scale: 0.98, x: 8, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-16 px-8 py-8 bg-black text-white border-8 border-black font-black text-4xl uppercase tracking-tighter relative group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(250,204,21,1)] transition-all"
        >
          <span className="flex items-center justify-center gap-4">
            WEITER
            <span className="text-yellow-400 text-5xl">→</span>
          </span>
        </motion.button>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-6 px-6 border-t-8 border-black mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-black uppercase tracking-widest">BRUTALIST DESIGN SYSTEM 2026</p>
        </div>
      </div>
    </div>
  );
}
