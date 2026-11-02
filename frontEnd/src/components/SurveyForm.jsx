import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Mail,
  User,
  Phone,
  Download,
} from "lucide-react";

const TOTAL_STEPS = 5; // All 5 question steps

const THANK_YOU_PATH = "/contact/thank-you";

// Paste your server's endpoint here, or set VITE_API_URL (.env file)
const API_URL = import.meta.env.VITE_API_URL || "";

const ACCOUNTING_SETUP_OPTIONS = [
  "No accountant",
  "In house Accountant",
  "Outsourced Accountant",
];

const HELP_OPTIONS = [
  "MIS reporting",
  "Looking to outsource the accounting",
  "Profitability review",
  "GST / accounting cleanup",
  "Virtual CFO support",
];

const SALES_OPTIONS = [
  "Below ₹5 lakh",
  "₹5–15 lakh",
  "₹15–50 lakh",
  "₹50 lakh–₹1 crore",
  "Above ₹1 crore",
];

const initialData = {
  accountingSetup: [],
  helpNeeded: [],
  monthlySales: [],
  location: "",
  email: "",
  firstName: "",
  phone: "",
};

function toggleInArray(arr, value) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

async function submitResponse(data) {
  if (!API_URL)
    throw new Error("VITE_API_URL is not configured — lead was not saved.");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Server responded with ${res.status}`);
  }
}

export default function SurveyForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [touched, setTouched] = useState(false);

  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

  const isStepValid = () => {
    switch (step) {
      case 1:
        return data.accountingSetup.length > 0;
      case 2:
        return data.helpNeeded.length > 0;
      case 3:
        return data.monthlySales.length > 0;
      case 4:
        return data.location.trim().length > 0;
      case 5:
        return (
          data.email.trim().length > 3 &&
          data.email.includes("@") &&
          data.firstName.trim().length > 0 &&
          data.phone.trim().length == 10
        );
      default:
        return true;
    }
  };

  const goNext = async () => {
    if (submitting) return;

    if (!isStepValid()) {
      setTouched(true);
      return;
    }
    setTouched(false);

    if (step === TOTAL_STEPS) {
      setSubmitting(true);
      setSubmitError(false);

      try {
        await submitResponse(data);

        const { firstName } = data;
        setData(initialData); // new form will trigger everytime the modal is closed
        setStep(1);

        navigate(THANK_YOU_PATH, { state: { submitted: true, firstName } }); // Google Ads conversion fires inside ThankYouModal
      } catch (err) {
        console.error("Failed to submit response:", err);
        setSubmitError(true); // stay on this step so the user can retry=
      } finally {
        setSubmitting(false);
      }

      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setTouched(false);
    setSubmitError(false);
    setStep((s) => Math.max(s - 1, 1));
  };

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-300 p-5 sm:p-7">
      {/* Progress */}
      <div className="h-1 rounded-full bg-gray-200 overflow-hidden mb-1.5">
        <div
          className="h-full bg-[#f58210] transition-all duration-300 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="text-sm text-gray-500 mb-5">
        Step {step} of {TOTAL_STEPS}
      </div>

      {/* Body */}
      <div>
        {step === 1 && (
          <Question
            title="What's your current accounting setup?"
            hint="Select all that apply"
          >
            <CheckboxGroup
              options={ACCOUNTING_SETUP_OPTIONS}
              selected={data.accountingSetup}
              onToggle={(v) =>
                update({
                  accountingSetup: toggleInArray(data.accountingSetup, v),
                })
              }
            />
          </Question>
        )}

        {step === 2 && (
          <Question
            title="What do you need help with?"
            hint="Select all that apply"
          >
            <CheckboxGroup
              options={HELP_OPTIONS}
              selected={data.helpNeeded}
              onToggle={(v) =>
                update({ helpNeeded: toggleInArray(data.helpNeeded, v) })
              }
            />
          </Question>
        )}

        {step === 3 && (
          <Question title="Approx. monthly sales?" hint="Select all that apply">
            <CheckboxGroup
              options={SALES_OPTIONS}
              selected={data.monthlySales}
              onToggle={(v) =>
                update({ monthlySales: toggleInArray(data.monthlySales, v) })
              }
            />
          </Question>
        )}

        {step === 4 && (
          <Question title="What's your current location?">
            <InputField
              icon={MapPin}
              type="text"
              placeholder="City, state"
              value={data.location}
              onChange={(e) => update({ location: e.target.value })}
              autoFocus
            />
          </Question>
        )}

        {step === 5 && (
          <Question
            title="Contact information"
            hint="We'll use this to reach you about your accounting — never shared or sold."
          >
            <InputField
              label="Email address"
              icon={Mail}
              type="email"
              placeholder="you@company.com"
              value={data.email}
              onChange={(e) => update({ email: e.target.value })}
            />
            <InputField
              label="Full name"
              icon={User}
              type="text"
              placeholder="Your full name"
              value={data.firstName}
              onChange={(e) => update({ firstName: e.target.value })}
            />
            <InputField
              label="Phone number"
              icon={Phone}
              type="tel"
              placeholder="10-digit mobile number"
              value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              last
            />
          </Question>
        )}

        {/* Validation message */}
        {touched && !isStepValid() && (
          <div className="mt-3 text-[12.5px] text-red-600">
            * All the Fields are Mandatory
          </div>
        )}

        {/* Submit error message */}
        {submitError && (
          <div className="mt-3 text-[12.5px] text-red-600" role="alert">
            Something went wrong while submitting. Please try again or email us
            at info@accountwisely.com.
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="flex justify-between items-center gap-2.5 mt-6">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1 || submitting}
          className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 px-4 py-2.5 rounded-lg disabled:opacity-35 disabled:cursor-default"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={submitting}
          className="flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-[#f58210] via-[#fc9f41] to-[#ffc388] hover:from-[#ffc388] hover:to-[#f58210] transition-all duration-500 px-5 py-2.5 rounded-lg ml-auto disabled:opacity-60"
        >
          {step === TOTAL_STEPS
            ? submitting
              ? "Submitting…"
              : "Submit"
            : "Continue"}
          {step !== TOTAL_STEPS && <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
}

function Question({ title, hint, children }) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-1">
        {title}
      </h2>
      {hint && <p className="text-[13px] text-gray-500 mb-4">{hint}</p>}
      <div className="mt-3.5">{children}</div>
    </div>
  );
}

function InputField({ label, last = false, icon: Icon, ...inputProps }) {
  return (
    <div className={last ? "mb-1" : "mb-4"}>
      {label && (
        <label className="block text-[12.5px] font-semibold text-gray-500 mb-1.5">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-3 focus-within:border-[#f58210] transition-colors">
        <Icon size={18} className="text-gray-500 shrink-0" />
        <input
          className="w-full outline-none border-none text-[14.5px] text-gray-900 bg-transparent placeholder:text-gray-400"
          {...inputProps}
        />
      </div>
    </div>
  );
}

function CheckboxGroup({ options, selected, onToggle }) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            type="button"
            key={opt}
            onClick={() => onToggle(opt)}
            className={`flex items-center justify-between w-full text-left px-3.5 py-3 rounded-[10px] border-[1.5px] text-[14.5px] text-gray-900 transition-colors ${
              active
                ? "border-[#f58210] bg-[#fdecd9]"
                : "border-gray-300 bg-white hover:border-[#f58210]"
            }`}
          >
            <span>{opt}</span>
            <span
              className={`w-5 h-5 rounded-md border-[1.5px] flex items-center justify-center shrink-0 text-white ${
                active ? "bg-[#f58210] border-[#f58210]" : "border-gray-300"
              }`}
            >
              {active && <Check size={14} strokeWidth={3} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
