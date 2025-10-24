import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../../assets/Office-Video.mp4";
import Button from "../Button";

const HomeVideo = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <section
      className={`relative flex h-screen items-center justify-start overflow-hidden`}
    >
      {/* Background Video Layer */}
      <video
        className="absolute top-0 left-0 z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
      </video>

      {/* Particles Effect Layer */}
      <div
        className="absolute top-0 left-0 z-20 h-full w-full animate-pulse"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "200px 200px, 300px 300px, 150px 150px",
        }}
      />

      {/* Translucent Black Overlay/Mask */}
      <div
        className="hover:bg-opacity-30 absolute top-0 left-0 z-30 h-full w-full transition-all duration-300"
        style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
      />

  {/* Text Content Layer */}
  <div className="animate-fade-in-up relative z-40 mx-4 md:ml-56 max-w-4xl px-5 text-white">
        <p
          className="inline rounded-full p-2"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          Your Trusted Partner in Accounting Solutions
        </p>
  <h1 className="mb-4 text-3xl leading-normal font-semibold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
          <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
            Expert Outsourced{" "}
            <span
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {" "}
              Accounting <br /> Solutions
            </span>{" "}
            for Indian Startups & Accounting Firms
          </span>
        </h1>

        <p
          className="mb-8 max-w-2xl opacity-90"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
        >
          AccountWisely provides expert outsourced accounting services for
          Indian Startups and accounting firms, including bookkeeping, payroll,
          and tax preparation. We streamline operations, ensure compliance, and
          help you scale efficiently—while you stay focused on growth. Your
          clients won't see us, but you'll experience the accuracy and
          reliability behind the scenes.
        </p>

        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>
    </section>
  );
};

export default HomeVideo;
