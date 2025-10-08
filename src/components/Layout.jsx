import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation for Services and Contact sections
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#services' || hash === '#contact') {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B15] overflow-x-hidden no-scrollbar">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0B0B15] to-[#0B0B15]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 rounded-full  ${
        isScrolled ? 'bg-black/30 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 cursor-pointer">
                <img 
                  src="/lefflex_logo-s.png" 
                  alt="Lefflex Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-3xl font-bold text-white tracking-widest hover:text-blue-300 transition-colors duration-300">
                  LEFFLEX
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') {
                    // If already on home page, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-medium transition-all duration-300 relative group ${
                  location.pathname === '/' ? 'text-blue-300' : 'text-white/70 hover:text-blue-300'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-all duration-300 relative group ${
                  location.pathname === '/about' ? 'text-blue-300' : 'text-white/70 hover:text-blue-300'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <button
                onClick={() => {
                  if (location.pathname !== '/') {
                    // If not on home page, navigate to home first
                    window.location.href = '/#services';
                  } else {
                    // If on home page, just scroll to section
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-white/70 hover:text-blue-300 font-medium transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => {
                  if (location.pathname !== '/') {
                    // If not on home page, navigate to home first
                    window.location.href = '/#contact';
                  } else {
                    // If on home page, just scroll to section
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-white/70 hover:text-blue-300 font-medium transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-300 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        } bg-black/30 backdrop-blur-xl border-t border-white/10`}>
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => {
                handleNavigation();
                if (location.pathname === '/') {
                  // If already on home page, scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`block transition-colors duration-200 font-medium ${
                location.pathname === '/' ? 'text-blue-300' : 'text-white/70 hover:text-blue-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavigation}
              className={`block transition-colors duration-200 font-medium ${
                location.pathname === '/about' ? 'text-blue-300' : 'text-white/70 hover:text-blue-300'
              }`}
            >
              About
            </Link>
            <button
              onClick={() => {
                handleNavigation();
                if (location.pathname !== '/') {
                  // If not on home page, navigate to home first
                  window.location.href = '/#services';
                } else {
                  // If on home page, just scroll to section
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="block text-white/70 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => {
                handleNavigation();
                if (location.pathname !== '/') {
                  // If not on home page, navigate to home first
                  window.location.href = '/#contact';
                } else {
                  // If on home page, just scroll to section
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="block text-white/70 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 no-scrollbar">
        {children}
      </main>
    </div>
  );
}