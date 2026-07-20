import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Key, KeyRound } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  adminMode: boolean;
  setAdminMode: (mode: boolean) => void;
  unreadCount: number;
}

export default function Navbar({ activeSection, adminMode, setAdminMode, unreadCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar py-4 shadow-lg shadow-brand-dark/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-xl bg-brand-pink text-black flex items-center justify-center shadow-lg shadow-brand-pink/20 group-hover:scale-105 transition-transform">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter text-white uppercase italic">
                Rushabh<span className="text-brand-pink">.</span>Vajirnath
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-pink bg-brand-pink/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Admin Mode Toggler (Sandbox Mode) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="admin-toggle-btn"
              onClick={() => setAdminMode(!adminMode)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border transition-all duration-300 ${
                adminMode
                  ? 'bg-brand-pink text-black border-brand-pink shadow-md shadow-brand-pink/20 font-bold'
                  : 'bg-brand-dark/60 text-gray-400 border-white/10 hover:border-brand-pink hover:text-brand-pink'
              }`}
            >
              {adminMode ? <KeyRound className="h-3.5 w-3.5" /> : <Key className="h-3.5 w-3.5" />}
              <span>{adminMode ? 'Sandbox Active' : 'Admin Demo'}</span>
              {unreadCount > 0 && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-xl bg-brand-pink text-black font-sans text-xs font-black uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all shadow-md shadow-brand-pink/10"
            >
              Let's Chat
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setAdminMode(!adminMode)}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                adminMode
                  ? 'bg-brand-pink/20 text-brand-pink border-brand-pink/30'
                  : 'bg-white/5 text-gray-400 border-white/5'
              }`}
              title="Toggle Admin Sandbox Mode"
            >
              <Key className="h-5 w-5" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out glass-navbar border-t border-white/5 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl font-sans text-base font-bold transition-all ${
                  isActive
                    ? 'text-black bg-brand-pink'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5">
              <span className="text-sm font-medium text-gray-300">Admin Sandbox Panel</span>
              <button
                onClick={() => setAdminMode(!adminMode)}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  adminMode ? 'bg-brand-pink text-black font-bold' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {adminMode ? 'ON' : 'OFF'}
              </button>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-xl bg-brand-pink text-black font-sans text-xs font-black uppercase tracking-wider shadow-md transition-all"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
