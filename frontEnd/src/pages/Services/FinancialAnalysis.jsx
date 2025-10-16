import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const FinancialAnalysis = () => {
  const faqs = [
    {
      question: "How can financial analysis help my clients’ business?",
      answer:
        "Financial analysis provides valuable insights into business performance, helping clients make informed decisions, optimize cash flow, and plan for future growth.",
    },
    {
      question:
        "What makes Account Wisely’s financial analysis services different?",
      answer:
        "Account Wisely offers tailored financial reports that are easy to understand and relevant to your clients’ needs. Our team provides actionable insights that help clients make better business decisions.",
    },
    {
      question: "Can Account Wisely work with businesses of any size?",
      answer:
        "Yes, we work with businesses of all sizes, from startups to large enterprises. Our services scale to meet the unique needs of each client.",
    },
    {
      question: "How can I be sure that Account Wisely’s reports are accurate?",
      answer:
        "Our team of experienced financial analysts uses reliable methods and tools to ensure that all reports are accurate and reflect your clients' true financial position.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage
        title="Outsourced Financial Analysis Services for CA & Accounting Firms in India"
        link="Services / Financial Analysis Services"
      />

      <div className="md:my-28 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] md:justify-center md:px-72">
        {/* left part */}
        <div className="mt-10 md:sticky md:top-2 md:h-fit">
          <ServiceList />

          <div className="mx-auto my-8 w-11/12 rounded-2xl border border-[#2a4768] bg-white p-4.5">
            <TbPhoneCalling className="text-6xl text-[#2a4768]" />
            <h2 className="text-lg font-bold">Need Help?</h2>
            <p className="pt-2 pb-5 text-gray-500">
              Get in touch and let us know how we can help touch as soon as
              possible.
            </p>
            <Link
              to={"/contact"}
              className="rounded-md bg-linear-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* right part */}
        <div>
          <img
            src={OutsourceYearEnd}
            className="mx-auto h-auto w-11/12 rounded-2xl"
          />

          <div className="px-5 py-5">
            <div>
              <h2 className="text-left text-4xl font-bold">
                Struggling with Financial Data?
                <span className="text-[#2a4768]"> Let’s Make It Simple!</span>
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Financial analysis is essential—but let’s be honest, it can be
                <span className="font-bold"> time-consuming and complex. </span>
                As an accounting firm, your clients expect
                <span className="font-bold"> clear financial insights </span>
                that help them make better business decisions.
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Instead of spending
                <span className="font-bold">
                  {" "}
                  hours buried in spreadsheets,{" "}
                </span>
                why not
                <span className="font-bold">
                  {" "}
                  outsource your financial analysis{" "}
                </span>
                to experts who can deliver
                <span className="font-bold">
                  {" "}
                  accurate, data-driven insights
                </span>
                —without the headache?
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                That’s where<span className="font-bold"> Account Wisely </span>
                comes in!
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Pain Point: </span>Many businesses
                struggle to interpret their financial data, leaving them unsure
                of their next move. Account Wisely provides the clarity needed
                to help your clients understand their financial position and
                take the necessary steps toward growth.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why Choose Outsourced Financial Analysis?
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Accounting firms across the India are
                <span className="font-bold">
                  {" "}
                  outsourcing financial analysis{" "}
                </span>
                to save time, cut costs, and improve the quality of insights
                they deliver to clients.
              </p>

              <h3 className="text-left text-3xl font-bold">
                Here’s why it works:
              </h3>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">✅ Saves Time </span>– Free up
                  your team to focus on core accounting services.
                </li>
                <li>
                  <span className="font-bold">✅ Cost-Effective </span>– Get
                  expert insights without hiring a full-time analyst.
                </li>
                <li>
                  <span className="font-bold">✅ Improves Accuracy </span>–
                  Reduce errors and ensure data-backed decisions.
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Provides Actionable Insights{" "}
                  </span>
                  – More than just numbers—get
                  <span className="font-bold"> strategic recommendations.</span>
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Bottom Line: </span>We help you
                deliver
                <span className="font-bold"> financial clarity </span>to your
                clients while you focus on growing your firm.
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Looking for help with other accounting tasks? Explore our
                Outsourced Accounting Services to streamline your operations.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                <span className="text-[#2a4768]">
                  What Our Outsourced Financial Analysis Services Include
                </span>
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We offer
                <span className="font-bold">
                  {" "}
                  data-driven financial analysis{" "}
                </span>
                designed to help your clients optimize business performance.
              </p>

              <h3 className="text-left text-3xl font-bold">
                Our Key Services:
              </h3>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">📊 Profit & Loss Analysis </span>–
                  Help clients understand their revenue vs. expenses.
                </li>
                <li>
                  <span className="font-bold">💰 Cash Flow Forecasting </span>–
                  Ensure liquidity and prevent cash shortages.
                </li>
                <li>
                  <span className="font-bold">
                    📉 Budgeting & Financial Planning{" "}
                  </span>
                  – Strategic insights for long-term success.
                </li>
                <li>
                  <span className="font-bold">
                    📈 Financial Ratios & KPI Analysis{" "}
                  </span>
                  – Identify areas for
                  <span className="font-bold"> growth and improvement.</span>
                </li>
                <li>
                  <span className="font-bold">📊 Variance Analysis </span>– Spot
                  financial trends and control unnecessary expenses.
                </li>
                <li>
                  <span className="font-bold">🔍 Debt & Risk Management </span>–
                  Minimize financial risks and optimize debt strategies.
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We turn
                <span className="font-bold">
                  {" "}
                  raw financial data into clear, actionable reports{" "}
                </span>
                —so you can
                <span className="font-bold"> deliver high-value insights </span>
                to your clients.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                How Outsourcing Benefits Your Firm
              </h2>

              <h3 className="text-left text-3xl font-bold">
                More Time, Less Stress
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Why spend hours
                <span className="font-bold">
                  {" "}
                  deciphering complex financial reports{" "}
                </span>
                when you can let experts handle it? Outsourcing allows you to
                focus on client relationships, advisory services, and
                <span className="font-bold"> growing your firm.</span>
              </p>

              <h3 className="text-left text-3xl font-bold">
                Higher Accuracy & Expert Insights
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Even the best accountants can’t analyze everything. Our team
                <span className="font-bold">
                  {" "}
                  specializes in financial analysis,{" "}
                </span>
                ensuring your clients get the
                <span className="font-bold">
                  {" "}
                  most accurate, up-to-date insights.
                </span>
              </p>

              <h3 className="text-left text-3xl font-bold">
                Better Client Satisfaction
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                When clients receive
                <span className="font-bold"> clear financial insights, </span>
                they trust you more. We help you
                <span className="font-bold">
                  {" "}
                  deliver high-quality reports{" "}
                </span>
                that position your firm as a
                <span className="font-bold"> trusted financial advisor.</span>
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Need help with tax strategy? Explore our
                <span className="font-bold"> Tax Preparation Services </span>to
                ensure your clients are prepared and compliant.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why India Accounting Firms Trust Account Wisely
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">
                  We’re not just an outsourcing company—we’re your financial
                  analysis partner.
                </span>
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    🔹 Specialized in Accounting & CA Firms{" "}
                  </span>
                  – We understand your clients’ financial needs.
                </li>
                <li>
                  <span className="font-bold">🔹 Dedicated Offshore Team </span>
                  – Work with
                  <span className="font-bold"> finance professionals </span>
                  without hiring in-house.
                </li>
                <li>
                  <span className="font-bold">🔹 ISO-Certified Security </span>–
                  Your
                  <span className="font-bold">
                    {" "}
                    client data stays 100% secure.
                  </span>
                </li>
                <li>
                  <span className="font-bold">🔹 Customized Reports </span>– Get
                  insights tailored to
                  <span className="font-bold"> your clients’ businesses.</span>
                </li>
                <li>
                  <span className="font-bold">🔹 Fast Turnaround Time </span>–
                  Deliver reports when your clients need them most.
                </li>
                <li>
                  <span className="font-bold">🔹 Cost Savings of 50%+ </span>–
                  Compared to hiring an in-house financial analyst.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Helping Your Clients Make Smarter Business Decisions
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Your clients
                <span className="font-bold"> rely on financial insights </span>
                to make business decisions. But without
                <span className="font-bold"> expert analysis, </span>they may be
                making<span className="font-bold"> critical mistakes.</span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                With Account Wisely’s
                <span className="font-bold">
                  {" "}
                  outsourced financial analysis services,{" "}
                </span>
                you can:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  🔹 Help clients
                  <span className="font-bold"> improve profitability.</span>
                </li>
                <li>
                  🔹 Identify financial
                  <span className="font-bold"> risks and opportunities.</span>
                </li>
                <li>
                  🔹 Ensure
                  <span className="font-bold">
                    {" "}
                    data-driven decision-making.
                  </span>
                </li>
                <li>
                  🔹 Offer
                  <span className="font-bold">
                    {" "}
                    value-added advisory services.
                  </span>
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We provide the insights,
                <span className="font-bold"> you take the credit!</span>
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Explore our Outsourced
                <span className="font-bold"> Accounting Services </span>for a
                complete solution to support your clients’ business operations.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Ready to Elevate Your Financial Analysis Services?
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">
                  Accounting firms across the India{" "}
                </span>
                are choosing Account Wisely to deliver
                <span className="font-bold"> expert financial analysis </span>
                without the overhead costs of an in-house team.
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">🔹 Cut costs </span>while
                  delivering high-value insights.
                </li>
                <li>
                  <span className="font-bold">🔹 Enhance client trust </span>
                  with clear, accurate financial reports.
                </li>
                <li>
                  <span className="font-bold">🔹 Free up your team </span>for
                  higher-value advisory services.
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">💡 Let’s Talk! </span>Contact us
                today to see how Account Wisely can support your firm’s growth!
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="items-center bg-white px-4.5 py-10 md:py-28">
        <p className="text-center font-semibold text-[#2a4768]">FAQs</p>
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Everything You Need to Know About{" "}
          <span className="text-[#2a4768]">Outsourced Accounting</span>
        </h2>
        <p className="my-5 text-center text-gray-500">
          Discover helpful answers to your most pressing financial questions.
          We’re here to assist you every step of the way!{" "}
        </p>
        <div className="mx-auto max-w-lg p-4 md:max-w-7xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-4 text-left font-semibold hover:cursor-pointer md:py-6 md:text-xl"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-400 md:text-xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FinancialAnalysis;
