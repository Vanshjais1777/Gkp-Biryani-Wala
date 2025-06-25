import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/Biryani Wala.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}>
      {/* Top Bar */}
      {/* <div className="bg-amber-500 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Gorakhpur, UP</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Open:9 AM - 8 PM</span>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} className='w-14 h-14' alt="" />
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Biryani Wala
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Gorakhpur
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-amber-500 text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-amber-500 text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`hover:text-amber-500 text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-amber-500 text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r text-lg from-amber-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-amber-500">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-amber-500">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-amber-500">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-amber-500">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-amber-500">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;