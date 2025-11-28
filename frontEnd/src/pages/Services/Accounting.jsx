import React from "react";
import LandingImage from "../../components/LandingImage";
import ServiceList from "../../components/ServiceList";
import { Link } from "react-router-dom";
import { TbPhoneCalling } from "react-icons/tb";

const Accounting = () => {
  const FAQS = [
    {
      Q: "Why should startups, MSMEs and firms consider outsourced accounting ?",
      A: "Outsourcing accounting – So you don’t need to manage an internal team, allowing you to reduce costs, increase accuracy, increase efficiency, and focus on growing your business.",
    },
    {
      Q: "Why is Account Wisely a trusted partner for accounting firms?",
      A: "Account Wisely offers reliable, white-label solutions customized to meet the unique needs of accounting firms. With a focus on precision and efficiency, we help firms deliver exceptional service to their",
    },
    {
      Q: "What sets Account Wisely apart from other outsourced providers?",
      A: "Our white-label services are designed to integrate seamlessly into your firm’s operations, giving you the flexibility and precision you need, with the expertise you can rely on.",
    },
    {
      Q: "Can Account Wisely help with regulatory compliance?",
      A: "Absolutely. Account Wisely ensures that your clients’ financial accounts are accurate and compliant with India standards, reducing risks and keeping everything in line with the latest regulations.",
    },
  ];

  return (
    <>
      <LandingImage
        title="Accounting Services"
        link="Services / Accounting Services"
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
          <div className="my-6 lg:px-10 sm:my-8 sm:px-4.5">
            <div>
              <h3 className="text-3xl font-bold sm:text-2xl md:text-3xl">
                Expert{" "}
                <span className="text-[#2e1566]">Accounting Solutions</span> for
                Startups, MSMEs and Accounting Firms– Boost Efficiency &
                Compliance
              </h3>
              <p className="mt-3 mb-2 text-justify leading-7 text-gray-600 sm:mt-3 sm:mb-2 sm:leading-7 sm:text-lg">
                As your business grows, so do the complexities of managing
                financial operations.{" "}
                <span className="font-semibold text-gray-600">
                  Outsourcing your accounting to Account Wisely
                </span>{" "}
                allows you to focus on expanding your client base while ensuring{" "}
                <span className="font-semibold text-gray-600">
                  compliance, accuracy, and efficiency
                </span>
                .
              </p>

              <p className="my-2 text-justify leading-7 text-gray-600 sm:my-2 sm:leading-7 sm:text-lg">
                With our{" "}
                <span className="font-semibold text-gray-600">
                  expert accounting solutions
                </span>
                , your business can eliminate time-consuming tasks, reduce
                overhead costs, and enhance service quality—without hiring
                in-house staff.
              </p>
              <p className="my-3 text-justify leading-7 text-gray-600 sm:my-3 sm:leading-7 sm:text-lg">
                <span className="font-semibold">Pain Point:</span> Growing your
                client base and meeting increasing demands doesn't have to come
                at the expense of quality. With Account Wisely, you can scale
                effortlessly, focusing on building stronger client relationships
                and growing your practice. Our team handles the complexities,
                ensuring your firm stays efficient, accurate, and ahead of the
                game.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2e1566] sm:text-2xl md:text-3xl">
                Why Businesses Trust Account Wisely
              </h3>
              <p className="my-2 text-lg leading-7 text-gray-600 sm:my-2 sm:leading-7">
                When you outsource to Account Wisely, you're not just
                outsourcing accounting—you're gaining a trusted partner that
                supports your business's success. From everyday financial tasks
                to intricate tax filings, we take the load off your team.
                Whether you're a startup, freelancer, solopreneur, online
                influencer or CA practice firm, we're here to help you
                grow—offering scalable, flexible solutions to meet your needs,
                no matter the season.
              </p>

              <p className="text-lg leading-7 text-gray-600 sm:leading-7">
                We don't just process numbers—we empower your firm with seamless
                financial management:
              </p>

              <ul className="mb-5 mt-0 list-disc pl-5 text-lg leading-6 text-gray-600 sm:mb-5 sm:mt-0 sm:pl-7 sm:leading-7">
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

              <p className="rounded-2xl bg-[#1a0940] px-8 py-6 text-white sm:px-8 sm:py-6 md:text-xl">
                Ready to boost your firm's cash flow management? Discover our
                Outsourced <strong>Services </strong>
                designed to streamline your financial processes.
              </p>
            </div>

            <div>
              <h3 className="mt-4 mb-4 text-3xl font-bold sm:mt-5 sm:mb-2 sm:text-2xl md:text-3xl">
                Precision Accounting to Drive Your Firm's Growth!
              </h3>
              <p className="text-lg leading-7 text-gray-600 sm:leading-7">
                We understand that precision is everything. Our outsourced
                accounting solutions are designed to give you accurate,
                real-time financial insights, allowing your firm to make
                smarter, faster decisions. We've helped firms to optimize their
                operations, reduce overhead, and maintain the compliance your
                clients depend on—all while freeing up time for you to focus on
                business growth.
              </p>
              <p className="mb-4 mt-3 text-lg leading-7 text-gray-600 sm:mb-4 sm:mt-3 sm:leading-7">
                <span className="font-bold">Pain Point: </span>The pressure to
                stay organized, compliant, and profitable can feel overwhelming.
                Let Account Wisely take care of the financial details, so you
                can keep your focus on delivering value to your clients,
                confidently and efficiently.
              </p>
            </div>

            <div>
              <h2 className="mt-5 mb-2 text-3xl font-bold sm:mt-5 sm:mb-2 sm:text-2xl md:text-3xl">
                Why Choose Account Wisely for Your{" "}
                <span className="text-[#2e1566]">
                  Outsourced Accounting Needs?
                </span>
              </h2>
              <h3 className="text-2xl font-bold">
                1. Cost-Effective Accounting Solutions
              </h3>
              <p className="my-1 leading-7 text-gray-600 text-lg">
                Hiring an in-house team is expensive. Account Wisely offers a{" "}
                <span className="font-bold text-gray-600">
                  cost-efficient alternative
                </span>{" "}
                without compromising quality.
              </p>
              <ul className="text-gray-500 text-lg">
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
              <p className="my-1 text-gray-600 text-lg">
                <span className="font-bold text-gray-600">Account Wisely</span>{" "}
                isn’t just another outsourced provider—we’re a trusted extension
                of your firm. Our services are discreet, high-quality, and built
                to improve client satisfaction, ensure compliance, and
                streamline your operations. Let us be the invisible part of your
                team that propels your firm to the next level.
              </p>
              <h3 className="text-2xl font-bold mt-2 mb-1">
                2. Industry Expertise & Regulatory Compliance
              </h3>
              <p className="leading-7 text-gray-600 text-lg">
                With years of experience supporting{" "}
                <span className="font-bold text-gray-600">businesses,</span> we
                ensure full compliance with{" "}
                <span className="font-bold text-gray-600">
                  India GAAP, IFRS, and Ind-AS regulations.
                </span>
              </p>
              <ul className="text-gray-500 text-lg">
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
              <h3 className="mt-2 mb-1 text-2xl font-bold">
                3. Scalable & Flexible Support
              </h3>
              <ul className="text-gray-500 text-lg">
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
            </div>

            <div>
              <h2 className="mt-4 mb-2 text-3xl font-bold sm:mt-4 sm:mb-2 sm:text-2xl md:text-3xl">
                Trusted by CA & Accounting Firms Across the India
              </h2>
              <p className="leading-7 text-gray-600 text-lg">
                we don’t just work for you—we work with you as an extension of
                your firm. From day-to-day accounting to complex financial
                planning, we help you{" "}
                <span className="font-bold text-gray-600">
                  streamline processes, reduce costs, and improve efficiency.
                </span>
              </p>
              <ul className="py-2 text-gray-600 text-lg leading-7">
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
              <h3 className="mt-3 font-bold text-gray-600 text-lg leading-7">
                Ready to Elevate Your Firm? Let’s Talk! 🚀
              </h3>
              <ul className="text-gray-600 text-lg leading-7">
                <li>
                  👉{" "}
                  <Link to={"/contact"} className="font-bold text-[#2e1566]">
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

export default Accounting;
