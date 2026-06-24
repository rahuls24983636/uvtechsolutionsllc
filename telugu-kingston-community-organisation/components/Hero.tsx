"use client";

import { galleryItems } from "@/data/gallery";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { InstagramGlyph } from "@/components/InstagramGlyph";
import { instagramProfileUrl } from "@/data/gallery";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroPhotos = galleryItems.slice(0, 10);
  const heroScrollerRef = useRef<HTMLDivElement>(null);

  function scrollHeroPhotos(direction: "left" | "right") {
    const scroller = heroScrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === "right" ? scroller.clientWidth * 0.78 : scroller.clientWidth * -0.78,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      const scroller = heroScrollerRef.current;
      if (!scroller) return;

      const nearEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 24;
      if (nearEnd) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      scroller.scrollBy({ left: scroller.clientWidth * 0.46, behavior: "smooth" });
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/55 px-4 py-2 text-sm font-bold text-maroon shadow-sm">
            <Sparkles className="size-4 text-gold" />
            Telugu culture inspired community
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-tight text-maroon sm:text-7xl lg:text-8xl">
            Telugu Association Kingston
          </h1>
          <p className="mt-5 font-telugu text-3xl font-bold text-terracotta sm:text-5xl">
            తెలుగు సంస్కృతి - మన బంధం
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-clay sm:text-xl">
            Celebrating Telugu Culture, Community & Traditions through festivals, language, food,
            dance, music, handloom heritage, and warm community bonding.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#events"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-maroon px-6 py-4 font-bold text-cream shadow-cultural transition hover:-translate-y-1 hover:bg-clay"
            >
              <CalendarDays className="mr-2 size-5" />
              View Upcoming Events
            </a>
            <a
              href="#register"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-turmeric px-6 py-4 font-bold text-maroon shadow-lg shadow-gold/25 transition hover:-translate-y-1 hover:bg-gold"
            >
              Register Now
            </a>
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-maroon/15 bg-white/65 px-6 py-4 font-bold text-maroon transition hover:-translate-y-1 hover:bg-white"
            >
              <InstagramGlyph className="mr-2 size-5" />
              Follow us on Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="rangoli-border ikat-panel relative overflow-hidden rounded-[2rem] border border-maroon/12 bg-white/55 p-4 shadow-cultural sm:p-6"
        >
          <div className="overflow-hidden rounded-[1.6rem] bg-cream/70 p-3 shadow-2xl shadow-maroon/10">
            <div className="mb-4 flex items-center justify-between gap-4 px-2">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-terracotta">
                  Community Moments
                </p>
                <h2 className="mt-1 font-display text-3xl font-bold text-maroon sm:text-4xl">
                  Celebrations in motion
                </h2>
              </div>
              <span className="relative hidden size-16 shrink-0 overflow-hidden rounded-full bg-cream shadow-lg ring-4 ring-turmeric/25 sm:block">
                <Image
                  src="/assets/logos/telugu-association-kingston-logo.png"
                  alt="Telugu Association Kingston logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </span>
            </div>
            <div className="relative">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => scrollHeroPhotos("left")}
                className="focus-ring absolute left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-cream/92 text-maroon shadow-lg shadow-maroon/15 ring-1 ring-maroon/10 transition hover:-translate-x-0.5 hover:bg-white"
                aria-label="Scroll hero photos left"
              >
                <ChevronLeft className="size-6" />
              </button>
              <div
                ref={heroScrollerRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-[1.25rem] pb-3 pl-12 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {heroPhotos.map((item, index) => (
                  <div
                    key={`${item.image}-hero-${index}`}
                    className="relative h-72 min-w-[82%] snap-center overflow-hidden rounded-[1.25rem] bg-sandalwood shadow-lg shadow-maroon/10 sm:h-80 sm:min-w-[68%]"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} from Telugu Association Kingston`}
                      fill
                      sizes="(max-width: 640px) 86vw, 36vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 to-transparent p-5 text-cream">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-turmeric">
                        {item.category}
                      </p>
                      <p className="font-display text-2xl font-bold">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => scrollHeroPhotos("right")}
                className="focus-ring absolute right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-cream/92 text-maroon shadow-lg shadow-maroon/15 ring-1 ring-maroon/10 transition hover:translate-x-0.5 hover:bg-white"
                aria-label="Scroll hero photos right"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
