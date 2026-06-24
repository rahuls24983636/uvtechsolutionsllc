"use client";

import { events } from "@/data/events";
import { instagramProfileUrl } from "@/data/gallery";
import { sponsors } from "@/data/sponsors";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SponsorCard } from "@/components/SponsorCard";
import { useState } from "react";

export function HomePage() {
  const [selectedEventSlug, setSelectedEventSlug] = useState(events.find((event) => event.status === "Open")?.slug || "");

  function registerForEvent(slug: string) {
    setSelectedEventSlug(slug);
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="about" className="py-16 sm:py-24">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-terracotta">About</p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-maroon sm:text-6xl">
                  A premium Telugu community home rooted in culture and tradition.
                </h2>
              </div>
              <p className="text-lg leading-8 text-clay">
                Telugu Association Kingston brings people together through Telugu culture,
                festivals, language, food, dance, music, and friendship. The mission is simple:
                preserve tradition, welcome every family, and create a joyful cultural space where
                generations can learn, celebrate, and belong.
              </p>
            </div>

          </div>
        </section>

        <section id="events" className="py-16 sm:py-24">
          <div className="container-shell">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-terracotta">
                  Upcoming Events
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-maroon sm:text-6xl">
                  Festival experiences with registration options.
                </h2>
              </div>
              <a
                href="#register"
                className="focus-ring rounded-full bg-turmeric px-6 py-4 text-center font-bold text-maroon shadow-lg shadow-gold/25 transition hover:-translate-y-0.5"
              >
                Register Now
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.slug} event={event} onRegister={registerForEvent} />
              ))}
            </div>
          </div>
        </section>

        <RegistrationForm key={selectedEventSlug} events={events} selectedEventSlug={selectedEventSlug} />
        <GalleryGrid compact />

        <section id="sponsors" className="py-16 sm:py-24">
          <div className="container-shell">
            <div className="rangoli-border rounded-[2rem] bg-cream/72 p-6 shadow-cultural sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-terracotta">
                    Sponsors and Partners
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-maroon sm:text-5xl">
                    Support culture, visibility, and community impact.
                  </h2>
                  <p className="mt-4 leading-7 text-clay">
                    Sponsor logos can be placed in <code className="rounded bg-white/70 px-2 py-1 text-sm">public/assets/logos</code>.
                  </p>
                  <a
                    href="#contact"
                    className="focus-ring mt-6 inline-flex rounded-full bg-maroon px-6 py-4 font-bold text-cream shadow-lg shadow-maroon/20 transition hover:-translate-y-0.5 hover:bg-clay"
                  >
                    Become a Sponsor
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {sponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.name} {...sponsor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <div className="container-shell">
            <div className="rounded-[2rem] bg-maroon p-7 text-cream shadow-cultural sm:p-9 lg:max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-turmeric">Contact</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Bring your family, ideas, and festival spirit.
              </h2>
              <div className="mt-7 grid gap-4 text-cream/78">
                <p>Email: <a className="font-bold text-turmeric" href="mailto:hello@telugukingston.org">hello@telugukingston.org</a></p>
                <p>Phone: <a className="font-bold text-turmeric" href="tel:+15550000000">+1 (555) 000-0000</a></p>
                <p>Instagram: <a className="font-bold text-turmeric" href={instagramProfileUrl} target="_blank" rel="noreferrer">@telugu_association_kingston</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
