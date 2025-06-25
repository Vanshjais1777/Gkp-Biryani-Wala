import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';
import logo from '../../assets/Biryani Wala.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
              Story
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Manish Giri, a determined and humble food lover from Gorakhpur, started his biryani
            journey with just a small thela (handcart) near Golghar — driven not by money, but by
            the passion to serve something authentic. From modest beginnings and daily struggles,
            he turned his love for cooking into a source of hope, offering vegetarian biryani made
            fresh daily with homemade spices and a whole lot of love. His consistent taste and kind
            heart slowly made him a local favorite, gaining attention from food vloggers and
            YouTubers alike. Despite the fame, Manish still personally cooks and serves each plate,
            believing real success lies in heartfelt hospitality.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src={logo}
            alt="Restaurant"
            className="w-full rounded-2xl shadow-md object-cover"
          />
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Where Tradition Meets{' '}
              <span className="text-amber-600">Modern Comfort</span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Established to serve authentic Indian biryani and cafe-style snacks, Biryani Wala
              Gorakhpur has become a beloved destination for students, professionals, and families
              who crave the perfect blend of tradition and modern dining.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our secret lies in using time-honored recipes passed down through generations,
              combined with the finest spices and ingredients. Every grain of rice, every spice,
              and every dish is a story — cooked with care and served with love.
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-red-100 p-6 rounded-xl shadow-sm">
              <p className="text-gray-800 font-medium italic text-base sm:text-lg">
                "Our mission is simple — to serve food that not only satisfies hunger but also
                touches hearts with familiar flavors and warm hospitality.
                <br />
                <br />
                Main chahta hoon ki log sirf biryani nahi, meri mehnat aur mohabbat bhi mehsoos
                karein har plate mein."
              </p>
              <p className="text-amber-700 font-semibold mt-2">— ❤️ A Message From Manish</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Heart className="w-8 h-8 text-white" />,
              title: '1000+',
              subtitle: 'Happy Customers',
            },
            {
              icon: <Users className="w-8 h-8 text-white" />,
              title: '1',
              subtitle: 'Years Serving',
            },
            {
              icon: <Award className="w-8 h-8 text-white" />,
              title: '4.0',
              subtitle: 'Average Rating',
            },
            {
              icon: <Clock className="w-8 h-8 text-white" />,
              title: '10 min',
              subtitle: 'Fast Serving',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-red-600">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">{stat.title}</h4>
              <p className="text-gray-600 text-base">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
