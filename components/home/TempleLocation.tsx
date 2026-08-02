import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star,
} from "lucide-react";
import { temple } from "../../data/temple";

export default function TempleLocation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">
          <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-orange-700">
            <MapPin size={36} />
            Visit Maa Mansa Devi Mandir
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We warmly welcome every devotee to visit the sacred temple of Maa
            Mansa Devi and seek her divine blessings.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=28.8752253,77.329064&z=16&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />

          </div>

          {/* Temple Information */}

          <div className="rounded-3xl bg-orange-50 p-10 shadow-lg transition duration-300 hover:shadow-2xl">

            <h3 className="text-3xl font-bold text-orange-700">
              Temple Information
            </h3>

            <div className="mt-8 space-y-6 text-lg">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-600" size={22} />
                <div>
                  <p className="font-semibold text-orange-700">
                    Temple
                  </p>
                  <p>{temple.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-600" size={22} />
                <div>
                  <p className="font-semibold text-orange-700">
                    Address
                  </p>
                  <p>{temple.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-orange-600" size={22} />
                <div>
                  <p className="font-semibold text-orange-700">
                    Phone
                  </p>
                  <p>{temple.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-orange-600" size={22} />
                <div>
                  <p className="font-semibold text-orange-700">
                    Email
                  </p>
                  <p>{temple.email}</p>
                </div>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                <ExternalLink size={18} />
                Open in Google Maps
              </a>

              <a
                href={temple.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-orange-600 px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-100"
              >
                <Star size={18} />
                View Google Profile
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}