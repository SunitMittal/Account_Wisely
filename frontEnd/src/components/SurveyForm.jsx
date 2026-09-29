import { useState } from "react";
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

const TOTAL_STEPS = 6;

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

// Paste your server's endpoint here, or set BackEnd_API_URL (.env file)
// Left blank, submissions still work in the UI but nothing is recorded anywhere.
const API_URL = import.meta.env.BackEnd_API_URL || "";

async function submitResponse(data) {
  if (!API_URL) {
    console.warn(
      "No API_URL configured — response was not saved anywhere. See README.md.",
    );
    return;
  }

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
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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
          data.phone.trim().length >= 7
        );
      default:
        return true;
    }
  };

  const LAST_QUESTION_STEP = 5;

  const goNext = async () => {
    if (!isStepValid()) {
      setTouched(true);
      return;
    }
    setTouched(false);
    if (step === LAST_QUESTION_STEP) {
      setSubmitting(true);
      try {
        await submitResponse(data);
      } catch (err) {
        console.error("Failed to submit response:", err);
      } finally {
        setSubmitting(false);
      }
      setSubmitted(true);
      setStep(TOTAL_STEPS);
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setTouched(false);
    setStep((s) => Math.max(s - 1, 1));
  };

  const progressPct = (Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100;

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
        Step {Math.min(step, TOTAL_STEPS)} of {TOTAL_STEPS}
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
            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-3 focus-within:border-[#f58210] transition-colors">
              <MapPin size={18} className="text-gray-500 shrink-0" />
              <input
                className="w-full outline-none border-none text-[14.5px] text-gray-900 bg-transparent placeholder:text-gray-400"
                type="text"
                placeholder="City, state"
                value={data.location}
                onChange={(e) => update({ location: e.target.value })}
                autoFocus
              />
            </div>
          </Question>
        )}

        {step === 5 && (
          <Question
            title="Contact information"
            hint="We'll use this to reach you about your accounting — never shared or sold."
          >
            <div className="mb-4">
              <label className="block text-[12.5px] font-semibold text-gray-500 mb-1.5">
                Email address
              </label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-3 focus-within:border-[#f58210] transition-colors">
                <Mail size={18} className="text-gray-500 shrink-0" />
                <input
                  className="w-full outline-none border-none text-[14.5px] text-gray-900 bg-transparent placeholder:text-gray-400"
                  type="email"
                  placeholder="you@company.com"
                  value={data.email}
                  onChange={(e) => update({ email: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[12.5px] font-semibold text-gray-500 mb-1.5">
                Full name
              </label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-3 focus-within:border-[#f58210] transition-colors">
                <User size={18} className="text-gray-500 shrink-0" />
                <input
                  className="w-full outline-none border-none text-[14.5px] text-gray-900 bg-transparent placeholder:text-gray-400"
                  type="text"
                  placeholder="Your full name"
                  value={data.firstName}
                  onChange={(e) => update({ firstName: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-1">
              <label className="block text-[12.5px] font-semibold text-gray-500 mb-1.5">
                Phone number
              </label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-3 focus-within:border-[#f58210] transition-colors">
                <Phone size={18} className="text-gray-500 shrink-0" />
                <input
                  className="w-full outline-none border-none text-[14.5px] text-gray-900 bg-transparent placeholder:text-gray-400"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={data.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                />
              </div>
            </div>
          </Question>
        )}

        {step === TOTAL_STEPS && submitted && (
          <div className="text-center py-5 px-1">
            <div className="w-[52px] h-[52px] rounded-full bg-[#fdecd9] text-[#f58210] flex items-center justify-center mx-auto mb-4">
              <Check size={28} strokeWidth={3} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
               Thanks {data.firstName || "there"}, Get ready to have perfect Accounts for your Business
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We will reach out to you shortly
            </p>
            <a
                href="/company-profile.pdf"
                download="Account-Wisely-Company-Profile.pdf"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#1f7a6c] border-[1.5px] border-[#1f7a6c] rounded-lg px-4 py-2.5 hover:bg-[#eef7f5] transition-colors"
              >
                <Download size={16} />
                Download our company profile
              </a>
              
          </div>
        )}

        {touched && !isStepValid() && step <= LAST_QUESTION_STEP && (
          <div className="mt-3 text-[12.5px] text-red-600">
            * All the Fields are Mandatory
          </div>
        )}
      </div>

      {/* Nav */}
      {step <= LAST_QUESTION_STEP && (
        <div className="flex justify-between items-center gap-2.5 mt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
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
            {step === LAST_QUESTION_STEP
              ? submitting
                ? "Submitting…"
                : "Submit"
              : "Continue"}
            {step !== LAST_QUESTION_STEP && <ArrowRight size={16} />}
          </button>
        </div>
      )}
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
