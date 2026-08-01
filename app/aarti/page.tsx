export default function AartiPage() {
  return (
    <main className="bg-orange-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-center text-5xl font-bold text-orange-700">
          Daily Aarti & Darshan
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
          Experience the divine blessings of Maa Mansa Devi by participating
          in the daily Aarti and seeking Her sacred darshan. All devotees are
          warmly welcomed throughout the day.
        </p>

        {/* Timings */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <div className="text-5xl">🌅</div>

            <h2 className="mt-5 text-2xl font-bold text-orange-700">
              Morning Aarti
            </h2>

            <p className="mt-4 text-3xl font-bold text-orange-600">
              5:00 AM
            </p>

            <p className="mt-3 text-gray-600">
              Begin your day with the divine blessings of Maa Mansa Devi.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <div className="text-5xl">🙏</div>

            <h2 className="mt-5 text-2xl font-bold text-orange-700">
              Darshan
            </h2>

            <p className="mt-4 text-3xl font-bold text-green-600">
              Open All Day
            </p>

            <p className="mt-3 text-gray-600">
              Devotees are welcome throughout the day for darshan and prayers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <div className="text-5xl">🌇</div>

            <h2 className="mt-5 text-2xl font-bold text-orange-700">
              Evening Aarti
            </h2>

            <p className="mt-4 text-3xl font-bold text-orange-600">
              7:00 PM
            </p>

            <p className="mt-3 text-gray-600">
              Join the evening Aarti and receive the blessings of Maa.
            </p>
          </div>

        </div>

        {/* Devotional Section */}

        <div className="mt-16 rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="mb-6 text-3xl font-bold text-orange-700">
            🌺 Worship & Devotion
          </h2>

          <p className="leading-8 text-gray-700">
            Every day begins and ends with the sacred Aarti of Maa Mansa Devi,
            where devotees gather with faith and devotion to seek Her divine
            blessings. The temple remains open throughout the day, allowing
            devotees to visit at their convenience for darshan, prayer, and
            spiritual peace.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Whether you come to offer flowers, light a diya, or simply spend a
            few peaceful moments in the divine presence of Maa Mansa Devi,
            every prayer offered with a pure heart is believed to receive Her
            blessings.
          </p>

        </div>

        {/* Note */}

        <div className="mt-10 rounded-3xl border-l-4 border-orange-500 bg-orange-100 p-8">

          <h3 className="mb-3 text-2xl font-bold text-orange-700">
            📢 Devotee Information
          </h3>

          <p className="leading-8 text-gray-700">
            During major festivals such as Navratri, a significantly larger
            number of devotees visit the temple. Visitors are requested to
            cooperate with the temple management and follow all arrangements
            made for a smooth and peaceful darshan experience.
          </p>

        </div>

      </div>
    </main>
  );
}
