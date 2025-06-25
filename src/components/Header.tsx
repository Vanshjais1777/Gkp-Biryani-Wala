import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Biryani Wala.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}>
      <nav className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Text */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Biryani Wala
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Gorakhpur
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['home', 'about', 'gallery', 'testimonials'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-base lg:text-lg transition-colors font-medium hover:text-amber-500 ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base lg:text-lg font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-white hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {['home', 'about', 'gallery', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-800 text-base font-medium hover:text-amber-500 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
