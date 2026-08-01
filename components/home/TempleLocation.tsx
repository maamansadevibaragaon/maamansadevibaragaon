import { temple } from "../../data/temple";

export default function TempleLocation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-orange-700">
            📍 Visit Maa Mansa Devi Mandir
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We warmly welcome every devotee to visit the sacred temple of Maa
            Mansa Devi and seek her divine blessings.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=28.8752253,77.329064&z=16&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />

          </div>

          <div className="rounded-3xl bg-orange-50 p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-orange-700">
              Temple Information
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <p>
                <strong>🛕 Temple:</strong><br />
                {temple.name}
              </p>

              <p>
                <strong>📍 Address:</strong><br />
                {temple.location}
              </p>

              <p>
                <strong>📞 Phone:</strong><br />
                {temple.phone}
              </p>

              <p>
                <strong>✉️ Email:</strong><br />
                {temple.email}
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                📍 Open in Google Maps
              </a>

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-orange-600 px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-100"
              >
                ⭐ View Google Profile
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}