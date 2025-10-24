import React from "react";
import Button from "../ui/Button";
import BackgroundVideo from "../../assets/Office-Video.mp4";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div
            className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your Trusted Partner In Accounting Solutions
          </div>

          <h1
            className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Expert Outsourced
            <span className="block">Accounting</span>
            <span className="block">Solutions for India.</span>
            <span className="block">Accounting Firms</span>
          </h1>

          <p
            className="mb-8 max-w-2xl text-lg text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            AccountWisely provides expert outsourced accounting services for
            Indian Start-Ups and accounting firms, including payroll, and tax
            preparation. We streamline operations, ensure compliance, and help
            you scale efficiently—while you stay focused on growth. Your clients
            won't see us, but you'll experience the accuracy and reliability
            behind the scenes.
          </p>

          <div data-aos="fade-up" data-aos-delay="400">
            <Button size="lg" variant="primary" className="animate-pulse">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
