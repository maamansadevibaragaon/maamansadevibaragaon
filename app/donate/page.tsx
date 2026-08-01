import Image from "next/image";
import { temple } from "@/data/temple";

export default function DonatePage() {
  return (
    <main className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-bold text-orange-700">
            🙏 Support Maa Mansa Devi Mandir
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Your generous contribution helps in the daily worship of Maa Mansa
            Devi, temple maintenance, festival celebrations, Bhandara, and
            various religious activities. Every donation is a sacred offering
            made with devotion.
          </p>

        </div>

        {/* Donation Card */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* QR */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <h2 className="mb-8 text-center text-3xl font-bold text-orange-700">
              Scan & Donate
            </h2>

            <div className="flex justify-center">

              <Image
                src="/images/donate/upi-qr.jpeg"
                alt="UPI QR Code"
                width={350}
                height={350}
                className="rounded-2xl border shadow-lg"
              />

            </div>

            <div className="mt-8 rounded-xl bg-orange-50 p-6 text-center">

              <p className="text-sm uppercase tracking-wider text-gray-500">
                UPI ID
              </p>

              <p className="mt-2 text-xl font-bold text-orange-700">
                9911120810@pthdfc
              </p>

            </div>

          </div>

          {/* Information */}

          <div>

            <h2 className="mb-8 text-3xl font-bold text-orange-700">
              Your Contribution Supports
            </h2>

            <div className="grid gap-5">

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                🛕 Temple Maintenance
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                🌺 Daily Puja & Aarti
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                🎉 Navratri & Festival Celebrations
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                🍛 Bhandara & Seva
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                🌸 Temple Decoration
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                ❤️ Devotee Welfare
              </div>

            </div>

            <div className="mt-10 rounded-3xl border-l-4 border-orange-600 bg-orange-100 p-8">

              <h3 className="text-2xl font-bold text-orange-700">
                Blessings of Maa Mansa Devi
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                Every contribution, whether small or large, helps preserve the
                spiritual heritage of Maa Mansa Devi Mandir. May Maa Mansa Devi
                bless you and your family with happiness, prosperity, good
                health, and the fulfillment of all your heartfelt wishes.
              </p>

            </div>

          </div>

        </div>

        {/* Contact */}

        <div className="mt-20 rounded-3xl bg-white p-10 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-orange-700">
            Need Assistance?
          </h2>

          <p className="mt-6 text-lg">
            📞 {temple.phone}
          </p>

          <p className="mt-2 text-lg">
            ✉️ {temple.email}
          </p>

          <p className="mt-2 text-lg">
            📍 {temple.location}
          </p>

        </div>

      </div>
    </main>
  );
}