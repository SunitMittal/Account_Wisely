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
      <div className="py-8 md:py-16 bg-white">
        <HeroSection />
      </div>

      <div className="py-8 md:py-16 bg-[#fff2dd]">
        <WhyChooseSection />
      </div>

      <div className="py-8 md:py-16 bg-white">
        <WorkingProcess />
      </div>

      <div className="py-8 md:py-16 bg-[#fff2dd]">
        <MissionValues />
      </div>

      <div className="py-8 md:py-16 bg-white">
        <FAQSection />
      </div>
    </div>
  );
};

export default About;
