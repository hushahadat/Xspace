import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";

import Features from "@/components/sections/Feature";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import RoomGallery from "@/components/sections/RoomGallery";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Banner />
      <Features />
      <RoomGallery />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
