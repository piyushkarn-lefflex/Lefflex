import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Abstract Shape */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
        <div className="w-[600px] h-[400px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div></div> {/* Empty space for background shape */}
          
          <div className="lg:col-start-2 space-y-8">
            <div>
              <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase mb-4">
                About Lefflex
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                REDEFINING THE
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  FUTURE OF AI
                </span>
              </h2>
            </div>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              At Lefflex, we're pioneering the next generation of artificial intelligence solutions. Our team of world-class researchers and engineers work tirelessly to push the boundaries of what's possible with machine learning, neural networks, and quantum computing.
            </p>

            <div className="space-y-6">
              {[
                "Advanced quantum-hybrid processing architecture",
                "Self-evolving neural network systems", 
                "Real-time adaptive learning algorithms",
                "Industry-leading accuracy and performance metrics"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 mt-8">
              <span>Discover Our Technology</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}