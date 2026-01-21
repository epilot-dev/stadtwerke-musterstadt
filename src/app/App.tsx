import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { PasskeyGate } from './components/PasskeyGate';
import { NotFound } from './components/NotFound';

function HomePage() {
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

export default function App() {
  return (
    <PasskeyGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PasskeyGate>
  );
}
