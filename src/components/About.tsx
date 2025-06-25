import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born in the heart of Gorakhpur, Biryani Wala brings you authentic flavors 
            that remind you of home-cooked meals with a modern cafe twist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Restaurant Interior" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Where Tradition Meets <span className="text-amber-600">Modern Comfort</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Established with a vision to serve authentic Indian biryani and cafe-style snacks, 
              Biryani Wala Gorakhpur has become a beloved destination for students, working professionals, 
              and families who crave the perfect blend of traditional flavors and contemporary dining experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our secret lies in using time-honored recipes passed down through generations, 
              combined with the finest local spices and ingredients. Every grain of rice, 
              every piece of tender meat, and every aromatic spice is carefully selected to 
              create that perfect bite that feels like home.
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-red-100 p-6 rounded-xl">
              <p className="text-gray-800 font-medium italic">
                "Our mission is simple - to serve food that not only satisfies your hunger 
                but also touches your heart with familiar flavors and warm hospitality."
              </p>
              <p className="text-amber-700 font-semibold mt-2">- Founder, Biryani Wala</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">5000+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">3</h4>
            <p className="text-gray-600">Years Serving</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">4.8</h4>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">30</h4>
            <p className="text-gray-600">Min Avg Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;