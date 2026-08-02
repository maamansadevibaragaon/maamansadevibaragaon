"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Festivals", href: "/festivals" },
  { name: "Daily Aarti", href: "/aarti" },
  { name: "Contact", href: "/contact" },
];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}

        <Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-3 shrink-0"
>
  <Image
  src="/images/logo.png"
  alt="Temple Logo"
  width={48}
  height={48}
  priority
  className="h-10 w-10 rounded-full border-2 border-yellow-400 sm:h-12 sm:w-12"
/>

  <div className="leading-tight">
    <h1 className="text-xs font-bold text-yellow-300 sm:text-lg">
      Maa Mansa Devi Mandir
    </h1>

    <p className="hidden text-xs text-white sm:block">
      Ravan Urf Bara Gaon, Baghpat
    </p>
  </div>
</Link>

        {/* Navigation */}

        {/* Desktop Navigation */}

<nav className="hidden items-center gap-7 md:flex">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`transition hover:text-yellow-300 ${
        pathname === item.href
          ? "font-semibold text-yellow-300"
          : "text-white"
      }`}
    >
      {item.name}
    </Link>
  ))}

  <Link
  href="/donate"
  className={`rounded-full px-5 py-2 font-semibold text-white transition ${
    pathname === "/donate"
      ? "bg-orange-700"
      : "bg-orange-600 hover:bg-orange-700"
  }`}
>
  ❤️ Donate
</Link>
</nav>

{/* Mobile Menu Button */}

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-lg p-2 text-white md:hidden"
  aria-label="Toggle menu"
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

      </div>
      {menuOpen && (
  <div className="border-t border-white/10 bg-black/95 shadow-2xl transition-all duration-300 md:hidden">
    <nav className="flex flex-col px-6 py-4">

      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`rounded-lg px-4 py-3 text-lg transition ${
            pathname === item.href
              ? "bg-orange-600 font-semibold text-white"
              : "text-white hover:bg-white/10"
          }`}
        >
          {item.name}
        </Link>
      ))}

      <Link
  href="/donate"
  onClick={() => setMenuOpen(false)}
  className={`mt-4 rounded-full px-5 py-3 text-center font-semibold text-white transition ${
    pathname === "/donate"
      ? "bg-orange-700"
      : "bg-orange-600 hover:bg-orange-700"
  }`}
>
  ❤️ Donate Online
</Link>

    </nav>
  </div>
)}
    </header>
  );
}