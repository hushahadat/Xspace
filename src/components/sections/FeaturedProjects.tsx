"use client";

import React, { useEffect, useRef, useState } from "react";
// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Office Room DEXA Corp",
    subtitle: "Furniture Selection • South Jakarta",
    imageUrl: "/images/project1.png",
  },
  {
    id: 2,
    title: "Omosiroi Kohi",
    subtitle: "Space Planning • North Jakarta",
    imageUrl: "/images/project2.png",
  },
  {
    id: 3,
    title: "Raffi Ahmad House",
    subtitle: "Furniture Selection • South Jakarta",
    imageUrl: "/images/project3.png",
  },
  {
    id: 4,
    title: "Raffi Ahmad House",
    subtitle: "Furniture Selection • South Jakarta",
    imageUrl: "/images/project3.png",
  },
];

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollTo = (index: number) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) scrollTo(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) scrollTo(activeIndex + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#212F52] min-h-[800px] text-white py-12 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mt-16">
          <div>
            <h2 className="text-3xl md:text-6xl font-bold font-dm-sans">
              OUR FEATURED PROJECTS
            </h2>
            <p className="text-sm text-gray-300 max-w-md mt-2 font-normal font-dm-sans">
              Discover our exceptional projects. Each one a testament to our
              commitment to excellence in interior design.
            </p>
          </div>
          <div className="text-sm font-semibold mt-4 md:mt-0 whitespace-nowrap">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-[55%] -translate-y-1/2 z-10 bg-white text-[#1f2a4a] rounded-full p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-[55%] -translate-y-1/2 z-10 bg-white text-[#1f2a4a] rounded-full p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide mt-12 "
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className={`min-w-[80%] md:min-w-[32%] min-h-[450px] shrink-0 snap-start  overflow-hidden  shadow-lg text-white transition-all duration-300 ${
                index === activeIndex ? "scale-100" : "scale-95 opacity-80"
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-white">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
