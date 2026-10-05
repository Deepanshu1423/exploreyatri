"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  MapPin,
  MessageCircle,
  Mountain,
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

const inputBase =
  "h-12 w-full rounded-2xl border border-black/[0.04] bg-white/80 px-4 text-[13px] text-[#252525] shadow-[0_5px_18px_rgba(41,24,14,0.04)] outline-none backdrop-blur-xl transition placeholder:text-[#777] focus:border-[#f47721]/35 focus:ring-4 focus:ring-[#f47721]/10 sm:h-[54px] sm:text-sm";

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
      `Phone / WhatsApp: ${form.phone}`,
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-3 backdrop-blur-[5px] sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-[#fffaf4]/94 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:max-w-[560px] sm:rounded-[34px]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* subtle warm decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#f8cfa8]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[#f47721]/10 blur-3xl" />

        {/* decorative mountains */}
        <div className="pointer-events-none absolute right-12 top-[92px] hidden text-[#9c836f]/20 sm:block">
          <Mountain className="h-20 w-20 stroke-[1.2]" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close contact form"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#3f3f3f] shadow-sm backdrop-blur-md transition hover:bg-white sm:h-10 sm:w-10"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative max-h-[88vh] overflow-y-auto px-5 pb-5 pt-5 sm:px-8 sm:pb-7 sm:pt-7">
          {/* label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f47721]/10 bg-white/75 px-3.5 py-2 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#f47721]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#dc651d] sm:text-[10px]">
              Plan Your Trip
            </span>
          </div>

          {/* heading */}
          <h2
            id="contact-popup-title"
            className="mt-4 max-w-[470px] pr-8 text-[27px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111] sm:mt-5 sm:text-[42px]"
          >
            Where will your next
            <span className="block">
              <span className="text-[#f47721]">journey</span> take you?
            </span>
          </h2>

          <p className="mt-3 max-w-[460px] text-[12px] leading-5 text-[#686868] sm:text-[15px] sm:leading-6">
            Tell us a few details and our travel experts will help you plan the
            perfect trip.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5"
          >
            {/* name */}
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />

              <input
                type="text"
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                placeholder="Your Name"
                className={`${inputBase} pl-11`}
              />
            </div>

            {/* phone */}
            <div className="relative">
              <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />

              <input
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                placeholder="Phone / WhatsApp"
                className={`${inputBase} pl-11`}
              />
            </div>

            {/* destination */}
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />

              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="Destination e.g. Kashmir, Manali"
                className={`${inputBase} pl-11`}
              />
            </div>

            {/* date + travellers */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-w-0">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />

                <input
                  type="date"
                  value={form.travelDate}
                  onChange={(event) =>
                    updateField("travelDate", event.target.value)
                  }
                  aria-label="Travel Date"
                  className={`${inputBase} min-w-0 pl-11 pr-2 text-[11px] sm:text-sm`}
                />
              </div>

              <div className="relative min-w-0">
                <Users className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]" />

                <select
                  value={form.travellers}
                  onChange={(event) =>
                    updateField("travellers", event.target.value)
                  }
                  aria-label="Travellers"
                  className={`${inputBase} appearance-none pl-11 pr-10`}
                >
                  <option value="">Travellers</option>
                  <option value="1">1 Traveller</option>
                  <option value="2">2 Travellers</option>
                  <option value="3">3 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="5">5 Travellers</option>
                  <option value="6+">6+ Travellers</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="group mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#f47721,#ff8614)] px-5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(244,119,33,0.27)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(244,119,33,0.34)] sm:h-14 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Plan My Trip on WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* later */}
            <div className="pt-1 text-center">
              <p className="text-[10px] text-[#a0a0a0] sm:text-xs">
                Prefer to browse first?
              </p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-0.5 text-[12px] font-medium text-[#575757] transition-colors hover:text-[#f47721] sm:text-sm"
              >
                Maybe later
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
