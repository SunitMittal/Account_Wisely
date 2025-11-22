import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleConsultation = () => {
    navigate("/contact");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-3xl font-bold md:text-4xl"
            data-aos="fade-up"
          >
            Ready to Transform Your Accounting Firm?
          </h2>

          <p
            className="mb-8 text-lg text-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Partner with AccountWisely and focus on growing your practice while
            we handle the back-office operations with precision and care.
          </p>

          <div
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button text="Schedule a Consultation" onClick={handleConsultation} />
            <Button text="Learn More" onClick={handleLearnMore} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
