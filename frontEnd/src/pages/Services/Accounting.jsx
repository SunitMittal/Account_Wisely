import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import ServiceList from "../../components/ServiceList";
import { Link } from "react-router-dom";
import OutsourceAccounting from "../../assets/outsourced-accounting.webp";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

const Accounting = () => {
  const faqs = [
    {
      question:
        "Why should CA and accounting firms consider outsourced accounting?",
      answer:
        "Outsourcing accounting – So you don’t need to manage an internal team, allowing you to reduce costs, increase accuracy, and focus on growing your business.",
    },
    {
      question: "Why is Account Wisely a trusted partner for accounting firms?",
      answer:
        "Account Wisely offers reliable, white-label solutions customized to meet the unique needs of accounting firms. With a focus on precision and efficiency, we help firms deliver exceptional service to their",
    },
    {
      question:
        "What sets Account Wisely apart from other outsourced providers?",
      answer:
        "Our white-label services are designed to integrate seamlessly into your firm’s operations, giving you the flexibility and precision you need, with the expertise you can rely on.",
    },
    {
      question: "Can Account Wisely help with regulatory compliance?",
      answer:
        "Absolutely. Account Wisely ensures that your clients’ financial accounts are accurate and compliant with India standards, reducing risks and keeping everything in line with the latest regulations.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage
        title="Outsourced Accounting Services for Indian Accounting Firms"
        link="Services / Accounting Services"
      />

      <div className="my-8 md:my-28 md:grid md:grid-cols-[300px_minmax(600px,_1fr)_50px] md:justify-center md:px-4 lg:grid-cols-[400px_minmax(900px,_1fr)_100px] lg:px-72">
        {/* left part */}
        <div className="mt-6 md:sticky md:top-2 md:h-fit lg:mt-10">
          <ServiceList />

          <div className="mx-auto my-6 max-w-96 rounded-2xl border border-[#2a4768] bg-white p-4 sm:my-8 sm:p-4.5">
            <TbPhoneCalling className="text-4xl text-[#2a4768] sm:text-6xl" />
            <h2 className="text-base font-bold sm:text-lg">Need Help?</h2>
            <p className="pt-2 pb-4 text-sm text-gray-500 sm:pb-5 sm:text-base">
              Get in touch and let us know how we can help touch as soon as
              possible.
            </p>
            <Link
              to={"/contact"}
              className="rounded-md bg-linear-to-r from-[#2b4969] to-[#7cb5be] px-3 py-2 text-sm font-semibold text-white hover:cursor-pointer sm:px-4 sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* right part */}
        <div>
          <img
            src={OutsourceAccounting}
            className="mx-auto h-auto w-11/12 rounded-2xl"
          />

          <div className="my-6 px-3 sm:my-8 sm:px-4.5">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Expert{" "}
                <span className="text-[#2a4768]">Accounting Solutions</span> for
                start-ups & Accounting Firms in the India – Boost Efficiency &
                Compliance
              </h3>
              <p className="my-4 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:leading-7 sm:text-base">
                As your accounting firm grows, so do the complexities of
                managing financial operations.{" "}
                <span className="font-semibold text-gray-600">
                  Outsourcing your accounting to Account Wisely{" "}
                </span>
                allows you to focus on expanding your client base while ensuring
                <span className="font-semibold text-gray-600">
                  {" "}
                  compliance, accuracy, and efficiency
                </span>
                .
              </p>

              <p className="my-4 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:leading-7 sm:text-base">
                With our{" "}
                <span className="font-semibold text-gray-600">
                  expert accounting solutions
                </span>
                , your firm can eliminate time-consuming tasks, reduce overhead
                costs, and enhance service quality—without hiring in-house
                staff.
              </p>
              <p className="my-4 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:leading-7 sm:text-base">
                <span className="font-semibold text-gray-600">Pain Point:</span>{" "}
                Growing your client base and meeting increasing demands doesn't
                have to come at the expense of quality. With Account Wisely, you
                can scale effortlessly, focusing on building stronger client
                relationships and growing your practice. Our team handles the
                complexities, ensuring your firm stays efficient, accurate, and
                ahead of the game.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2a4768] sm:text-3xl md:text-4xl">
                Why Accounting Firms Trust Account Wisely
              </h3>
              <p className="my-4 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:leading-7 sm:text-base">
                When you outsource to Account Wisely, you're not just
                outsourcing accounting—you're gaining a trusted partner that
                supports your firm's success. From everyday financial tasks to
                intricate tax filings, we take the load off your team and ensure
                your clients get the best. Whether you're a CA practice or a
                larger firm, we're here to help you grow—offering scalable,
                flexible solutions to meet your needs, no matter the season.
              </p>

              <p className="text-justify text-sm leading-6 text-gray-500 sm:leading-7 sm:text-base">
                We don't just process numbers—we empower your firm with seamless
                financial management:
              </p>

              <ul className="my-4 list-disc pl-5 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:pl-7 sm:leading-7 sm:text-base">
                <li>
                  <span className="font-bold text-gray-600">Scalability:</span>{" "}
                  Expand your practice without worrying about additional
                  workload
                </li>
                <li>
                  <span className="font-bold text-gray-600">Cost Savings:</span>{" "}
                  Cut hiring costs while getting premium-quality accounting
                  services
                </li>
                <li>
                  <span className="font-bold text-gray-600">Experience:</span>{" "}
                  Gain access to{" "}
                  <span className="font-bold">
                    India-trained accounting professionals
                  </span>
                </li>
                <li>
                  <span className="font-bold text-gray-600">
                    Compliance & Accuracy:
                  </span>{" "}
                  Meet India tax and regulatory requirements without hassle
                </li>
              </ul>

              <p className="rounded-2xl bg-[#325271] px-4 py-6 text-sm text-white sm:px-8 sm:py-9 sm:text-base md:text-xl">
                Ready to boost your firm's cash flow management? Discover our
                Outsourced <strong>Services </strong>
                designed to streamline your financial processes.
              </p>
            </div>

            <div>
              <h3 className="my-4 text-2xl font-bold sm:my-5 sm:text-3xl md:text-4xl">
                Precision Accounting to Drive Your Firm's Growth!
              </h3>
              <p className="text-justify text-sm leading-6 text-gray-500 sm:leading-7 sm:text-base">
                We understand that precision is everything. Our outsourced
                accounting solutions are designed to give you accurate,
                real-time financial insights, allowing your firm to make
                smarter, faster decisions. We've helped firms to optimize their
                operations, reduce overhead, and maintain the compliance your
                clients depend on—all while freeing up time for you to focus on
                business growth.
              </p>
              <p className="my-4 text-justify text-sm leading-6 text-gray-500 sm:my-5 sm:leading-7 sm:text-base">
                <span className="font-bold">Pain Point: </span>The pressure to
                stay organized, compliant, and profitable can feel overwhelming.
                Let Account Wisely take care of the financial details, so you
                can keep your focus on delivering value to your clients,
                confidently and efficiently.
              </p>
              <p className="rounded-2xl bg-[#325271] px-4 py-6 text-sm text-white sm:px-8 sm:py-9 sm:text-base md:text-xl">
                Want to simplify your firm's payables and receivables? Explore
                our{" "}
                <Link to={"/services/payroll"} className="font-bold">
                  Outsoured Payroll Services
                </Link>{" "}
                to enhance cash flow and financial control.
              </p>
            </div>

            <div>
              <h2 className="my-5 text-4xl font-bold">
                <span className="text-[#2a4768]">Why Account Wisely?</span>{" "}
                Outsourced Accounting for{" "}
                <span className="text-[#2a4768]">Efficiency & Savings!</span>
              </h2>
              <p className="my-5 text-justify leading-7 text-gray-500">
                Choosing Account Wisely means more than just outsourcing—it’s
                about having a reliable partner that strengthens your firm’s
                foundation. Whether you’re a small CA practice or an established
                accounting firm, we adapt our solutions to meet your needs.
              </p>
              <h3 className="text-2xl font-bold">
                Focus on Growth While We Handle the Numbers
              </h3>
              <p className="my-5 leading-7 text-gray-500">
                Growing an accounting practice should mean{" "}
                <span className="font-bold text-gray-600">
                  more revenue, not more stress.
                </span>{" "}
                With our outsourced accounting services, you can:
              </p>
              <ul className="text-gray-500">
                <li>
                  ✔ Spend more time building{" "}
                  <span className="font-bold text-gray-600">
                    client relationships
                  </span>
                </li>
                <li>
                  ✔ Reduce internal workload &{" "}
                  <span className="font-bold text-gray-600">
                    increase efficiency
                  </span>
                </li>
                <li>
                  ✔ Ensure{" "}
                  <span className="font-bold text-gray-600">
                    accurate financial reporting & tax compliance
                  </span>
                </li>
                <li>✔ Avoid costly hiring & training expenses</li>
              </ul>

              <h3 className="my-5 text-2xl font-bold">
                The Account Wisely Advantage
              </h3>
              <div className="leading-7 text-gray-500">
                Unlike generic outsourcing providers, we specialize in
                supporting{" "}
                <span className="font-bold text-gray-600">
                  India-based CA and accounting firms.
                </span>{" "}
                We ensure that:
                <ul className="list-disc pl-7 text-gray-500">
                  <li>
                    Every report is{" "}
                    <span className="font-bold text-gray-600">
                      accurate and audit-ready
                    </span>
                  </li>
                  <li>
                    You meet{" "}
                    <span className="font-bold text-gray-600">
                      India tax deadlines without last-minute rushes
                    </span>
                  </li>
                  <li>
                    Your firm stays ahead with{" "}
                    <span className="font-bold text-gray-600">
                      real-time financial insights
                    </span>
                  </li>
                </ul>
                <ul className="my-5">
                  <li className="grid auto-cols-auto grid-flow-col">
                    <FaCheckCircle className="text-2xl text-[#2a4768]" />
                    <div className="ml-3">
                      <span className="font-bold text-gray-600">
                        Cost-Efficient:{" "}
                      </span>
                      Avoid the high costs of maintaining an in-house accounting
                      team. Account Wisely provides fully flexible services at
                      affordable rates.
                    </div>
                  </li>
                  <li className="grid auto-cols-auto grid-flow-col">
                    <FaCheckCircle className="text-2xl text-[#2a4768]" />
                    <div className="ml-3">
                      <span className="font-bold text-gray-600">
                        Industry Expertise:{" "}
                      </span>{" "}
                      With years of experience working with accounting firms, we
                      understand the unique challenges and regulations you
                      face—and we have the solutions to keep you ahead.
                    </div>
                  </li>
                  <li className="grid auto-cols-auto grid-flow-col">
                    <FaCheckCircle className="text-2xl text-[#2a4768]" />
                    <div className="ml-3">
                      <span className="font-bold text-gray-600">
                        Scalable Support:{" "}
                      </span>
                      As your firm grows, so do we. Account Wisely scales its
                      services to meet the demands of your expanding client
                      base, ensuring consistent quality and efficiency.
                    </div>
                  </li>
                </ul>
              </div>
              <p className="rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
                Need expert help with tax prep? Explore our{" "}
                <Link to={"/services/taxreturn"} className="font-bold">
                  Tax Preparation Services
                </Link>{" "}
                to ensure your clients get the accurate and compliant filings
                they deserve.
              </p>
              <h2 className="my-5 text-4xl font-bold">
                Why Choose Account Wisely for Your{" "}
                <span className="text-[#2a4768]">
                  Outsourced Accounting Needs?
                </span>
              </h2>
              <h3 className="text-2xl font-bold">
                1. Cost-Effective Accounting Solutions
              </h3>
              <p className="my-5 leading-7 text-gray-500">
                Hiring an in-house team is expensive. Account Wisely offers a{" "}
                <span className="font-bold text-gray-600">
                  cost-efficient alternative
                </span>{" "}
                without compromising quality.
              </p>
              <ul className="text-gray-500">
                <li>
                  💰{" "}
                  <span className="font-bold text-gray-600">
                    Pay for what you need
                  </span>{" "}
                  – Flexible pricing based on your workload
                </li>
                <li>
                  💰{" "}
                  <span className="font-bold text-gray-600">
                    No recruitment hassles
                  </span>{" "}
                  – Get expert accountants without hiring full-time staff
                </li>
              </ul>
              <p className="my-5 text-gray-500">
                <span className="font-bold text-gray-600">Account Wisely</span>{" "}
                isn’t just another outsourced provider—we’re a trusted extension
                of your firm. Our services are discreet, high-quality, and built
                to improve client satisfaction, ensure compliance, and
                streamline your operations. Let us be the invisible part of your
                team that propels your firm to the next level.
              </p>
              <h3 className="text-2xl font-bold">
                2. Industry Expertise & Regulatory Compliance
              </h3>
              <p className="my-5 leading-7 text-gray-500">
                With years of experience supporting{" "}
                <span className="font-bold text-gray-600">
                  India CA and accounting firms,
                </span>{" "}
                we ensure full compliance with{" "}
                <span className="font-bold text-gray-600">
                  India GAAP, IFRS, and Ind-AS regulations.
                </span>
              </p>
              <ul className="text-gray-500">
                <li>
                  🔹{" "}
                  <span className="font-bold text-gray-600">
                    Stay tax-ready
                  </span>{" "}
                  – No missed deadlines, no penalties
                </li>
                <li>
                  🔹{" "}
                  <span className="font-bold text-gray-600">
                    Tailored for India firms
                  </span>{" "}
                  – We understand your unique challenges
                </li>
              </ul>
              <h3 className="my-5 text-2xl font-bold">
                3. Scalable & Flexible Support
              </h3>
              <ul className="text-gray-500">
                <li>
                  <span className="font-bold text-gray-600">
                    📈 Seasonal flexibility
                  </span>{" "}
                  – Scale up during peak tax season, scale down when needed
                </li>
                <li>
                  <span className="font-bold text-gray-600">
                    📈 Tailored services
                  </span>{" "}
                  – Custom support for small firms to large accounting practices
                </li>
              </ul>
              <h2 className="my-5 text-4xl font-bold text-[#2a4768]">
                Trusted by CA & Accounting Firms Across the India
              </h2>
              <p className="leading-7 text-gray-500">
                we don’t just work for you—we work with you as an extension of
                your firm. From day-to-day accounting to complex financial
                planning, we help you{" "}
                <span className="font-bold text-gray-600">
                  streamline processes, reduce costs, and improve efficiency.
                </span>
              </p>
              <ul className="py-5 text-gray-500">
                <li>
                  <span className="font-bold text-gray-600">
                    🌟 95% Client Retention Rate
                  </span>{" "}
                  – Firms trust us for long-term growth
                </li>
                <li>
                  <span className="font-bold text-gray-600">
                    🌟 100% Compliance Guarantee
                  </span>{" "}
                  – No missed deadlines, no penalties
                </li>
              </ul>
              <p className="rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
                Want to expand your firm’s capabilities? Explore our{" "}
                <Link to={"/services/financialanalysis"} className="font-bold">
                  Outsourced Financial Analysis Services
                </Link>{" "}
                to see how we can help your firm meet strategic goals and grow.
              </p>
              <h3 className="mt-5 font-bold text-gray-500">
                Ready to Elevate Your Firm? Let’s Talk! 🚀
              </h3>
              <ul className="text-gray-500">
                <li>
                  👉{" "}
                  <Link to={"/contact"} className="font-bold text-[#2a4768]">
                    Contact Us
                  </Link>{" "}
                  to discuss your needs.
                </li>
                <li>
                  👉 Book a Free Trial and experience hassle-free accounting!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="items-center bg-white px-3 py-8 sm:px-4.5 sm:py-10 md:py-28">
        <p className="text-center text-sm font-semibold text-[#2a4768] sm:text-base">FAQs</p>
        <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-5xl">
          Everything You Need to Know About{" "}
          <span className="text-[#2a4768]">Outsourced Accounting</span>
        </h2>
        <p className="my-4 text-center text-sm text-gray-500 sm:my-5 sm:text-base">
          Discover helpful answers to your most pressing financial questions.
          We're here to assist you every step of the way!{" "}
        </p>
        <div className="mx-auto max-w-lg p-3 sm:p-4 md:max-w-7xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold hover:cursor-pointer sm:py-4 sm:text-base md:py-6 md:text-xl"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-lg sm:text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-3 text-sm text-gray-400 sm:pb-4 sm:text-base md:text-xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accounting;
