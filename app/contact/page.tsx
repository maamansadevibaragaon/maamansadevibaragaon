import { temple } from "@/data/temple";
export default function ContactPage() {
    return (
        <main className="bg-orange-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <h1 className="text-center text-5xl font-bold text-orange-700">
                    Contact Maa Mansa Devi Mandir
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
                    We welcome all devotees to visit Maa Mansa Devi Mandir.
                    For any information regarding darshan, festivals,
                    temple events or seva, please contact us.
                </p>

                <div className="mt-16 grid gap-10 md:grid-cols-2">

                    {/* Contact Card */}

                    <div className="rounded-3xl bg-white p-10 shadow-xl">

                        <h2 className="mb-8 text-3xl font-bold text-orange-700">
                            Contact Information
                        </h2>

                        <p className="mb-6 text-lg">
                            📍 <strong>Address</strong><br />
                            📍 {temple.location}
                        </p>

                        <p className="mb-6 text-lg">
                            📞 <strong>Phone</strong><br />
                            <a
                                href="tel:9911120810"
                                className="text-orange-700 hover:underline"
                            >
                                📞 {temple.phone}
                            </a>
                        </p>

                        <p className="mb-8 text-lg">
                            ✉️ <strong>Email</strong><br />
                            <a
                                href="mailto:tyagirahul1995@gmail.com"
                                className="text-orange-700 hover:underline"
                            >
                                ✉️ {temple.email}
                            </a>
                        </p>

                        <a
                            href="https://maps.app.goo.gl/g16zyJgFUuwUmAtU8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
                        >
                            📍 Open in Google Maps
                        </a>
                        <div className="mt-8 border-t pt-6">
                            <h3 className="mb-4 text-xl font-semibold text-orange-700">
                                Follow Us
                            </h3>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/officialmmdt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                                >
                                    📘 Facebook
                                </a>

                                <a
                                    href="https://www.instagram.com/maa.mansa_devi_baragaon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
                                >
                                    📷 Instagram
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Map Card */}

                    <div className="rounded-3xl bg-white p-10 shadow-xl">

                        <h2 className="mb-8 text-3xl font-bold text-orange-700">
                            Temple Location
                        </h2>

                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <iframe
                                src="https://www.google.com/maps?q=28.8752253,77.329064&z=16&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Maa Mansa Devi Mandir Location"
                            ></iframe>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}