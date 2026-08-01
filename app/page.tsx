import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DivineDarshan from "../components/DivineDarshan";
import AboutTemple from "../components/AboutTemple";
import TempleTimings from "../components/TempleTimings";
import UpcomingFestivals from "../components/UpcomingFestivals";
import GalleryPreview from "../components/GalleryPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DivineDarshan />
      <AboutTemple />
      <TempleTimings />
      <UpcomingFestivals />
      <GalleryPreview />
      <Footer />
    </main>
  );
}