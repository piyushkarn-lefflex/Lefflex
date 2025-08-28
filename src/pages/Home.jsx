import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FundraisingSection from "../components/FundraisingSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0B15] text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FundraisingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}