"use client";

import { motion } from "framer-motion";

const festivals = [
  {
    name: "Mata Ka Jagran",
    date: "Every Saptami of Navratri",
    icon: "🪔",
    description:
      "A grand devotional night dedicated to Maa Mansa Devi, featuring bhajans, kirtans and prayers.",
  },
  {
    name: "Navratri Mahotsav",
    date: "Chaitra & Sharad Navratri",
    icon: "🌺",
    description:
      "Nine days of devotion, special poojas, bhajans and celebrations.",
  },
  {
    name: "Sharad Purnima",
    date: "October",
    icon: "🌕",
    description:
      "Special evening prayers and devotional gathering.",
  },
  {
    name: "Annual Bhandara",
    date: "To Be Announced",
    icon: "🍛",
    description:
      "Community feast organized by the temple committee.",
  },
];

export default function UpcomingFestivals() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Upcoming Festivals</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-orange-200 bg-orange-50 p-6 shadow-lg"
            >
              <div className="text-5xl">{festival.icon}</div>

              <h3 className="mt-4 text-2xl font-bold">
                {festival.name}
              </h3>

              <p className="mt-2 font-semibold text-orange-700">
                {festival.date}
              </p>

              <p className="mt-4 text-gray-600">
                {festival.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}