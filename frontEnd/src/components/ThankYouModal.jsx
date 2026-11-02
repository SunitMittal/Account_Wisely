import React from "react";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, Download, X } from "lucide-react";

const GOOGLE_ADS_CONVERSION = {
  send_to: "AW-18402509814/Sn1LCMHv7acdEPaHgMdE",
  value: 1.0,
  currency: "USD",
};

const ThankYouModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const closeBtnRef = useRef(null);
  const tracked = useRef(false);
  const fromSubmit = location.state?.submitted === true;
  const firstName = location.state?.firstName;

  const close = () => navigate("/contact", { replace: true });

  useEffect(() => {
    if (!fromSubmit || tracked.current)
        return;
    tracked.current = true;

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", GOOGLE_ADS_CONVERSION);
    }

    // Clear the flag in history so a refresh does not count a second lead
    navigate(location.pathname, {
      replace: true,
      state: { submitted: false, firstName },
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl px-6 py-8 sm:px-8 text-center animate-fadeIn motion-reduce:animate-none"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 rounded-full text-gray-600 hover:bg-white/60 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-[52px] h-[52px] rounded-full bg-[#fdecd9] text-[#f58210] flex items-center justify-center mx-auto mb-4">
          <Check size={28} strokeWidth={3} />
        </div>

        <h2
          id="thank-you-title"
          className="text-xl font-bold text-gray-900 mb-2"
        >
          Thanks {firstName || "there"}, get ready to have perfect accounts for
          your business
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We will reach out to you shortly.
        </p>

        <a
          href="/company-profile.pdf"
          download="Account-Wisely-Company-Profile.pdf"
          className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#1f7a6c] border-[1.5px] border-[#1f7a6c] rounded-lg px-4 py-2.5 bg-white/50 hover:bg-[#eef7f5] transition-colors"
        >
          <Download size={16} />
          Download our company profile
        </a>
      </div>
    </div>
  );
};

export default ThankYouModal;
