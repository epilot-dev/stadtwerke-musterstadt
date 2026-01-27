import { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  User,
  ChevronDown,
  Zap,
  Droplet,
  ThermometerSun,
  BatteryCharging,
  Flame,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

// Define the Netz navigation structure
const NETZ_NAV_ITEMS = [
  {
    name: 'Strom',
    href: '#',
    subItems: [
      { name: 'Einspeiser und Verbraucher', href: '/netz/strom/einspeiser', icon: BatteryCharging },
      {
        name: 'Stromanschluss beantragen',
        href: 'https://netz.ecp.epilot.io/',
        external: true,
        icon: Zap,
      },
    ],
  },
  {
    name: 'Erdgas',
    href: '#',
    subItems: [
      {
        name: 'Erdgasanschluss beantragen',
        href: 'https://netz.ecp.epilot.io/',
        external: true,
        icon: Flame,
      },
    ],
  },
  {
    name: 'Wasser',
    href: '#',
    subItems: [
      { name: 'Wasserhausanschluss beantragen', href: '/netz/wasser/anschluss', icon: Droplet },
    ],
  },
  {
    name: 'Fernwärme',
    href: '#',
    subItems: [
      { name: 'Verfügbarkeitscheck', href: '/netz/fernwarme/check', icon: ThermometerSun },
    ],
  },
  { name: 'Service', href: '/service' },
  { name: 'Für Installateure', href: 'https://installateur.ecp.epilot.io/', external: true },
];

export function NetzNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<'vertrieb' | 'netz'>('netz');

  // Track which dropdown is open on desktop (for hover/click)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const baseLinkClass =
    'text-sm font-medium text-gray-700 px-4 py-2 rounded-full transition-colors flex items-center gap-2 cursor-pointer';
  const netzLinkClass = `${baseLinkClass} hover:bg-[#63BEF8] hover:text-black`;

  return (
    <>
      {/* Spacer to prevent content jump since Navbar is fixed */}
      <div
        className={`w-full transition-all duration-300 ${isScrolled ? 'h-16' : 'h-28'}`}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 shadow-sm bg-white`}
        style={{
          height: isScrolled ? '64px' : '112px',
          transition: 'height 300ms',
        }}
      >
        <div
          className={`transition-transform duration-300 ${isScrolled ? '-translate-y-12' : 'translate-y-0'}`}
        >
          {/* First Line - Logo and Segmented Control */}
          <div className="bg-gray-50 border-b border-gray-100 h-12">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-6 h-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/netz" className="flex items-center w-28">
                  <Logo
                    withStripe={true}
                    stripeColor={selectedSegment === 'netz' ? 'blue' : 'yellow'}
                  />
                </a>

                {/* Segmented Control - Vertrieb & Netz */}
                <div className="hidden xl:flex items-center gap-0">
                  <Link
                    to="/"
                    className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 overflow-hidden ${
                      selectedSegment === 'vertrieb'
                        ? 'text-black'
                        : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setSelectedSegment('vertrieb')}
                  >
                    {/* Yellow accent bar - animates from bottom to top */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-1/2 w-[80%] h-3 bg-[#deff03] transition-all duration-300 origin-bottom ${
                        selectedSegment === 'vertrieb'
                          ? 'scale-y-100 opacity-100'
                          : 'scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100'
                      }`}
                    />
                    <FileText className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Vertrieb</span>
                  </Link>
                  <button
                    className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 overflow-hidden ${
                      selectedSegment === 'netz' ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setSelectedSegment('netz')}
                  >
                    {/* Blue accent bar - animates from bottom to top */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-1/2 w-[80%] h-3 bg-[#63BEF8] transition-all duration-300 origin-bottom ${
                        selectedSegment === 'netz'
                          ? 'scale-y-100 opacity-100'
                          : 'scale-y-0 opacity-0'
                      }`}
                    />
                    <Zap className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Netz</span>
                  </button>
                </div>
              </div>

              {/* Über uns - Right aligned */}
              <div className="hidden xl:block">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 px-4 py-2 rounded-full transition-colors hover:text-black"
                >
                  Über uns
                </a>
              </div>
            </div>
          </div>

          {/* Second Line - Navigation Items */}
          <div className="bg-white h-16">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-6 h-full flex items-center">
              {/* Logo - appears here when scrolled */}
              <a
                href="/netz"
                className={`flex items-center transition-all duration-300 ${
                  isScrolled ? 'w-28 opacity-100 mr-4' : 'w-0 opacity-0 overflow-hidden'
                }`}
              >
                <Logo withStripe={true} stripeColor="blue" />
              </a>

              {/* Desktop Nav - shifts right when logo appears */}
              <div
                className={`hidden xl:flex items-center gap-1 transition-all duration-300 flex-1 ${
                  isScrolled ? '' : ''
                }`}
              >
                {NETZ_NAV_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                    onMouseLeave={() => item.subItems && handleMouseLeave()}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={netzLinkClass}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => item.subItems && e.preventDefault()}
                        className={`${netzLinkClass} ${activeDropdown === item.name ? 'bg-[#63BEF8] text-black' : ''}`}
                      >
                        {item.name}
                        {item.subItems && (
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          />
                        )}
                      </a>
                    )}

                    {/* Desktop Dropdown */}
                    {item.subItems && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[100]"
                          >
                            {item.subItems.map((sub) => {
                              const IconComponent = sub.icon;
                              if (sub.external) {
                                return (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                                  >
                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                    {sub.name}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                                >
                                  {IconComponent && <IconComponent className="w-4 h-4" />}
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden xl:flex items-center h-full gap-2 ml-auto">
                {/* Netzkundenportal - direct link */}
                <a
                  href="https://netz.ecp.epilot.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={netzLinkClass}
                >
                  <User className="w-4 h-4" />
                  <span>Netzkundenportal</span>
                </a>
              </div>

              {/* Mobile Toggle */}
              <button
                className="xl:hidden p-2 text-gray-700 ml-auto"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="xl:hidden border-t border-gray-100 bg-white overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
              >
                <div className="flex flex-col py-2">
                  {NETZ_NAV_ITEMS.map((item) => (
                    <div
                      key={item.name}
                      className="group relative border-b border-gray-50 last:border-0"
                    >
                      {/* Hover Bar - Blue */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#63BEF8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      <div
                        className="flex items-center justify-between px-6 py-4 cursor-pointer"
                        onClick={() => {
                          if (item.external) {
                            window.open(item.href, '_blank');
                          } else if (item.subItems) {
                            toggleMobileSubmenu(item.name);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <span className="text-lg font-medium text-gray-900">{item.name}</span>
                        {item.subItems && (
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`}
                          />
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      {item.subItems && (
                        <AnimatePresence>
                          {mobileExpanded === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-gray-50 overflow-hidden"
                            >
                              <div className="flex flex-col py-2">
                                {item.subItems.map((sub) => {
                                  const IconComponent = sub.icon;
                                  if (sub.external) {
                                    return (
                                      <a
                                        key={sub.name}
                                        href={sub.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-8 py-3 text-gray-600 text-base border-b border-gray-100 last:border-0 hover:bg-gray-100"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {IconComponent && <IconComponent className="w-4 h-4" />}
                                        {sub.name}
                                      </a>
                                    );
                                  }
                                  return (
                                    <Link
                                      key={sub.name}
                                      to={sub.href}
                                      className="flex items-center gap-2 px-8 py-3 text-gray-600 text-base border-b border-gray-100 last:border-0 hover:bg-gray-100"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {IconComponent && <IconComponent className="w-4 h-4" />}
                                      {sub.name}
                                    </Link>
                                  );
                                })}
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
        </div>
      </nav>
    </>
  );
}
