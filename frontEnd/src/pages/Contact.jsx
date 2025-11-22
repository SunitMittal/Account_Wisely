import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import LandingImage from "../components/LandingImage";
// Using backend email endpoint instead of Formspree

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("email");
    const subject = `Contact form from ${formData.get("firstname") || "User"} ${formData.get("lastname") || ""}`.trim();
    const msg = `Name: ${formData.get("firstname")} ${formData.get("lastname")}\nPhone: ${formData.get("phone")}\nMessage: ${formData.get("message")}`;

    try {
      const res = await fetch(import.meta.env.VITE_API_URL || "http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderEmail, subject, msg }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors({ form: data.msg || "Failed to send message. Please try again." });
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
    return <p>Thanks for contacting! We will get back to you as soon as possible.</p>;
  }
  return (
    <>
      {/* image */}
      <LandingImage
        title="Get in Touch with Account Wisely - Let's Talk Business!"
        link="Contact Us"
      />
      <div className="flex flex-col gap-4 bg-white pt-8 sm:gap-6 sm:pt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
          {/* section 1 */}
          <div className="flex flex-col gap-5 px-4 sm:gap-7 sm:px-6">
            {/* chat */}
            <div>
              <p className="text-base font-semibold sm:text-lg">Chat with Us</p>
              <p className="text-sm text-gray-400 sm:text-base">
                Speak to our friendly team via live chat
              </p>
              <div className="mt-3 flex items-center gap-2 sm:mt-4">
                <RiMailSendLine className="h-4 w-4 sm:h-5 sm:w-5" />
                <a
                  className="text-sm underline sm:text-base"
                  href="mailto:partners@accountwisely.com"
                >
                  Shoot Us An Email
                </a>
              </div>
            </div>
            {/* visit */}
            <div>
              <p className="text-base font-semibold sm:text-lg">Visit Us</p>
              <p className="text-sm text-gray-400 sm:text-base">Meet use directly at our office</p>
              <div className="mt-3 flex items-center gap-2 sm:mt-4">
                <FiMapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  className="text-sm underline sm:text-base"
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
              <span className="text-[#2a4768]">let's chat.</span>
            </p>
            <div className="flex flex-col gap-4 rounded-xl border p-4 sm:gap-6 sm:p-6">
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl flex-col gap-3 sm:gap-4">
                <p className="mb-3 text-sm text-gray-400 sm:mb-4 sm:text-base">
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
                  <p className="text-xs text-red-600 sm:text-sm">{errors.form}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-10 rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 text-sm font-semibold text-white hover:cursor-pointer disabled:opacity-50 sm:h-12 sm:text-base"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="mt-12 flex flex-col place-items-center gap-4 bg-[#fff2dd] px-4 py-4 sm:mt-16 sm:gap-6 sm:px-6">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-3 py-3 text-sm font-bold sm:px-5 sm:py-4 sm:text-base">
                How can I get in touch with Account Wisely?
              </p>
              <p className="mt-3 mb-4 text-xs text-gray-500 sm:mt-4 sm:mb-6 sm:text-sm">
                You can contact us via our website's contact form, email us at
                partners@accountwisely.com.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-3 py-3 text-sm font-bold sm:px-5 sm:py-4 sm:text-base">
                Where is Account Wisely India located?
              </p>
              <p className="mt-3 mb-4 text-xs text-gray-500 sm:mt-4 sm:mb-6 sm:text-sm">
                We provide outsourced accounting services to start-ups, CA's and
                accounting firms across the India, with our operations center
                based in Ahmedabad, India.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-3 py-3 text-sm font-bold sm:px-5 sm:py-4 sm:text-base">
                How long does it take to receive a response?
              </p>
              <p className="mt-3 mb-4 text-xs text-gray-500 sm:mt-4 sm:mb-6 sm:text-sm">
                We typically respond within 24 business hours. For urgent
                queries, you can reach out via phone or live chat during working
                hours.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-3 py-3 text-sm font-bold sm:px-5 sm:py-4 sm:text-base">
                Who can I contact for sales inquiries?
              </p>
              <p className="mt-3 mb-4 text-xs text-gray-500 sm:mt-4 sm:mb-6 sm:text-sm">
                For business inquiries, you can reach our sales team at
                sales@white-bull.India or fill out the contact form, and a
                representative will get back to you.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-3 py-3 text-sm font-bold sm:px-5 sm:py-4 sm:text-base">
                Can I book a consultation before partnering with Account Wisely?
              </p>
              <p className="mt-3 mb-6 text-xs text-gray-500 sm:mt-4 sm:mb-8 sm:text-sm">
                Yes! We offer a free trial so you can experience our services
                firsthand. Visit our Book a Free Trial page to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
