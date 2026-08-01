import FloatingButtons from "../components/layout/FloatingButtons";
import TempleSchema from "../components/seo/TempleSchema";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
  default: "Maa Mansa Devi Mandir | Ravan Urf Bara Gaon | Baghpat",
  template: "%s | Maa Mansa Devi Mandir",
},
  description:
    "Official website of Maa Mansa Devi Mandir, Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh. Explore temple history, darshan timings, festivals, gallery, and contact information.",

  keywords: [
    "Maa Mansa Devi Mandir",
    "Mansa Devi Mandir Bara Gaon",
    "Maa Mansa Devi Baghpat",
    "Mansa Devi Temple Uttar Pradesh",
    "Ravan Urf Bara Gaon Temple",
    "Hindu Temple Baghpat",
    "Navratri Bara Gaon",
    "Mata Ka Jagran Bara Gaon",
  ],

  authors: [{ name: "Maa Mansa Devi Mandir" }],

  creator: "Maa Mansa Devi Mandir",

  publisher: "Maa Mansa Devi Mandir",

  openGraph: {
    title: "Maa Mansa Devi Mandir",
    description:
      "Official website of Maa Mansa Devi Mandir, Bara Gaon, Baghpat.",
    siteName: "Maa Mansa Devi Mandir",
    locale: "en_IN",
    type: "website",
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
  <TempleSchema />

  {children}

  <FloatingButtons />
</body>
    </html>
  );
}
