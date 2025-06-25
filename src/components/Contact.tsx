import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, feedback, or just say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Restaurant</h3>

            {[
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: 'Address',
                content: (
                  <>
                    Bank Rd, Shahpur<br />
                    Gorakhpur, Uttar Pradesh - 273001
                    <br />
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-red-600 font-medium mt-2 inline-flex items-center gap-1"
                    >
                      <Navigation className="w-4 h-4" /> Get Directions
                    </a>
                  </>
                )
              },
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                title: 'Phone',
                content: (
                  <>
                    +91 6388022670
                    <p className="text-sm text-gray-500 mt-1">For inquiries & information</p>
                  </>
                )
              },
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                title: 'Email',
                content: <>manishgirig2856@gmail.com</>
              },
              {
                icon: <Clock className="w-6 h-6 text-white" />,
                title: 'Opening Hours',
                content: (
                  <p className="text-gray-600">
                    <span className="font-medium">Mon - Sat:</span> 11:00 AM – 8:00 PM
                  </p>
                )
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                  <div className="text-gray-600">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="">Choose a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="catering">Catering Services</option>
                  <option value="events">Private Events</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              * We'll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
