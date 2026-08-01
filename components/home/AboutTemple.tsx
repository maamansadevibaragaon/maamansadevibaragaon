"use client";

import FadeInSection from "../shared/FadeInSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutTemple() {
  return (
    <FadeInSection>
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-700">
            Ancient Heritage
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
            The Sacred Legacy of
            <span className="block text-orange-600">
              Maa Mansa Devi Mandir
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-orange-600"></div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              A Temple of Faith & Ancient Tradition
            </h3>

            <p className="mt-6 leading-9 text-lg text-gray-700">
              According to the centuries-old tradition of
              <strong> Rawan urf Bada Gaon</strong>, Maa Mansa Devi Mandir is
              believed to have been established by
              <strong> Lankapati Ravana</strong>, revered in local tradition as
              a great devotee of Lord Shiva and a scholar of the Vedas.
            </p>

            <p className="mt-6 leading-9 text-lg text-gray-700">
              Local belief also holds that Ravana founded the village itself,
              which is why it is known as
              <strong> "Rawan urf Bada Gaon"</strong>. Even today, this unique
              tradition is reflected in the village's observance of Dussehra,
              where Ravana's effigy is traditionally not burned.
            </p>

            <p className="mt-6 leading-9 text-lg text-gray-700">
              For generations, devotees have visited this sacred temple seeking
              the blessings of Maa Mansa Devi for peace, prosperity, health and
              fulfillment of heartfelt prayers.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700"
              >
                Read Complete Temple History →
              </Link>
            </div>

            <p className="mt-5 text-sm italic text-gray-500">
              *The Ravana connection is presented as a long-standing local
              tradition preserved by the people of Rawan urf Bada Gaon.*
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg">
              <div className="text-5xl">🛕</div>
              <h3 className="mt-5 text-2xl font-bold">
                Sacred Temple
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                A revered place of worship where devotees gather with faith and
                devotion to seek Maa Mansa Devi's blessings.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg">
              <div className="text-5xl">📜</div>
              <h3 className="mt-5 text-2xl font-bold">
                Ancient Heritage
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                The temple is closely associated with the local tradition
                linking it to Lankapati Ravana and the origins of Rawan urf
                Bada Gaon.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg">
              <div className="text-5xl">🙏</div>
              <h3 className="mt-5 text-2xl font-bold">
                Divine Blessings
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                Devotees visit throughout the year to pray for happiness,
                prosperity, good health and spiritual peace.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}