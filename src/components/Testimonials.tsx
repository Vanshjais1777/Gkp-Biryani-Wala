import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ritesh Verma',
      rating: 3,
      comment: `I recently visited a food cafe and was pleasantly surprised by their fast food, which I'd rate 3/5. Although their biryani was just average at 2/5, the fast food was a highlight. However, the prices were surprisingly high, which made me question the overall value. Taking everything into account, I'd give the cafe an overall rating of 5/10.`,
      location: ''
    },
    {
      id: 2,
      name: 'D Sharma',
      rating: 3,
      comment: `Visited this fast food restaurant recently and had a great experience! The dishes were delicious and the workers were friendly. Highly recommend trying out their menu - you won't be disappointed! Good food, good vibes!`,
      location: ''
    },
    {
      id: 3,
      name: 'Sanjay Srivastava',
      rating: 5,
      comment: 'आप का बिरयानी पनीर चिल्ली खाया बहुत लाजवाब था।',
      location: ''
    },
    {
      id: 4,
      name: 'Imamuddin shaikh Sonu',
      rating: 5,
      comment: 'Amazing test Best food in best price level',
      location: ''
    },
    {
      id: 5,
      name: 'Mohd Maroof',
      rating: 5,
      comment: `Veg biryani is a delicious Indian dish made with basmati rice, assorted vegetables, and a blend of aromatic spices. It's typically cooked with layers of flavors and often served with raita (yogurt sauce) or mirchi ka salan (spicy gravy). Would you like a recipe or more information about veg biryani`,
      location: ''
    },
    {
      id: 6,
      name: 'Amit Verma',
      rating: 4,
      comment: 'Excellent delivery service and the food arrived hot and fresh. The packaging is also very good. Highly recommended for office orders.',
      location: ''
    }
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers who have experienced the authentic flavors of Biryani Wala.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />
              <div className="flex items-center gap-1 mb-3">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.comment}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h4>
                {testimonial.location && (
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Love Our Food?</h3>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              Share your experience and help others discover the taste of authentic biryani!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.google.com/search?q=Biryani+Wala+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
