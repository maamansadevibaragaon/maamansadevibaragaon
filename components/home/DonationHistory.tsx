import { Heart, CalendarDays, IndianRupee } from "lucide-react";
import { donations } from "@/data/donations";

export default function DonationHistory() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-orange-600">
            Recent Contributions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Donation History
          </h2>

          <p className="mt-4 text-gray-600">
            Every contribution helps us preserve our sacred temple and continue
            serving devotees with devotion.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={22} />
                <h3 className="text-xl font-bold">
                  {donation.name}
                </h3>
              </div>

              <div className="mt-6 flex items-center gap-2 text-2xl font-bold text-orange-600">
                <IndianRupee size={24} />
                {donation.amount.replace("₹", "")}
              </div>

              <p className="mt-5 rounded-full bg-orange-100 px-4 py-2 inline-block text-sm font-semibold text-orange-700">
                {donation.purpose}
              </p>

              <div className="mt-6 flex items-center gap-2 text-gray-500">
                <CalendarDays size={18} />
                {donation.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}