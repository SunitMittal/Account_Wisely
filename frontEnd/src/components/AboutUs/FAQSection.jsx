import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";

const FAQSection = ({ question, answer, isOpen, onClick }) => {
  const [openFaqId, setOpenFaqId] = useState("faq1");
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  const faqs = [
    {
      id: "faq1",
      question:
        "What's the difference between in-house and outsourced accounting?",
      answer:
        "Yes, at AccountWisely, we employ an experienced team of certified financial professionals who stay on top of industry regulations to ensure accuracy and compliance.",
    },
    {
      id: "faq2",
      question: "Which software do you use?",
      answer:
        "We're well-versed in all major accounting software platforms including Xero, QuickBooks, SAP, Zoho, Tally, Busy and more. We adapt to your preferred software environment, ensuring seamless integration with your existing systems and workflows.",
    },
    {
      id: "faq3",
      question: "Why should we outsource to AccountWisely?",
      answer:
        "Outsourcing to AccountWisely allows you to reduce operational costs by up to 40%, improve efficiency, and focus on growing your client relationships. Our dedicated team ensures accuracy, compliance, and exceptional service quality while you concentrate on high-value advisory work.",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="animate-fade-in">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Find answers to your most common questions
          </h2>

          <p className="mb-8 text-gray-600">
            We know you may have questions about our services, processes, and
            how we can support your firm. Here are some frequently asked
            questions:
          </p>

          <div className="hover-lift rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-start">
              <div className="mr-4 transform rounded-full bg-[#2a4768] p-3 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Want to Know More?
                </h3>
                <p className="text-sm text-gray-600">
                  Need additional information? Have questions? We're here to
                  help you take your firm to the next level. Let us show you how
                  AccountWisely can transform your accounting processes.
                </p>
              </div>
            </div>

            <button className="w-full transform rounded-lg bg-[#2a4768] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black hover:shadow-lg">
              <Link to={"/contact"}>We're Here To Help!</Link>
            </button>
          </div>
        </div>

        <div className="stagger-animation space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqId === faq.id}
              onClick={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="hover-lift mb-4 overflow-hidden rounded-lg border">
      <button
        className={`flex w-full items-center justify-between p-4 text-left transition-all duration-400 ${isOpen
            ? "bg-[#2c0f69] text-white"
            : "bg-white text-black hover:bg-blue-50"
          }`}
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <div className="transform transition-transform duration-300">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="transform bg-[#8954fc] p-4 text-white transition-transform duration-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
