import React, { useState } from 'react';
import { X, Camera, Instagram } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMFzanWzw6LVIFDMupg-TytWzPV1zttE-af_ZvTxABMYH8ESQuwNqvF5LeRKrinwKPCVWGsHndkJUBt_WxB24QnYJHju-PHGzhZKuln7DnUPHIG7gvenTt-pr7gSCee-iV6l7bZF8lwhmt=s1360-w1360-h1020-rw',
      title: 'Cold Coffee',
      category: 'Drinks'
    },
    {
      id: 8,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqToww9_SI1I7kL9ZFFQA5g7_UZgnKeWk0lJY0mWgawkzX8UfoPQrpujFljTYo8WVfsYpUH4CQG3qu3I6hHaVqZWH_MeyRijTburbFEBxS6qh8yF48rRjNTLyBpe6Amcqo9PxCr=s1360-w1360-h1020-rw',
      title: 'Veg Biryani',
      category: 'Food'
    },
    {
      id: 9,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npu6CXcXmTMPHtUctJoMjtKEa4M5IKl8OU0SEh8L4F39Bee5XPOVEFbsF6cw7wUTh9XgoYfsqXtSeDCzIXp1n892bfO33ZLsXP9JnY1rKdqa4iaI2j9YTz0y_zteihQU24ACFdK1m7xfpb6=s1360-w1360-h1020-rw',
      title: 'Chinese Starters',
      category: 'Food'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a visual journey through our delicious offerings, warm ambiance,
            and the joy of our satisfied customers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              <Camera className="w-5 h-5" />
              View All Photos
            </button>
            <a
              href="https://www.instagram.com/biryaniwala_188/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-sm sm:text-base"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <span className="inline-block bg-amber-500/80 text-white px-3 py-1 rounded-full text-xs sm:text-sm capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Stay updated with our latest dishes, special offers, and behind-the-scenes moments!
            </p>
            <a
              href="https://www.instagram.com/biryaniwala_188/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaInstagram className="mr-2 text-lg sm:text-xl" />
              @biryaniwala_188
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
