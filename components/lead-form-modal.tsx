"use client";

import { useState } from "react";
import { X, MessageSquare } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  {
    id: "savings",
    emoji: "💰",
    label: "Already have savings and want to allocate it",
  },
  {
    id: "income",
    emoji: "📈",
    label: "Need to create an income to generate money for expenses",
  },
  {
    id: "depends",
    emoji: "🎯",
    label: "Depends on the platform",
  },
];

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, selectedOption });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-xl bg-card border border-border shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Get Instant Free Access
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your info below and we&apos;ll send you the details
              immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>

            {/* Phone Input */}
            <div className="phone-input-wrapper relative">
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="w-full flex items-center gap-2 rounded-lg border border-border bg-input px-4 py-3"
                countrySelectProps={{
                  className: "country-select-dropdown"
                }}
              />
            </div>

            {/* Question */}
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground mb-3">
                Which best describes you?
              </p>
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                      selectedOption === option.id
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-input text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="mr-2">{option.emoji}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:brightness-110"
            >
              Get Access Now →
            </button>

            {/* Disclaimer */}
            <p className="text-center text-xs text-muted-foreground">
              By completing this form, I agree to receive the details via email
              and SMS.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
