import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery for Telugu Association Kingston events, ready for approved Instagram photos and local community photography.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-14 sm:py-20">
          <div className="container-shell rounded-[2rem] bg-maroon p-7 text-cream shadow-cultural sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-turmeric">
              Full Gallery
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-tight sm:text-7xl">
              Telugu Association Kingston memories.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/78">
              This page is prepared for real Instagram/community photos saved locally or loaded
              through an approved API integration.
            </p>
          </div>
        </section>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
