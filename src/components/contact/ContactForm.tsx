"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

import { siteConfig } from "@/config/site";

type EnquiryForm = {
  name: string;
  phone: string;
  email: string;
  travelType: string;
  destination: string;
  travelDate: string;
  travellers: string;
  budget: string;
  message: string;
};

const initialForm: EnquiryForm = {
  name: "",
  phone: "",
  email: "",
  travelType: "",
  destination: "",
  travelDate: "",
  travellers: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-secondary)]/70 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-soft)]";

export function ContactForm() {
  const [form, setForm] = useState<EnquiryForm>(initialForm);

  const enquiryText = useMemo(() => {
    return [
      "Hello ExploreYatri,",
      "",
      "I would like to enquire about a trip.",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Travel type: ${form.travelType || "-"}`,
      `Destination: ${form.destination || "-"}`,
      `Travel date: ${form.travelDate || "-"}`,
      `Travellers: ${form.travellers || "-"}`,
      `Approx. budget: ${form.budget || "-"}`,
      "",
      "Additional requirements:",
      form.message || "-",
    ].join("\n");
  }, [form]);

  function updateField(
    key: keyof EnquiryForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function validateRequired() {
    if (!form.name.trim()) {
      window.alert("Please enter your name.");
      return false;
    }

    if (!form.phone.trim()) {
      window.alert("Please enter your phone number.");
      return false;
    }

    if (!form.destination.trim()) {
      window.alert("Please enter your destination.");
      return false;
    }

    return true;
  }

  function handleEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateRequired()) return;

    const subject = encodeURIComponent(
      `Travel Enquiry - ${form.destination} - ${form.name}`
    );

    const body = encodeURIComponent(enquiryText);

    window.location.href =
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  function handleWhatsApp() {
    if (!validateRequired()) return;

    const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_24px_65px_rgba(82,43,20,0.08)] sm:p-7 lg:p-8">
      <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
            Trip Enquiry
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">
            Plan your journey
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
            Fill in whatever you already know. We can help with the rest.
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-soft)]">
          <Send className="h-5 w-5 text-[var(--primary)]" />
        </div>
      </div>

      <form onSubmit={handleEmail} className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your Name" required>
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              placeholder="Enter your full name"
              className={fieldClass}
            />
          </Field>

          <Field label="Phone / WhatsApp" required>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) =>
                updateField("phone", event.target.value)
              }
              placeholder="+91 98XXXXXXXX"
              className={fieldClass}
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              placeholder="you@example.com"
              className={fieldClass}
            />
          </Field>

          <Field label="Travel Type">
            <select
              value={form.travelType}
              onChange={(event) =>
                updateField("travelType", event.target.value)
              }
              className={fieldClass}
            >
              <option value="">Select travel type</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
              <option value="Group Departure">Group Departure</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Family Holiday">Family Holiday</option>
              <option value="Yatra / Pilgrimage">Yatra / Pilgrimage</option>
              <option value="Corporate / College">
                Corporate / College
              </option>
              <option value="Customized Trip">Customized Trip</option>
            </select>
          </Field>

          <Field label="Destination" required>
            <input
              type="text"
              value={form.destination}
              onChange={(event) =>
                updateField("destination", event.target.value)
              }
              placeholder="Kashmir, Bali, Manali..."
              className={fieldClass}
            />
          </Field>

          <Field label="Travel Date">
            <div className="relative">
              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />

              <input
                type="date"
                value={form.travelDate}
                onChange={(event) =>
                  updateField("travelDate", event.target.value)
                }
                className={`${fieldClass} pl-11`}
              />
            </div>
          </Field>

          <Field label="Number of Travellers">
            <div className="relative">
              <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />

              <input
                type="number"
                min="1"
                value={form.travellers}
                onChange={(event) =>
                  updateField("travellers", event.target.value)
                }
                placeholder="2"
                className={`${fieldClass} pl-11`}
              />
            </div>
          </Field>

          <Field label="Approx. Budget">
            <select
              value={form.budget}
              onChange={(event) =>
                updateField("budget", event.target.value)
              }
              className={fieldClass}
            >
              <option value="">Select budget</option>
              <option value="Below ₹10,000">Below ₹10,000</option>
              <option value="₹10,000 - ₹25,000">
                ₹10,000 - ₹25,000
              </option>
              <option value="₹25,000 - ₹50,000">
                ₹25,000 - ₹50,000
              </option>
              <option value="₹50,000 - ₹1,00,000">
                ₹50,000 - ₹1,00,000
              </option>
              <option value="Above ₹1,00,000">
                Above ₹1,00,000
              </option>
              <option value="Flexible">Flexible</option>
            </select>
          </Field>
        </div>

        <Field label="Tell us more" className="mt-4">
          <textarea
            rows={5}
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            placeholder="Hotel preference, departure city, places you want to cover, special requirements..."
            className={`${fieldClass} resize-none`}
          />
        </Field>

        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
          <p className="text-xs leading-6 text-[var(--text-secondary)]">
            Choose how you want to send the enquiry. Email opens your email
            app with all details pre-filled; WhatsApp opens a ready-to-send
            message to ExploreYatri.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          >
            <Mail className="h-4 w-4" />
            Send by Email
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <MessageCircle className="h-4 w-4" />
            Continue on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required = false,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-bold text-[var(--text-primary)]">
        {label}
        {required ? (
          <span className="ml-1 text-[var(--primary)]">*</span>
        ) : null}
      </span>

      {children}
    </label>
  );
}
