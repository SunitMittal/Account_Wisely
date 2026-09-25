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
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
