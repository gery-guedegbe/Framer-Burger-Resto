import { useEffect } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LatestNewSection from "../components/LatestNewSection";
import MapSection from "../components/MapSection";
import MenuSection from "../components/MenuSection";
import NavBar from "../components/NavBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full flex-col items-center justify-between gap-10 overflow-x-hidden text-start xl:gap-16">
      <NavBar />

      <div className="mb-16 space-y-8 px-4 xl:mb-36 xl:space-y-16 xl:px-16">
        <HeroSection />
        <MenuSection />
        <LatestNewSection />
        <MapSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
