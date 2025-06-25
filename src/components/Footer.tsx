import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BW</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Biryani Wala</h3>
                <p className="text-gray-400 text-sm">Gorakhpur</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              "Flavor That Feels Like Home" - Serving authentic Indian biryani
              and cafe-style delights in the heart of Gorakhpur since 2021.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/biryaniwala_188/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['home', 'about', 'gallery', 'testimonials', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Our Specialties</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Veg Biryani</li>
              <li>Veg Manchurian</li>
              <li>Paneer Chilly</li>
              <li>Fried Rice</li>
              <li>Noodles</li>
              <li>Shakes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-gray-300">Bank Rd, Shahpur<br />Gorakhpur, UP - 273001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <p className="text-gray-300">+91 6388022670</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <p className="text-gray-300">manishgirig2856@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-gray-300">Mon–Sat: 11 AM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
          <p>© 2024 Biryani Wala Gorakhpur. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Gorakhpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
