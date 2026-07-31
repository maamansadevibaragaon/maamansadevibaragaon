import TempleTimings from "../components/TempleTimings";
import AboutTemple from "../components/AboutTemple";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DivineDarshan from "../components/DivineDarshan";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DivineDarshan />
      <AboutTemple />
      <TempleTimings />
    </main>
  );
}