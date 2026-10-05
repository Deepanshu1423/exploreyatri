"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { siteConfig } from "@/config/site";

type PopupForm = {
  name: string;
  phone: string;
  destination: string;
  travelDate: string;
  travellers: string;
};

const initialForm: PopupForm = {
  name: "",
  phone: "",
  destination: "",
  travelDate: "",
  travellers: "",
};

const fieldClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 px-4 py-3 text-sm text-[var(--text-primary)] outline-none backdrop-blur-md transition-all placeholder:text-[var(--text-secondary)]/70 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-soft)]";

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<PopupForm>(initialForm);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(
      "exploreyatri-contact-popup-shown"
    );

    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(
        "exploreyatri-contact-popup-shown",
        "true"
      );
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function updateField(
    field: keyof PopupForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      window.alert("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      window.alert("Please enter your phone number.");
      return;
    }

    if (!form.destination.trim()) {
      window.alert("Please enter your destination.");
      return;
    }

    const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

    const message = [
      "Hello ExploreYatri,",
      "",
      "I would like to plan a trip.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Destination: ${form.destination}`,
      `Travel Date: ${form.travelDate || "Not decided yet"}`,
      `Travellers: ${form.travellers || "Not decided yet"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );

    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/35 p-4 backdrop-blur-[7px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white/30 bg-[var(--surface)]/82 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Decorative transparent glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--text-primary)] backdrop-blur-md transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-5 sm:p-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/55 px-3.5 py-2 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              Plan Your Trip
            </span>
          </div>

          <h2
            id="contact-popup-title"
            className="mt-4 pr-12 text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Where would you like to
            <span className="hero-gradient-text block">
              travel next?
            </span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
            Share a few details and continue directly with our team on
            WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  placeholder="Your name"
                  className={`${fieldClass} pl-11`}
                />
              </div>

              <div className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  placeholder="Phone / WhatsApp"
                  className={`${fieldClass} pl-11`}
                />
              </div>
            </div>

            <div className="relative">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />
              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="Destination e.g. Kashmir, Manali, Bali"
                className={`${fieldClass} pl-11`}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
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

              <div className="relative">
                <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />
                <input
                  type="number"
                  min="1"
                  value={form.travellers}
                  onChange={(event) =>
                    updateField("travellers", event.target.value)
                  }
                  placeholder="Travellers"
                  className={`${fieldClass} pl-11`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_38px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              <MessageCircle className="h-4 w-4" />
              Continue on WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Maybe later
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
