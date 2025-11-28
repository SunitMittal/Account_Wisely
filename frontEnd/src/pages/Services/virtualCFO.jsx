import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import ServiceList from "../../components/ServiceList";

const virtualCFO = () => {
  const FAQS = [
    {
      Q: "What types of tax returns does Account Wisely handle?",
      A: "We handle individual self-assessment returns, corporate tax filings, partnership and LLP filings, and more.",
    },
    {
      Q: "Why should I outsource tax return preparation?",
      A: "Outsourcing tax return preparation saves your firm time, reduces overhead costs, and ensures accurate, compliant filings for your clients without the need for an in-house tax team.",
    },
    {
      Q: "How does Account Wisely ensure compliance with India tax laws?",
      A: "Our team stays up to date with the latest India tax legislation, ensuring that your clients’ returns are always filed in accordance with current regulations.",
    },
    {
      Q: "Can Account Wisely help with tax planning?",
      A: "Yes! In addition to preparing tax returns, we offer proactive tax planning advice to help your clients reduce their tax liabilities and improve financial efficiency.",
    },
  ];

  return (
    <>
      <LandingImage
        title="Virtual CFO Services"
        link="Services / Vitrual CFO Services"
      />

      <div className="md:my-20 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] md:justify-center md:px-50">
        {/* left side */}
        <div className="mt-6 md:sticky md:top-2 md:h-fit lg:mt-8">
          <ServiceList />

          <div className="mx-auto my-6 max-w-96 rounded-2xl border border-[#1a0940] bg-white p-4 sm:my-8 sm:p-4.5">
            <TbPhoneCalling className="text-4xl text-[#2e1566] sm:text-6xl" />
            <h2 className="text-base font-bold sm:text-lg">Need Help?</h2>
            <p className="pt-2 pb-4 text-sm text-gray-600 sm:pb-5 sm:text-base">
              Get in touch and let us know how we can help touch as soon as
              possible.
            </p>
            <Link
              to={"/contact"}
              className="rounded-lg bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] p-3 text-sm font-semibold text-white shadow-lg transition-all duration-600 hover:-translate-y-1 hover:cursor-pointer hover:from-[#ffc388] hover:to-[#f58210] hover:shadow-2xl sm:p-3 sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="my-6 lg:px-10 sm:my-8 sm:px-4.5">
          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Why do modern businesses need a Virtual CFO instead of a full-time
              CFO?
            </h2>

            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              In today’s fast-changing business environment,
              <span className="font-bold">
                {" "}
                financial discipline is no longer optional{" "}
              </span>
              Whether you’re a startup building from scratch or an SME scaling
              rapidly, having strong financial leadership is crucial for
              sustainable growth.
            </p>

            <p className="mt-1 text-justify leading-7 text-gray-600 sm:mt-1 sm:leading-7 sm:text-lg">
              However, hiring a
              <span className="font-bold"> full-time CFO </span>
              can be costly and unnecessary—especially for businesses with lean
              teams or limited budgets.
            </p>

            <p className="mt-1 text-justify leading-7 text-gray-600 sm:mt-1 sm:leading-7 sm:text-lg font-bold">
              This is where Virtual CFO Services step in.
            </p>

            <p className="mt-1 text-justify leading-7 text-gray-600 sm:mt-1 sm:leading-7 sm:text-lg">
              A
              <span className="font-bold">
                {" "}
                Virtual CFO (Chief Financial Officer){" "}
              </span>
              — also known as a
              <span className="font-bold"> fractional CFO </span>
              —is an experienced finance professional who works with your
              business remotely or through periodic in-person engagement. With
              multi-industry expertise, a Virtual CFO provides:
            </p>

            <ul className="mb-1 text-justify leading-7 text-gray-600 sm:mb-1 sm:leading-7 sm:text-lg sm:pl-7">
              <li>• Strategic financial insights</li>
              <li>• Financial planning and forecasting</li>
              <li>• Performance monitoring</li>
              <li>• Profitability improvement strategies</li>
              <li>• Risk management guidance</li>
            </ul>

            <p className="mt-1 mb-4 text-justify leading-7 text-gray-600 sm:mt-1 sm:mb-4 sm:leading-7 sm:text-lg">
              —all at
              <span className="font-bold"> fraction of the cost </span>
              of a full-time CFO.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Why Virtual CFO Services Are Essential for SMEs & Startups?
            </h2>
            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              Growing businesses typically face three major financial management
              challenges:
            </p>

            <ul className="mb-4 text-justify leading-7 text-gray-600 sm:mb-4 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                •{" "}
                <span className="font-bold">Skilled Financial Supervision</span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  Reliable MIS & Performance Reporting
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  A Senior Finance Advisor for Growth & Strategy
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              What is the role of a Virtual CFO in your business?
            </h2>
            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              A Virtual CFO acts as your:
            </p>

            <ul className="mb-4 text-justify leading-7 text-gray-600 sm:mb-4 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • <span className="font-bold">Strategic Advisor</span>– guiding
                key financial decisions
              </li>
              <li>
                • <span className="font-bold">Financial Planner</span>– managing
                budgets, cash flow, and forecasts
              </li>
              <li>
                • <span className="font-bold">Performance Monitor</span>–
                tracking business KPIs and profitability
              </li>
              <li>
                • <span className="font-bold">Compliance Guardian</span>–
                ensuring GST, TDS, and tax compliance
              </li>
              <li>
                • <span className="font-bold">Risk Manager</span>– identifying
                and mitigating financial risks
              </li>
              <li>
                • <span className="font-bold">Growth Partner</span>– supporting
                expansion, funding, and long-term strategy
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Our Virtual CFO Service Packages
            </h2>
            <h3 className="text-2xl font-bold sm:text-xl md:text-2xl text-[#2e1566]">
              Which CFO service is best for growing businesses under ₹25 Crore?
            </h3>

            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              Our Basic CFO Services which are ideal for
              <span className="font-bold">
                {" "}
                Companies below ₹25 Crore turnover{" "}
              </span>
              includes:
            </p>

            <ul className="mb-2 text-justify leading-7 text-gray-600 sm:mb-2 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • Comprehensive monthly MIS (
                <span className="font-bold">
                  P&L, Balance Sheet, Ratios, Cash Flow
                </span>
                )
              </li>
              <li>• Weekly visit by our finance team</li>
              <li>
                • Guidance and support from a{" "}
                <span className="font-bold">Senior finance professional</span>{" "}
                via phone and email
              </li>
              <li>
                • Supervision of{" "}
                <span className="font-bold">
                  accounts, controls, and monthly closing
                </span>
              </li>
              <li>
                • Support for{" "}
                <span className="font-bold">
                  GST, TDS, income tax, and compliance monitoring
                </span>
              </li>
              <li>• Cash flow planning and weekly performance review</li>
            </ul>

            <p className="text-justify leading-7 text-gray-600 sm:leading-7 sm:text-lg">
              Whom it is for:
            </p>

            <ul className="mb-3 text-justify leading-7 text-gray-600 sm:mb-3 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • Businesses needing a{" "}
                <span className="font-bold">strong finance foundation</span>
              </li>
              <li>
                • Companies that require{" "}
                <span className="font-bold">
                  consistent financial oversight and support
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold sm:text-xl md:text-2xl text-[#2e1566]">
              Which CFO solution is ideal for fast-scaling companies above ₹25
              Crore?
            </h3>

            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              Our Premium CFO Services which are ideal for
              <span className="font-bold">
                {" "}
                Companies above ₹25 Crore turnover{" "}
              </span>
              includes:
            </p>

            <ul className="mb-2 text-justify leading-7 text-gray-600 sm:mb-2 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • Everything in the{" "}
                <span className="font-bold">Basic CFO Service</span>
              </li>
              <li>
                • Monthly visit from a{" "}
                <span className="font-bold">
                  Senior CFO-level finance expert
                </span>
              </li>
              <li>
                • Deep{" "}
                <span className="font-bold">
                  performance, risk, and profitability
                </span>{" "}
                analytics
              </li>
              <li>
                • Advanced{" "}
                <span className="font-bold">
                  budgeting, forecasting, and scenario planning
                </span>
              </li>
              <li>
                • Periodic meetings with{" "}
                <span className="font-bold">
                  promoters, board members, investors, and banks
                </span>
              </li>
              <li>
                • Strategic support for{" "}
                <span className="font-bold">
                  expansion, funding, and financial restructuring
                </span>
              </li>
            </ul>

            <p className="text-justify leading-7 text-gray-600 sm:leading-7 sm:text-lg">
              Whom it is for:
            </p>

            <ul className="mb-3 text-justify leading-7 text-gray-600 sm:mb-3 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • <span className="font-bold">Fast-growing organizations</span>
              </li>
              <li>
                • Companies that require{" "}
                <span className="font-bold">
                  high-level financial strategy and leadership
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Why Choose Us as Your Virtual CFO?
            </h2>
            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              At Account Wisely, we operate as a
              <span className="font-bold"> trusted long-term partner </span>
              for your business. Our approach is simple:
              <span className="font-bold">
                {" "}
                we combine technical finance expertise with practical business
                understanding
              </span>
              .
            </p>

            <p className="mt-1 text-justify leading-7 text-gray-600 sm:mt-1 sm:leading-7 sm:text-lg">
              We bring:
            </p>

            <ul className="mb-2 text-justify leading-7 text-gray-600 sm:mb-2 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • <span className="font-bold">Multi-industry experience</span>{" "}
                across startups, SMEs, manufacturing, trading, e-commerce,
                services, and more
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  Chartered Accountants and finance experts
                </span>{" "}
                who know how Indian businesses operate
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  Advanced MIS and data insights
                </span>{" "}
                for better decision-making
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  Process-driven financial systems
                </span>{" "}
                to reduce errors and improve accuracy
              </li>
              <li>
                • <span className="font-bold">Cost-effective solutions</span>{" "}
                designed for small and mid-sized companies
              </li>
            </ul>

            <p className="mb-3 text-justify leading-7 text-gray-600 sm:mb-3 sm:leading-7 sm:text-lg">
              Most importantly, we function like your
              <span className="font-bold"> own CFO—proactively </span>
              working to
              <span className="font-bold">
                {" "}
                strengthen finances, improve profitability, and support
                long-term growth
              </span>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Who Should Opt for Virtual CFO Services?
            </h2>
            <p className="mt-2 mb-1 text-justify leading-7 text-gray-600 sm:mt-2 sm:mb-1 sm:leading-7 sm:text-lg">
              Our services are ideal for:
            </p>

            <ul className="mb-3 text-justify leading-7 text-gray-600 sm:mb-3 sm:leading-7 sm:text-lg sm:pl-7">
              <li>
                • Startups looking for
                <span className="font-bold">
                  {" "}
                  fundraising support or financial discipline
                </span>
              </li>
              <li>
                • SMEs scaling rapidly without a
                <span className="font-bold">
                  {" "}
                  structured finance department
                </span>
              </li>
              <li>
                • Family-run businesses moving towards
                <span className="font-bold"> professional management</span>
              </li>
              <li>
                • Companies facing
                <span className="font-bold">
                  {" "}
                  cash flow issues or declining profitability
                </span>
              </li>
              <li>
                • Businesses preparing for
                <span className="font-bold">
                  {" "}
                  audits, loans, or investor meetings
                </span>
              </li>
              <li>
                • Entrepreneurs who want
                <span className="font-bold">
                  {" "}
                  financial clarity and peace of mind
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mt-4 text-3xl font-bold sm:text-2xl md:text-3xl">
              Take Control of Your Finances with a{" "}
              <span className="text-[#2e1566]">Trusted Virtual CFO</span>
            </h3>
            <p className="mt-2 text-justify leading-7 text-gray-600 sm:mt-2 sm:leading-7 sm:text-lg">
              A Virtual CFO helps you focus on what you do best—
              <span className="font-bold">
                {" "}
                running and growing your business
              </span>
              —while we take care of the
              <span className="font-bold">
                {" "}
                numbers, compliance, systems, and financial strategy{" "}
              </span>
              .
            </p>

            <p className="mt-1 text-justify leading-7 text-gray-600 sm:mt-1 sm:leading-7 sm:text-lg">
              If you're ready to
              <span className="font-bold">
                {" "}
                strengthen your financial engine and build a smarter, more
                profitable business
              </span>
              , we are here to support you.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#fff2dd] px-4 py-14 sm:px-4 sm:py-8 md:py-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-center text-black">FAQs</h2>
          <h2 className="text-center text-4xl font-bold sm:text-3xl md:text-4xl">
            Everything You Need to Know About{" "}
            <span className="text-[#2e1566]">Outsourced Accounting</span>
          </h2>
          <p className="my-3 text-center text-gray-600 sm:my-3 lg:mb-8 text-lg">
            Discover helpful answers to your most pressing financial questions.
            We're here to assist you every step of the way!{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {FAQS.map((FAQ, i) => (
              <div
                key={i}
                className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-[#fc9f41] to-[#ffc388] animate-borderFlow"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div
                  className="rounded-3xl backdrop-blur-xl bg-white/40 shadow-xl px-5 py-5 h-full transition-all duration-400 group-hover:shadow-2xl group-hover:-translate-y-3 animate-fadeIn"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3 px-3">
                    <h3 className="text-lg font-bold text-black">{FAQ.Q}</h3>
                  </div>

                  <p className="mt-2 text-gray-700 bg-white/50 rounded-xl px-3 py-4 shadow-inner backdrop-blur-md">
                    {FAQ.A}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default virtualCFO;
