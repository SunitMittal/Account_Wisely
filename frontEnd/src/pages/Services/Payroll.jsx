import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const Payroll = () => {
  const faqs = [
    {
      question: "Why should my accounting firm outsource payroll services?",
      answer:
        "Outsourcing payroll helps reduce administrative costs, ensures compliance with India tax regulations, and saves valuable time, allowing you to focus on client growth.",
    },
    {
      question: "What payroll services does Account Wisely offer for CA firms?",
      answer:
        "Account Wisely provides comprehensive payroll services, including payroll processing, tax filings, statutory deductions, and year-end reports tailored to your clients' needs.",
    },
    {
      question:
        "How does Account Wisely stay compliant with India payroll regulations?",
      answer:
        "We keep up-to-date with the latest regulations and use advanced payroll software to ensure accurate tax filings and timely payments.",
    },
    {
      question: "Can Account Wisely handle payroll for remote teams?",
      answer:
        "Yes! We specialize in managing payroll for remote teams, ensuring accurate and timely payments, regardless of location.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage
        title="Outsourced Payroll Services for CA & Accounting Firms in India"
        link="Services / Payroll Services"
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
                <span className="text-[#2a4768]">
                  Expert Payroll Solutions{" "}
                </span>
                for Your Clients’ Needs
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Managing payroll is a bit like juggling—except the balls are
                <span className="font-bold">
                  {" "}
                  employee wages, tax filings, and compliance laws.{" "}
                </span>
                Miss one, and it could cost you
                <span className="font-bold">
                  {" "}
                  a lot more than just a bruised ego.
                </span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                That’s where Account Wisely steps in. We specialize in
                <span className="font-bold">
                  {" "}
                  outsourced payroll services for India CA and accounting firms,{" "}
                </span>
                taking the burden off your hands while ensuring compliance,
                accuracy, and efficiency. Whether it’s
                <span className="font-bold">
                  {" "}
                  statutory deductions or pension contributions,{" "}
                </span>
                we handle it all
                <span className="font-bold"> —so you don’t have to.</span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Partnering with Account Wisely means your firm can focus on what
                really matters—helping your clients grow—while we make sure
                their employees get paid accurately and on time. With our team
                staying ahead of the curve on India payroll laws and tax
                regulations, you can rest easy knowing that compliance is never
                a concern.
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Pain Point: </span>Payroll can be a
                headache, especially when it involves tax filings and tricky
                deductions. Account Wisely helps eliminate these headaches with
                reliable, efficient payroll services, ensuring accuracy and
                compliance every time.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why Outsource Payroll Services?
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Let’s be honest—handling payroll internally is like
                <span className="font-bold">
                  {" "}
                  doing your own tax return without coffee or Wi-Fi.{" "}
                </span>
                It’s
                <span className="font-bold">
                  {" "}
                  tedious, time-consuming, and one small mistake could lead to
                  penalties.{" "}
                </span>
                Here’s why firms like yours
                <span className="font-bold"> trust Account Wisely </span>for
                payroll outsourcing:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li className="list-disc">
                  <span className="font-bold">✅ Accuracy & Compliance: </span>
                  No more last-minute tax panic—we ensure error-free payroll
                  processing and Ind-AS compliance.
                </li>
                <li className="list-disc">
                  <span className="font-bold">💰 Cost-Effective: </span>No need
                  for an in-house payroll department—save time, money, and
                  headaches.
                </li>
                <li className="list-disc">
                  <span className="font-bold">📈 Scalable Solutions: </span>
                  Whether you manage payroll for{" "}
                  <span className="font-bold"> 5 clients or 500 </span>our
                  services grow with you.
                </li>
                <li className="list-disc">
                  <span className="font-bold">🎯 Expert Handling: </span>We stay
                  ahead of India payroll laws,
                  <span className="font-bold">
                    {" "}
                    so you don’t have to sit through another Ind-AS webinar.
                  </span>
                </li>
              </ul>
              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Looking for more support? Check out our
                <span className="font-bold"> Tax Preparation Services </span>to
                help your clients stay compliant and optimize their tax
                strategies.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                What We Offer
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Comprehensive Payroll Services Tailored for India CA Firms
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Outsourcing payroll means you get
                <span className="font-bold">
                  {" "}
                  reliable, professional support{" "}
                </span>
                with:
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">✔ Payroll processing </span>& wage
                calculations.<br></br>
                <span className="font-bold">✔ Statutory deductions </span>
                (National Insurance, pensions, student loans).<br></br>
                <span className="font-bold">✔ Tax Filing </span>
                <br></br>
                <span className="font-bold">✔ Payslip generation </span>&
                payroll reports.<br></br>
                <span className="font-bold">
                  ✔ Auto-enrolment pension contributions{" "}
                </span>
                & RTI submissions.<br></br>
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                <span className="text-[#2a4768]">The Real Pain Point: </span>
                Payroll Errors = Fines & Unhappy Clients
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Why Payroll Compliance Matters for India CA Firms
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Getting payroll wrong isn’t just embarrassing—it can be
                <span className="font-bold"> costly and legally risky. </span>
                Late filings? Incorrect deductions?
                <span className="font-bold">
                  {" "}
                  Ind-AS won’t be sending you a Christmas card.
                </span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Account Wisely ensures that:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li className="list-disc">
                  <span className="font-bold">No miscalculations— </span>so
                  clients don’t come knocking.
                </li>
                <li className="list-disc">
                  <span className="font-bold">No missed deadlines—</span>because
                  Ind-AS penalties aren’t fun.
                </li>
                <li className="list-disc">
                  <span className="font-bold">No compliance headaches—</span>we
                  handle tax changes
                  <span className="font-bold">
                    {" "}
                    so you don’t have to Google them at 11 PM.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why Choose Account Wisely?
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We’re not just a payroll provider—we’re
                <span className="font-bold"> your firm’s secret weapon </span>
                for streamlined, stress-free payroll services. Here’s why
                <span className="font-bold">
                  {" "}
                  India CA and accounting firms{" "}
                </span>
                partner with us:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">📌 Industry Expertise: </span>From
                  small businesses to large enterprises,
                  <span className="font-bold">
                    {" "}
                    we tailor payroll solutions to fit.
                  </span>
                </li>
                <li>
                  <span className="font-bold">📌 Cost-Effective: </span>Save on
                  overhead while getting
                  <span className="font-bold"> top-tier payroll services.</span>
                </li>
                <li>
                  <span className="font-bold">📌 Fully Scalable: </span>Whether
                  you have
                  <span className="font-bold">
                    {" "}
                    a handful of clients or a hundred,{" "}
                  </span>
                  we scale with you.
                </li>
                <li>
                  <span className="font-bold">
                    📌 End-to-End Payroll Support:{" "}
                  </span>
                  From tax filing to employee payslips
                  <span className="font-bold"> —we handle it all.</span>
                </li>
              </ul>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                For further financial management support, explore our
                <span className="font-bold">
                  {" "}
                  Payable Services and Accounts Receivable Services.
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Simplifying Payroll for India Accounting Firms
              </h2>
              <h3 className="text-3xl font-bold">
                Say Goodbye to Payroll Stress & Compliance Worries
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Handling payroll in-house is like doing
                <span className="font-bold">
                  {" "}
                  manual bookkeeping in the era of cloud accounting—it’s slow,
                  risky, and unnecessary.{" "}
                </span>
                Account Wisely’s
                <span className="font-bold"> outsourced payroll services </span>
                ensure:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">🚀 100% Payroll Accuracy – </span>
                  No miscalculations, no delays.
                </li>
                <li>
                  <span className="font-bold">🚀 Timely Payments – </span>
                  Employees paid on time, every time.
                </li>
                <li>
                  <span className="font-bold">🚀 Ind-AS Compliance – </span>
                  Every tax, deduction, and filing done
                  <span className="font-bold"> correctly.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Trusted Payroll Services for India CA & Accounting Firms
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Account Wisely has built a solid reputation for providing
                <span className="font-bold">
                  {" "}
                  reliable, scalable, and fully compliant payroll services{" "}
                </span>
                for India accountants. Whether your clients are
                <span className="font-bold">
                  {" "}
                  small businesses or large enterprises,{" "}
                </span>
                we ensure their payroll runs smoothly, keeping
                <span className="font-bold"> penalties at bay</span>.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Conclusion: Let’s Handle Payroll—You Handle Growth
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Outsourcing payroll to Account Wisely means:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">✔ Fewer payroll headaches</span>
                </li>
                <li>
                  <span className="font-bold">
                    ✔ More time for client relationships
                  </span>
                </li>
                <li>
                  <span className="font-bold">✔ No compliance nightmares</span>
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">
                  📢 Ready to simplify payroll for your clients? Let’s talk.
                  Contact Account Wisely today
                </span>
                and leave payroll processing to the experts. 🎯
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Interested in other services to support your firm? Learn more
                about our
                <span className="font-bold">
                  {" "}
                  Outsourced Accounting Services{" "}
                </span>
                designed to streamline your clients’ financial operations.
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

export default Payroll;
