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
      hindi: "प्रातः दर्शन",
      time: "5:00 AM – 2:00 PM",
      icon: Sunrise,
    },
    {
      title: "Evening Darshan",
      hindi: "सायंकाल दर्शन",
      time: "4:00 PM – 10:00 PM",
      icon: Sunset,
    },
    {
      title: "Morning Aarti",
      hindi: "प्रातः आरती",
      time: "5:00 AM",
      icon: Clock3,
    },
    {
      title: "Evening Aarti",
      hindi: "सायंकाल आरती",
      time: "7:00 PM",
      icon: Bell,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Temple Timings
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Darshan & Aarti Schedule
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Plan your visit and participate in the daily prayers of
            <span className="font-semibold text-orange-700">
              {" "}
              Maa Mansa Devi Mandir.
            </span>
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600"></div>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timings.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-orange-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
            >
              {/* Icon */}

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-50 text-orange-700 shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                <item.icon size={38} strokeWidth={2.3} />
              </div>

              {/* English */}

              <h3 className="mt-6 text-2xl font-bold text-orange-800">
                {item.title}
              </h3>

              {/* Hindi */}

              <p className="mt-2 text-base font-medium text-gray-600">
                {item.hindi}
              </p>

              {/* Time */}

              <div className="mt-6 rounded-xl bg-orange-50 py-3">
                <p className="text-lg font-bold text-orange-700">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border-l-4 border-orange-600 bg-white p-6 text-center shadow-md">
          <p className="text-gray-700">
            <span className="font-semibold text-orange-700">
              Note:
            </span>{" "}
            During Navratri and special festivals, Darshan and Aarti timings may
            be extended. Please check the latest announcements before planning
            your visit.
          </p>
        </div>
      </div>
    </section>
  );
}