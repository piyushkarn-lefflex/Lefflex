import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, Globe, Target } from "lucide-react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-[#0B0B15] text-white overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Abstract Shape */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
          <div className="w-[600px] h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-cyan-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-4xl">
            <p className="text-blue-300 font-semibold text-lg tracking-widest uppercase mb-4">
              About Lefflex
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              REDEFINING THE
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                FUTURE OF AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              At Lefflex, we're pioneering the next generation of artificial intelligence solutions. Our team of world-class researchers and engineers work tirelessly to push the boundaries of what's possible with machine learning, neural networks, and quantum computing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
          <div className="w-[500px] h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                To democratize artificial intelligence and make cutting-edge AI solutions accessible to businesses of all sizes. We believe that AI should empower, not replace, human potential and creativity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                To become the world's most trusted AI partner, leading the charge in ethical, transparent, and innovative artificial intelligence that transforms industries and improves lives globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do at Lefflex
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly push boundaries and challenge the status quo in AI development."
              },
              {
                title: "Ethical AI",
                description: "We prioritize transparency, fairness, and accountability in all our AI solutions."
              },
              {
                title: "Excellence",
                description: "We deliver world-class quality and maintain the highest standards in everything we do."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnerships to achieve extraordinary results."
              }
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { icon: Users, number: "150+", label: "Team Members" },
                { icon: Award, number: "50+", label: "Enterprise Clients" },
                { icon: Globe, number: "30+", label: "Countries Served" },
                { icon: Target, number: "99.9%", label: "Accuracy Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Meet the visionaries driving innovation at Lefflex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Piyush Karn",
                role: "CEO & Co-Founder"
              },
              {
                name: "Pratik Soni",
                role: "CTO & Co-Founder"
              },
              {
                name: "Angad Girhepunje",
                role: "CTO & Co-Founder"
              },
              {
                name: "Vidyasagar Tupe",
                role: "Tech Management"
              },
              {
                name: "Indrashan Kumar",
                role: "AI-ML Management"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                {/* <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"></div> */}
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-300 font-semibold mb-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}