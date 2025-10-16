import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Container from "../Layout/Container";
import AccordionItem from "./AccordionItem";
import { useInView } from "../../hooks/useInView";

const WhyChooseSection = () => {
  const [openItem, setOpenItem] = useState(1);
  const [imageRef, imageInView] = useInView({ threshold: 0.3 });
  const [contentRef, contentInView] = useInView({ threshold: 0.3 });

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? 0 : index);
  };

  const reasons = [
    {
      id: 1,
      title: "Results That Matter",
      content:
        "We don't just promise efficiency—we deliver measurable results. Our outsourced accounting services are designed to enhance your firm's profitability. From managing day-to-day accounting tasks to ensuring accurate tax filings, we help you free up valuable time and resources, so you can focus on scaling your business.",
    },
    {
      id: 2,
      title: "Trusted Expertise",
      content:
        "With over 10+ years of experience, our team of certified accounting professionals understands the unique challenges faced by India accounting firms. We constantly stay updated with the latest regulatory changes, ensuring your clients' finances are handled with precision and in full compliance with India regulations.",
    },
    {
      id: 3,
      title: "A Silent Partner for Your Firm's Success",
      content:
        "Consider us your behind-the-scenes partner, dedicated to your firm's growth. We seamlessly integrate with your existing workflow, allowing you to expand service offerings without increasing overhead. By handling complex financial tasks, we enable you to focus on strategic planning and client relationships.",
    },
    {
      id: 4,
      title: "Transparent, Actionable Reporting",
      content:
        "Clear communication is at the heart of our service. We provide comprehensive, easy-to-understand reports that give you complete visibility into your operations. Our real-time dashboards and regular updates ensure you always have the insights needed to make informed business decisions.",
    },
    {
      id: 5,
      title: "Continuously Evolving for Greater Impact",
      content:
        "We never stop improving. Our commitment to innovation means we're constantly enhancing our processes, adopting new technologies, and refining our approach to deliver even greater value to your firm. As your needs evolve, so do our solutions—ensuring a partnership that grows with you.",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div
          ref={imageRef}
          className={`scroll-hidden relative ${
            imageInView ? "scroll-show" : ""
          }`}
        >
          <img
            src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team discussing financial results"
            className="h-auto w-full rounded-lg shadow-lg"
          />

          <div className="absolute bottom-6 left-6 flex items-center space-x-3 rounded-lg bg-white p-4 shadow-lg">
            <div className="text-4xl font-bold text-gray-900">5.0</div>
            <div>
              <div className="flex text-yellow-500">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <p className="text-sm font-medium text-gray-700">Client Review</p>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      i + 30
                    }.jpg`}
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className={`scroll-stagger ${contentInView ? "scroll-show" : ""}`}
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose AccountWisely India for Outsourced Accounting?
          </h2>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <AccordionItem
                key={reason.id}
                id={reason.id}
                title={`${reason.id}. ${reason.title}`}
                content={reason.content}
                isOpen={openItem === reason.id}
                onToggle={() => handleToggle(reason.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseSection;
