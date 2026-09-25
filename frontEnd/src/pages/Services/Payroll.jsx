import React from "react";
import LandingImage from "../../components/LandingImage";
import ServiceSidebar from "../../components/ServiceSidebar";

const Payroll = () => {
  const FAQS = [
    {
      Q: "Why should my company outsource payroll services?",
      A: "Outsourcing payroll helps reduce administrative costs, ensures compliance with India tax regulations, and saves valuable time, allowing you to focus on client growth.",
    },
    {
      Q: "What payroll services does Account Wisely offer?",
      A: "Account Wisely provides comprehensive payroll services, including payroll processing, tax filings, statutory deductions, and year-end reports tailored to your clients' needs.",
    },
    {
      Q: "How does Account Wisely stay compliant with India payroll regulations?",
      A: "We keep up-to-date with the latest regulations and use advanced payroll software to ensure accurate tax filings and timely payments.",
    },
    {
      Q: "Can Account Wisely handle payroll for remote teams?",
      A: "Yes! We specialize in managing payroll for remote teams, ensuring accurate and timely payments, regardless of location.",
    },
  ];

  return (
    <>
      <LandingImage
        title="Payroll Services"
        link="Services / Payroll Services"
      />

      <div className="my-20 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] justify-center md:px-50">
        {/* left part */}
        <ServiceSidebar />

        {/* right part */}
        <div className="px-7">
          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-[#2e1566]">Expert Payroll Solutions </span>
              for Your Clients’ Needs
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
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

            <p className="my-2 leading-7 text-gray-600 text-lg">
              That’s where Account Wisely steps in. We specialize in
              <span className="font-bold">
                {" "}
                outsourced payroll services for Indian businesses and accounting
                firms,{" "}
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

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Partnering with Account Wisely means your firm can focus on what
              really matters—helping your clients grow—while we make sure their
              employees get paid accurately and on time. With our team staying
              ahead of the curve on India payroll laws and tax regulations, you
              can rest easy knowing that compliance is never a concern.
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">Pain Point: </span>Payroll can be a
              headache, especially when it involves tax filings and tricky
              deductions. Account Wisely helps eliminate these headaches with
              reliable, efficient payroll services, ensuring accuracy and
              compliance every time.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Why Outsource Payroll Services?
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
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

            <ul className="mb-5 list-disc px-5 text-lg leading-7 text-gray-600">
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
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              What We Offer:{" "}
              <span className="text-[#2e1566]">
                Comprehensive Payroll Services Tailored for India Companies
              </span>
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              Outsourcing payroll means you get
              <span className="font-bold">
                {" "}
                reliable, professional support{" "}
              </span>
              with:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">✔ Payroll processing </span>& wage
                calculations.
              </li>
              <li>
                <span className="font-bold">✔ Statutory deductions </span>
                (National Insurance, pensions, student loans)
              </li>
              <li>
                <span className="font-bold">✔ Tax Filing </span>
              </li>
              <li>
                <span className="font-bold">✔ Payslip generation </span>&
                payroll reports
              </li>
              <li>
                <span className="font-bold">
                  ✔ Auto-enrolment pension contributions{" "}
                </span>
                & RTI submissions
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              The Real Pain Point:
              <span className="text-[#2e1566]"> Payroll Errors = Fines </span>&
              <span className="text-[#2e1566]"> Unhappy Clients</span>
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              Getting payroll wrong isn’t just embarrassing—it can be
              <span className="font-bold"> costly and legally risky. </span>
              Late filings? Incorrect deductions?
              <span className="font-bold">
                {" "}
                Ind-AS won’t be sending you a Christmas card.
              </span>
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Account Wisely ensures that:
            </p>

            <ul className="mb-5 list-disc px-5 text-lg leading-7 text-gray-600">
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

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Why Choose Account Wisely?
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              We’re not just a payroll provider—we’re
              <span className="font-bold"> your firm’s secret weapon </span>
              for streamlined, stress-free payroll services. Here’s why
              <span className="font-bold"> India CA and accounting firms </span>
              partner with us:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
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

            <p className="rounded-2xl bg-[#1a0940] p-6 text-white text-lg">
              For further financial management support, explore our
              <span className="font-bold">
                {" "}
                Payable Services and Accounts Receivable Services.
              </span>
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Conclusion:
              <span className="text-[#2e1566]">
                {" "}
                Let’s Handle Payroll—You Handle Growth
              </span>
            </h3>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              Outsourcing payroll to Account Wisely means:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
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

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">
                📢 Ready to simplify payroll for your clients? Let’s talk.
                Contact Account Wisely today
              </span>{" "}
              and leave payroll processing to the experts. 🎯
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

export default Payroll;
