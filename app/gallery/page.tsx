import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionHeading from "@/components/shared/SectionHeading";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        title="Temple Gallery"
        subtitle="Explore the divine beauty of Maa Mansa Devi Mandir through photographs of the temple, festivals, aarti, and devotees."
      />

      <GalleryGrid />

    </main>
  );
}