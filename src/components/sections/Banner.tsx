import React from "react";

import galleryData from "@/data/homeGallery.json";
import Image from "next/image";

const brands = ["artek", "louis poulsen", "FLOS", "ferm", "vitra.", "oluce"];
const brandStyles = {
  artek: "font-bold font-sans text-2xl md:text-3xl tracking-wide",
  "louis poulsen": "font-semibold font-mono text-2xl md:text-3xl italic",
  FLOS: "font-serif text-3xl md:text-4xl tracking-tight",
  ferm: "font-light font-cursive text-2xl md:text-3xl",
  "vitra.": "font-extrabold font-sans text-2xl md:text-3xl",
  oluce: "font-medium font-mono text-2xl md:text-3xl",
};

const Banner = () => {
  return (
    <div className="bg-inherit">
      <section className="w-full flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
          Furnish Your Home with <br className="hidden md:block" /> Sustainable
          Style
        </h1>
        <p className="text-lg md:text-xl text-secondary mb-8 max-w-xl">
          Discover furniture that is both beautiful and environmentally
          responsible.
          <br />
          Our pieces are crafted from sustainable materials.
        </p>
        <button className="px-8 py-3 rounded-full bg-secondary text-white font-semibold text-lg shadow hover:bg-secondary90 transition">
          Get Started For FREE
        </button>
      </section>

      <section>
        <div className="w-full py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="w-full h-80 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-8 ">
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className={`text-tertiary ${brandStyles[brand as keyof typeof brandStyles] || ""}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
