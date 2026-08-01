export default function FestivalsPage() {
  const festivals = [
    {
      title: "🌺 Chaitra Navratri",
      description:
        "Chaitra Navratri is celebrated with immense devotion. Thousands of devotees visit Maa Mansa Devi Mandir to seek blessings through prayers, bhajans, and daily Aarti.",
    },
    {
      title: "🪔 Sharadiya Navratri",
      description:
        "Sharadiya Navratri is one of the grandest celebrations at the temple. The temple is beautifully decorated, and special worship is performed throughout the nine sacred days.",
    },
    {
      title: "🎶 Mata Ka Jagran",
      description:
        "Devotional Jagran programs are organized where devotees spend the entire night singing bhajans and praising Maa Mansa Devi with great faith and enthusiasm.",
    },
    {
      title: "🍛 Bhandara",
      description:
        "Community Bhandara is organized on special occasions where devotees lovingly serve prasad to all visitors without any discrimination.",
    },
  ];

  return (
    <main className="bg-orange-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-center text-5xl font-bold text-orange-700">
          Festivals & Celebrations
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
          Maa Mansa Devi Mandir celebrates numerous religious festivals
          throughout the year with great devotion, spiritual enthusiasm,
          and community participation.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {festivals.map((festival) => (
            <div
              key={festival.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-orange-700">
                {festival.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-700">
                {festival.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border-l-4 border-orange-500 bg-orange-100 p-8">

          <h2 className="mb-4 text-2xl font-bold text-orange-700">
            🙏 Join the Celebrations
          </h2>

          <p className="leading-8 text-gray-700">
            All devotees are warmly invited to participate in the religious
            celebrations at Maa Mansa Devi Mandir. Your presence and devotion
            make every festival a memorable spiritual experience for the entire
            community.
          </p>

        </div>

      </div>
    </main>
  );
}
