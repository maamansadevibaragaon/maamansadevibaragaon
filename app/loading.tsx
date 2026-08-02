import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100">

      <Image
        src="/images/logo.png"
        alt="Maa Mansa Devi"
        width={120}
        height={120}
        className="animate-pulse rounded-full"
        priority
      />

      <h2 className="mt-8 text-3xl font-bold text-orange-700">
        Maa Mansa Devi Mandir
      </h2>

      <p className="mt-3 text-gray-600">
        Please wait...
      </p>

      <div className="mt-8 h-2 w-48 overflow-hidden rounded-full bg-orange-200">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-orange-600"></div>
      </div>

    </div>
  );
}