"use client";

import type { CommunityEvent } from "@/types/event";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

const statusClasses = {
  Open: "bg-leaf text-cream",
  "Coming Soon": "bg-turmeric text-maroon",
  "Sold Out": "bg-maroon text-cream",
};

export function EventCard({
  event,
  onRegister,
}: {
  event: CommunityEvent;
  onRegister: (slug: string) => void;
}) {
  const disabled = event.status !== "Open";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group overflow-hidden rounded-[1.75rem] border border-maroon/10 bg-white/68 shadow-xl shadow-maroon/10 backdrop-blur"
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${event.accent} p-5`}>
        <Image
          src={event.image}
          alt={`${event.title} artwork`}
          width={900}
          height={600}
          className="h-48 w-full rounded-[1.25rem] object-cover shadow-lg shadow-maroon/20 transition duration-500 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute right-7 top-7 rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${statusClasses[event.status]}`}
        >
          {event.status}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-3xl font-bold leading-tight text-maroon">{event.title}</h3>
        <div className="mt-4 space-y-3 text-sm font-semibold text-clay">
          <p className="flex gap-2">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-terracotta" />
            {event.dateTime}
          </p>
          <p className="flex gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-terracotta" />
            {event.venue}
          </p>
        </div>
        <p className="mt-4 text-sm leading-6 text-clay/82">{event.description}</p>
        <button
          type="button"
          suppressHydrationWarning
          disabled={disabled}
          onClick={() => onRegister(event.slug)}
          className="focus-ring mt-6 w-full rounded-full bg-maroon px-5 py-3 font-bold text-cream shadow-lg shadow-maroon/15 transition hover:-translate-y-0.5 hover:bg-clay disabled:cursor-not-allowed disabled:bg-clay/35 disabled:text-cream/70 disabled:shadow-none"
        >
          {disabled ? event.status : "Register"}
        </button>
      </div>
    </motion.article>
  );
}
