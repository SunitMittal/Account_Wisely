import React from "react";
import LandingImage from "../../components/LandingImage";
import ServiceSidebar from "../../components/ServiceSidebar";

const FinancialAnalysis = () => {
  const FAQS = [
    {
      Q: "How can financial analysis help my clients’ business?",
      A: "Financial analysis provides valuable insights into business performance, helping clients make informed decisions, optimize cash flow, and plan for future growth.",
    },
    {
      Q: "What makes Account Wisely’s financial analysis services different?",
      A: "Account Wisely offers tailored financial reports that are easy to understand and relevant to your clients’ needs. Our team provides actionable insights that help clients make better business decisions.",
    },
    {
      Q: "Can Account Wisely work with businesses of any size?",
      A: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our services scale to meet the unique needs of each client.",
    },
    {
      Q: "How can I be sure that Account Wisely’s reports are accurate?",
      A: "Our team of experienced financial analysts uses reliable methods and tools to ensure that all reports are accurate and reflect your clients' true financial position.",
    },
  ];

  return (
    <>
      <LandingImage
        title="Financial Analysis Services"
        link="Services / Financial Analysis Services"
      />

      <div className="my-20 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] justify-center md:px-50">
        {/* left part */}
        <ServiceSidebar />

        {/* right part */}
        <div className="px-7">
          <div>
            <h3 className="text-3xl font-bold">
              Struggling with Financial Data?
              <span className="text-[#2e1566]"> Let’s Make It Simple!</span>
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              Financial analysis is essential—but let’s be honest, it can be
              <span className="font-bold"> time-consuming and complex. </span>
              As an accounting firm, your clients expect
              <span className="font-bold"> clear financial insights </span>
              that help them make better business decisions.
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Instead of spending
              <span className="font-bold"> hours buried in spreadsheets, </span>
              why not
              <span className="font-bold">
                {" "}
                outsource your financial analysis{" "}
              </span>
              to experts who can deliver
              <span className="font-bold"> accurate, data-driven insights</span>
              —without the headache?
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              That’s where<span className="font-bold"> Account Wisely </span>
              comes in!
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">Pain Point: </span>Many businesses
              struggle to interpret their financial data, leaving them unsure of
              their next move. Account Wisely provides the clarity needed to
              help your clients understand their financial position and take the
              necessary steps toward growth.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Why Choose Outsourced Financial Analysis?
            </h3>

            <p className="my-2 text-lg leading-7 text-gray-600">
              Accounting firms across the India are
              <span className="font-bold">
                {" "}
                outsourcing financial analysis{" "}
              </span>
              to save time, cut costs, and improve the quality of insights they
              deliver to clients.
            </p>

            <h4 className="my-2 text-3xl font-bold text-[#2e1566]">
              Here’s why it works:
            </h4>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">✅ Saves Time </span>– Free up your
                team to focus on core accounting services.
              </li>
              <li>
                <span className="font-bold">✅ Cost-Effective </span>– Get
                expert insights without hiring a full-time analyst.
              </li>
              <li>
                <span className="font-bold">✅ Improves Accuracy </span>– Reduce
                errors and ensure data-backed decisions.
              </li>
              <li>
                <span className="font-bold">
                  ✅ Provides Actionable Insights{" "}
                </span>
                – More than just numbers—get
                <span className="font-bold"> strategic recommendations.</span>
              </li>
            </ul>

            <p className="my-2 text-lg leading-7 text-gray-600">
              <span className="font-bold">Bottom Line: </span>We help you
              deliver
              <span className="font-bold"> financial clarity </span>to your
              clients while you focus on growing your firm.
            </p>

            <p className="rounded-2xl bg-[#1a0940] p-6 text-white text-lg">
              Looking for help with other accounting tasks? Explore our
              Outsourced Accounting Services to streamline your operations.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              What Our Outsourced Financial Analysis Services Include
            </h3>

            <p className="my-2 text-lg leading-7 text-gray-600">
              We offer
              <span className="font-bold">
                {" "}
                data-driven financial analysis{" "}
              </span>
              designed to help your clients optimize business performance.
            </p>

            <h4 className="my-2 text-3xl font-bold text-[#2e1566]">
              Our Key Services:
            </h4>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
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

            <p className="my-2 text-lg leading-7 text-gray-600">
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

          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              How Outsourcing Benefits Your Firm
            </h2>

            <h3 className="text-2xl font-bold text-[#2e1566]">
              More Time, Less Stress
            </h3>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Why spend hours
              <span className="font-bold">
                {" "}
                deciphering complex financial reports{" "}
              </span>
              when you can let experts handle it? Outsourcing allows you to
              focus on client relationships, advisory services, and
              <span className="font-bold"> growing your firm.</span>
            </p>

            <h3 className="text-2xl font-bold text-[#2e1566]">
              Higher Accuracy & Expert Insights
            </h3>

            <p className="my-2 leading-7 text-gray-600 text-lg">
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

            <h3 className="text-2xl font-bold text-[#2e1566]">
              Better Client Satisfaction
            </h3>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              When clients receive
              <span className="font-bold"> clear financial insights, </span>
              they trust you more. We help you
              <span className="font-bold"> deliver high-quality reports </span>
              that position your firm as a
              <span className="font-bold"> trusted financial advisor.</span>
            </p>

            <p className="rounded-2xl bg-[#1a0940] p-6 text-white text-lg">
              Need help with tax strategy? Explore our
              <span className="font-bold"> Tax Preparation Services </span>to
              ensure your clients are prepared and compliant.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              Why India Accounting Firms Trust Account Wisely
            </h2>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">
                We’re not just an outsourcing company—we’re your financial
                analysis partner.
              </span>
            </p>

            <ul className="text-lg text-gray-600">
              <li>
                <span className="font-bold">
                  🔹 Specialized in Accounting & CA Firms{" "}
                </span>
                – We understand your clients’ financial needs.
              </li>
              <li>
                <span className="font-bold">🔹 Dedicated Offshore Team </span>–
                Work with
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

          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              Helping Your Clients Make Smarter Business Decisions
            </h2>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Your clients
              <span className="font-bold"> rely on financial insights </span>
              to make business decisions. But without
              <span className="font-bold"> expert analysis, </span>they may be
              making<span className="font-bold"> critical mistakes.</span>
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              With Account Wisely’s
              <span className="font-bold">
                {" "}
                outsourced financial analysis services,{" "}
              </span>
              you can:
            </p>

            <ul className="text-lg text-gray-600">
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
                <span className="font-bold"> data-driven decision-making.</span>
              </li>
              <li>
                🔹 Offer
                <span className="font-bold">
                  {" "}
                  value-added advisory services.
                </span>
              </li>
            </ul>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              We provide the insights,
              <span className="font-bold"> you take the credit!</span>
            </p>

            <p className="rounded-2xl bg-[#1a0940] p-6 text-white text-lg">
              Explore our Outsourced
              <span className="font-bold"> Accounting Services </span>for a
              complete solution to support your clients’ business operations.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              Ready to Elevate Your Financial Analysis Services?
            </h2>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">
                Accounting firms across the India{" "}
              </span>
              are choosing Account Wisely to deliver
              <span className="font-bold"> expert financial analysis </span>
              without the overhead costs of an in-house team.
            </p>

            <ul className="text-lg text-gray-600">
              <li>
                <span className="font-bold">🔹 Cut costs </span>while delivering
                high-value insights.
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

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">💡 Let’s Talk! </span>Contact us today
              to see how Account Wisely can support your firm’s growth! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#fff2dd] px-7 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-black">FAQs</h2>
          <h2 className="text-center text-4xl font-bold">
            Everything You Need to Know About{" "}
            <span className="text-[#2e1566]">Outsourced Accounting</span>
          </h2>
          <p className="my-2 text-center text-gray-600 mb-8 text-lg">
            Discover helpful answers to your most pressing financial questions.
            We're here to assist you every step of the way!{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
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

export default FinancialAnalysis;
