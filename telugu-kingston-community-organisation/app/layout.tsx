import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["500", "700"],
  variable: "--font-telugu",
});

export const metadata: Metadata = {
  title: {
    default: "Telugu Association Kingston",
    template: "%s | Telugu Association Kingston",
  },
  description:
    "A premium Telugu cultural website for events, community programs, sponsors, gallery, and registrations in Kingston.",
  keywords: [
    "Telugu Association Kingston",
    "Telugu events Kingston",
    "Bathukamma Kingston",
    "Ugadi Kingston",
    "Telugu culture",
    "Telugu community",
  ],
  openGraph: {
    title: "Telugu Association Kingston",
    description: "Celebrating Telugu Culture, Community & Traditions.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${notoTelugu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
