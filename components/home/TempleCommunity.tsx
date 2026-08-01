import { temple } from "../../data/temple";

export default function TempleCommunity() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-orange-700">
            🌸 Join Our Devotional Community 🌸
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Stay connected with Maa Mansa Devi Mandir through our official online platforms.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <a
            href={temple.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">📍</div>

            <h3 className="mt-5 text-2xl font-bold">
              Google Maps
            </h3>

            <p className="mt-3 text-gray-600">
              Visit the temple location and get directions.
            </p>
          </a>

          <a
            href={temple.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">📘</div>

            <h3 className="mt-5 text-2xl font-bold">
              Facebook
            </h3>

            <p className="mt-3 text-gray-600">
              Follow our latest updates and events.
            </p>
          </a>

          <a
            href={temple.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">📸</div>

            <h3 className="mt-5 text-2xl font-bold">
              Instagram
            </h3>

            <p className="mt-3 text-gray-600">
              Explore temple photos and festival moments.
            </p>
          </a>

          <a
            href={temple.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">⭐</div>

            <h3 className="mt-5 text-2xl font-bold">
              Leave a Review
            </h3>

            <p className="mt-3 text-gray-600">
              Share your experience and blessings with other devotees.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}