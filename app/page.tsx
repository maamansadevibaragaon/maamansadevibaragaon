import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutTemple from "../components/home/AboutTemple";
import DivineDarshan from "../components/home/DivineDarshan";
import TempleTimings from "../components/home/TempleTimings";
import UpcomingFestivals from "../components/home/UpcomingFestivals";
import Announcements from "@/components/home/Announcements";
import GalleryPreview from "../components/home/GalleryPreview";
import GoogleReviews from "@/components/home/GoogleReviews";
import Footer from "../components/layout/Footer";
import TempleCommunity from "../components/home/TempleCommunity";
import TempleManagement from "@/components/home/TempleManagement";
import TempleLocation from "../components/home/TempleLocation";
import FadeInSection from "@/components/shared/FadeInSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

<DivineDarshan />

<FadeInSection>
  <Announcements />
</FadeInSection>

<FadeInSection>
  <AboutTemple />
</FadeInSection>

<FadeInSection>
  <TempleTimings />
</FadeInSection>

<FadeInSection>
  <UpcomingFestivals />
</FadeInSection>

<FadeInSection>
  <GalleryPreview />
</FadeInSection>

<FadeInSection>
  <TempleManagement />
</FadeInSection>

<FadeInSection>
  <GoogleReviews />
</FadeInSection>

<FadeInSection>
  <TempleCommunity />
</FadeInSection>

<FadeInSection>
  <TempleLocation />
</FadeInSection>

<Footer />
    </main>
  );
}