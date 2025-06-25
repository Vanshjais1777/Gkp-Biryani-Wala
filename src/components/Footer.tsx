import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BW</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Biryani Wala</h3>
                <p className="text-gray-400 text-sm">Gorakhpur</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Flavor That Feels Like Home" - Serving authentic Indian biryani
              and cafe-style delights in the heart of Gorakhpur since 2021.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Our Specialties</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Veg Biryani</li>
              <li className="text-gray-300">Veg Manchurian</li>
              <li className="text-gray-300">Paneer Chilly</li>
              <li className="text-gray-300">Fried Rice</li>
              <li className="text-gray-300">Noodles</li>
              <li className="text-gray-300">Shakes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bank Rd, Shahpur<br />
                    Gorakhpur, Uttar Pradesh - 273001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 6388022670</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">manishgirig2856@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon-Sat: 11 AM - 8 PM<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>© 2024 Biryani Wala Gorakhpur. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
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