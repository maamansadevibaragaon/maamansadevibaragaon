export default function GoogleReviews() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-700">
            ⭐ Devotees Love Maa Mansa Devi Mandir
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Read genuine reviews shared by devotees on our official Google Business Profile.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-orange-100 bg-orange-50 p-10 text-center shadow-xl">

          <div className="text-6xl">
            ⭐⭐⭐⭐⭐
          </div>

          <h3 className="mt-4 text-3xl font-bold text-orange-700">
            See Our Google Reviews
          </h3>

          <p className="mt-4 text-gray-700">
            Your blessings and feedback inspire us.
            Read what devotees have shared and help others by leaving your own review.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://www.google.com/maps/place/Maa+Mansa+Devi+Mandir/@28.87523,77.3264891,17z/data=!4m14!1m7!3m6!1s0x390c57cb504cf1e5:0xb4589956107402a6!2sMaa+Mansa+Devi+Mandir!8m2!3d28.8752253!4d77.329064!16s%2Fg%2F11ghzrvsbs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700"
            >
              ⭐ Read Google Reviews
            </a>

            <a
              href="https://www.google.com/maps/place/Maa+Mansa+Devi+Mandir/@28.87523,77.3264891,17z/data=!4m14!1m7!3m6!1s0x390c57cb504cf1e5:0xb4589956107402a6!2sMaa+Mansa+Devi+Mandir!8m2!3d28.8752253!4d77.329064!16s%2Fg%2F11ghzrvsbs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-orange-600 px-8 py-4 font-bold text-orange-700 transition hover:bg-orange-100"
            >
              ✍️ Write a Review
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}