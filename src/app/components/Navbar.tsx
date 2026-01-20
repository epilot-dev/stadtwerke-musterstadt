import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Define the navigation structure
const NAV_ITEMS = [
  { name: "Ökostrom", href: "#" },
  { 
    name: "WärmeStrom & Gas", 
    href: "#",
    subItems: [
      { name: "Wärmestromtarife", href: "#" },
      { name: "Wärmepumpe", href: "#" },
      { name: "Gastarife", href: "#" },
      { name: "Fernwärme", href: "#" },
    ]
  },
  { 
    name: "E-Mobilität", 
    href: "#",
    subItems: [
      { name: "Ladestromtarife", href: "#" },
      { name: "Wallbox", href: "#" },
    ]
  },
  { 
    name: "Solar", 
    href: "#",
    subItems: [
      { name: "Photovoltaik", href: "#" },
      { name: "Balkonkraftwerke", href: "#" },
    ]
  },
  { name: "Netz", href: "#" },
  { name: "Service", href: "#" },
  { name: "Über uns", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  // Track which dropdown is open on desktop (for hover/click)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }
      const diff = currentScrollY - lastScrollY.current;
      const threshold = 10;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) setIsScrolled(true);
        else setIsScrolled(false);
        lastScrollY.current = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  const baseLinkClass = "text-sm font-medium text-gray-700 px-4 py-2 rounded-full transition-colors flex items-center gap-2 cursor-pointer";
  const standardLinkClass = `${baseLinkClass} hover:bg-[#deff03] hover:text-black`;

  return (
    <>
      {/* Spacer to prevent content jump since Navbar is fixed */}
      <div className="h-16 xl:h-24 w-full bg-transparent" aria-hidden="true" />

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 shadow-sm ${
          isScrolled ? "h-16" : "h-16 xl:h-24"
        }`}
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6 h-full flex items-center justify-between">
          <a 
            href="/" 
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "w-32" : "w-32 xl:w-48"
            }`}
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  className={`${standardLinkClass} ${activeDropdown === item.name ? 'bg-[#deff03] text-black' : ''}`}
                >
                  {item.name}
                  {item.subItems && <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </a>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      >
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center h-full">
            <a href="#" className={standardLinkClass}>
              <User className="w-4 h-4" />
              <span>Kundenportal</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-gray-100 bg-white overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col py-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.name} className="group relative border-b border-gray-50 last:border-0">
                    {/* Hover Bar - Neon Yellow */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#deff03] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    <div 
                      className="flex items-center justify-between px-6 py-4 cursor-pointer"
                      onClick={() => item.subItems ? toggleMobileSubmenu(item.name) : setIsOpen(false)}
                    >
                      <a 
                        href={item.href}
                        className="text-lg font-medium text-gray-900"
                        onClick={(e) => {
                          if (item.subItems) e.preventDefault();
                        }}
                      >
                        {item.name}
                      </a>
                      {item.subItems && (
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {item.subItems && (
                      <AnimatePresence>
                        {mobileExpanded === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            <div className="flex flex-col py-2">
                              {item.subItems.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  className="px-8 py-3 text-gray-600 text-base border-b border-gray-100 last:border-0 hover:bg-gray-100"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}