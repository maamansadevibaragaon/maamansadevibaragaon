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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

  <Image
    src="/images/logo.png"
    alt="Temple Logo"
    width={48}
    height={48}
    className="rounded-full border-2 border-yellow-400"
  />

  <div className="leading-tight">

    <h1 className="text-sm font-bold text-yellow-300 sm:text-lg">
      Maa Mansa Devi Mandir
    </h1>

    <p className="hidden text-xs tracking-wide text-white sm:block">
      Ravan Urf Bara Gaon, Baghpat
    </p>

  </div>

</Link>

        {/* Navigation */}

        {/* Desktop Navigation */}

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

</nav>

{/* Mobile Menu Button */}

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-white md:hidden"
  aria-label="Toggle menu"
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>

      </div>
    </header>
  );
}