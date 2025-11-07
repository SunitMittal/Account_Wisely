import React, { useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageCutout from "../../assets/image-cutout.svg";

const testimonials = [
  {
    id: 1,
    quote:
      "Account Wisely is extremely prompt and professional. They were able to help me out a lot with relevant service. I'm extremely grateful for their help and guidance in the matter.",
    name: "Gianelle Pereira",
  },
  {
    id: 2,
    quote:
      "I’ve been working with Account Wisely for over 3 years now, and I have been very happy with their services. From tax planning to financial advice, they’ve consistently exceeded my expectations. Their team is knowledgeable, responsive, and always willing to go the extra mile. They’ve helped me navigate complex financial situations and provided valuable insights that have positively impacted my business. If you’re looking for a reliable and trustworthy accounting partner, I highly recommend Account Wisely.",
    name: "MAYUR KHAMBETE",
  },
  {
    id: 3,
    quote:
      "I had given my income tax returns filing for the year 2023-2024 to Mr.Anshul Mittal. He has done a good job in filing my returns promptly. He has a courteous approach towards his clients, which makes it easy to discuss and clarify any doubts with satisfaction. I will recommend his name to others Best of luck to Mr Anshul Mittal for all your future endeavours.",
    name: "Janaky Iyer",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4 text-center">
          <span className="text-2xl font-bold tracking-wider text-teal-600 uppercase">
            Our Success Story
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
            <img
              src={imageCutout}
              alt="Business professionals shaking hands"
              className="h-auto w-4/5 object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What Our <span className="text-navy-800">Clients</span> Say About
              Us
            </h2>

            <p className="mb-8 text-lg text-gray-700">
              We take pride in the positive experiences and successful outcomes
              we've facilitated for our clients.
            </p>

            <div className="mb-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  isActive={index === activeIndex}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-navy-100 rounded-full bg-[#2a4768] p-3 text-white transition-colors hover:cursor-pointer hover:bg-black"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-navy-100 rounded-full bg-[#2a4768] p-3 text-white transition-colors hover:cursor-pointer hover:bg-black"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
