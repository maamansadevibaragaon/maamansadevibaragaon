import Image from "next/image";

export default function DivineDarshan() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl grid gap-12 px-6 md:grid-cols-2 items-center">

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/maa-mansa-devi.jpeg"
            alt="Maa Mansa Devi"
            width={600}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            Divine Blessings
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Maa Mansa Devi
          </h2>

          <div className="mt-6 h-1 w-24 rounded bg-orange-600"></div>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            Welcome to the sacred abode of Maa Mansa Devi, Bara Gaon.
            Devotees from across the region visit this temple seeking
            blessings for peace, prosperity, happiness, and fulfillment
            of their heartfelt wishes.
          </p>

          <blockquote className="mt-8 border-l-4 border-orange-500 pl-6 italic text-orange-700 text-xl">
            "श्रद्धा और विश्वास से माँ मनसा देवी सभी भक्तों की मनोकामनाएँ पूर्ण करती हैं।"
          </blockquote>
        </div>

      </div>
    </section>
  );
}