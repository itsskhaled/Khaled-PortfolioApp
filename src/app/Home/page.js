import MarqueeText from "../components/MarqueeText";
import ParallaxImage from "../components/ParallaxImage";
import TitleHero from "../components/TitleHero";

export default function HomePage() {
  return (
    <section id="Home" className="min-h-screen landscape:min-h-[600px] flex flex-col items-center justify-center relative">
      <div className="absolute flex items-center overflow-hidden z-0">
        <MarqueeText />
      </div>
      <ParallaxImage />
      <TitleHero />
    </section>
  );
}
