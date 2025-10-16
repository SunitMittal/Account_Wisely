import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const TaxReturn = () => {
  const faqs = [
    {
      question: "What types of tax returns does Account Wisely handle?",
      answer:
        "We handle individual self-assessment returns, corporate tax filings, partnership and LLP filings, and more.",
    },
    {
      question: "Why should I outsource tax return preparation?",
      answer:
        "Outsourcing tax return preparation saves your firm time, reduces overhead costs, and ensures accurate, compliant filings for your clients without the need for an in-house tax team.",
    },
    {
      question:
        "How does Account Wisely ensure compliance with India tax laws?",
      answer:
        "Our team stays up to date with the latest India tax legislation, ensuring that your clients’ returns are always filed in accordance with current regulations.",
    },
    {
      question: "Can Account Wisely help with tax planning?",
      answer:
        "Yes! In addition to preparing tax returns, we offer proactive tax planning advice to help your clients reduce their tax liabilities and improve financial efficiency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage
        title="Outsourced Tax Return Preparation Services for Accounting Firms in India"
        link="Services / Tax Return Preparation"
      />

      <div className="md:my-28 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] md:justify-center md:px-72">
        {/* left side */}
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

        {/* right side */}
        <div>
          <img
            src={OutsourceYearEnd}
            className="mx-auto h-auto w-11/12 rounded-2xl"
          />

          <div className="px-5 py-5">
            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Tax Return Season Doesn’t Have to Feel Like a Never-Ending Audit
              </h2>
              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Tax return season </span>can feel
                like juggling numbers while walking a financial tightrope.
                <span className="font-bold">
                  {" "}
                  Endless paperwork, Ind-AS compliance, and looming deadlines—
                </span>
                sounds familiar, right? But here’s the good news: Account Wisely
                is here to take that burden off your shoulders.
              </p>

              <div className="mt-4 mb-5 text-justify text-gray-500">
                Our outsourced tax return preparation services are designed
                exclusively for India accounting firms and CAs who want to:
                <ul>
                  <li className="font-bold">
                    ✔ Meet deadlines without last-minute panic
                  </li>
                  <li className="font-bold">
                    ✔ Ensure 100% compliance with India tax laws
                  </li>
                  <li className="font-bold">
                    ✔ Reduce the risk of errors, penalties, and audits
                  </li>
                  <li className="font-bold">
                    ✔ Scale services up or down based on client demand
                  </li>
                </ul>
              </div>

              <p className="mt-4 mb-4 text-justify text-gray-500">
                With Account Wisely, your clients will never know we’re working
                behind the scenes—but they’ll certainly notice the flawless
                service you provide.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                The Real Struggle – And How We Solve It
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Tax Season is Like a Game of Chess—One Wrong Move, and It’s
                Checkmate
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                You know the struggle.
                <span className="font-bold">
                  {" "}
                  One missing receipt, a miscalculated deduction, or a filing
                  delay,{" "}
                </span>
                and suddenly, your firm is firefighting client queries instead
                of growing your business.
              </p>

              <div className="mt-4 mb-5 text-justify text-gray-500">
                We’ve seen it all:
                <ul>
                  <li className="font-bold">
                    ✅ Tight deadlines turning into all-nighters
                  </li>
                  <li className="font-bold">
                    ✅ Last-minute client uploads that make you question life
                    choices
                  </li>
                  <li className="font-bold">
                    ✅ Ever-changing regulations that feel like a moving
                    goalpost
                  </li>
                </ul>
              </div>

              <p className="mt-4 mb-4 text-justify text-gray-500">
                That’s where Account Wisely steps in—to ensure
                <span className="font-bold">
                  {" "}
                  error-free, compliant, and timely{" "}
                </span>
                tax return preparation so you can focus on running your firm
                instead of running after deadlines.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why Outsource Tax Return Preparation to Account Wisely?
              </h2>
              <h3 className="text-left text-3xl font-bold">
                More Accuracy, Less Stress—It’s a Smart Choice
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Outsourcing your tax return preparation isn’t just about saving
                time—it’s about
                <span className="font-bold"> working smarter. </span>
                Here’s why firms across the India trust Account Wisely:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">📌 Cost-Effective – </span>No need
                  for extra in-house staff. Get expert tax services when you
                  need them, without the overhead.
                </li>
                <li>
                  <span className="font-bold">📌 Expert Support – </span>Our tax
                  specialists stay ahead of India tax laws, ensuring your
                  clients’ filings are always spot-on.
                </li>
                <li>
                  <span className="font-bold">📌 Scalability – </span>Handling
                  10 returns today? 100 next month? We scale with you.
                </li>
                <li>
                  <span className="font-bold">📌 Time-Saving – </span>Spend less
                  time on tax filings and more time building client
                  relationships.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                What We Offer – Tailored Tax Solutions for India Accounting
                Firms
              </h2>
              <h3 className="text-left text-3xl font-bold">
                More Than Just Tax Filing—We’re Your Tax Partner
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We don’t believe in one-size-fits-all. Your clients have unique
                tax needs, and we tailor our services accordingly.
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    ✅ Personalized Tax Filing Solutions –{" "}
                  </span>
                  Whether it’s an individual self-assessment or a corporate tax
                  return, we optimize for maximum tax savings.
                </li>
                <li>
                  <span className="font-bold">✅ Full Compliance – </span>We
                  stay updated on latest regulations so you don’t have to.
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Proactive Tax Planning –{" "}
                  </span>
                  We don’t just file; we help you strategize to reduce
                  liabilities and improve cash flow for your clients.
                </li>
              </ul>

              <p className="mt-4 mb-4 text-justify text-gray-500">
                When you work with us, your clients will never know that we’re
                doing the heavy lifting behind the scenes—but they’ll certainly
                notice the difference in service.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold text-[#2a4768]">
                Why Choose Account Wisely for Your Firm’s Tax Return
                Preparation?
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Your Secret Weapon for Stress-Free Tax Season
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Account Wisely has earned the trust of accounting firms across
                the India for a reason. We offer
                <span className="font-bold">
                  {" "}
                  reliable, efficient, and compliant{" "}
                </span>
                tax return preparation services that help your firm:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    ✅ Stay Ahead of Deadlines –{" "}
                  </span>
                  No more last-minute scrambling.
                </li>
                <li>
                  <span className="font-bold">✅ Ensure 100% Accuracy – </span>
                  Every return is reviewed through a rigorous quality control
                  process.
                </li>
                <li>
                  <span className="font-bold">✅ Work Seamlessly – </span>We
                  integrate with your existing processes, working as an
                  extension of your team.
                </li>
                <li>
                  <span className="font-bold">✅ Avoid Costly Errors – </span>
                  Mistakes can lead to penalties and client dissatisfaction. We
                  help you get it right the first time.
                </li>
              </ul>

              <p className="mt-4 mb-4 text-justify text-gray-500">
                When you partner with Account Wisely, your clients will never
                know we exist—but they’ll definitely feel the difference in your
                service quality.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Comprehensive Tax Return Services for Individual and Business
                Clients
              </h2>
              <h3 className="text-3xl font-bold">
                From Sole Traders to Large Corporations—We Cover It All
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Account Wisely provides tax return preparation for:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    📌 Individual Tax Returns –{" "}
                  </span>
                  Self-assessment returns done with precision, ensuring all
                  deductions are accounted for.
                </li>
                <li>
                  <span className="font-bold">📌 Corporate Tax Returns – </span>
                  Complex corporate filings managed efficiently.
                </li>
                <li>
                  <span className="font-bold">📌 Partnerships & LLPs – </span>
                  Hassle-free tax filings for business partnerships and LLPs.
                </li>
                <li>
                  <span className="font-bold">📌 Tax Planning – </span>Strategic
                  tax advice to help clients optimize their financial position.
                </li>
              </ul>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Streamline account reconciliation with our
                <span className="font-bold">
                  {" "}
                  Bank Reconciliation Services,{" "}
                </span>
                offering detailed support for accurate financial data
                year-round.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Save Time, Reduce Stress, and Stay Compliant with Account Wisely
              </h2>
              <h3 className="text-3xl font-bold">
                Tax Season Without the Chaos—Sounds Good, Right?
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Managing tax returns in-house can quickly become
                overwhelming—especially during peak seasons. By outsourcing to
                Account Wisely, your firm can:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">✔ Minimize Errors – </span>Reduce
                  the risk of costly penalties.
                </li>
                <li>
                  <span className="font-bold">✔ Ensure Timely Filing – </span>
                  Never miss a deadline again.
                </li>
                <li>
                  <span className="font-bold">✔ Focus on Growth – </span>Free up
                  time to scale your business and serve clients better.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Trusted by Accounting Firms Across the India
              </h2>
              <h3 className="text-3xl font-bold">
                Join the Growing List of Firms Who Trust Account Wisely
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We’ve built our reputation on
                <span className="font-bold">
                  {" "}
                  accuracy, efficiency, and compliance,{" "}
                </span>
                helping India accounting firms
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Don’t let tax season drain your firm’s time and resources.
                <span className="font-bold">
                  {" "}
                  Let Account Wisely handle the numbers while you focus on your
                  clients.
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#2a4768]">
                Start Outsourcing Your Tax Return Preparation Today
              </h2>
              <p className="mt-4 mb-5 text-justify text-gray-500">
                Why struggle with tax return preparation when you can
                <span className="font-bold"> outsource it with confidence</span>
                ? Account Wisely’s team of tax experts is ready to streamline
                your workload, ensuring
                <span className="font-bold">
                  {" "}
                  timely, accurate, and compliant tax filings{" "}
                </span>
                for your firm.
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">📞 Contact us today </span>to learn
                more about how we can support your firm through tax season and
                beyond.
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

export default TaxReturn;
