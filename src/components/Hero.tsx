import React from 'react';
import { Star, Clock } from 'lucide-react';
import Manish from '../../assets/manish.png'; // Adjust if needed

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
        {/* Namaste Image */}
        <div className="mb-6 mt-24 flex justify-center">
          <img
            src={Manish}
            alt="Namaste"
            className="w-72 h-96 sm:w-36 sm:h-44 md:w-44 md:h-52 lg:w-52 lg:h-60 xl:w-60 xl:h-72 mx-auto animate-fade-in animate-slow-shake"
          />
        </div>

        {/* Headings */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
              Biryani Wala
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-1">Gorakhpur</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-amber-300">
            "Flavor That Feels Like Home"
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 px-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm sm:text-base">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
            <span>4.0 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm sm:text-base">
            <Clock className="w-5 h-5 text-green-400" />
            <span>11 AM - 8 PM</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-2">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
