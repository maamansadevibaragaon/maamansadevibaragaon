"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={55}
            height={55}
            className="rounded-full border-2 border-yellow-400"
          />

          <div>

            <h1 className="text-lg font-bold text-yellow-300">
              Maa Mansa Devi
            </h1>

            <p className="text-xs tracking-widest text-white">
              Bara Gaon
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className={`transition duration-300 hover:text-yellow-300 ${
                pathname === item.href
                  ? "font-semibold text-yellow-300"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>

          ))}

          <Link
            href="/contact"
            className="rounded-full bg-orange-600 px-5 py-2 font-semibold text-white transition hover:bg-orange-700"
          >
            Donate
          </Link>

        </nav>

      </div>
    </header>
  );
}