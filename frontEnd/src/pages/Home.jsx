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
        <section className="bg-white">
          <HomeImageClg />
        </section>
        <section className="md:py-16">
          <ServicesSection />
        </section>
        <section className="bg-white">
          <CompanyOverviewSection />
        </section>
        <section className="md:py-16">
          <OnboardingProcessSection />
        </section>
        <section className="bg-white">
          <TestimonialsSection />
        </section>
        <section className="bg-gray-50 py-8 md:py-16">
          <FAQSection />
        </section>
        <section className="bg-white">
          <CtaSection />
        </section>
      </main>
    </div>
  );
};

export default Home;
