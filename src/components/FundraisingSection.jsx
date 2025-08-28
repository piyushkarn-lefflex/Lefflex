import React from "react";
import { TrendingUp, Users, Award } from "lucide-react";

export default function FundraisingSection() {

  return (
    <section id="fundraising" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/10 to-cyan-900/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase mb-4">
            Series A Fundraising
          </p> */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            SCALING AI
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              INNOVATION
            </span>
          </h2>
          
        </div>

        {/* Funding Progress Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed pb-10">
              Join us in revolutionizing artificial intelligence. We're raising $5M to accelerate development and bring our cutting-edge AI solutions to market at global scale.
            </p>
          {/* <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                ${(fundingRaised / 1000000).toFixed(1)}M
              </div>
              <p className="text-white/50">Raised</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                15+
              </div>
              <p className="text-white/50">Investors</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                A+
              </div>
              <p className="text-white/50">Rating</p>
            </div>
          </div> */}


          {/* CTA */}
          <div className="text-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 mr-4">
              <span>Invest Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}