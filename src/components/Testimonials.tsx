import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Best biryani in Gorakhpur! The Hyderabadi Paneer biryani is absolutely divine. Perfect blend of spices and the rice is cooked to perfection.',
      location: 'Civil Lines, Gorakhpur'
    },
    {
      id: 2,
      name: 'Rahul Singh',
      rating: 5,
      comment: 'Amazing food and great ambiance! Perfect place for students like us. The prices are reasonable and the taste is incredible. Paneer 65 is a must-try!',
      location: 'University Area, Gorakhpur'
    },
    {
      id: 3,
      name: 'Anita Gupta',
      rating: 4,
      comment: 'Lovely family restaurant with authentic flavors. We ordered the family pack and everyone loved it. The service is quick and staff is very courteous.',
      location: 'Golghar, Gorakhpur'
    },
    {
      id: 4,
      name: 'Vikash Kumar',
      rating: 5,
      comment: 'Outstanding food quality! The Soya biryani reminds me of my grandmother\'s cooking. Truly feels like home. Will definitely visit again.',
      location: 'Railway Station Area'
    },
    {
      id: 5,
      name: 'Neha Agarwal',
      rating: 5,
      comment: 'Great vegetarian options too! The paneer biryani and masala chai are exceptional. Perfect spot for catching up with friends.',
      location: 'Park Road, Gorakhpur'
    },
    {
      id: 6,
      name: 'Amit Verma',
      rating: 4,
      comment: 'Excellent delivery service and the food arrived hot and fresh. The packaging is also very good. Highly recommended for office orders.',
      location: 'BRD Medical College Area'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers 
            who have experienced the authentic flavors of Biryani Wala.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-3xl font-bold text-gray-900">4.8</span>
            </div>
            <p className="text-gray-600 text-lg">Based on 500+ reviews</p>
            <div className="flex justify-center gap-8 mt-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl text-green-600">95%</div>
                <div className="text-gray-600">Food Quality</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-blue-600">92%</div>
                <div className="text-gray-600">Service</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-purple-600">89%</div>
                <div className="text-gray-600">Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Love Our Food?</h3>
            <p className="text-xl mb-6 opacity-90">
              Share your experience and help others discover the taste of authentic biryani!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Write a Review
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                Share on Social Media
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;