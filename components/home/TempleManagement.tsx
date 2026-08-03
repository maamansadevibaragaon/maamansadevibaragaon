import Image from "next/image";
import { priests, committeeMembers } from "@/data/management";

export default function TempleManagement() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-orange-700">
            🛕 Temple Management
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Dedicated individuals serving Maa Mansa Devi Mandir and the
            devotees with devotion and commitment.
          </p>
        </div>

        {/* Temple Priests */}

        <h3 className="mb-10 text-center text-3xl font-bold text-orange-700">
          👳 Temple Priests
        </h3>

        <div className="grid gap-10 sm:grid-cols-2">

          {priests.map((person) => (

            <div
              key={person.id}
              className="rounded-3xl bg-white p-8 text-center shadow-xl"
            >

              <Image
                src={person.image}
                alt={person.name}
                width={170}
                height={220}
                className="mx-auto rounded-2xl object-cover shadow-lg"
              />

              <h4 className="mt-6 text-2xl font-bold text-orange-700">
                {person.name}
              </h4>

              <p className="mt-2 font-medium text-gray-600">
                {person.designation}
              </p>

            </div>

          ))}

        </div>

        {/* Committee Members */}

        <div className="mt-24 rounded-3xl bg-white p-10 shadow-xl">

          <h3 className="mb-8 text-center text-3xl font-bold text-orange-700">
            🤝 Committee Members
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {committeeMembers.map((member, index) => (

              <div
                key={index}
                className="rounded-xl bg-orange-50 px-5 py-4 font-medium text-gray-700"
              >
                • {member}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}