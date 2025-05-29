"use client";

import React from "react";

const rooms = [
  {
    title: "Living room",
    subtitle: "Explore Ideas",
    image: "/images/room1.jpg",
  },
  {
    title: "Bedroom",
    subtitle: "Explore Ideas",
    image: "/images/room2.jpg",
  },
  {
    title: "Dining",
    subtitle: "Explore Ideas",
    image: "/images/room3.jpg",
  },
  {
    title: "Kitchen",
    subtitle: "Explore Ideas",
    image: "/images/room4.jpg",
  },
  {
    title: "Study",
    subtitle: "Explore Ideas",
    image: "/images/room5.jpg",
  },
  {
    title: "Bathroom",
    subtitle: "Explore Ideas",
    image: "/images/room6.jpg",
  },
];

const RoomGallery: React.FC = () => {
  return (
    <section className="bg-inherit py-12">
      <div className="text-center mb-10 px-4">
        <h5 className="text-sm font-semibold tracking-widest text-secondary uppercase">
          Browse ideas by room
        </h5>
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mt-2 max-w-2xl mx-auto">
          Explore a wealth of inspiring ideas and trends to transform your space
          beautifully.
        </h2>
      </div>

      <div className="flex gap-3 h-[500px] max-w-7xl mx-auto px-4 group">
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`
              relative transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
              ${index === 0 ? "flex-[2]" : "flex-1"}
              group-hover:flex-[1] hover:flex-[2]
            `}
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div>
                <h3 className="text-xl font-semibold">{room.title}</h3>
                <p className="text-sm">{room.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomGallery;
