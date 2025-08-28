import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-blue-300" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-purple-300" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-blue-300" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black/30 backdrop-blur-xl border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-blue-500/5 to-transparent blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-4xl font-bold text-white tracking-widest mb-4">
                LEFFLEX
              </h3>
              <p className="text-white/60 leading-relaxed text-lg max-w-md">
                Pioneering the future of artificial intelligence with cutting-edge solutions that transform industries and empower businesses worldwide.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/20 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/50 hover:text-blue-300 transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              AI Solutions
            </h4>
            <ul className="space-y-4">
              {["DeepVoice", "TradeCheck", "LegalMind", "Eigen"].map((solution, index) => (
                <li key={index}>
                  <span className="text-white/50 hover:text-purple-300 transition-colors duration-200 cursor-pointer text-lg">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Lefflex AI. All rights reserved. Built for the future of artificial intelligence.
            </p>
            <div className="flex space-x-8 text-sm text-white/30">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition-colors">AI Ethics</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/40 rounded-full"></div>
      <div className="absolute top-8 right-20 w-1 h-1 bg-purple-400/40 rounded-full"></div>
    </footer>
  );
}