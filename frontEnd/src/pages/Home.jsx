import React from "react";
import { useEffect, useRef } from "react";
import ServicesSection from "../components/sections/ServicesSection";
import CompanyOverviewSection from "../components/sections/CompanyOverviewSection";
import OnboardingProcessSection from "../components/sections/OnboardingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";
import { Phone } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import HomeVideo from "../components/sections/HomeVideo";
import HomeImageClg from "../components/AboutUs/HomeImageClg";
import FAQSection from "../components/AboutUs/FAQSection";

const Home = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    document.title =
      "AccountWisely | Outsourced Accounting Services for India Firms";

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <section ref={ctaRef} className="p-5 md:py-10 scroll-mt-20">
          <CtaSection />
        </section>
      </main>

      {/* Floating call-to-action pointer */}
      <button
        type="button"
        onClick={scrollToCta}
        aria-label="Jump to contact section"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-iconPulse"
      >
        <Phone size={24} strokeWidth={2.2} />
      </button>
      
    </div>
  );
};

export default Home;
