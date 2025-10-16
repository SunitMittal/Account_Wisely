import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const GST = () => {
  const faqs = [
    {
      question: "Why should I outsource GST return filing?",
      answer:
        "Outsourcing GST return filing saves your firm time, ensures compliance, reduces the risk of errors, and gives you access to GST experts without maintaining an in-house team.",
    },
    {
      question: "What GST services does Account Wisely provide?",
      answer:
        "Account Wisely offers comprehensive GST services, including GST return preparation, filing, registration, and support with audits, ensuring full guidelines.",
    },
    {
      question: "How does Account Wisely ensure accurate GST return filings?",
      answer:
        "We use advanced GST software, regularly updated by our team of GST specialists, to ensure that your clients’ GST returns are calculated correctly and filed on time.",
    },
    {
      question: "Can Account Wisely help with GST registration?",
      answer:
        "Yes, Account Wisely provides GST registration services for businesses in the India, ensuring that they are compliant with the latest GST regulations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <LandingImage
        title="Outsourced GST Return Filing Services for CA & Accounting Firms in India"
        link="Services / GST Return Filing Services"
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
                Expert
                <span className="text-[#2a4768]">
                  {" "}
                  GST Return Filing Services{" "}
                </span>
                for Your Clients
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Navigating GST regulations is like solving a never-ending
                puzzle—one wrong move, and it could cost your clients dearly. At
                <span className="font-bold"> Account Wisely, </span>we
                specialize in
                <span className="font-bold">
                  {" "}
                  outsourced GST return filing services for CA and accounting
                  firms in the India,{" "}
                </span>
                ensuring that your clients’ GST obligations are met accurately
                and on time—without the headache.
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Why wrestle with ever-changing
                <span className="font-bold"> Ind-AS regulations </span>when you
                can have<span className="font-bold"> GST experts </span>handle
                it for you? By outsourcing
                <span className="font-bold"> GST return filing </span>to Wisely
                Yours, your firm can focus on
                <span className="font-bold"> scaling your business </span>while
                we take care of
                <span className="font-bold">
                  {" "}
                  compliance, deadlines, and all the nitty-gritty details.
                </span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Pain Point: </span>GST filing errors
                or delays can lead to hefty fines. Account Wisely ensures
                <span className="font-bold">
                  {" "}
                  timely, error-free submissions{" "}
                </span>
                so your clients stay
                <span className="font-bold">
                  {" "}
                  compliant, stress-free, and penalty-free.
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                Why
                <span className="text-[#2a4768]">
                  {" "}
                  Outsource GST Return Filing{" "}
                </span>
                to Account Wisely?
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                GST compliance is
                <span className="font-bold">
                  {" "}
                  complex, time-consuming, and downright tedious.{" "}
                </span>
                Outsourcing GST return filing to Account Wisely gives your firm
                a<span className="font-bold"> reliable partner </span>who takes
                care of it all, leaving you free to focus on
                <span className="font-bold"> high-value client work.</span>
              </p>

              <h3 className="text-left text-3xl font-bold">
                The Hidden Costs of In-House GST Filing
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Managing GST returns in-house may seem like a good idea, but it
                comes with hidden costs—
                <span className="font-bold">
                  {" "}
                  time, manpower, and the risk of errors.
                </span>
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    ❌ Missed deadlines can result in penalties.
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    ❌ Compliance mistakes can trigger audits.
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    ❌ In-house GST teams require continuous training and
                    resources.
                  </span>
                  we scale with you.
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                By outsourcing GST return filing to
                <span className="font-bold"> Account Wisely, </span>you
                eliminate these risks while
                <span className="font-bold">
                  saving time and cutting costs.
                </span>
              </p>

              <h3 className="text-left text-3xl font-bold">
                Benefits of Outsourcing GST Filing
              </h3>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">✅ Accurate GST Returns – </span>
                  No more second-guessing! We ensure error-free GST calculations
                  and eliminate compliance risks.
                </li>
                <li>
                  <span className="font-bold">✅ Timely Submissions –</span>
                  Never miss a deadline! Our team ensures your clients’ GST
                  returns are submitted on time, every time.
                </li>
                <li>
                  <span className="font-bold">
                    ✅ 100% Ind-AS Compliance –{" "}
                  </span>
                  Tax laws change faster than fashion trends! We stay updated so
                  you don’t have to.
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Cost-Effective Solution –{" "}
                  </span>
                  No need for an in-house GST team—cut costs while maintaining
                  top-tier service.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                What<span className="text-[#2a4768]"> We Offer</span>
              </h2>

              <h3 className="text-left text-3xl font-bold">
                Comprehensive GST Return Services
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                We provide
                <span className="font-bold">
                  {" "}
                  end-to-end GST return filing services,{" "}
                </span>
                tailored to
                <span className="font-bold">
                  {" "}
                  meet the needs of CA and accounting firms in the India.{" "}
                </span>
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">📌 Preparation and filing </span>
                  of quarterly or annual GST returns
                </li>
                <li>
                  <span className="font-bold">
                    📌 GST registration and deregistration{" "}
                  </span>
                  assistance
                </li>
                <li>
                  <span className="font-bold">
                    📌 Support with GST audits and corrections
                  </span>
                </li>
                <li>
                  <span className="font-bold">📌 Real-time tracking </span>of
                  GST filings for
                  <span className="font-bold"> accurate reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                Reliable
                <span className="text-[#2a4768]">
                  {" "}
                  GST Return Filing Solutions{" "}
                </span>
                for CA and Accounting Firms
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Say Goodbye to GST Compliance Hassles
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Managing GST returns can feel like
                <span className="font-bold"> herding cats— </span>challenging
                and unpredictable. That’s where Account Wisely steps in. Our
                <span className="font-bold">
                  {" "}
                  outsourced GST return filing services{" "}
                </span>
                help CA and accounting firms eliminate
                <span className="font-bold">
                  {" "}
                  errors, missed deadlines, and compliance worries.
                </span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold">Pain Point: </span>Late filings and
                errors can lead to
                <span className="font-bold"> hefty fines and headaches. </span>
                Account Wisely helps firms stay ahead with
                <span className="font-bold">
                  {" "}
                  timely, precise, and fully compliant GST return filings.
                </span>
              </p>

              <h3 className="text-left text-3xl font-bold">
                What You Get with Account Wisely
              </h3>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    ✅ Correct GST calculations{" "}
                  </span>
                  for every client
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Transparent and clear GST reporting
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Timely, compliant submissions
                  </span>
                </li>
              </ul>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Need help with GST and other indirect taxes? Check out our
                Indirect
                <span className="font-bold"> Taxation Services </span>for
                additional support.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                Why
                <span className="text-[#2a4768]"> Account Wisely </span>is the
                Right Choice for Outsourced GST Return Filing
              </h2>
              <h3 className="text-left text-3xl font-bold">
                Your Trusted GST Compliance Partner
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Partnering with
                <span className="font-bold"> Account Wisely </span>
                means you get a<span className="font-bold"> trusted team </span>
                that understands the complexities of
                <span className="font-bold"> India GST laws </span>and provides
                <span className="font-bold"> tailored solutions </span>for your
                clients—whether they’re startups or large enterprises.
              </p>

              <h3 className="text-left text-3xl font-bold">
                Why Accounting Firms Trust Account Wisely
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Partnering with
                <span className="font-bold"> Account Wisely </span>
                means you get a<span className="font-bold"> trusted team </span>
                that understands the complexities of
                <span className="font-bold"> India GST laws </span>and provides
                <span className="font-bold"> tailored solutions </span>for your
                clients—whether they’re startups or large enterprises.
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">🔹 Industry Expertise: </span>We
                  specialize in GST filing across multiple industries, ensuring
                  <span className="font-bold"> flawless submissions.</span>
                </li>
                <li>
                  <span className="font-bold">
                    🔹 Reliable and Accurate Reporting:{" "}
                  </span>
                  Our team uses
                  <span className="font-bold"> advanced GST software </span>to
                  eliminate errors.
                </li>
                <li>
                  <span className="font-bold">🔹 Dedicated GST Experts: </span>
                  We keep up with the
                  <span className="font-bold"> latest Ind-AS regulations </span>
                  so your clients stay compliant.
                </li>
                <li>
                  <span className="font-bold">🔹 Flexible Solutions: </span>
                  Scalable GST return filing services that
                  <span className="font-bold">
                    {" "}
                    grow with your clients’ businesses.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                Simplify
                <span className="text-[#2a4768]"> GST Compliance </span>with
                Account Wisely’s GST Return Filing Services
              </h2>
              <h3 className="text-left text-3xl font-bold">
                The Hassle-Free Approach to GST Filing
              </h3>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                GST compliance shouldn’t feel like
                <span className="font-bold"> a constant battle. </span>With
                <span className="font-bold"> Account Wisely, </span>you get:
              </p>

              <ul className="mt-4 mb-5 text-justify text-gray-500">
                <li>
                  <span className="font-bold">
                    ✅ Accurate GST calculations
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Complete compliance with India tax laws
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    ✅ Seamless GST-related communication
                  </span>
                </li>
              </ul>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                <span className="font-bold"> Pain Point: </span>Keeping up with
                GST law changes is exhausting. Our experts
                <span className="font-bold"> stay ahead of the curve, </span>so
                you don’t have to.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                Trusted
                <span className="text-[#2a4768]">
                  {" "}
                  GST Return Filing Services{" "}
                </span>
                for CA and Accounting Firms in the India
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Account Wisely has earned the
                <span className="font-bold">
                  {" "}
                  trust of CA and accounting firms across the India{" "}
                </span>
                by delivering
                <span className="font-bold">
                  {" "}
                  reliable, efficient, and hassle-free GST return filing
                  services.{" "}
                </span>
                Whether your clients are
                <span className="font-bold">
                  {" "}
                  small businesses or large enterprises,{" "}
                </span>
                we ensure their GST returns are
                <span className="font-bold">
                  {" "}
                  accurate, on time, and fully compliant.
                </span>
              </p>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Let Account Wisely handle GST compliance, so you can focus on
                growing your firm and serving your clients.
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                Explore our
                <span className="font-bold"> Tax Preparation Services</span>for
                additional support with other taxation needs, ensuring your
                clients receive full financial support.
              </p>
            </div>

            <div>
              <h2 className="text-left text-4xl font-bold">
                The Smart Choice for
                <span className="text-[#2a4768]">
                  {" "}
                  Outsourced GST Return Filing
                </span>
              </h2>

              <p className="mt-4 mb-5 text-justify text-gray-500">
                Outsourcing GST return filing to Account Wisely offers your firm
                an
                <span className="font-bold">
                  efficient, accurate, and cost-effective
                </span>
                way to manage GST compliance.
                <span className="font-bold">
                  No more missed deadlines, no more fines—just expert GST
                  solutions.
                </span>
              </p>

              <p className="mb-10 rounded-2xl bg-[#2a4768] px-8 py-10 text-lg text-white">
                <span className="font-bold">
                  📞 Ready to simplify GST filing for your clients? Contact
                  Account Wisely today!
                </span>
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

export default GST;
