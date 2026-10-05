"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  User,
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
  "w-full rounded-xl border border-[var(--border)] bg-[var(--background)]/68 px-3 py-2 text-[12px] text-[var(--text-primary)] outline-none backdrop-blur-md transition-all placeholder:text-[var(--text-secondary)]/65 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-soft)] sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm";

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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 p-2.5 backdrop-blur-[6px] sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[350px] overflow-hidden rounded-[22px] border border-white/25 bg-[var(--surface)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:max-w-[500px] sm:rounded-[30px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--primary)]/18 blur-3xl sm:h-52 sm:w-52" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-36 w-36 rounded-full bg-[var(--accent)]/12 blur-3xl sm:h-52 sm:w-52" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-2.5 top-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--text-primary)] backdrop-blur-md transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          aria-label="Close contact form"
        >
          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>

        <div className="relative max-h-[82vh] overflow-y-auto p-3.5 sm:max-h-[88vh] sm:p-7">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-2.5 py-1 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-[var(--primary)]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--primary)] sm:text-[10px]">
              Plan Your Trip
            </span>
          </div>

          <h2
            id="contact-popup-title"
            className="mt-2 pr-8 text-[21px] font-bold leading-[1.02] text-[var(--text-primary)] sm:mt-4 sm:pr-12 sm:text-4xl"
          >
            Where would you like to
            <span className="hero-gradient-text block">
              travel next?
            </span>
          </h2>

          <p className="mt-1.5 max-w-md text-[11px] leading-4.5 text-[var(--text-secondary)] sm:mt-3 sm:text-sm sm:leading-6">
            Share a few details and continue directly with our team on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-3 space-y-2 sm:mt-6 sm:space-y-3">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--primary)] sm:left-4 sm:h-4 sm:w-4" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  placeholder="Your name"
                  className={`${fieldClass} pl-8 sm:pl-11`}
                />
              </div>

              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--primary)] sm:left-4 sm:h-4 sm:w-4" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  placeholder="Phone / WhatsApp"
                  className={`${fieldClass} pl-8 sm:pl-11`}
                />
              </div>
            </div>

            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--primary)] sm:left-4 sm:h-4 sm:w-4" />
              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="Destination e.g. Kashmir, Manali"
                className={`${fieldClass} pl-8 sm:pl-11`}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--primary)] sm:left-4 sm:h-4 sm:w-4" />
                <input
                  type="date"
                  value={form.travelDate}
                  onChange={(event) =>
                    updateField("travelDate", event.target.value)
                  }
                  className={`${fieldClass} pl-8 sm:pl-11`}
                />
              </div>

              <div className="relative">
                <Users className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--primary)] sm:left-4 sm:h-4 sm:w-4" />
                <input
                  type="number"
                  min="1"
                  value={form.travellers}
                  onChange={(event) =>
                    updateField("travellers", event.target.value)
                  }
                  placeholder="Travellers"
                  className={`${fieldClass} pl-8 sm:pl-11`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-0.5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-[12px] font-bold text-white shadow-[0_12px_26px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] sm:mt-2 sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Continue on WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-0 text-[10px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] sm:py-1 sm:text-xs"
            >
              Maybe later
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
