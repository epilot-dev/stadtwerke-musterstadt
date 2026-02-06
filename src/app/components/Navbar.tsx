import { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  User,
  ChevronDown,
  Zap,
  FileText,
  UserCircle,
  Building2,
  Flame,
  BatteryCharging,
  Sun,
  ThermometerSun,
  Factory,
  PlugZap,
  Heater,
  Leaf,
  Home,
  CreditCard,
  TrendingUp,
  XCircle,
  ClipboardList,
  RouterIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

// Define the navigation structure
const NAV_ITEMS = [
  {
    name: 'Strom & Gas',
    href: '/#',
    subItems: [
      { name: 'Ökostrom', href: '/', icon: Leaf },
      { name: 'Gas', href: '/', icon: Flame },
      { name: 'Wärmestrom', href: '/warmestrom', icon: ThermometerSun },
      { name: 'Ladestrom', href: '/ladestrom', icon: BatteryCharging },
    ],
  },
  {
    name: 'Wärme',
    href: '/#',
    subItems: [
      { name: 'Wärmestrom', href: '/warmestrom', icon: ThermometerSun },
      { name: 'Wärmepumpe', href: '/warmepumpe', icon: Heater },
      { name: 'Fernwärme', href: '/fernwarme', icon: Factory },
    ],
  },
  {
    name: 'E-Mobilität',
    href: '/#',
    subItems: [
      { name: 'Ladestrom', href: '/ladestrom', icon: BatteryCharging },
      { name: 'Wallbox', href: '/wallbox', icon: PlugZap },
    ],
  },
  {
    name: 'Solar',
    href: '/#',
    subItems: [
      { name: 'Photovoltaik', href: '/photovoltaik', icon: Sun },
      { name: 'Balkonkraftwerke', href: '/balkonkraftwerke', icon: Zap },
    ],
  },
  {
    name: 'Breitband',
    href: '/#',
    subItems: [{ name: 'Glasfaser', href: '/glasfaser', icon: RouterIcon }],
  },
  {
    name: 'Service',
    href: '/service',
    subItems: [
      { name: 'Übersicht', href: '/service', icon: ClipboardList },
      { name: 'Umzug melden', href: '/service/umzug', icon: Home },
      { name: 'SEPA-Mandat einrichten', href: '/service/sepa', icon: CreditCard },
      { name: 'Abschlag anpassen', href: '/service/abschlag', icon: TrendingUp },
      { name: 'Vertrag kündigen', href: '/service/kuendigung', icon: XCircle },
    ],
  },
];

// Define primary parent for each route to avoid multiple highlights
const ROUTE_PRIMARY_PARENT: Record<string, string> = {
  '/okostrom': 'Strom & Gas',
  '/gas': 'Strom & Gas',
  '/warmestrom': 'Wärme', // Primary parent is "Wärme" (also appears in "Strom & Gas")
  '/ladestrom': 'E-Mobilität', // Primary parent is "E-Mobilität" (also appears in "Strom & Gas")
  '/warmepumpe': 'Wärme',
  '/fernwarme': 'Wärme',
  '/wallbox': 'E-Mobilität',
  '/photovoltaik': 'Solar',
  '/balkonkraftwerke': 'Solar',
  '/service': 'Service',
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<'tarif' | 'netz'>('tarif');
  const location = useLocation();

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
  const standardLinkClass = `${baseLinkClass} hover:bg-[#deff03] hover:text-black`;

  // Helper function to check if a nav item is active
  const isNavItemActive = (item: (typeof NAV_ITEMS)[0]) => {
    // Check if the main item href matches (for items like Service that have both href and subItems)
    if (item.href === location.pathname) {
      return true;
    }

    // For items with sub-items, check if this is the PRIMARY parent for the current route
    if (item.subItems) {
      // Check if any sub-item path matches
      const hasMatchingSubItem = item.subItems.some((sub) => {
        const subPath = sub.href.split('#')[0]; // Remove hash for comparison
        return subPath === location.pathname;
      });

      // Only highlight if this item is the primary parent for the current route
      if (hasMatchingSubItem) {
        const primaryParent = ROUTE_PRIMARY_PARENT[location.pathname];
        return primaryParent === item.name;
      }
    }

    return false;
  };

  return (
    <>
      {/* Spacer to prevent content jump since Navbar is fixed */}
      <div className={`w-full h-16 ${isScrolled ? 'xl:h-16' : 'xl:h-28'}`} aria-hidden="true" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 shadow-sm bg-white h-16 xl:transition-all xl:duration-300 ${
          isScrolled ? 'xl:h-16' : 'xl:h-28'
        }`}
      >
        <div
          className={`xl:transition-transform xl:duration-300 ${isScrolled ? 'xl:-translate-y-12' : 'xl:translate-y-0'}`}
        >
          {/* First Line - Logo and Segmented Control (Desktop Only) */}
          <div className="bg-gray-50 border-b border-gray-100 h-12 hidden xl:block">
            <div className="container mx-auto max-w-[1440px] px-4 md:px-6 h-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/" className="flex items-center w-28">
                  <Logo
                    withStripe={true}
                    stripeColor={selectedSegment === 'netz' ? 'blue' : 'yellow'}
                  />
                </a>

                {/* Segmented Control - Tarif & Netz */}
                <div className="flex items-center gap-0">
                  <Link
                    to="/"
                    className={`relative flex items-center gap-1 px-3 py-3 text-sm font-medium transition-all duration-200 overflow-hidden ${
                      selectedSegment === 'tarif' ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setSelectedSegment('tarif')}
                  >
                    {/* Yellow accent bar - animates from bottom to top */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2 w-[80%] h-[9px] transition-all duration-300 origin-bottom ${
                        selectedSegment === 'tarif'
                          ? 'bg-[#deff03] scale-y-100 opacity-100'
                          : 'bg-[#deff03] scale-y-0 opacity-0'
                      }`}
                    />
                    <FileText className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Vertrieb</span>
                  </Link>
                  <Link
                    to="/netz"
                    className={`group relative flex items-center gap-1 px-3 py-3 text-sm font-medium transition-all duration-200 overflow-hidden ${
                      selectedSegment === 'netz' ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setSelectedSegment('netz')}
                  >
                    {/* Blue accent bar - animates from bottom to top */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2 w-[80%] h-[9px] transition-all duration-300 origin-bottom ${
                        selectedSegment === 'netz'
                          ? 'bg-[#63BEF8] scale-y-100 opacity-100'
                          : 'bg-[#63BEF8] scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100'
                      }`}
                    />
                    <Zap className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Netz</span>
                  </Link>
                </div>
              </div>

              {/* Über uns - Right aligned */}
              <div>
                <a
                  href="https://www.epilot.cloud/en/company/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 px-4 py-2 rounded-full transition-colors hover:text-black"
                >
                  Über uns
                </a>
              </div>
            </div>
          </div>

          {/* Second Line - Navigation Items */}
          <div className="bg-white h-16">
            <div className="container mx-auto max-w-[1440px] px-4 md:px-6 h-full flex items-center">
              {/* Mobile: Logo + Vertrieb/Netz (always visible) */}
              <a href="/" className="flex items-center w-28 xl:hidden mr-1">
                <Logo
                  withStripe={true}
                  stripeColor={selectedSegment === 'netz' ? 'blue' : 'yellow'}
                />
              </a>

              {/* Mobile Segment Buttons - Vertrieb & Netz */}
              <div className="flex xl:hidden items-center gap-0 mr-auto">
                <Link
                  to="/"
                  className={`relative flex items-center gap-1 px-2 py-3 text-sm font-medium transition-all duration-200 overflow-hidden ${
                    selectedSegment === 'tarif' ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                  onClick={() => setSelectedSegment('tarif')}
                >
                  {/* Yellow accent bar - animates from bottom to top */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2 w-[80%] h-[9px] transition-all duration-300 origin-bottom ${
                      selectedSegment === 'tarif'
                        ? 'bg-[#deff03] scale-y-100 opacity-100'
                        : 'bg-[#deff03] scale-y-0 opacity-0'
                    }`}
                  />
                  <FileText className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Vertrieb</span>
                </Link>
                <Link
                  to="/netz"
                  className={`group relative flex items-center gap-1 px-2 py-3 text-sm font-medium transition-all duration-200 overflow-hidden ${
                    selectedSegment === 'netz' ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                  onClick={() => setSelectedSegment('netz')}
                >
                  {/* Blue accent bar - animates from bottom to top */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2 w-[80%] h-[9px] transition-all duration-300 origin-bottom ${
                      selectedSegment === 'netz'
                        ? 'bg-[#63BEF8] scale-y-100 opacity-100'
                        : 'bg-[#63BEF8] scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100'
                    }`}
                  />
                  <Zap className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Netz</span>
                </Link>
              </div>

              {/* Desktop: Logo - appears here when scrolled */}
              <a
                href="/"
                className={`hidden xl:flex items-center transition-all duration-300 ${
                  isScrolled ? 'w-28 opacity-100 mr-4' : 'w-0 opacity-0 overflow-hidden'
                }`}
              >
                <Logo withStripe={true} stripeColor="yellow" />
              </a>

              {/* Desktop Nav - shifts right when logo appears */}
              <div
                className={`hidden xl:flex items-center gap-1 transition-all duration-300 flex-1 ${
                  isScrolled ? '' : ''
                }`}
              >
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                    onMouseLeave={() => item.subItems && handleMouseLeave()}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        // Only prevent default for items with dropdowns that aren't "Service"
                        if (item.subItems && item.name !== 'Service') {
                          e.preventDefault();
                        }
                      }}
                      className={`${standardLinkClass} ${isNavItemActive(item) ? 'bg-[rgba(222,255,3,0.5)] text-black' : ''}`}
                    >
                      {item.name}
                      {item.subItems && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {item.subItems && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[100]"
                          >
                            {item.subItems.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
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
                {/* Kundenportal with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('Kundenportal')}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <a
                    href="#"
                    className={`${standardLinkClass} ${activeDropdown === 'Kundenportal' ? 'bg-[#deff03] text-black' : ''}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <User className="w-4 h-4" />
                    <span>Kundenportal</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${activeDropdown === 'Kundenportal' ? 'rotate-180' : ''}`}
                    />
                  </a>

                  {/* Kundenportal Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === 'Kundenportal' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[100]"
                      >
                        <a
                          href="https://sales-kundenportal.ecp.epilot.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          <UserCircle className="w-4 h-4" />
                          Privatkunde
                        </a>
                        <a
                          href="https://b2b-demoportal.ecp.epilot.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          <Building2 className="w-4 h-4" />
                          Geschäftskunde
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Toggle */}
              <button className="xl:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.div>
              </button>
            </div>
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
                {NAV_ITEMS.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 last:border-0">
                    <div
                      className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        item.subItems ? toggleMobileSubmenu(item.name) : setIsOpen(false)
                      }
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

                {/* Kundenportal - Mobile */}
                <div className="border-b border-gray-50 last:border-0">
                  <div
                    className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleMobileSubmenu('Kundenportal')}
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-900" />
                      <span className="text-lg font-medium text-gray-900">Kundenportal</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === 'Kundenportal' ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {/* Kundenportal Submenu */}
                  <AnimatePresence>
                    {mobileExpanded === 'Kundenportal' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-50 overflow-hidden"
                      >
                        <div className="flex flex-col py-2">
                          <a
                            href="https://sales-kundenportal.ecp.epilot.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <UserCircle className="w-4 h-4" />
                            Privatkunde
                          </a>
                          <a
                            href="https://b2b-demoportal.ecp.epilot.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Building2 className="w-4 h-4" />
                            Geschäftskunde
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
