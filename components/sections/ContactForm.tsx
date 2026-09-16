"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { school } from "@/lib/data/school";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", phone: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Sends the enquiry straight to the school's WhatsApp — no backend/email
    // service required. The visitor's WhatsApp opens with the message ready;
    // they just tap Send there.
    const text =
      `New Admission Enquiry\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      (form.email ? `Email: ${form.email}\n` : "") +
      `\nMessage: ${form.message}`;

    const url = `https://wa.me/${school.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl bg-navy-100 p-8 text-center"
      >
        <CheckCircle2 className="text-navy-900" size={32} />
        <p className="font-display text-lg font-bold text-navy-950">
          Thank you, {form.name.split(" ")[0]}!
        </p>
        <p className="text-sm text-ink-600">
          WhatsApp should now be open in a new tab with your message ready —
          just tap <strong>Send</strong> there to reach our admissions team
          directly. You can also call us at{" "}
          <a href={school.phoneHref} className="font-semibold text-navy-900">
            {school.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-semibold text-navy-900 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900">
          Full name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-900">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
          placeholder="Tell us which class you're enquiring about..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full justify-center bg-[#25D366] text-white hover:bg-[#1fb959] sm:w-auto"
      >
        <WhatsAppIcon width={18} height={18} />
        Send Enquiry via WhatsApp
      </Button>
    </form>
  );
}
