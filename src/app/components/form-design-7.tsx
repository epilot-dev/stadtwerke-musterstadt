import React from 'react';
import { motion } from 'motion/react';
import { MapPin, User, Mail, Phone, ChevronRight, Zap } from 'lucide-react';

// Design 7: Split Screen Modern - Professional with imagery
export function FormDesign7() {
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
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="w-1/2 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-16 flex flex-col justify-center relative overflow-hidden">
        {/* Abstract energy visual */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Energy Provider</span>
            </div>
          </div>

          <h1 className="text-6xl font-black text-white mb-6 leading-tight">
            Power Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Smart Future
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join thousands of customers who have switched to cleaner, smarter energy solutions. 
            Get started in just a few minutes.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">100% Renewable Energy</h3>
                <p className="text-slate-400 text-sm">Sustainable power from wind and solar sources</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">No Hidden Fees</h3>
                <p className="text-slate-400 text-sm">Transparent pricing with no surprises</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">24/7 Support</h3>
                <p className="text-slate-400 text-sm">Always here when you need us</p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-sm mb-4">Trusted by over 500,000 customers</p>
            <div className="flex gap-6">
              <div className="text-white">
                <div className="text-3xl font-black">4.8</div>
                <div className="text-xs text-slate-400">★★★★★</div>
              </div>
              <div className="h-12 w-px bg-slate-700" />
              <div className="text-white">
                <div className="text-3xl font-black">500K+</div>
                <div className="text-xs text-slate-400">Customers</div>
              </div>
              <div className="h-12 w-px bg-slate-700" />
              <div className="text-white">
                <div className="text-3xl font-black">15</div>
                <div className="text-xs text-slate-400">Years</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="w-1/2 bg-white p-16 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-semibold text-slate-600">Step 1 of 4</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Personal Details</h2>
            <p className="text-slate-600">Let's get to know you better</p>
          </div>

          {/* Address Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Your Address</h3>
            </div>

            <div className="space-y-5">
              <div className="text-xs text-slate-500 text-right">* Required field</div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Postal Code & City*
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="Enter postal code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Street*
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="Street name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    House Number
                  </label>
                  <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="No."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Addition
                  </label>
                  <input
                    type="text"
                    name="addressAddition"
                    value={formData.addressAddition}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="Apt, Suite, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Information
                </label>
                <input
                  type="text"
                  name="textInput"
                  value={formData.textInput}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                  placeholder="Any special instructions"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
            </div>

            {/* Title selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Title</label>
              <div className="flex gap-2 flex-wrap">
                {['Mr.', 'Ms. / Mrs.', 'Others', 'Dr.', 'Prof.', 'Prof. Dr.'].map((title) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => handleTitleClick(title)}
                    className={`px-5 py-2 font-semibold text-sm transition-all ${
                      formData.title === title
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address*
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-8 pr-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Telephone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full pl-8 pr-0 py-3 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-3 group"
          >
            Continue to Next Step
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Footer note */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Your data is secure and encrypted 🔒
          </p>
        </motion.div>
      </div>
    </div>
  );
}
