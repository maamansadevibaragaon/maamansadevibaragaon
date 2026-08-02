"use client";

import { motion } from "framer-motion";

const festivals = [
  {
    name: "Mata Ka Jagran",
    hindi: "माता का जागरण",
    date: "Every Saptami of Navratri",
    icon: "🪔",
    description:
      "A grand devotional night dedicated to Maa Mansa Devi with bhajans, kirtans and divine prayers.",
  },
  {
    name: "Navratri Mahotsav",
    hindi: "नवरात्रि महोत्सव",
    date: "Chaitra & Sharad Navratri",
    icon: "🌺",
    description:
      "Nine sacred days of worship, special pujas, devotional songs and celebrations.",
  },
  {
    name: "Sharad Purnima",
    hindi: "शरद पूर्णिमा",
    date: "October",
    icon: "🌕",
    description:
      "Special evening aarti, devotional gathering and blessings of Maa Mansa Devi.",
  },
  {
    name: "Annual Bhandara",
    hindi: "वार्षिक भंडारा",
    date: "Every Ashtami of Navratri",
    icon: "🍛",
    description:
      "A community feast organized by the temple committee where every devotee is warmly welcomed.",
  },
];

export default function UpcomingFestivals() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Temple Celebrations
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Upcoming Festivals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Celebrate the divine festivals of Maa Mansa Devi with devotion,
            prayers and community togetherness.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600"></div>
        </div>

        {/* Festival Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group rounded-3xl border border-orange-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
            >
              {/* Icon */}

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-50 text-5xl shadow-md transition duration-300 group-hover:scale-110">
                {festival.icon}
              </div>

              {/* English */}

              <h3 className="mt-6 text-center text-2xl font-bold text-orange-800">
                {festival.name}
              </h3>

              {/* Hindi */}

              <p className="mt-2 text-center font-medium text-gray-600">
                {festival.hindi}
              </p>

              {/* Date */}

              <div className="mt-5 rounded-xl bg-orange-50 py-3 text-center">
                <p className="font-bold text-orange-700">
                  📅 {festival.date}
                </p>
              </div>

              {/* Description */}

              <p className="mt-6 text-center leading-7 text-gray-700">
                {festival.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border-l-4 border-orange-600 bg-white p-6 text-center shadow-md">
          <p className="text-gray-700">
            <span className="font-semibold text-orange-700">
              भक्तों से निवेदन:
            </span>{" "}
            Festival dates and celebrations may vary according to the Hindu
            Panchang. Please refer to the latest temple announcements before
            visiting.
          </p>
        </div>
      </div>
    </section>
  );
}