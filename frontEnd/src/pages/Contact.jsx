import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import LandingImage from "../components/LandingImage";
// Using backend email endpoint instead of Formspree

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState({});

  const FAQS = [
    {
      Q: "How can I get in touch with Account Wisely?",
      A: "You can contact us via our website's contact form, email us at partners@accountwisely.com.",
    },
    {
      Q: "Where is Account Wisely India located?",
      A: "We provide outsourced accounting services across India, with our operations center based in Mumbai.",
    },
    {
      Q: "How long does it take to receive a response?",
      A: "We typically respond within 24 business hours. For urgent inquiries, please contact us by phone or live chat.",
    },
    {
      Q: "Who can I contact for sales inquiries?",
      A: "You can email our sales team at sales@accountwisely.india or fill out the contact form.",
    },
    {
      Q: "Can I book a consultation before partnering with Account Wisely?",
      A: "Yes! We offer a free trial. Visit our Book a Free Trial page.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("email");
    const subject = `Contact form from ${formData.get("firstname") || "User"} ${
      formData.get("lastname") || ""
    }`.trim();
    const msg = `Name: ${formData.get("firstname")} ${formData.get(
      "lastname"
    )}\nPhone: ${formData.get("phone")}\nMessage: ${formData.get("message")}`;

    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL || "http://localhost:4000/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ senderEmail, subject, msg }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors({
          form: data.msg || "Failed to send message. Please try again.",
        });
      } else {
        setSucceeded(true);
        e.currentTarget.reset();
      }
    } catch (err) {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <p>Thanks for contacting! We will get back to you as soon as possible.</p>
    );
  }
  return (
    <>
      {/* image */}
      <LandingImage
        title="Get in Touch with Account Wisely - Let's Talk Business!"
        link="Contact Us"
      />
      <div className="flex flex-col gap-4 pt-8 sm:gap-6 sm:pt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
          {/* section 1 */}
          <div className="flex flex-col gap-5 px-4 sm:gap-7 sm:px-6">
            {/* chat */}
            <div>
              <p className="font-bold lg:text-xl sm:text-lg">Chat with Us</p>
              <p className="text-gray-500 lg:text-lg sm:text-base">
                Speak to our friendly team via live chat
              </p>
              <div className="flex items-center gap-2 sm:mt-2">
                <RiMailSendLine className="sm:h-5 sm:w-5" />
                <a
                  className="font-bold sm:text-base underline decoration-2"
                  href="mailto:partners@accountwisely.com"
                >
                  Shoot Us An Email
                </a>
              </div>
            </div>
            {/* visit */}
            <div>
              <p className="font-bold lg:text-xl sm:text-lg">Visit Us</p>
              <p className="text-gray-500 lg:text-lg sm:text-base">
                Meet use directly at our office
              </p>
              <div className="flex items-center gap-2 sm:mt-2">
                <FiMapPin className="sm:h-5 sm:w-5 " />
                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  className="font-bold sm:text-base underline decoration-2"
                >
                  Mumbai - India
                </a>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="my-6 flex flex-col gap-4 px-4 sm:my-8 sm:gap-6 sm:px-6">
            <p className="text-2xl font-bold sm:text-3xl md:text-5xl">
              Ready to get Started?{" "}
              <span className="text-[#2e1566]">Let's chat.</span>
            </p>
            <div className="flex flex-col gap-4 rounded-xl border border-gray-300 p-4 sm:gap-6 sm:p-6">
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-4xl flex-col gap-3 sm:gap-4"
              >
                <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
                  Please fill out the form below, and a member of our team will
                  get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="h-10 w-full rounded-md border-0 bg-[#eceef6] px-3 py-2 text-sm focus:outline-none sm:h-12 sm:px-4 sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="h-10 w-full rounded-md border-0 bg-[#eceef6] px-3 py-2 text-sm focus:outline-none sm:h-12 sm:px-4 sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="h-10 w-full rounded-md border-0 bg-[#eceef6] px-3 py-2 text-sm focus:outline-none sm:h-12 sm:px-4 sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="h-10 w-full rounded-md border-0 bg-[#eceef6] px-3 py-2 text-sm focus:outline-none sm:h-12 sm:px-4 sm:text-base"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a Message"
                  className="h-20 w-full resize-none rounded-md border-0 bg-[#eceef6] px-3 py-2 text-sm focus:outline-none sm:h-24 sm:px-4 sm:text-base"
                />
                {errors.form && (
                  <p className="text-xs text-red-600 sm:text-sm">
                    {errors.form}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-10 rounded-lg bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-600 hover:from-[#ffc388] hover:to-[#f58210] hover:cursor-pointer disabled:opacity-50 sm:h-12 sm:text-lg hover:shadow-2xl focus:outline-none sm:w-auto hover:scale-[1.01]"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="mt-12 bg-[#fff2dd] px-4 py-14 sm:mt-16 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-14">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
              {FAQS.map((FAQ, i) => (
                <div
                  key={i}
                  className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-[#fc9f41] to-[#ffc388] animate-borderFlow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* GLASS BACKGROUND CARD */}
                  <div
                    className="rounded-3xl backdrop-blur-xl bg-white/40 shadow-xl px-5 py-5 h-full transition-all duration-400 group-hover:shadow-2xl group-hover:-translate-y-3 animate-fadeIn"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3 px-2">
                      <h3 className="text-lg font-bold text-black">
                        {FAQ.Q}
                      </h3>
                    </div>

                    <p className="mt-2 font-medium text-gray-700 bg-white/50 rounded-xl px-4 py-4 shadow-inner backdrop-blur-md">
                      {FAQ.A}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
