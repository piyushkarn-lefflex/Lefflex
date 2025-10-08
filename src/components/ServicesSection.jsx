import React from "react";
import { Link } from "react-router-dom";
import { Mic, TrendingUp, Scale, Cpu, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Mic,
      title: "DeepVoice",
      description: "Advanced voice synthesis and recognition AI that transforms natural language processing with human-like accuracy and emotional intelligence.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "TradeCheck",
      description: "Real-time market analysis and trading automation powered by quantum algorithms for unprecedented financial insights and predictions.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Scale,
      title: "LegalMind",
      description: "Revolutionary legal document analysis and contract intelligence that processes complex legal frameworks with supreme accuracy.",
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Eigen",
      description: "Core neural processing engine that powers all our AI solutions with adaptive learning and self-optimizing computational architecture.",
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase mb-4">
            Our Solutions
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-POWERED
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              INNOVATIONS
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Discover our suite of cutting-edge artificial intelligence solutions designed to revolutionize how businesses operate in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/under-construction"
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-4 block cursor-pointer"
            >
              {/* Glowing Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                {service.description}
              </p>

              {/* Learn More Button */}
              <div className="group/btn flex items-center gap-3 text-blue-300 hover:text-white font-semibold transition-all duration-300">
                <span>Learn More</span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover/btn:bg-blue-500/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}