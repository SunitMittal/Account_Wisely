import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import WhyChooseSection from "../components/AboutUs/WhyChooseSection";
import WorkingProcess from "../components/AboutUs/WorkingProcess";
import MissionValues from "../components/AboutUs/MissionValues";
import FAQSection from "../components/AboutUs/FAQSection";
import LandingImage from "../components/LandingImage";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <LandingImage title="About Us" link="About" />
      <div className="py-8 md:py-16">
        <HeroSection />
      </div>

      <div className="bg-white py-8 md:py-16">
        <WhyChooseSection />
      </div>

      <div className="bg-gray-50 py-8 md:py-16">
        <WorkingProcess />
      </div>

      <div className="bg-white py-8 md:py-16">
        <MissionValues />
      </div>

      <div className="bg-gray-50 py-8 md:py-16">
        <FAQSection />
      </div>
    </div>
  );
};

export default About;
