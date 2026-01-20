import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#deff03] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
