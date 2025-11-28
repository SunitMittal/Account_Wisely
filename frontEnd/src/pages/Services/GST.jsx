import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";
import ServiceList from "../../components/ServiceList";

const GST = () => {
  const FAQS = [
    {
      Q: "Why should I outsource GST return filing?",
      A: "Outsourcing GST return filing saves your firm time, ensures compliance, reduces the risk of errors, and gives you access to GST experts without maintaining an in-house team.",
    },
    {
      Q: "What GST services does Account Wisely provide?",
      A: "Account Wisely offers comprehensive GST services, including GST return preparation, filing, registration, and support with audits, ensuring full guidelines.",
    },
    {
      Q: "How does Account Wisely ensure accurate GST return filings?",
      A: "We use advanced GST software, regularly updated by our team of GST specialists, to ensure that your clients’ GST returns are calculated correctly and filed on time.",
    },
    {
      Q: "Can Account Wisely help with GST registration?",
      A: "Yes, Account Wisely provides GST registration services for businesses in the India, ensuring that they are compliant with the latest GST regulations.",
    },
  ];

  return (
    <>
      <LandingImage
        title="GST Return Filing"
        link="Services / GST Return Filing Services"
      />

      <div className="md:my-20 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] md:justify-center md:px-50">
        {/* left part */}
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

        {/* right part */}
        <div className="my-6 lg:px-10 sm:my-6 sm:px-4.5">
          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Expert
              <span className="text-[#2e1566]"> GST Return Filing </span>
              Services
            </h2>

            <p className="mb-2 mt-3 text-justify leading-7 text-gray-600 sm:mb-2 sm:mt-3 sm:leading-7 sm:text-lg">
              Navigating GST regulations is like solving a never-ending
              puzzle—one wrong move, and it could cost your clients dearly. At
              <span className="font-bold"> Account Wisely, </span>we specialize
              in
              <span className="font-bold">
                {" "}
                outsourced GST return filing services,{" "}
              </span>
              ensuring that your clients’ GST obligations are met accurately and
              on time—without the headache.
            </p>

            <p className="mb-3 text-justify leading-7 text-gray-600 sm:mb-3 sm:leading-7 sm:text-lg">
              Why wrestle with ever-changing
              <span className="font-bold"> Ind-AS regulations </span>when you
              can have<span className="font-bold"> GST experts </span>handle it
              for you? By outsourcing
              <span className="font-bold"> GST return filing </span>to Wisely
              Yours, your firm can focus on
              <span className="font-bold"> scaling your business </span>while we
              take care of
              <span className="font-bold">
                {" "}
                compliance, deadlines, and all the nitty-gritty details.
              </span>
            </p>

            <p className="mb-4 text-justify leading-7 text-gray-600 sm:mb-4 sm:leading-7 sm:text-lg">
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
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Why
              <span className="text-[#2e1566]">
                {" "}
                Outsource GST Return Filing{" "}
              </span>
              to Account Wisely?
            </h2>

            <p className="mb-4 mt-3 text-justify leading-7 text-gray-600 sm:mb-4 sm:mt-3 sm:leading-7 sm:text-lg">
              GST compliance is
              <span className="font-bold">
                {" "}
                complex, time-consuming, and downright tedious.{" "}
              </span>
              Outsourcing GST return filing to Account Wisely gives your firm a
              <span className="font-bold"> reliable partner </span>who takes
              care of it all, leaving you free to focus on
              <span className="font-bold"> high-value client work.</span>
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              The Hidden
              <span className="text-[#2e1566]"> Costs of In-House </span>
              GST Filing
            </h2>

            <p className="mb-1 mt-3 text-justify leading-7 text-gray-600 sm:mb-1 sm:mt-3 sm:leading-7 sm:text-lg">
              Managing GST returns in-house may seem like a good idea, but it
              comes with hidden costs—
              <span className="font-bold">
                {" "}
                time, manpower, and the risk of errors.
              </span>
            </p>

            <ul className="mb-2 text-justify leading-7 text-gray-600 sm:mb-2 sm:leading-7 sm:text-lg">
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

            <p className="mb-4 text-justify leading-7 text-gray-600 sm:mb-4 sm:leading-7 sm:text-lg">
              By outsourcing GST return filing to
              <span className="font-bold"> Account Wisely, </span>you eliminate
              these risks while
              <span className="font-bold">saving time and cutting costs.</span>
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              Benefits of Outsourcing GST Filing
            </h3>

            <ul className="mb-4 mt-3 text-justify leading-7 text-gray-600 sm:mb-4 sm:mt-3 sm:leading-7 sm:text-lg">
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
                <span className="font-bold">✅ 100% Ind-AS Compliance – </span>
                Tax laws change faster than fashion trends! We stay updated so
                you don’t have to.
              </li>
              <li>
                <span className="font-bold">✅ Cost-Effective Solution – </span>
                No need for an in-house GST team—cut costs while maintaining
                top-tier service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              What We Offer
              <span className="text-[#2e1566]">
                {" "}
                Comprehensive GST Return{" "}
              </span>{" "}
              Services
            </h2>

            <p className="mb-1 mt-3 text-justify leading-7 text-gray-600 sm:mb-1 sm:mt-3 sm:leading-7 sm:text-lg">
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

            <ul className="mb-4 text-justify leading-7 text-gray-600 sm:mb-4 sm:leading-7 sm:text-lg">
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
                <span className="font-bold">📌 Real-time tracking </span>of GST
                filings for
                <span className="font-bold"> accurate reporting</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">
              The Smart Choice for
              <span className="text-[#2e1566]">
                {" "}
                Outsourced GST Return Filing
              </span>
            </h2>

            <p className="mt-3 mb-4 text-justify leading-7 text-gray-600 sm:mt-3 sm:mb-4 sm:leading-7 sm:text-lg">
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

            <p className="rounded-2xl bg-[#1a0940] px-8 py-6 text-white sm:px-8 sm:py-6 md:text-xl">
              <span className="font-bold">
                📞 Ready to simplify GST filing for your clients? Contact
                Account Wisely today!
              </span>
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
            <span className="text-[#2e1566]">GST Filing</span>
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

export default GST;
