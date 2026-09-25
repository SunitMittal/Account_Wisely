import React from "react";
import { useEffect } from "react";
import ServicesSection from "../components/sections/ServicesSection";
import CompanyOverviewSection from "../components/sections/CompanyOverviewSection";
import OnboardingProcessSection from "../components/sections/OnboardingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";

import AOS from "aos";
import "aos/dist/aos.css";

import HomeVideo from "../components/sections/HomeVideo";
import HomeImageClg from "../components/AboutUs/HomeImageClg";
import FAQSection from "../components/AboutUs/FAQSection";

const Home = () => {
  useEffect(() => {
    document.title =
      "AccountWisely | Outsourced Accounting Services for India Firms";

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <section>
          <HomeVideo />
        </section>
        <section className="p-5">
          <HomeImageClg />
        </section>
        <section className="p-5 md:py-10 bg-[#fff2dd]">
          <ServicesSection />
        </section>
        <section className="p-5 md:py-10">
          <CompanyOverviewSection />
        </section>
        <section className="p-5 md:py-10 bg-[#fff2dd]">
          <OnboardingProcessSection />
        </section>
        <section className="p-5 md:py-10">
          <TestimonialsSection />
        </section>
        <section className="p-5 md:py-10 bg-[#fff2dd]">
          <FAQSection />
        </section>
        <section className="p-5 md:py-10">
          <CtaSection />
        </section>
      </main>
    </div>
  );
};

export default Home;
