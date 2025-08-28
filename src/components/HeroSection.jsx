import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Large Abstract 3D Element */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
        <div className="w-[800px] h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-cyan-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-cyan-400/25 to-blue-500/25 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase">
              We Are
            </p>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-wider">
              LEFFLEX
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"></div>

            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              Pioneering the future of artificial intelligence with cutting-edge solutions that transform industries and empower businesses to reach unprecedented heights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Explore Our AI</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-400/60 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 hover:bg-white/20">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button> */}
            </div>

            { /* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl">
              {[
                { number: "4", label: "AI Solutions", suffix: ""},
                { number: "99.9", label: "Accuracy Rate", suffix: "%" },
                { number: "50", label: "Enterprise Clients", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/50 text-sm md:text-base group-hover:text-blue-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-400/60 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400/60 rounded-full"></div>
    </section>
  );
}