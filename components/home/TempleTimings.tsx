import {
  Sunrise,
  Sunset,
  Clock3,
  Bell,
} from "lucide-react";
export default function TempleTimings() {
  const timings = [
  {
    title: "Morning Darshan",
    time: "5:00 AM – 2:00 PM",
    icon: Sunrise,
  },
  {
    title: "Evening Darshan",
    time: "4:00 PM – 10:00 PM",
    icon: Sunset,
  },
  {
    title: "Morning Aarti",
    time: "5:00 AM",
    icon: Clock3,
  },
  {
    title: "Evening Aarti",
    time: "7:00 PM",
    icon: Bell,
  },
];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[5px] text-orange-700 font-semibold">
            Temple Timings
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Darshan & Aarti Schedule
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Plan your visit and participate in the daily prayers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {timings.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-orange-50 to-orange-100 text-orange-700 shadow-md">
  <item.icon size={40} strokeWidth={2.2} />
</div>

              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-orange-700 font-semibold">
                {item.time}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}