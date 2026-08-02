import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Temple Info */}

          <div>

            <h3 className="text-2xl font-bold text-yellow-300">
              Maa Mansa Devi Mandir
            </h3>

            <p className="mt-5 leading-8 text-orange-100">
              Maa Mansa Devi Mandir is a sacred place of faith, devotion,
              blessings and spiritual peace located at
              <strong> Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh.</strong>
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-yellow-300">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>

              <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>

              <li><Link href="/gallery" className="hover:text-yellow-300">Gallery</Link></li>

              <li><Link href="/festivals" className="hover:text-yellow-300">Festivals</Link></li>

              <li><Link href="/aarti" className="hover:text-yellow-300">Daily Aarti</Link></li>

              <li><Link href="/donate" className="hover:text-yellow-300">Donate</Link></li>

              <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>

            </ul>

          </div>

          {/* Temple Timings */}

          <div>

            <h3 className="text-xl font-bold text-yellow-300">
              Temple Timings
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3">
                <Clock3 size={18} />
                <span>Morning Aarti : 5:00 AM</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} />
                <span>Evening Aarti : 7:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} />
                <span>Darshan : Full Day</span>
              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-yellow-300">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>9911120810</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>tyagirahul1995@gmail.com</span>
              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

  <a
    href="https://www.facebook.com/officialmmdt"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-orange-800 px-5 py-2 transition hover:bg-orange-700"
  >
    Facebook
  </a>

  <a
    href="https://www.instagram.com/maa.mansa_devi_baragaon/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-orange-800 px-5 py-2 transition hover:bg-orange-700"
  >
    Instagram
  </a>

</div>

          </div>

        </div>

        <div className="my-10 border-t border-orange-700"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-orange-200 md:flex-row">

          <p>
            © {new Date().getFullYear()} Maa Mansa Devi Mandir, Bara Gaon.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Designed & Developed with
            <Heart size={16} className="fill-red-500 text-red-500" />
            by Rahul Tyagi
          </p>

        </div>

      </div>
    </footer>
  );
}