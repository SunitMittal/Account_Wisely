import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import LandingImage from "../components/LandingImage";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState({});

  const FAQS = [
    {
      Q: "How can I get in touch with Account Wisely?",
      A: "You can contact us via our website's contact form, email us at info@accountwisely.com",
    },
    {
      Q: "Where is Account Wisely India located?",
      A: "We provide outsourced accounting services across India, with our operations center based in Mumbai",
    },
    {
      Q: "How long does it take to receive a response?",
      A: "We typically respond within 24 business hours. For urgent inquiries, please contact us by phone or live chat",
    },
    {
      Q: "Who can I contact for sales inquiries?",
      A: "You can email our sales team at info@accountwisely.com or fill out the contact form",
    },
    {
      Q: "Can I book a consultation before partnering with Account Wisely?",
      A: "Yes! We offer a free trial. Visit our Book a Free Trial page",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const mail = {
      first_name: formData.get("firstname"),
      last_name: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        "https://account-wisely.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mail),
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
    } catch{
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
      <div className="flex flex-col pt-10 md:pt-10 gap-6 md:gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">

          {/* section 1 */}
          <div className="flex flex-col p-7 md:p-6 gap-5 md:gap-7">
            {/* chat */}
            <div>
              <p className="font-bold text-xl md:text-2xl">Chat with Us</p>
              <p className="text-gray-500 text-lg md:text-xl">
                Speak to our friendly team via live chat
              </p>
              <div className="flex items-center gap-2 mt-1">
                <RiMailSendLine className="h-5 w-5" />
                <a
                  className="font-bold underline decoration-2"
                  href="mailto:info@accountwisely.com"
                >
                  Shoot Us An Email
                </a>
              </div>
            </div>

            {/* visit */}
            <div>
              <p className="font-bold text-xl md:text-2xl">Visit Us</p>
              <p className="text-gray-500 text-lg md:text-xl">
                Meet use directly at our office
              </p>

              <div className="flex items-center gap-2 mt-1">
                <FiMapPin className="h-6 w-6 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/2917FDHJYNWqr8iN7"
                  target="_blank"
                  className="font-bold decoration-2 max-w-xs"
                >
                  BLA Business Park, Office No. 902-903, 9th Floor, Sonawala Lane, Goregaon East, Mumbai, Maharashtra 400063
                </a>
              </div>

              <div className="flex items-center gap-2 pt-5">
                <FiMapPin className="h-6 w-6 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/wW7hPh1rNVUEnHHo6"
                  target="_blank"
                  className="font-bold decoration-2 max-w-xs"
                >
                  Office No. 1117-A, 11th Floor, HubTown Viva, Western Express Highway, Jogeshwari East, Mumbai, Maharashtra 400060
                </a>
              </div>

            </div>
          </div>

          {/* section 2 */}
          <div className="my-6 flex flex-col gap-4 px-7 md:px-4">
            <p className="text-4xl md:text-5xl font-bold">
              Ready to get Started?{" "}
              <span className="text-[#2e1566]">Let's chat.</span>
            </p>
            <div className="flex flex-col md:gap-4 rounded-xl border border-gray-300 p-4 gap-6">
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-4xl flex-col gap-3"
              >
                <p className="mb-3 text-gray-700">
                  Please fill out the form below, and a member of our team will
                  get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] p-3 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] p-3 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] p-3 focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] p-3 focus:outline-none"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a Message"
                  className="h-30 w-full resize-none rounded-md border-0 bg-[#eceef6] p-3 focus:outline-none"
                />
                {errors.form && (
                  <p className="text-xs text-red-600 sm:text-sm">
                    {errors.form}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-lg bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] px-4 text-lg font-semibold text-white shadow-lg transition-all duration-600 hover:from-[#ffc388] hover:to-[#f58210] hover:cursor-pointer disabled:opacity-50 hover:shadow-2xl focus:outline-none hover:scale-[1.01]"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="md:mt-14 bg-[#fff2dd] px-7 py-15">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-14">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
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
                      <h3 className="text-lg font-bold text-black">{FAQ.Q}</h3>
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
