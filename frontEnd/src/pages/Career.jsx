import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import Career1 from "../assets/career1.png";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaBriefcase,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const Career = () => {
  const currentOpenings = [
    {
      id: 1,
      title: "Senior Accountant",
      type: "Full-time",
      description:
        "We're seeking an experienced accountant with strong knowledge of India accounting standards to join our team. You'll work directly with our accounting firm clients, handling complex accounts preparation, tax computations, and financial reporting.",
    },
    {
      id: 2,
      title: "Accounts Assistant",
      type: "Full-time",
      description:
        "An opportunity for an AAT qualified or part-qualified accountant to support our team in delivering high-quality accounting services. You'll be involved in basic accounts preparation, and GST returns for a variety of clients.",
    },
    {
      id: 3,
      title: "Tax Specialist",
      type: "Full-time",
      description:
        "Join our tax team to provide expert support with India tax compliance and planning. You'll prepare tax computations, handle tax returns, and provide technical guidance to ensure all work meets India tax regulations.",
    },
    {
      id: 4,
      title: "Client Relationship Manager",
      type: "Full-time",
      description:
        "A key role connecting our accounting expertise with the firms we support. You'll be the primary point of contact for our accounting firm clients, understanding their needs and ensuring our services exceed their expectations.",
    },
  ];

  const [activeJob, setActiveJob] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "MAYUR KHAMBETE",
      quote:
        "I’ve been working with Account Wisely for over 3 years now, and I have been very happy with their services. From tax planning to financial advice, they’ve consistently exceeded my expectations. Their team is knowledgeable, responsive, and always willing to go the extra mile. They’ve helped me navigate complex financial situations and provided valuable insights that have positively impacted my business. If you’re looking for a reliable and trustworthy accounting partner, I highly recommend Account Wisely.",
      image: "../../assets/team/david.webp",
    },
    {
      id: 2,
      name: "Prathamesh Gosavi",
      quote:
        "Anshul Sir has been handling my CA work for a while now and I couldn’t be happier. He’s super helpful always available to clear doubts and makes the whole process smooth and stress-free. Whether it's taxes, filings or any kind of financial advice. he knows his stuff and explains things in a simple way. Really appreciate his professionalism and friendly nature. Totally recommend him if you're looking for someone reliable and easy to work with.",
      image: "../../assets/team/priya.webp",
    },
    {
      id: 3,
      name: "Janaky Iyer",
      quote:
        "I had given my income tax returns filing for the year 2023-2024 to Mr.Anshul Mittal. He has done a good job in filing my returns promptly. He has a courteous approach towards his clients, which makes it easy to discuss and clarify any doubts with satisfaction. I will recommend his name to others Best of luck to Mr Anshul Mittal for all your future endeavours.",
      image: "../../assets/team/thomas.webp",
    },
    {
      id: 4,
      name: "Gianelle Pereira",
      quote:
        "Account Wisely is extremely prompt and professional. They were able to help me out a lot with relevant service. I'm extremely grateful for their help and guidance in the matter.",
      image: "../../assets/team/thomas.webp",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <LandingImage title="Career" link="Career" />

      <div className="mt-24 text-center">
        <p className="font-semibold text-[#2a4768]">Career</p>
        <h2 className="mt-4 text-3xl font-bold">
          Redefining Finance, One{" "}
          <span className="text-[#2a4768]">Career at a Time</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
        <img src={Career1} alt="" width={500} className="my-11" />
        <div className="m-3 rounded-xl border bg-white p-5">
          <form
            action=""
            method="get"
            className="mx-auto flex max-w-2xl flex-col gap-4"
          >
            <p className="mb-4 text-gray-400">
              Please fill out the form below, and Empower Your Future with One
              Smart Investment at a Time
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <input
                type="file"
                name="email"
                id="email"
                placeholder="Email Address"
                className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              id="message"
              placeholder="Write a Message"
              className="h-24 w-full resize-none rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="h-12 rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white p-6 md:px-44 md:py-16">
        <h2 className="mb-6 text-4xl font-bold text-[#2a4768]">
          Join the Account Wisely Team - Where Talent Meet Opportunities
        </h2>
        <h2 className="text-3xl font-bold text-[#2a4768]">
          Why Work at Account Wisely?
        </h2>
        <p className="my-5 text-justify leading-6.5 text-gray-500">
          Account Wisely thrives on exceptional talent—because great businesses
          are built by great people. As a leading provider of outsourced
          accounting services, we’re always looking for skilled and driven
          professionals to join our team. Whether you’re an expert in
          accounting, tax preparation, or just starting your career, Account
          Wisely offers endless opportunities for growth and professional
          development in a dynamic work environment.
        </p>
        <p className="text-justify leading-6.5 text-gray-500">
          We offer more than just a job—we offer the chance to be part of a
          supportive, diverse team that values collaboration, integrity, and
          excellence. At Account Wisely, we invest in our people, providing them
          with the tools and resources they need to succeed and thrive. If
          you’re looking to make an impact and grow within a company, Wisely
          Yours is the place for you.
        </p>

        <h2 className="my-6 text-3xl font-bold text-[#2a4768]">
          Our Culture: Collaboration, Innovation, and Growth
        </h2>
        <p className="text-justify leading-6.5 text-gray-500">
          At Account Wisely, collaboration, transparency, and innovation drive
          everything we do. As a leading provider of outsourced accounting
          services, we believe that great ideas come from teamwork and open
          communication. Every team member plays a crucial role in shaping our
          success, and we foster an environment where creativity and
          collaboration thrive.
        </p>
        <p className="mt-6 text-justify leading-6.5 text-gray-500">
          We are committed to work-life balance, offering flexibility and
          opportunities for continuous learning. Whether you’re an experienced
          accounting professional or starting your career, we provide the tools,
          training, and mentorship needed to help you excel in a dynamic,
          growth-focused workplace.
        </p>
        <h2 className="my-6 text-3xl font-bold text-[#2a4768]">
          Start Your Journey with Account Wisely
        </h2>
        <p className="text-justify leading-6.5 text-gray-500">
          If you’re looking to grow in the field of accounting, tax preparation,
          or payroll services, Account Wisely is the perfect place to build your
          career. We provide a supportive environment where talent meets
          opportunity, ensuring that every professional has the chance to
          succeed.
        </p>
        <p className="my-6 text-justify leading-6.5 text-gray-500">
          Join us and be part of a forward-thinking company that values
          innoGSTion, collaboration, and professional development. Whether
          you’re seeking your first job or a new challenge, we offer exciting
          career opportunities in outsourced accounting services.
        </p>
        <p className="text-justify leading-6.5 font-bold text-gray-500 italic">
          Take the next step in your career—explore opportunities at Wisely
          Yours and apply today!
        </p>
      </div>

      {/* Current Openings */}
      <div className="px-4.5 py-16" id="current-openings">
        <p className="my-5 text-center font-semibold text-[#2a4768]">Career</p>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Current <span className="text-[#2a4768]">Openings</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-5">
            {/* Job Listings */}
            <div className="md:col-span-2">
              {currentOpenings.map((job) => (
                <div
                  key={job.id}
                  className={`mb-4 cursor-pointer rounded-lg p-6 transition-all ${activeJob === job.id
                      ? "bg-[#2a4768] text-white"
                      : "bg-white hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveJob(job.id)}
                >
                  <h3
                    className={`text-xl font-bold ${activeJob === job.id ? "text-white" : ""
                      }`}
                  >
                    {job.title}
                  </h3>
                  <div
                    className={`mt-2 flex items-center ${activeJob === job.id ? "text-gray-200" : "text-gray-500"
                      }`}
                  >
                    <FaBriefcase className="mr-2" />
                    <span>{job.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Details */}
            <div className="rounded-lg bg-white p-8 md:col-span-3">
              {currentOpenings
                .filter((job) => job.id === activeJob)
                .map((job) => (
                  <div key={job.id}>
                    <h3 className="mb-4 text-2xl font-bold text-[#2a4768]">
                      {job.title}
                    </h3>
                    <div className="mb-6 flex items-center text-gray-500">
                      <FaBriefcase className="mr-2" />
                      <span>{job.type}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 font-bold">Job Description</h4>
                      <p className="text-gray-500">{job.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 font-bold">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Deliver high-quality accounting services to our
                            accounting firm clients
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Maintain thorough knowledge of India accounting
                            standards and regulations
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Work collaboratively with team members to meet
                            client deadlines
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Contribute to the continuous improvement of our
                            processes and services
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 font-bold">Requirements</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Relevant accounting qualifications (ACCA, ACA, or
                            equivalent)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Experience working in a India accounting environment
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Strong attention to detail and commitment to quality
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="mt-1 mr-2 text-[#2a4768]" />
                          <span className="text-gray-500">
                            Excellent communication and problem-solving skills
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Link
                      to={`/careers/apply/${job.id}`}
                      className="inline-block rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white transition-all hover:bg-[#1a3758]"
                    >
                      Apply Now
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4.5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Team <span className="text-[#2a4768]">Testimonials</span>
          </h2>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-2/3">
                <p className="mb-6 text-lg text-gray-500 italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <h4 className="text-xl font-bold">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-[#2a4768]">
                  {testimonials[activeTestimonial].position}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${activeTestimonial === index ? "bg-[#2a4768]" : "bg-gray-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gray-50 px-4.5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-4xl font-bold">
            Our Application <span className="text-[#2a4768]">Process</span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-500">
            We've designed a straightforward application process to help us
            identify talented professionals who will thrive at Account Wisely.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4768] font-bold text-white">
                1
              </div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold">Online Application</h3>
                <p className="text-gray-500">
                  Submit your application through our online portal, including
                  your CV and a brief cover letter explaining why you're
                  interested in joining Account Wisely.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4768] font-bold text-white">
                2
              </div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold">Initial Interview</h3>
                <p className="text-gray-500">
                  If your application aligns with our requirements, we'll invite
                  you for an initial interview (virtual or in-person) to discuss
                  your experience and assess your technical knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4768] font-bold text-white">
                3
              </div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold">Technical Assessment</h3>
                <p className="text-gray-500">
                  Depending on the role, you may be asked to complete a
                  practical assessment to demonstrate your technical skills and
                  approach to accounting tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4768] font-bold text-white">
                4
              </div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold">Final Interview</h3>
                <p className="text-gray-500">
                  The final stage involves meeting with senior team members to
                  discuss how you would contribute to Account Wisely and to give
                  you the opportunity to ask any questions about the role or
                  company.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4768] font-bold text-white">
                5
              </div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold">Offer & Onboarding</h3>
                <p className="text-gray-500">
                  Successful candidates will receive a formal offer, followed by
                  a comprehensive onboarding program to help you integrate into
                  the team and start contributing quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-4.5 py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Ready to <span className="text-[#2a4768]">Join</span> Our Team?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-500">
          Explore our current openings and take the first step toward a
          rewarding career at Account Wisely.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#current-openings"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white transition-all hover:bg-[#1a3758]"
          >
            View Open Positions
          </a>
          <Link
            to="/contact"
            className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] transition-all hover:bg-gray-50"
          >
            Contact Recruitment Team
          </Link>
        </div>
      </div>

      {/* No Current Openings */}
      <div className="hidden bg-gray-50 px-4.5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <FaHandshake className="mx-auto mb-6 text-5xl text-[#2a4768]" />
          <h2 className="mb-4 text-3xl font-bold">No Current Openings</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500">
            We don't have any open positions at the moment, but we're always
            interested in connecting with talented accounting professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white transition-all hover:bg-[#1a3758]"
            >
              Submit Speculative Application <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
