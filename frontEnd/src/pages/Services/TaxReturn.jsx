import React from "react";
import LandingImage from "../../components/LandingImage";
import ServiceSidebar from "../../components/ServiceSidebar";

const TaxReturn = () => {
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
        title="Tax Return Preparation"
        link="Services / Tax Return Preparation"
      />

      <div className="my-20 md:grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] justify-center md:px-50">
        {/* left side */}
        <ServiceSidebar />

        {/* right side */}
        <div className="px-7">
          <div>
            <h3 className="text-3xl font-bold">
              Tax Return Season Doesn’t Have to Feel Like a Never-Ending Audit
            </h3>
            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">Tax return season </span>can feel like
              juggling numbers while walking a financial tightrope.
              <span className="font-bold">
                {" "}
                Endless paperwork, Ind-AS compliance, and looming deadlines—
              </span>
              sounds familiar, right? But here’s the good news: Account Wisely
              is here to take that burden off your shoulders.
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Our outsourced tax return preparation services are designed
              exclusively for India accounting firms and CAs who want to:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
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

            <p className="my-2 leading-7 text-gray-600 text-lg">
              With Account Wisely, your clients will never know we’re working
              behind the scenes—but they’ll certainly notice the flawless
              service you provide.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold text-[#2e1566]">
              The Real Struggle – And How We Solve It
            </h3>

            <h4 className="mb-2 text-3xl font-bold">
              Tax Season is Like a Game of Chess—One Wrong Move, and It’s
              Checkmate
            </h4>

            <p className="my-2 text-lg leading-7 text-gray-600">
              You know the struggle.
              <span className="font-bold">
                {" "}
                One missing receipt, a miscalculated deduction, or a filing
                delay,{" "}
              </span>
              and suddenly, your firm is firefighting client queries instead of
              growing your business.
            </p>

            <p className="my-2 text-lg leading-7 text-gray-600">
              We’ve seen it all:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
              <li className="font-bold">
                ✅ Tight deadlines turning into all-nighters
              </li>
              <li className="font-bold">
                ✅ Last-minute client uploads that make you question life
                choices
              </li>
              <li className="font-bold">
                ✅ Ever-changing regulations that feel like a moving goalpost
              </li>
            </ul>

            <p className="my-2 text-lg leading-7 text-gray-600">
              That’s where Account Wisely steps in—to ensure
              <span className="font-bold">
                {" "}
                error-free, compliant, and timely{" "}
              </span>
              tax return preparation so you can focus on running your firm
              instead of running after deadlines.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Why Outsource Tax Return Preparation to Account Wisely?
            </h3>

            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              More Accuracy, Less Stress—It’s a Smart Choice
            </h4>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Outsourcing your tax return preparation isn’t just about saving
              time—it’s about
              <span className="font-bold"> working smarter. </span>
              Here’s why firms across the India trust Account Wisely:
            </p>

            <ul className="mb-5 px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">📌 Cost-Effective – </span>No need
                for extra in-house staff. Get expert tax services when you need
                them, without the overhead.
              </li>
              <li>
                <span className="font-bold">📌 Expert Support – </span>Our tax
                specialists stay ahead of India tax laws, ensuring your clients’
                filings are always spot-on.
              </li>
              <li>
                <span className="font-bold">📌 Scalability – </span>Handling 10
                returns today? 100 next month? We scale with you.
              </li>
              <li>
                <span className="font-bold">📌 Time-Saving – </span>Spend less
                time on tax filings and more time building client relationships.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              What We Offer – Tailored Tax Solutions for India Accounting Firms
            </h3>
            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              More Than Just Tax Filing—We’re Your Tax Partner
            </h4>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              We don’t believe in one-size-fits-all. Your clients have unique
              tax needs, and we tailor our services accordingly.
            </p>

            <ul className="mb-3 px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">
                  ✅ Personalized Tax Filing Solutions –{" "}
                </span>
                Whether it’s an individual self-assessment or a corporate tax
                return, we optimize for maximum tax savings.
              </li>
              <li>
                <span className="font-bold">✅ Full Compliance – </span>We stay
                updated on latest regulations so you don’t have to.
              </li>
              <li>
                <span className="font-bold">✅ Proactive Tax Planning – </span>
                We don’t just file; we help you strategize to reduce liabilities
                and improve cash flow for your clients.
              </li>
            </ul>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              When you work with us, your clients will never know that we’re
              doing the heavy lifting behind the scenes—but they’ll certainly
              notice the difference in service.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Why Choose Account Wisely for Your Firm’s Tax Return Preparation?
            </h3>
            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              Your Secret Weapon for Stress-Free Tax Season
            </h4>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              Account Wisely has earned the trust of accounting firms across the
              India for a reason. We offer
              <span className="font-bold">
                {" "}
                reliable, efficient, and compliant{" "}
              </span>
              tax return preparation services that help your firm:
            </p>

            <ul className="mb-3 px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">✅ Stay Ahead of Deadlines – </span>
                No more last-minute scrambling.
              </li>
              <li>
                <span className="font-bold">✅ Ensure 100% Accuracy – </span>
                Every return is reviewed through a rigorous quality control
                process.
              </li>
              <li>
                <span className="font-bold">✅ Work Seamlessly – </span>We
                integrate with your existing processes, working as an extension
                of your team.
              </li>
              <li>
                <span className="font-bold">✅ Avoid Costly Errors – </span>
                Mistakes can lead to penalties and client dissatisfaction. We
                help you get it right the first time.
              </li>
            </ul>

            <p className="my-2 text-lg leading-7 text-gray-600">
              When you partner with Account Wisely, your clients will never know
              we exist—but they’ll definitely feel the difference in your
              service quality.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Comprehensive Tax Return Services for Individual and Business
              Clients
            </h3>
            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              From Sole Traders to Large Corporations—We Cover It All
            </h4>

            <p className="my-2 text-lg leading-7 text-gray-600">
              Account Wisely provides tax return preparation for:
            </p>

            <ul className="mb-5 list-disc px-5 text-lg leading-7 text-gray-600">
              <li>
                <span className="font-bold">📌 Individual Tax Returns – </span>
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

            <p className="rounded-2xl bg-[#1a0940] p-6 text-white text-lg">
              Streamline account reconciliation with our
              <span className="font-bold"> Bank Reconciliation Services, </span>
              offering detailed support for accurate financial data year-round.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Save Time, Reduce Stress, and Stay Compliant with Account Wisely
            </h3>
            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              Tax Season Without the Chaos—Sounds Good, Right?
            </h4>

            <p className="my-2 text-lg leading-7 text-gray-600">
              Managing tax returns in-house can quickly become
              overwhelming—especially during peak seasons. By outsourcing to
              Account Wisely, your firm can:
            </p>

            <ul className="mb-3 list-disc px-5 text-lg leading-7 text-gray-600">
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

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Trusted by Accounting Firms Across the India
            </h3>
            <h4 className="mb-2 text-2xl font-bold text-[#2e1566]">
              Join the Growing List of Firms Who Trust Account Wisely
            </h4>

            <p className="mt-3 mb-2 leading-7 text-gray-600 text-lg">
              We’ve built our reputation on
              <span className="font-bold">
                {" "}
                accuracy, efficiency, and compliance,{" "}
              </span>
              helping India accounting firms.
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              Don’t let tax season drain your firm’s time and resources.
              <span className="font-bold">
                {" "}
                Let Account Wisely handle the numbers while you focus on your
                clients.
              </span>
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-3xl font-bold">
              Start Outsourcing Your Tax Return Preparation Today
            </h3>
            <p className="my-2 leading-7 text-gray-600 text-lg">
              Why struggle with tax return preparation when you can
              <span className="font-bold"> outsource it with confidence</span>?
              Account Wisely’s team of tax experts is ready to streamline your
              workload, ensuring
              <span className="font-bold">
                {" "}
                timely, accurate, and compliant tax filings{" "}
              </span>
              for your firm.
            </p>

            <p className="my-2 leading-7 text-gray-600 text-lg">
              <span className="font-bold">📞 Contact us today </span>to learn
              more about how we can support your firm through tax season and
              beyond.
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

export default TaxReturn;
