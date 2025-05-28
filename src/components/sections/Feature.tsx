// src/components/sections/home/Features.tsx
import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

// src/data/featuresData.ts
export const featuresData = [
  {
    title: "HOME IDEAS",
    subtitle: "Home & Living",
    button: "Explore Now",
    image: "/images/sofa.png", // Update with your image path
    bg: "from-[#eaeef3] via-[#f7e3e0] to-[#f7e3e0]", // Example gradient
  },
  {
    title: "PROFESSIONALS",
    subtitle: "Find Professionals",
    button: "Explore Now",
    image: "/images/professionals.png", // Update with your image path
    bg: "from-[#f7e3e0] via-[#f7e3e0] to-[#eaeef3]", // Example gradient
  },
];

const Features = () => (
  <section className="w-full py-8 md:py-16 px-2 bg-gradient-to-br from-[#eaeef3] via-[#f7e3e0] to-[#eaeef3]">
    <div className="text-center mb-8 px-2">
      <div className="text-lg font-semibold text-[#2d3559] tracking-widest mb-2">
        OUR FEATURES
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d3559] mb-4">
        Explore a wealth of inspiring ideas and{" "}
        <br className="hidden md:block" />
        trends to transform your space beautifully.
      </h2>
    </div>
    <div className="flex flex-col md:flex-row md:justify-center md:items-center md:align-center gap-6 md:gap-8 justify-center  max-w-6xl mx-auto px-2">
      {featuresData.map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;
