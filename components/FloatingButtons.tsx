export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-xl hover:scale-110 transition"
        title="WhatsApp"
      >
        💬
      </button>

      <button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-xl hover:scale-110 transition"
        title="Call Temple"
      >
        📞
      </button>

      <button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-2xl text-white shadow-xl hover:scale-110 transition"
        title="Get Directions"
      >
        📍
      </button>

    </div>
  );
}