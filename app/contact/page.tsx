import { temple } from "../../data/temple";
export default function ContactPage() {
  return (
    <main className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-center text-5xl font-bold text-orange-700">
          Contact Maa Mansa Devi Mandir
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
          We welcome all devotees to visit Maa Mansa Devi Mandir.
          For any information regarding darshan, festivals,
          temple events or seva, please contact us.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Contact Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold text-orange-700">
              Contact Information
            </h2>

            <p className="mb-6 text-lg">
              📍 <strong>Address</strong><br />
              📍 {temple.location}
            </p>

            <p className="mb-6 text-lg">
              📞 <strong>Phone</strong><br />
              <a
                href="tel:9911120810"
                className="text-orange-700 hover:underline"
              >
                📞 {temple.phone}
              </a>
            </p>

            <p className="mb-8 text-lg">
              ✉️ <strong>Email</strong><br />
              <a
                href="mailto:tyagirahul1995@gmail.com"
                className="text-orange-700 hover:underline"
              >
                ✉️ {temple.email}
              </a>
            </p>

            <a
              href="https://maps.app.goo.gl/g16zyJgFUuwUmAtU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
            >
              📍 Open in Google Maps
            </a>

          </div>

          {/* Map Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold text-orange-700">
              Temple Location
            </h2>

            <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 bg-orange-100">

              <div className="text-center">

                <div className="text-6xl">
                  🗺️
                </div>

                <p className="mt-4 text-lg text-gray-700">
                  Interactive Google Map
                  <br />
                  (Coming in the next step)
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}