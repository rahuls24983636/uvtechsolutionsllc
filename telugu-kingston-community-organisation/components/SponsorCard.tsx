"use client";

import { motion } from "framer-motion";

export function SponsorCard({
  name,
  tier,
  initials,
}: {
  name: string;
  tier: string;
  initials: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="rounded-[1.5rem] border border-maroon/10 bg-white/68 p-5 shadow-lg shadow-maroon/10"
    >
      <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-maroon to-terracotta font-display text-2xl font-bold text-cream shadow-lg shadow-maroon/20">
        {initials}
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-maroon">{name}</h3>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">{tier}</p>
    </motion.article>
  );
}
