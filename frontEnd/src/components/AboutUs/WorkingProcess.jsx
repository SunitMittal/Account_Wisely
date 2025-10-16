import React from "react";
import { Users, Shield, Target, Users2 } from "lucide-react";
import Container from "../Layout/Container";
import ProcessCard from "./ProcessCard";

const WorkingProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Outsourcing That Works",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      content:
        "Outsourcing your accounting tasks to AccountWisely means gaining a dedicated partner focused on delivering results. From managing payroll processing, tax return preparation, and GST filings to handling comprehensive bookkeeping, we ensure your firm's back-office functions run smoothly. Our expertise helps reduce operational costs, improve efficiency, and allow you to focus on high-value client advisory services and scaling your business.",
    },
    {
      id: 2,
      title: "Reliable, Secure, And Efficient",
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      content:
        "We prioritize data security and compliance, ensuring your clients' financial information remains protected at all times. Our security framework enforces strict data protection protocols, encryption, and multi-layered security measures. Whether it's payroll, tax filing, or accounts reconciliation, we handle every aspect with professional integrity, and complete confidentiality.",
    },
    {
      id: 3,
      title: "Empowering Your Firm To Grow",
      icon: <Target className="h-8 w-8 text-blue-700" />,
      content:
        "With AccountWisely, you gain the ability to scale your firm effortlessly while keeping overhead costs low. Our outsourced accounting solutions allow you to expand your service offerings, improve workflow efficiency, and manage growing client demands without the need for in-house hires. By outsourcing complex financial tasks to us, your firm can focus on business growth, strategic planning, and delivering expert financial advice.",
    },
    {
      id: 4,
      title: "A Long-Term Partnership For Success",
      icon: <Users2 className="h-8 w-8 text-blue-700" />,
      content:
        "When you choose AccountWisely, you're not just hiring an outsourcing provider—you're forming a long-term partnership built on trust, expertise, and results. Our dedicated offshore accounting professionals integrate seamlessly with your team, ensuring consistent service quality and operational excellence. We help increase your firm's profitability, maintain compliance with India accounting regulations.",
    },
  ];
  return (
    <Container>
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium tracking-wider text-gray-600 uppercase">
          Working Process
        </p>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          The AccountWisely <span className="text-blue-700">Approach</span>:{" "}
          <br />
          Smarter Outsourcing for Accounting Firms
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="water-fill-card relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300"
          >
            {/* Water fill overlay */}
            <div className="water-fill absolute right-0 bottom-0 left-0 z-0 h-0 bg-blue-300 transition-all duration-700 ease-out"></div>

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

export default WorkingProcess;
