import React from 'react';
import { NetzNavbar } from '@/app/components/NetzNavbar';
import { NetzHero } from '@/app/components/NetzHero';
import { NetzFeatures } from '@/app/components/NetzFeatures';
import { Footer } from '@/app/components/Footer';

export default function Netz() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#63BEF8] selection:text-black">
      <NetzNavbar />
      <main>
        <NetzHero />
        <NetzFeatures />
      </main>
      <Footer variant="netz" />
    </div>
  );
}
