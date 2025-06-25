import React, { useState } from 'react';
import { Leaf, Flame, Star, Download } from 'lucide-react';
import type { MenuCategory } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('biryani');

  const menuData: MenuCategory[] = [
    {
      id: 'biryani',
      name: 'Biryani Specials',
      items: [
        { id: 1, name: 'Hyderabadi Paneer Biryani', description: 'Aromatic basmati rice with tender Paneer, cooked in traditional dum style', price: 299, isVeg: false, isPopular: true },
        { id: 2, name: 'Lucknowi Soya Biryani', description: 'Rich and flavorful Soya biryani with authentic Awadhi spices', price: 399, isVeg: false, isPopular: true },
        { id: 3, name: 'Vegetable Biryani', description: 'Mixed vegetables and paneer cooked with fragrant basmati rice', price: 199, isVeg: true },
        { id: 4, name: 'Egg Biryani', description: 'Boiled eggs layered with spiced rice and aromatic herbs', price: 179, isVeg: false },
        { id: 5, name: 'Fish Biryani', description: 'Fresh fish pieces marinated and cooked with premium basmati rice', price: 349, isVeg: false },
        { id: 6, name: 'Paneer Biryani', description: 'Cottage cheese cubes with aromatic rice and traditional spices', price: 249, isVeg: true }
      ]
    },
    {
      id: 'starters',
      name: 'Starters & Appetizers',
      items: [
        { id: 7, name: 'Paneer 65', description: 'Spicy and crispy Paneer starter with South Indian flavors', price: 179, isVeg: false, isPopular: true },
        { id: 8, name: 'Tandoori Paneer', description: 'Marinated Paneer grilled in traditional tandoor', price: 299, isVeg: false },
        { id: 9, name: 'Paneer Tikka', description: 'Grilled cottage cheese with bell peppers and onions', price: 199, isVeg: true },
        { id: 10, name: 'Paneer Seekh Kebab', description: 'Minced Paneer skewers with aromatic spices', price: 229, isVeg: false },
        { id: 11, name: 'Aloo Tikki Chat', description: 'Crispy potato patties with tangy chutneys', price: 89, isVeg: true },
        { id: 12, name: 'Samosa (2 pcs)', description: 'Golden fried pastries filled with spiced potatoes', price: 49, isVeg: true }
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      items: [
        { id: 13, name: 'Masala Chai', description: 'Traditional Indian tea with aromatic spices', price: 25, isVeg: true, isPopular: true },
        { id: 14, name: 'Fresh Lime Soda', description: 'Refreshing lime with soda and mint', price: 45, isVeg: true },
        { id: 15, name: 'Mango Lassi', description: 'Creamy yogurt drink with fresh mango pulp', price: 79, isVeg: true },
        { id: 16, name: 'Cold Coffee', description: 'Chilled coffee with milk and ice cream', price: 89, isVeg: true },
        { id: 17, name: 'Buttermilk', description: 'Seasoned yogurt drink with curry leaves', price: 39, isVeg: true },
        { id: 18, name: 'Fresh Fruit Juice', description: 'Seasonal fresh fruit juices', price: 69, isVeg: true }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        { id: 19, name: 'Gulab Jamun (2 pcs)', description: 'Soft milk dumplings in cardamom flavored syrup', price: 69, isVeg: true },
        { id: 20, name: 'Ras Malai (2 pcs)', description: 'Spongy cottage cheese patties in sweetened milk', price: 89, isVeg: true },
        { id: 21, name: 'Kulfi', description: 'Traditional Indian ice cream with nuts', price: 59, isVeg: true },
        { id: 22, name: 'Gajar Halwa', description: 'Rich carrot pudding with ghee and nuts', price: 79, isVeg: true },
        { id: 23, name: 'Ice Cream', description: 'Vanilla, chocolate, or strawberry', price: 49, isVeg: true }
      ]
    }
  ];

  const activeMenu = menuData.find(category => category.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Menu</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully crafted selection of authentic Indian flavors, from aromatic biryanis to delightful cafe treats.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
            <Download className="w-5 h-5" />
            Download Full Menu
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-6">
          <select
            onChange={(e) => setActiveCategory(e.target.value)}
            value={activeCategory}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {menuData.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Tabs */}
        <div className="hidden md:flex overflow-x-auto gap-3 mb-10 justify-center flex-wrap">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMenu.items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    {item.isVeg ? (
                      <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                        <Leaf className="w-2 h-2 text-green-600 fill-current" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                    )}
                    {item.isPopular && (
                      <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-amber-600 fill-current" />
                        <span className="text-xs text-amber-700 font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 via-red-50 to-amber-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              <Flame className="inline w-8 h-8 text-red-600 mr-2" />
              Today's Special Offers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-bold text-amber-600 mb-2">Family Pack</h4>
                <p className="text-gray-700">2 Biryanis + 4 Starters + 4 Drinks</p>
                <p className="text-xl font-bold text-gray-900 mt-2">₹899 <span className="text-sm text-gray-500 line-through">₹1199</span></p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-bold text-amber-600 mb-2">Student Special</h4>
                <p className="text-gray-700">Any Biryani + Drink + Dessert</p>
                <p className="text-xl font-bold text-gray-900 mt-2">₹199 <span className="text-sm text-gray-500 line-through">₹299</span></p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-bold text-amber-600 mb-2">Weekend Combo</h4>
                <p className="text-gray-700">Soya Biryani + Paneer 65 + Lassi</p>
                <p className="text-xl font-bold text-gray-900 mt-2">₹499 <span className="text-sm text-gray-500 line-through">₹599</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
