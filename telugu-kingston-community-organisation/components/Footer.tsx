import { InstagramGlyph } from "@/components/InstagramGlyph";
import { instagramProfileUrl } from "@/data/gallery";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-maroon/10 bg-maroon text-cream">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-cream shadow-lg ring-4 ring-turmeric/25">
              <Image
                src="/assets/logos/telugu-association-kingston-logo.png"
                alt="Telugu Association Kingston logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">Telugu Association Kingston</p>
              <p className="text-sm text-cream/70">Celebrating Culture and Community</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-cream/70">
            Celebrating Telugu Culture, Community & Traditions with handloom craft, festival
            lights, and community service.
          </p>
        </div>

        <div>
          <p className="font-bold text-turmeric">Quick Links</p>
          <div className="mt-4 grid gap-2 text-sm text-cream/75">
            <Link href="/#about" className="hover:text-turmeric">About</Link>
            <Link href="/#events" className="hover:text-turmeric">Events</Link>
            <Link href="/#register" className="hover:text-turmeric">Register</Link>
            <Link href="/gallery" className="hover:text-turmeric">Gallery</Link>
          </div>
        </div>

        <div>
          <p className="font-bold text-turmeric">Connect</p>
          <div className="mt-4 grid gap-3 text-sm text-cream/75">
            <a className="flex items-center gap-2 hover:text-turmeric" href="mailto:hello@telugukingston.org">
              <Mail className="size-4" />
              hello@telugukingston.org
            </a>
            <a className="flex items-center gap-2 hover:text-turmeric" href="tel:+15550000000">
              <Phone className="size-4" />
              +1 (555) 000-0000
            </a>
            <a className="flex items-center gap-2 hover:text-turmeric" href={instagramProfileUrl} target="_blank" rel="noreferrer">
              <InstagramGlyph className="size-4" />
              @telugu_association_kingston
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/58">
        &copy; 2026 Telugu Association Kingston. All rights reserved. Designed by TechZone Team.
      </div>
    </footer>
  );
}
