import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['services', 'work', 'capabilities', 'about'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { name: 'About', href: '#about', id: 'about' }
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0A]/90 backdrop-blur-md border-b border-[#242C2A] py-3.5 shadow-lg'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Minimal Geometric Wordmark */}
        <a 
          href="#" 
          id="brand-logo"
          className="group flex items-center gap-2.5 text-[#F5F7F2] font-extrabold tracking-[-0.04em] text-xl sm:text-2xl transition-opacity hover:opacity-90"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#C8FF3D] rounded-none group-hover:scale-110 transition-transform duration-200" />
          <span className="font-sans font-bold tracking-tight">XLOGIK</span>
          <span className="text-[10px] font-mono-code font-normal text-[#AEB7B2]/60 ml-1 hidden sm:inline">
            // CA
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`relative py-1 font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#F5F7F2]' : 'text-[#AEB7B2] hover:text-[#F5F7F2]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8FF3D]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Let's talk ↗ Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            id="nav-cta-contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#F5F7F2] border border-[#2E3634] bg-[#111515] hover:bg-[#181D1C] hover:border-[#C8FF3D]/80 transition-all duration-200"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#C8FF3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C8FF3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenContact}
            className="text-xs px-2.5 py-1.5 font-semibold text-[#080A0A] bg-[#C8FF3D] hover:bg-[#b5eb34] flex items-center gap-1"
          >
            Talk <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#AEB7B2] hover:text-[#F5F7F2] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#080A0A] border-b border-[#242C2A] px-6 py-6 space-y-4"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#AEB7B2] hover:text-[#C8FF3D] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono-code text-[#AEB7B2]/40">#0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#242C2A]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-[#C8FF3D] text-[#080A0A] font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#b5eb34] transition-colors"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
