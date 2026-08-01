import { announcements } from "@/data/announcements";

export default function Announcements() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-orange-700">
            📢 Temple Announcements
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest temple events,
            festivals and important notices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {announcements.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-5 flex items-center gap-3">

  <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
    {item.date}
  </span>

  {item.important && (
    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white animate-pulse">
      महत्वपूर्ण
    </span>
  )}

</div>

              <h3 className="mb-4 text-2xl font-bold text-orange-700">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}