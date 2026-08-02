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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl">
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
            className="h-11 w-11 rounded-full border-2 border-yellow-400 shadow-lg sm:h-12 sm:w-12"
          />

          <div className="leading-tight">
            <h1 className="text-sm font-bold text-yellow-300 sm:text-lg">
              Maa Mansa Devi Mandir
            </h1>

            <p className="hidden text-xs text-gray-200 sm:block">
              Bara Gaon, Baghpat (U.P.)
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium transition-all duration-300 hover:scale-105 hover:text-yellow-300 ${
                pathname === item.href
                  ? "text-yellow-300"
                  : "text-white"
              }`}
            >
              {item.name}

              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-yellow-400"></span>
              )}
            </Link>
          ))}

          <Link
            href="/donate"
            className={`rounded-full px-6 py-2.5 font-semibold text-white transition-all duration-300 shadow-lg hover:scale-105 ${
              pathname === "/donate"
                ? "bg-gradient-to-r from-orange-600 to-red-700"
                : "bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-orange-500/40"
            }`}
          >
            ❤️ Donate
          </Link>
        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-5">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-lg font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className={`mt-5 rounded-full px-5 py-3 text-center font-semibold text-white transition-all duration-300 ${
                pathname === "/donate"
                  ? "bg-gradient-to-r from-orange-600 to-red-700"
                  : "bg-gradient-to-r from-orange-500 to-red-600"
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