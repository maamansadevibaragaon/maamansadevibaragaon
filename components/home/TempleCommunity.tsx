import {
  MapPin,
  Camera,
  Star,
  Globe,
  HeartHandshake,
} from "lucide-react";
import { temple } from "../../data/temple";

export default function TempleCommunity() {
  const community = [
    {
      title: "Google Maps",
      hindi: "मंदिर का स्थान",
      description: "Find the temple easily and get directions for your visit.",
      icon: MapPin,
      link: temple.googleMaps,
    },
    {
      title: "Facebook",
      hindi: "फेसबुक परिवार",
      description:
        "Stay connected with temple events, announcements and celebrations.",
      icon: Globe,
      link: temple.facebook,
    },
    {
      title: "Instagram",
      hindi: "फोटो गैलरी",
      description:
        "Explore beautiful photos, festivals and divine moments of Maa Mansa Devi.",
      icon: Camera,
      link: temple.instagram,
    },
    {
      title: "Leave a Review",
      hindi: "अपना अनुभव साझा करें",
      description:
        "Your blessings and feedback inspire more devotees to visit the temple.",
      icon: Star,
      link: temple.googleMaps,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Stay Connected
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Join Our Devotional Community
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            Become a part of the Maa Mansa Devi Mandir family. Stay updated
            with festivals, spiritual events, announcements and divine moments
            through our official platforms.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600"></div>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {community.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-orange-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-50 text-orange-700 shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                <item.icon size={36} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-orange-800">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-gray-600">
                {item.hindi}
              </p>

              <p className="mt-5 leading-7 text-gray-700">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-gradient-to-r from-orange-600 to-orange-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <HeartHandshake size={34} />
          </div>

          <h3 className="mt-5 text-3xl font-bold">
            Become a Part of Our Temple Family
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Follow our official pages to receive updates about daily aarti,
            upcoming festivals, temple announcements and spiritual events.
          </p>

          <a
            href={temple.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-700 transition hover:scale-105 hover:bg-orange-100"
          >
            🌺 Follow Our Community
          </a>
        </div>
      </div>
    </section>
  );
}