import React from "react";
import { Award, Users } from "lucide-react";
import Container from "../Layout/Container";
import TopImage from "../TopImage";
import img1 from "../../assets/aboutImg1.png";
import img2 from "../../assets/aboutImg2.jpg";
import Button from "../Button";

const HeroSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="relative rounded-xl">
          <TopImage source1={img1} source2={img2} className="z-0" />

          <div className="animate-float-x absolute top-10 right-28 z-10 flex w-fit items-center space-x-4 rounded-lg bg-[#fff2dd] p-4 shadow-md transition-transform duration-300 hover:scale-105">
            <Users className="text-[#492a8a]" />
            <div>
              <p className="text-xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>

          <div className="animate-float-x-reverse absolute right-2/5 -bottom-16 z-10 flex w-fit flex-col items-start gap-4 space-x-4 rounded-lg bg-[#fff2dd] p-4 shadow-md transition-transform duration-300 hover:scale-105">
            <div className="rounded-full bg-[#e3d6ff] p-3">
              <Award className="text-[#492a8a]" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">97%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="animate-slide-in space-y-4 sm:space-y-6">
          <div className="mb-3 sm:mb-4">
            <h2 className="mb-1 text-base font-bold text-gray-700 sm:text-xl lg:text-2xl">
              About Us
            </h2>
            <h1 className="leading-tight font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
              Expert Outsourced{" "}
              <span className="text-[#2e1566]">Accounting Services</span> for
              Indian Start-Ups & CA Firms — Save Time & Cut Costs
            </h1>
          </div>

          <div className="stagger-animation space-y-3 text-sm text-gray-700 sm:space-y-4 sm:text-base">
            <p>
              We provide
              <span className="font-medium">
                {" "}
                expert outsourced accounting services{" "}
              </span>
              to help Indian start-ups and CA firms
              <span className="font-medium">
                {" "}
                streamline operations and boost efficiency
              </span>
              . Our team handles back-office tasks such as
              <span className="font-medium">
                {" "}
                payroll, tax preparation, GST filings, and more
              </span>
              , allowing you to focus on client service and business growth.
            </p>

            <p>
              With AccountWisely India as your outsourcing partner, you can
              <span className="font-medium">
                {" "}
                save time, cut costs, and enhance profitability
              </span>
              .
            </p>

            <p>
              For decades, accounting firms have
              <span className="font-medium"> trusted AccountWisely India </span>
              to seamlessly manage their clients' finances. With
              <span className="font-medium">
                {" "}
                extensive experience and a commitment to excellence
              </span>
              , we help you
              <span className="font-medium">
                {" "}
                reduce overhead, boost efficiency, and enhance client
                satisfaction{" "}
              </span>
              —all while ensuring full compliance with the latest
              <span className="font-medium"> India regulations</span>.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
