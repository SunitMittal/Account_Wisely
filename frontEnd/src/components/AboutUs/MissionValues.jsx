import React from "react";
import {
  FileCheck,
  Users,
  Award,
  Lightbulb,
  Handshake,
  LibraryBig,
  ArrowUpRight,
} from "lucide-react";
import Container from "../Layout/Container";
import ValueCard from "./ValueCard";
import { useInView } from "../../hooks/useInView";

const MissionValues = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      id: 1,
      title: "Integrity",
      icon: <FileCheck className="h-6 w-6 text-blue-700" />,
      content:
        "We uphold honesty, transparency, and ethical practices in everything we do.",
    },
    {
      id: 2,
      title: "Client-Centric",
      icon: <Users className="h-6 w-6 text-blue-700" />,
      content:
        "We focus on understanding your firm's unique needs, providing tailored solutions that drive success.",
    },
    {
      id: 3,
      title: "Excellence",
      icon: <Award className="h-6 w-6 text-blue-700" />,
      content:
        "We go beyond expectations, providing high-quality services that create real impact.",
    },
    {
      id: 4,
      title: "Innovation",
      icon: <Lightbulb className="h-6 w-6 text-blue-700" />,
      content:
        "We leverage cutting-edge technology and modern strategies to ensure efficiency and effectiveness.",
    },
    {
      id: 5,
      title: "Collaboration",
      icon: <Handshake className="h-6 w-6 text-blue-700" />,
      content:
        "We operate as an extension of your firm, aligning with your goals to help you thrive.",
    },
    {
      id: 6,
      title: "Continuous Learning",
      icon: <LibraryBig className="h-6 w-6 text-blue-700" />,
      content:
        "We invest in ongoing training and industry insights to stay ahead of market trends.",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-8 md:flex-row">
        <div
          ref={titleRef}
          className={`scroll-hidden md:w-2/5 ${
            titleInView ? "scroll-show" : ""
          }`}
        >
          <div className="mb-4">
            <p className="mb-1 text-sm font-bold text-[#2e1566]">
              — Our Mission & Core Values
            </p>
            <h2 className="font-bold text-black lg:text-4xl md:text-3xl">
              Partnering for Growth Through{" "}
              <span className="text-[#2e1566]">Financial Clarity</span>
            </h2>
          </div>

          <div className="relative mt-8">
            <div className="absolute top-0 right-0 -mt-19 -mr-12 h-30 w-30 text-purple-200 opacity-50">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M45.7,-76.8C58.9,-69.3,69.3,-55.9,76.2,-41.3C83.1,-26.7,86.5,-10.8,84.1,3.9C81.8,18.5,73.6,32,64.5,44.5C55.3,57,45.1,68.5,32.4,73.4C19.6,78.2,4.2,76.4,-11.4,74.2C-27,72,-42.8,69.3,-56.2,61.1C-69.5,52.9,-80.3,39.1,-85.8,23.1C-91.2,7.1,-91.3,-11.2,-86.1,-27.2C-80.9,-43.2,-70.5,-56.9,-57,-65.5C-43.5,-74.1,-27.1,-77.5,-10.9,-77.2C5.2,-76.9,32.5,-84.3,45.7,-76.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className={`scroll-stagger md:w-3/5 ${
            cardsInView ? "scroll-show" : ""
          }`}
        >
          <p className="text-gray-700">
            Our mission is simple: to{" "}
            <span className="font-medium">
              empower Indian Start-Ups and CA firms
            </span>{" "}
            with{" "}
            <span className="font-medium">
              reliable, efficient, and cost-effective outsourced accounting
              services
            </span>
            . With <span className="font-medium">decades of expertise</span>, we
            take the burden of financial management off your shoulders—so you
            can{" "}
            <span className="font-medium">
              focus on what truly matters: serving your clients and scaling your
              business
            </span>
            .
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-3">
        {values.map((value) => (
          <ValueCard
            key={value.id}
            title={value.title}
            content={value.content}
            icon={value.icon}
          />
        ))}
      </div>
      <div className="relative mt-8">
        <div className="absolute top-0 right-0 -mt-19 -mr-25 h-30 w-30 text-purple-200 opacity-50">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M45.7,-76.8C58.9,-69.3,69.3,-55.9,76.2,-41.3C83.1,-26.7,86.5,-10.8,84.1,3.9C81.8,18.5,73.6,32,64.5,44.5C55.3,57,45.1,68.5,32.4,73.4C19.6,78.2,4.2,76.4,-11.4,74.2C-27,72,-42.8,69.3,-56.2,61.1C-69.5,52.9,-80.3,39.1,-85.8,23.1C-91.2,7.1,-91.3,-11.2,-86.1,-27.2C-80.9,-43.2,-70.5,-56.9,-57,-65.5C-43.5,-74.1,-27.1,-77.5,-10.9,-77.2C5.2,-76.9,32.5,-84.3,45.7,-76.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default MissionValues;
