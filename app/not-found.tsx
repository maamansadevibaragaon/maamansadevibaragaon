import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 px-6 text-center">

      <Image
        src="/images/logo.png"
        alt="Maa Mansa Devi"
        width={120}
        height={120}
        className="rounded-full border-4 border-orange-300 shadow-xl"
      />

      <h1 className="mt-8 text-7xl font-bold text-orange-700">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-5 max-w-xl text-lg text-gray-600">
        The page you are looking for doesn't exist.
        Return to the sacred home of Maa Mansa Devi Mandir.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
      >
        🛕 Return to Home
      </Link>

    </main>
  );
}