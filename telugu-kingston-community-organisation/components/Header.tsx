"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { InstagramGlyph } from "@/components/InstagramGlyph";
import { instagramProfileUrl } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Register", href: "/#register" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/82 backdrop-blur-xl"
    >
      <div className="top-cultural-banner border-b border-gold/20">
        <div className="container-shell flex min-h-[74px] items-center justify-center gap-3 py-2 text-center sm:gap-4">
          <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-cream shadow-md ring-2 ring-gold/35 sm:size-14">
            <Image
              src="/assets/logos/telugu-association-kingston-logo.png"
              alt="Telugu Association Kingston logo"
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="inline-block rounded-sm bg-maroon px-2.5 py-1 font-display text-2xl font-bold leading-none text-cream shadow-sm sm:px-3 sm:text-4xl">
              Telugu Association Kingston
            </p>
            <p className="mt-1 font-telugu text-sm font-bold leading-none text-turmeric drop-shadow-sm sm:text-lg">
              తెలుగు సంస్కృతి - మన సమాజం
            </p>
          </div>
        </div>
      </div>
      <div className="container-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <Link className="group flex items-center gap-3" href="/#top" aria-label="Telugu Association Kingston home">
          <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-cream shadow-cultural ring-4 ring-turmeric/25">
            <Image
              src="/assets/logos/telugu-association-kingston-logo.png"
              alt="Telugu Association Kingston logo"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-tight text-maroon sm:text-2xl">
              Telugu Association
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-clay/75">Kingston</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 rounded-full border border-maroon/10 bg-white/45 px-5 py-3 text-sm font-bold text-clay shadow-sm lg:flex">
          {links.map((link) => (
            <Link key={link.href} className="transition hover:text-maroon" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden rounded-full border border-maroon/10 bg-white/60 px-4 py-3 text-sm font-bold text-maroon transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            <InstagramGlyph className="mr-2 size-4" />
            Instagram
          </a>
          <Link
            href="/#register"
            className="focus-ring rounded-full bg-maroon px-4 py-3 text-sm font-bold text-cream shadow-lg shadow-maroon/20 transition hover:-translate-y-0.5 hover:bg-clay"
          >
            Register
          </Link>
          <button
            type="button"
            suppressHydrationWarning
            className="focus-ring rounded-full border border-maroon/10 bg-white/60 p-3 text-maroon lg:hidden"
            aria-label="Menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
