"use client";

import type { CommunityEvent, Registration } from "@/types/event";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  adults: "1",
  kids: "0",
  eventSlug: "",
  foodPreference: "Vegetarian",
  notes: "",
};

export function RegistrationForm({
  events,
  selectedEventSlug,
}: {
  events: CommunityEvent[];
  selectedEventSlug: string;
}) {
  const [form, setForm] = useState({ ...initialForm, eventSlug: selectedEventSlug });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Registration | null>(null);

  const openEvents = useMemo(() => events.filter((event) => event.status === "Open"), [events]);

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!/^[0-9+()\-\s]{7,}$/.test(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (Number(form.adults) < 1) nextErrors.adults = "At least one adult is required.";
    if (Number(form.kids) < 0) nextErrors.kids = "Kids cannot be negative.";
    if (!form.eventSlug) nextErrors.eventSlug = "Select an event.";
    return nextErrors;
  }

  function submitRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const registration: Registration = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      adults: Number(form.adults),
      kids: Number(form.kids),
      eventSlug: form.eventSlug,
      foodPreference: form.foodPreference,
      notes: form.notes.trim(),
    };

    const stored = JSON.parse(localStorage.getItem("teluguKingstonRegistrations") || "[]");
    localStorage.setItem("teluguKingstonRegistrations", JSON.stringify([...stored, registration]));
    setSubmitted(registration);
    setForm({ ...initialForm, eventSlug: form.eventSlug });
  }

  const selectedEvent = events.find((event) => event.slug === (submitted?.eventSlug || form.eventSlug));

  return (
    <section id="register" className="py-16 sm:py-24">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rangoli-border rounded-[2rem] bg-maroon p-7 text-cream shadow-cultural sm:p-9"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-turmeric">Event Registration</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Reserve your place for the next celebration.
          </h2>
          <p className="mt-5 leading-7 text-cream/78">
            Registrations are stored locally for now as mock data. The form is structured so payment
            providers, tickets, QR codes, and backend database storage can be added later.
          </p>
          {selectedEvent ? (
            <div className="mt-8 rounded-3xl border border-turmeric/25 bg-cream/10 p-5">
              <p className="text-sm font-bold text-turmeric">Selected Event</p>
              <p className="mt-2 font-display text-3xl font-bold">{selectedEvent.title}</p>
              <p className="mt-2 text-sm text-cream/75">{selectedEvent.dateTime}</p>
            </div>
          ) : null}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          onSubmit={submitRegistration}
          className="rounded-[2rem] border border-maroon/10 bg-white/72 p-5 shadow-cultural backdrop-blur sm:p-8"
        >
          {submitted ? (
            <div className="mb-6 rounded-3xl border border-leaf/20 bg-leaf/10 p-5 text-leaf">
              <CheckCircle2 className="mb-3 size-8" />
              <p className="font-bold">Registration received for {selectedEvent?.title}.</p>
              <p className="mt-1 text-sm text-clay">
                A confirmation workflow can be connected when email and payment integrations are added.
              </p>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" error={errors.fullName}>
              <input
                className="field"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className="field"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                className="field"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+1 555 000 0000"
              />
            </Field>
            <Field label="Event Selection" error={errors.eventSlug}>
              <select
                className="field"
                value={form.eventSlug}
                onChange={(event) => updateField("eventSlug", event.target.value)}
              >
                <option value="">Choose an open event</option>
                {openEvents.map((event) => (
                  <option key={event.slug} value={event.slug}>
                    {event.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Number of Adults" error={errors.adults}>
              <input
                className="field"
                min="1"
                type="number"
                value={form.adults}
                onChange={(event) => updateField("adults", event.target.value)}
              />
            </Field>
            <Field label="Number of Kids" error={errors.kids}>
              <input
                className="field"
                min="0"
                type="number"
                value={form.kids}
                onChange={(event) => updateField("kids", event.target.value)}
              />
            </Field>
            <Field label="Food Preference">
              <select
                className="field"
                value={form.foodPreference}
                onChange={(event) => updateField("foodPreference", event.target.value)}
              >
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Jain</option>
                <option>No preference</option>
              </select>
            </Field>
            <Field label="Special Notes">
              <textarea
                className="field min-h-28 resize-y"
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Accessibility, allergies, group seating..."
              />
            </Field>
          </div>
          <button
            type="submit"
            suppressHydrationWarning
            className="focus-ring mt-6 w-full rounded-full bg-maroon px-6 py-4 font-bold text-cream shadow-lg shadow-maroon/20 transition hover:-translate-y-0.5 hover:bg-clay"
          >
            Submit Registration
          </button>
          <style jsx>{`
            .field {
              width: 100%;
              border-radius: 1rem;
              border: 1px solid rgba(101, 31, 31, 0.14);
              background: rgba(255, 247, 232, 0.7);
              padding: 0.9rem 1rem;
              color: #251614;
              outline: none;
            }

            .field:focus {
              border-color: rgba(184, 95, 58, 0.65);
              box-shadow: 0 0 0 4px rgba(244, 182, 63, 0.22);
            }
          `}</style>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-bold text-clay">
      <span className="mb-2 block">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-maroon">{error}</span> : null}
    </label>
  );
}
