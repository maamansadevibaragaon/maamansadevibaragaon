import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutTemple from "../components/home/AboutTemple";
import DivineDarshan from "../components/home/DivineDarshan";
import TempleTimings from "../components/home/TempleTimings";
import UpcomingFestivals from "../components/home/UpcomingFestivals";
import GalleryPreview from "../components/home/GalleryPreview";
import Footer from "../components/layout/Footer";
import TempleCommunity from "../components/home/TempleCommunity";
import TempleLocation from "../components/home/TempleLocation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DivineDarshan />
      <AboutTemple />
      <TempleTimings />
      <UpcomingFestivals />
      <TempleLocation />
      <GalleryPreview />
      <TempleCommunity />
      <Footer />
    </main>
  );
}