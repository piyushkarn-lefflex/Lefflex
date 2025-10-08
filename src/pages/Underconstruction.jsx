import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, Clock, Rocket } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="bg-[#0B0B15] text-white overflow-x-hidden min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link> */}

          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-full p-8 border border-white/10">
                <Wrench className="w-24 h-24 text-blue-300" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            PAGE UNDER
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              CONSTRUCTION
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            We're working hard to bring you something amazing. This page is currently being built and will be available soon.
          </p>

          {/* Features Coming Soon */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Rocket,
                title: "Launching Soon",
                description: "Exciting new features on the way"
              },
              {
                icon: Clock,
                title: "Stay Tuned",
                description: "Regular updates coming"
              },
              {
                icon: Wrench,
                title: "In Development",
                description: "Our team is hard at work"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link 
              to="/#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/60 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20 inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}