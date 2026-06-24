"use client";

import { galleryItems, instagramProfileUrl } from "@/data/gallery";
import { motion } from "framer-motion";
import { InstagramGlyph } from "@/components/InstagramGlyph";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function GalleryGrid({ compact = false }: { compact?: boolean }) {
  const items = galleryItems;
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: "left" | "right") {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === "right" ? scroller.clientWidth * 0.82 : scroller.clientWidth * -0.82,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!compact) return;

    const interval = window.setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const nearEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 24;
      if (nearEnd) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      scroller.scrollBy({ left: scroller.clientWidth * 0.36, behavior: "smooth" });
    }, 2600);

    return () => window.clearInterval(interval);
  }, [compact]);

  return (
    <section id="gallery" className={compact ? "py-16 sm:py-20" : "py-16 sm:py-24"}>
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-terracotta">
              Instagram Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-maroon sm:text-6xl">
              Moments from Telugu Association Kingston.
            </h2>
            <p className="mt-4 text-lg leading-8 text-clay">
              Use approved photos from
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="mx-1 font-bold text-maroon underline decoration-turmeric decoration-2 underline-offset-4"
              >
                @telugu_association_kingston
              </a>
              by saving them locally in
              <code className="mx-1 rounded bg-white/70 px-2 py-1 text-sm">
                public/assets/gallery
              </code>
              or connecting an approved Instagram API.
            </p>
          </div>
          {compact ? (
            <Link
              href="/gallery"
              className="focus-ring rounded-full bg-maroon px-6 py-4 text-center font-bold text-cream shadow-lg shadow-maroon/20 transition hover:-translate-y-0.5 hover:bg-clay"
            >
              View Full Gallery
            </Link>
          ) : null}
        </div>

        {compact ? (
          <div className="relative">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scrollGallery("left")}
              className="focus-ring absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream/92 text-maroon shadow-lg shadow-maroon/15 ring-1 ring-maroon/10 transition hover:-translate-x-0.5 hover:bg-white"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft className="size-6" />
            </button>
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth rounded-[2rem] pb-5 pl-14 pr-14 [scrollbar-color:#b99047_transparent] [scrollbar-width:thin]"
            >
              {items.map((item) => (
                <GalleryPhotoCard key={`${item.image}-compact`} item={item} compact />
              ))}
            </div>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scrollGallery("right")}
              className="focus-ring absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream/92 text-maroon shadow-lg shadow-maroon/15 ring-1 ring-maroon/10 transition hover:translate-x-0.5 hover:bg-white"
              aria-label="Scroll gallery right"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={`${item.image}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.025, 0.25), duration: 0.48, ease: "easeOut" }}
              >
                <GalleryPhotoCard item={item} />
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-[1.5rem] border border-maroon/10 bg-white/60 p-5 text-clay">
          {/* Place the official Instagram logo asset in /public/assets/logos and update this link when available. */}
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-bold text-maroon transition hover:text-terracotta"
          >
            <InstagramGlyph className="mr-2 size-5" />
            Open @telugu_association_kingston on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryPhotoCard({
  item,
  compact = false,
}: {
  item: (typeof galleryItems)[number];
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "group relative min-w-[78%] snap-center overflow-hidden rounded-[1.75rem] border border-maroon/10 bg-white/50 p-2.5 shadow-lg shadow-maroon/5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/70 sm:min-w-[46%] lg:min-w-[32%] xl:min-w-[27%]"
          : "group relative overflow-hidden rounded-[2rem] border border-maroon/10 bg-white/52 p-2.5 shadow-lg shadow-maroon/5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/70"
      }
    >
      <div className={compact ? "relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-sandalwood" : "relative aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-sandalwood"}>
        <Image
          src={item.image}
          alt={`${item.title} from Telugu Association Kingston gallery`}
          fill
          sizes={compact ? "(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 32vw" : "(max-width: 640px) 100vw, 33vw"}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className={compact ? "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-maroon/25 to-transparent p-3 pt-14 text-cream" : "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-maroon/30 to-transparent p-5 pt-20 text-cream"}>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-turmeric">
            {item.category}
          </p>
          <p className={compact ? "mt-1 font-display text-2xl font-bold drop-shadow-sm" : "mt-1 font-display text-2xl font-bold drop-shadow-sm"}>{item.title}</p>
        </div>
      </div>
    </div>
  );
}
