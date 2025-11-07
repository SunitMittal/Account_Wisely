import React from "react";
import {
  BookOpen,
  Landmark,
  FileCheck,
  FilePen,
  HandCoins,
  Banknote,
  ChartSpline,
  FileText,
} from "lucide-react";
import Container2 from "../Layout/Container2.jsx";
import ServiceCard from "./ServicesCard.jsx";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Tax Return Preparation",
      icon: <FilePen className="h-8 w-8 group-hover:text-white" />,
      content:
        "Simplify tax season with our preparation and filing services that take the stress out of tax returns.",
      path: "/services/taxreturn",
    },
    {
      id: 2,
      title: "Payroll Services",
      icon: <HandCoins className="h-8 w-8 group-hover:text-white" />,
      content:
        "Timely, accurate payroll, every time. We make sure your clients' payroll is compliant with UK regulations, without the hassle.",
      path: "/services/payroll",
    },
    {
      id: 3,
      title: "GST Return Filing",
      icon: <Banknote className="h-8 w-8 group-hover:text-white" />,
      content:
        "We handle GST returns with precision and efficiency, ensuring compliance with Ind-AS.",
      path: "/services/GST",
    },
    {
      id: 4,
      title: "Accounting Services",
      icon: <FileText className="h-8 w-8 group-hover:text-white" />,
      content:
        "We manage your clients' financial records, ensuring accuracy and compliance without taking up your time.",
      path: "/services/accounting",
    },
    {
      id: 5,
      title: "Financial Analysis",
      icon: <ChartSpline className="h-8 w-8 group-hover:text-white" />,
      content:
        "Our team delivers the insights your clients need to make smart, informed decisions with their financial data.",
      path: "/services/financialanalysis",
    },
  ];

  return (
    <Container2>
      <div>
        <div className="md:sticky md:top-8 text-sm font-semibold tracking-wider text-gray-600">
          <p className="text-lg font-semibold sm:text-lg">Services</p>
          <h2 className="mt-2 text-2xl font-bold text-[#2a4768] sm:text-3xl md:max-w-56 md:text-4xl lg:text-5xl">
            Outsourced Accounting
          </h2>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Services
          </h2>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:max-w-96 md:text-4xl lg:text-5xl">
            Designed for Your Firm
          </h2>
          <p className="mt-4 max-w-[26rem] text-sm leading-6 font-normal text-gray-600 sm:text-base sm:leading-7">
            Managing client accounts can be a drain on your time and resources.
            Account Wisely takes the load off your shoulders with a full range
            of outsourced accounting services designed to meet the unique needs
            of India, US and UK startups and accounting firms. Let us handle the
            critical and time-consuming tasks while you focus on growing your
            business.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="water-fill-card relative overflow-hidden rounded-lg border bg-white transition-all duration-300"
          >
            {/* Water fill overlay */}
            <div className="water-fill absolute right-0 bottom-0 left-0 z-0 h-0 bg-gradient-to-t from-[#7ab3bd] to-[#2a4768] transition-all duration-700 ease-out"></div>

            {/* Card content above the water */}
            <div className="relative z-10">
              <ServiceCard
                title={service.title}
                content={service.content}
                icon={service.icon}
                path={service.path}
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
    </Container2>
  );
};

export default ServicesSection;
