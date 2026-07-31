"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-yellow-300">
              Maa Mansa Devi
            </h1>
            <p className="text-xs text-white">
              Bara Gaon
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-white md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}