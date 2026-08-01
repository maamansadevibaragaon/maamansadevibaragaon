export default function TempleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
additionalType: "https://schema.org/HinduTemple",

    name: "Maa Mansa Devi Mandir",

    description:
      "Official website of Maa Mansa Devi Mandir located in Ravan Urf Bara Gaon, Baghpat, Uttar Pradesh.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Ravan Urf Bara Gaon",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.8752253,
      longitude: 77.329064,
    },

    telephone: "+91 9911120810",

    email: "tyagirahul1995@gmail.com",

    sameAs: [
      "https://www.facebook.com/officialmmdt",
      "https://www.instagram.com/maa.mansa_devi_baragaon/",
      "https://maps.app.goo.gl/g16zyJgFUuwUmAtU8",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}