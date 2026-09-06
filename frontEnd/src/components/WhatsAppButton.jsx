import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  // const message = encodeURIComponent(
  //   "Hi, I visited your website and would like to know more.",
  // );

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const whatsappUrl = `https://wa.me/${918108814831}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-4 w-4 sm:h-6 sm:w-6" />
    </a>
  );
};

export default WhatsAppButton;
