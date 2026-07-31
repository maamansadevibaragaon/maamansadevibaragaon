import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

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