import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import TempleAudio from "../components/layout/TempleAudio";
import FlowerShower from "../components/layout/FlowerShower";
import FloatingButtons from "../components/layout/FloatingButtons";
import TempleSchema from "../components/seo/TempleSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "DI7Dor1VUjgPpJywIuZE7_RmbrInyEFh8nMDeZ1UtLU",
  },

  metadataBase: new URL("https://maamansadevibaragaon.vercel.app"),

  title: {
    default: "Maa Mansa Devi Mandir | Ravan Urf Bara Gaon | Baghpat",
    template: "%s | Maa Mansa Devi Mandir",
  },

  description:
    "Official website of Maa Mansa Devi Mandir, Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh. Get temple history, darshan timings, daily aarti schedule, festivals, gallery, donations, and contact information.",

  keywords: [
    "Maa Mansa Devi Mandir",
    "Mansa Devi Mandir Bara Gaon",
    "Maa Mansa Devi Baghpat",
    "Mansa Devi Temple Uttar Pradesh",
    "Ravan Urf Bara Gaon Temple",
    "Baghpat Temple",
    "Hindu Temple Baghpat",
    "Temple Donation",
    "Daily Aarti",
    "Navratri Bara Gaon",

    "माँ मनसा देवी मंदिर",
    "माँ मनसा देवी मंदिर बड़ागांव",
    "मनसा देवी मंदिर बागपत",
    "बड़ागांव मंदिर",
    "बागपत मंदिर",
    "माँ मनसा देवी",
    "नवरात्रि बड़ागांव",
    "माता का जागरण",
    "दैनिक आरती",
    "मंदिर दान",
  ],

  authors: [
    {
      name: "Maa Mansa Devi Mandir",
    },
  ],

  creator: "Maa Mansa Devi Mandir",

  publisher: "Maa Mansa Devi Mandir",

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      hi: "/",
    },
  },

  openGraph: {
    title: "Maa Mansa Devi Mandir | Ravan Urf Bara Gaon | Baghpat",

    description:
      "Official website of Maa Mansa Devi Mandir, Bara Gaon, Baghpat, Uttar Pradesh.",

    siteName: "Maa Mansa Devi Mandir",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Maa Mansa Devi Mandir",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Maa Mansa Devi Mandir",

    description:
      "Official website of Maa Mansa Devi Mandir, Bara Gaon, Baghpat.",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Temple Audio (Bell → Shlok) */}
        <TempleAudio />

        {/* SEO Schema */}
        <TempleSchema />

        {/* Flower Animation */}
        <FlowerShower />

        {/* Website Content */}
        {children}

        {/* Floating Action Buttons */}
        <FloatingButtons />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-CY712Z7G4F" />
      </body>
    </html>
  );
}