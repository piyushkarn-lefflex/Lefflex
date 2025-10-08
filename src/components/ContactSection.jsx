import React, { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            LET'S BUILD THE
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              FUTURE TOGETHER
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business with AI? Connect with our team of experts and discover how Lefflex can transform your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
              </div> */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              <p className="text-xl text-white/60 leading-relaxed">
                Our team is ready to help you harness the power of artificial intelligence for your business needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  details: "piyushkarn@lefflex.com",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: "info@lefflex.com",
                  color: "from-purple-500 to-cyan-500"
                },
                {
                  icon: MapPin,
                  title: "Headquarters",
                  details: "Palam Vihar Extension, Gurugram, Haryana",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/60 whitespace-pre-line leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}