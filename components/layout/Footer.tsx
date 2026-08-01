import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Temple Info */}
          <div>
            <h3 className="text-2xl font-bold">
              🛕 Maa Mansa Devi Mandir
            </h3>

            <p className="mt-4 text-orange-100 leading-8">
              A sacred place of faith, devotion and blessings.
              Welcome to the official website of Maa Mansa Devi Mandir,
              Bara Gaon, Baghpat, Uttar Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Temple</Link>
              </li>

              <li>
                <Link href="/gallery">Gallery</Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <p className="mt-5">
              📍 Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh
            </p>

            <p className="mt-3">
              📞 9911120810
            </p>

            <p className="mt-3">
              ✉️ tyagirahul1995@gmail.com
            </p>

          </div>

        </div>

        <hr className="my-10 border-orange-700" />

        <p className="text-center text-orange-200">
          © {new Date().getFullYear()} Maa Mansa Devi Mandir, Bara Gaon.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}