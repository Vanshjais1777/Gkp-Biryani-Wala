import React, { useState } from 'react';
import { X, Camera, Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Signature Hyderabadi Biryani',
      category: 'food'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Desserts',
      category: 'food'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Refreshing Beverages',
      category: 'food'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a visual journey through our delicious offerings, warm ambiance, 
            and the joy of our satisfied customers.
          </p>
          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
              <Camera className="w-5 h-5" />
              View All Photos
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all duration-300">
              <Instagram className="w-5 h-5" />
              Follow Us
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 1 || index === 4 ? 'lg:row-span-2' : ''}`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <span className="inline-block bg-amber-500/80 text-white px-3 py-1 rounded-full text-sm capitalize">
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

        {/* Instagram Feed Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest dishes, special offers, and behind-the-scenes moments!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                @biryaniWalaGorakhpur
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-amber-500 hover:text-amber-600 transition-all duration-300">
                Share Your Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;