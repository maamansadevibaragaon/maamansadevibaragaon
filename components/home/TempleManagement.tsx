import Image from "next/image";
import {
  priests,
  executives,
  committeeMembers,
} from "@/data/management";

export default function TempleManagement() {
  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Temple Administration
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Temple Management
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Dedicated individuals serving Maa Mansa Devi Mandir with devotion,
            sincerity and commitment to preserve the temple's spiritual heritage.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600"></div>

        </div>

        {/* Priests */}

        <div className="mt-20">

          <h3 className="mb-10 text-center text-3xl font-bold text-orange-700">
            👳 Temple Priests
          </h3>

          <div className="grid gap-10 md:grid-cols-2">

            {priests.map((person) => (

              <div
                key={person.id}
                className="rounded-3xl border border-orange-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >

                <Image
                  src={person.image}
                  alt={person.name}
                  width={190}
                  height={240}
                  className="mx-auto h-auto w-[190px] rounded-2xl object-cover shadow-lg"
                />

                <h4 className="mt-6 text-2xl font-bold text-orange-700">
                  {person.name}
                </h4>

                <p className="mt-2 text-lg font-medium text-gray-600">
                  {person.designation}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Executive Committee */}

        <div className="mt-24">

          <h3 className="mb-10 text-center text-3xl font-bold text-orange-700">
            👥 Executive Committee
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {executives.map((person) => (

              <div
                key={person.id}
                className="rounded-3xl border border-orange-200 bg-white p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >

                <Image
                  src={person.image}
                  alt={person.name}
                  width={150}
                  height={190}
                  className="mx-auto h-auto w-[150px] rounded-2xl object-cover shadow-md"
                />

                <h4 className="mt-5 text-xl font-bold text-orange-700">
                  {person.name}
                </h4>

                <p className="mt-2 font-medium text-gray-600">
                  {person.designation}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Committee Members */}

        <div className="mt-24 rounded-3xl bg-white p-10 shadow-xl">

          <h3 className="text-center text-3xl font-bold text-orange-700">
            🤝 Committee Members
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Our respected committee members work together to ensure smooth
            administration and successful organization of temple activities and
            festivals.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {committeeMembers.map((member, index) => (

              <div
                key={index}
                className="rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white px-5 py-4 font-semibold text-gray-700 shadow-sm transition hover:border-orange-300 hover:shadow-md"
              >
                🌸 {member}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}