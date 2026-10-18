import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRfq: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRfq }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Plant Tour', href: '#drone-tour' },
    { name: 'Materials', href: '#materials' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#rfq' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`bg-white border-b border-[#E8E4DF] transition-all duration-200 ${
          isScrolled
            ? 'py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Text-only Logo */}
          <a href="#" className="flex flex-col group text-left">
            <span className="font-['Abel',sans-serif] text-xl sm:text-2xl text-[#2D2D2D] tracking-tight leading-none">
              UTTAM FOUNDRIES
            </span>
            <span className="text-[11px] text-[#6B6560] tracking-wider uppercase font-medium font-['DM_Sans',sans-serif] mt-1">
              Since 1964
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-[#2D2D2D] hover:text-[#9B6B4A] transition-colors font-['DM_Sans',sans-serif]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Get a Quote Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenRfq}
              className="bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-[14px] font-medium px-5 py-2.5 rounded-lg transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D2D2D] hover:bg-[#F3F0EB] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E4DF] bg-white px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-[#2D2D2D] hover:text-[#9B6B4A] hover:bg-[#F3F0EB] transition-colors font-['DM_Sans',sans-serif]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8E4DF]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full bg-[#9B6B4A] hover:bg-[#8A5D3F] text-white text-[14px] font-medium py-3 rounded-lg transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
