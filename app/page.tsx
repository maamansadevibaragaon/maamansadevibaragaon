import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/temple-front.webp"
          alt="Maa Mansa Devi Mandir"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={120}
            height={120}
            className="rounded-full"
          />

          <h2 className="mt-6 text-2xl md:text-4xl font-semibold">
            ॐ जय माँ मनसा देवी ॐ
          </h2>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold">
            Maa Mansa Devi Mandir
          </h1>

          <p className="mt-4 text-xl">
            Bara Gaon, Uttar Pradesh
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-orange-600 px-6 py-3 font-bold hover:bg-orange-700">
              Plan Your Visit
            </button>

            <button className="rounded-full bg-white px-6 py-3 font-bold text-orange-700">
              Photo Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Divine Darshan */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 items-center">
          <Image
            src="/images/maa-mansa-devi.jpeg"
            alt="Maa Mansa Devi"
            width={500}
            height={700}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="mb-6 text-4xl font-bold text-orange-700">
              Divine Darshan
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Welcome to the official website of Maa Mansa Devi Mandir,
              Bara Gaon. May Maa Mansa Devi bless every devotee with
              happiness, prosperity, and good health.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}