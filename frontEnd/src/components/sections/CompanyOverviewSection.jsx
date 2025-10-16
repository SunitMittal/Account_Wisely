import React from "react";
import StatCard from "../ui/StatCard";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const CompanyOverviewSection = () => {
  const navigate = useNavigate();

  const handleContactNow = () => {
    navigate("/contact");
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4 text-center">
          <span className="text-sm font-medium tracking-wider text-teal-600 uppercase">
            Company Overview
          </span>
        </div>

        <h2
          id="about-heading"
          className="mb-6 text-center text-3xl font-bold md:text-4xl"
        >
          Efficiency, Accuracy, and Trust Define
          <span className="text-navy-800 block">AccountWisely</span>
        </h2>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-gray-600">
            We understand the pressures accounting and CA firms face—tight
            deadlines, growing client demands, and the constant chase to stay
            ahead. That's where we step in as your trusted outsourcing partner.
            Think of us as an extension of your team, working behind the scenes
            to handle tax return preparation and GST returns with precision and
            care.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard value="10 Years+" label="Experience" />
          <StatCard value="97%" label="Customer Satisfaction" />
          <StatCard value="95%" label="Customer Retention Rate" />
          <StatCard value="79%" label="Customer Reference Rate" />
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-gray-600">
              As your dedicated outsourcing partner, we specialize in seamless,
              accurate tax preparation and payroll management. Our expertise
              allows you to deliver exceptional results to your clients while
              freeing up your time.
            </p>

            <Button variant="primary" onClick={handleContactNow}>
              Contact Now
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/7821714/pexels-photo-7821714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional accountant"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
