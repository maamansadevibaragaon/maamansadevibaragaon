import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star,
  Navigation,
} from "lucide-react";
import { temple } from "../../data/temple";

export default function TempleLocation() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Visit The Temple
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Maa Mansa Devi Mandir
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            We warmly welcome every devotee to visit Maa Mansa Devi Mandir and
            seek the divine blessings of the Goddess. Experience peace,
            devotion, and the sacred atmosphere of the temple.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600"></div>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-xl transition duration-300 hover:shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=28.8752253,77.329064&z=16&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />

          </div>

          {/* Information */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="text-3xl font-bold text-orange-700">
              Temple Information
            </h3>

            <div className="mt-8 space-y-6">

              {/* Temple */}

              <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5">

                <div className="rounded-full bg-orange-100 p-3">
                  <MapPin className="text-orange-700" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-orange-700">
                    Temple
                  </h4>

                  <p className="mt-1 text-gray-700">
                    {temple.name}
                  </p>
                </div>

              </div>

              {/* Address */}

              <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5">

                <div className="rounded-full bg-orange-100 p-3">
                  <Navigation className="text-orange-700" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-orange-700">
                    Address
                  </h4>

                  <p className="mt-1 text-gray-700">
                    {temple.location}
                  </p>
                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5">

                <div className="rounded-full bg-orange-100 p-3">
                  <Phone className="text-orange-700" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-orange-700">
                    Phone
                  </h4>

                  <a
                    href={`tel:${temple.phone}`}
                    className="mt-1 block text-gray-700 hover:text-orange-700"
                  >
                    {temple.phone}
                  </a>
                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5">

                <div className="rounded-full bg-orange-100 p-3">
                  <Mail className="text-orange-700" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-orange-700">
                    Email
                  </h4>

                  <a
                    href={`mailto:${temple.email}`}
                    className="mt-1 block break-all text-gray-700 hover:text-orange-700"
                  >
                    {temple.email}
                  </a>
                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                <ExternalLink size={18} />
                Get Directions
              </a>

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-orange-600 px-6 py-4 font-semibold text-orange-700 transition hover:bg-orange-100"
              >
                <Star size={18} />
                Leave Review
              </a>

            </div>

            {/* Bottom Card */}

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white shadow-lg">

              <h4 className="text-2xl font-bold">
                🙏 We Welcome You
              </h4>

              <p className="mt-3 leading-7 text-orange-100">
                Every devotee is warmly welcomed to seek the blessings of
                Maa Mansa Devi. May the Goddess bless you and your family
                with happiness, prosperity and peace.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}