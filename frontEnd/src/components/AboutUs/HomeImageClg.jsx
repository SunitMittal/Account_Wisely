import React from "react";
import { Award, Users } from "lucide-react";
import Container from "../Layout/Container";
import TopImage from "../TopImage";
import img1 from "../../assets/aboutImg1.png";
import img2 from "../../assets/aboutImg2.jpg";
import { GiTeamIdea } from "react-icons/gi";
import { FaFolderClosed } from "react-icons/fa6";
import { TbClockCheck } from "react-icons/tb";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const HomeImageClg = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/about");
  };

  return (
    <Container>
      <div className="grid items-center md:gap-36 md:p-20 md:grid-cols-2 grid-rows-1 px-20 
      ">
        <div className="relative rounded-xl">
          <TopImage source1={img1} source2={img2} className="z-0" />

          <div className="animate-float-x absolute -top-8 -left-20 md:top-10 md:right-28 z-10 flex w-fit items-center space-x-4 rounded-lg bg-[#fff2dd] p-4 shadow-md transition-transform duration-300 hover:scale-105">
            <Users className="text-[#492a8a]" />
            <div>
              <p className="text-xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>

          <div className="animate-float-x-reverse absolute -left-10 -bottom-40 md:right-2/5 md:-bottom-16 z-10 flex w-fit flex-col items-start gap-4 space-x-4 rounded-lg bg-[#fff2dd] p-4 shadow-md transition-transform duration-300 hover:scale-105">
            <div className="rounded-full bg-[#e3d6ff] p-3">
              <Award className="text-[#492a8a]" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">97`%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="animate-slide-in space-y-6">
          <div className="mb-3">
            <h2 className="mb-1 text-2xl font-bold text-gray-700">About Us</h2>
            <h1 className="leading-tight font-bold text-black md:text-3xl lg:text-5xl">
              <span className="text-[#2e1566]">Financial Solutions </span>
              to Propel Your Business Success
            </h1>
          </div>

          <div className="stagger-animation space-y-4 text-gray-700">
            <p>
              The accounting industry is evolving quickly, and staying ahead can
              be challenging. Partner with Account Wisely—your dedicated ally in
              success. With decades of experience, we offer India, US and UK
              start-ups and accounting firms cost-effective, scalable outsourced
              accounting solutions, enabling you to focus on what matters most:
              serving your clients.
            </p>
          </div>

          <ul className="my-7 flex flex-col gap-5 font-semibold text-gray-800">
            <h4 className="text-lg font-bold">
              Here's what we bring to the table:
            </h4>
            <li className="flex items-center gap-3 text-lg">
              <GiTeamIdea className="text-3xl" />
              An Expert Team
            </li>
            <li className="flex items-center gap-3 text-lg">
              <FaFolderClosed className="text-3xl" />
              Tailored Services
            </li>
            <li className="flex items-center gap-3 text-lg">
              <TbClockCheck className="text-3xl" />
              On-Time Delivery
            </li>
          </ul>

          <Button text="More About Us" onClick={handleGetStarted} />
        </div>
      </div>
    </Container>
  );
};

export default HomeImageClg;
