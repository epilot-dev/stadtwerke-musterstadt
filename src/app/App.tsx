import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FormDesign1 } from './components/form-design-1';
import { FormDesign2 } from './components/form-design-2';
import { FormDesign3 } from './components/form-design-3';
import { FormDesign4 } from './components/form-design-4';
import { FormDesign5 } from './components/form-design-5';
import { FormDesign6 } from './components/form-design-6';
import { FormDesign7 } from './components/form-design-7';
import { FormDesign8 } from './components/form-design-8';
import { FormDesign9 } from './components/form-design-9';
import { FormDesign10 } from './components/form-design-10';
import { FormDesign11 } from './components/form-design-11';
import { FormDesign12 } from './components/form-design-12';
import { FormDesign13 } from './components/form-design-13';
import { FormDesign14 } from './components/form-design-14';
import { FormDesign15 } from './components/form-design-15';
import { FormDesign16 } from './components/form-design-16';
import { FormDesign17 } from './components/form-design-17';
import { FormDesign18 } from './components/form-design-18';
import { FormDesign19 } from './components/form-design-19';
import { FormDesign20 } from './components/form-design-20';
import { FormDesign21 } from './components/form-design-21';
import { FormDesign22 } from './components/form-design-22';
import { FormDesign23 } from './components/form-design-23';
import { FormDesign24 } from './components/form-design-24';
import { FormDesign25 } from './components/form-design-25';
import { Palette, Sparkles, Crown, Box, Leaf, Zap, Split, Layers, Cloud, Radio, Building2, LayoutList, LayoutGrid, LayoutDashboard, Minimize2, Grid3x3, TabletSmartphone, PanelLeftOpen, Wand2, Map, MapPinned, Globe, ArrowRightLeft, LayoutPanelTop, Percent } from 'lucide-react';

