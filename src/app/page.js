import HeroSection from "@/component/pages/home/HeroSection";
import Shortintro from "@/component/pages/home/Shortintro";
import Overview from "@/component/pages/home/Overview";
import Whychoose from "@/component/pages/home/Whychoose";
import Calltoaction from "@/component/pages/home/Calltoaction";
import Featured from "@/component/pages/home/Featured";

export default function Home() {
  return (
    <div className="bg-green-300 ">
      <HeroSection />
      <Shortintro />
      <Overview />
      <Featured />
      <Whychoose />
      <Calltoaction />
    </div>
  );
}
