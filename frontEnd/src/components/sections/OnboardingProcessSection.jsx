import React from "react";
import {
  Users,
  Shield,
  Target,
  Users2,
  MessagesSquare,
  LaptopMinimalCheck,
  CirclePercent,
  Handshake,
} from "lucide-react";
import Container from "../Layout/Container";
import ProcessCard from "../AboutUs/ProcessCard";

const OnboardingProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation & needs Assessment",
      icon: (
        <MessagesSquare className="h-8 w-8 text-[#2a4768] group-hover:text-white" />
      ),
      content:
        "We begin by understanding your firm’s needs and how our services can best support your accounting work. We’ll create a plan that fits your requirements.",
    },
    {
      id: 2,
      title: "Secure Document Transfer",
      icon: (
        <Shield className="h-8 w-8 text-[#2a4768] group-hover:text-white" />
      ),
      content:
        "We handle your clients’ documents securely to make sure we understand your current financial processes and can work with your existing systems.",
    },
    {
      id: 3,
      title: "Software Access",
      icon: (
        <LaptopMinimalCheck className="h-8 w-8 text-[#2a4768] group-hover:text-white" />
      ),
      content:
        "We integrate with the accounting software you already use, so there’s no disruption to your workflow. This helps your team stay productive from the start.",
    },
    {
      id: 4,
      title: "Complimentary 20-Hour Trial",
      icon: (
        <CirclePercent className="h-8 w-8 text-[#2a4768] group-hover:text-white" />
      ),
      content:
        "You can try our services risk-free with a 20-hour trial. This gives you a chance to see how we can reduce your workload and improve your firm’s operations.",
    },
    {
      id: 5,
      title: "Mutual Agreement",
      icon: (
        <Handshake className="h-8 w-8 text-[#2a4768] group-hover:text-white" />
      ),
      content:
        "Once you’re ready, we initiate our partnership with an agreement that outlines our roles and responsibilities, setting the stage for successful collaboration.",
    },
  ];

  return (
    <Container>
      <div className="mb-5 text-center">
        <p className="text-sm font-bold tracking-wider text-[#2a4768]">
          Client Onboarding Process
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-4xl">
          Onboarding with <span className="text-[#2a4768]">AccountWisely</span>{" "}
          - Fast, Simple, and Efficient
        </h2>
        <p className="mt-4 leading-7 font-normal text-gray-600">
          We believe in making it easy for you. Our onboarding process is
          designed for a seamless transition, so you can quickly start seeing
          the benefits of outsourcing to Account Wisely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="water-fill-card relative overflow-hidden rounded-lg border bg-white transition-all duration-300"
          >
            {/* Water fill overlay */}
            <div className="water-fill absolute right-0 bottom-0 left-0 z-0 h-0 bg-gradient-to-t from-[#7ab3bd] to-[#2a4768] transition-all duration-700 ease-out"></div>

            {/* Card content above the water */}
            <div className="relative z-10">
              <ProcessCard
                number={`0${step.id}`}
                title={step.title}
                content={step.content}
                icon={step.icon}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .water-fill-card:hover .water-fill {
          height: 100%;
        }
      `}</style>
    </Container>
  );
};

export default OnboardingProcessSection;