export default function App() {
  const [currentDesign, setCurrentDesign] = useState(1);

  const designs = [
    {
      id: 1,
      name: 'Gradient Glass',
      description: 'Modern glassmorphism with vibrant gradients',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      component: FormDesign1
    },
    {
      id: 2,
      name: 'Dark Luxury',
      description: 'Elegant dark theme with gold accents',
      icon: Crown,
      color: 'from-amber-600 to-amber-400',
      component: FormDesign2
    },
    {
      id: 3,
      name: 'Playful Colors',
      description: 'Bright, fun and colorful design',
      icon: Palette,
      color: 'from-pink-500 to-blue-500',
      component: FormDesign3
    },
    {
      id: 4,
      name: 'Minimal Brutalism',
      description: 'Bold typography with stark contrasts',
      icon: Box,
      color: 'from-black to-zinc-800',
      component: FormDesign4
    },
    {
      id: 5,
      name: 'Eco Energy',
      description: 'Sustainable green with organic shapes',
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      component: FormDesign5
    },
    {
      id: 6,
      name: 'Neon Electric',
      description: 'Futuristic with glowing neon effects',
      icon: Zap,
      color: 'from-cyan-500 to-purple-500',
      component: FormDesign6
    },
    {
      id: 7,
      name: 'Split Screen',
      description: 'Professional split layout design',
      icon: Split,
      color: 'from-blue-600 to-cyan-500',
      component: FormDesign7
    },
    {
      id: 8,
      name: 'Card Steps',
      description: 'Clean card-based progressive form',
      icon: Layers,
      color: 'from-blue-500 to-purple-600',
      component: FormDesign8
    },
    {
      id: 9,
      name: 'Floating Islands',
      description: 'Unique spatial floating layout',
      icon: Cloud,
      color: 'from-indigo-500 to-pink-500',
      component: FormDesign9
    },
    {
      id: 10,
      name: 'Retro Future',
      description: 'Vintage meets modern energy',
      icon: Radio,
      color: 'from-orange-500 to-yellow-500',
      component: FormDesign10
    },
    {
      id: 11,
      name: 'Corporate Split',
      description: 'Professional split view with info panel',
      icon: Building2,
      color: 'from-blue-600 to-blue-800',
      component: FormDesign11
    },
    {
      id: 12,
      name: 'Multi-Step Wizard',
      description: 'Step-by-step progress form',
      icon: LayoutList,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign12
    },
    {
      id: 13,
      name: 'Two-Column Pro',
      description: 'Side-by-side professional layout',
      icon: LayoutGrid,
      color: 'from-teal-600 to-cyan-600',
      component: FormDesign13
    },
    {
      id: 14,
      name: 'Dashboard Portal',
      description: 'Modern utility portal interface',
      icon: LayoutDashboard,
      color: 'from-orange-500 to-red-600',
      component: FormDesign14
    },
    {
      id: 15,
      name: 'Minimalist Premium',
      description: 'Clean sophisticated design',
      icon: Minimize2,
      color: 'from-emerald-600 to-teal-600',
      component: FormDesign15
    },
    {
      id: 16,
      name: 'Grid Professional',
      description: 'Organized grid-based layout',
      icon: Grid3x3,
      color: 'from-blue-600 to-blue-500',
      component: FormDesign16
    },
    {
      id: 17,
      name: 'Tabbed Interface',
      description: 'Modern tabbed form design',
      icon: TabletSmartphone,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign17
    },
    {
      id: 18,
      name: 'Panel Layout',
      description: 'Side panel with form content',
      icon: PanelLeftOpen,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign18
    },
    {
      id: 19,
      name: 'Sparkle Effect',
      description: 'Form with sparkling elements',
      icon: Wand2,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign19
    },
    {
      id: 20,
      name: 'Map Integration',
      description: 'Form with integrated map',
      icon: Map,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign20
    },
    {
      id: 21,
      name: 'Pinned Map',
      description: 'Form with pinned map location',
      icon: MapPinned,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign21
    },
    {
      id: 22,
      name: 'Global Reach',
      description: 'Form with global map view',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign22
    },
    {
      id: 23,
      name: 'Bidirectional Flow',
      description: 'Form with bidirectional data flow',
      icon: ArrowRightLeft,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign23
    },
    {
      id: 24,
      name: 'Top Panel Layout',
      description: 'Top panel with form content',
      icon: LayoutPanelTop,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign24
    },
    {
      id: 25,
      name: 'Percentage Progress',
      description: 'Form with percentage progress indicator',
      icon: Percent,
      color: 'from-blue-500 to-indigo-600',
      component: FormDesign25
    }
  ];

  const CurrentComponent = designs[currentDesign - 1].component;

  return (
    <div className="relative min-h-screen">
      {/* Navigation sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-zinc-950 border-r border-zinc-800 z-50 flex flex-col p-6 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Form Design Explorer</h1>
          <p className="text-zinc-400 text-sm">25 unique modern form variations</p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          {designs.map((design) => {
            const Icon = design.icon as React.ElementType;
            const isActive = currentDesign === design.id;
            
            return (
              <motion.button
                key={design.id}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentDesign(design.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all relative overflow-hidden group ${
                  isActive 
                    ? 'bg-white text-black shadow-lg' 
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {/* Gradient background for active state */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-10`} />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      isActive 
                        ? `bg-gradient-to-br ${design.color} text-white` 
                        : 'bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`text-2xl font-black ${isActive ? 'text-black' : ''}`}>
                      {design.id}
                    </div>
                  </div>
                  <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-black' : ''}`}>
                    {design.name}
                  </h3>
                  <p className={`text-sm ${
                    isActive ? 'text-zinc-700' : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}>
                    {design.description}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b ${design.color} rounded-full`}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-6 border-t border-zinc-800">
          <div className="text-center">
            <p className="text-zinc-600 text-xs mb-2">Currently viewing</p>
            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${designs[currentDesign - 1].color} text-white font-bold text-sm`}>
              Design {currentDesign} of 25
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="ml-80 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDesign}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}