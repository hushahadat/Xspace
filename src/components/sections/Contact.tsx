"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <section className="h-auto lg:h-[770px]">
      <div
        className="flex flex-col lg:flex-row items-center lg:justify-between
                    w-full lg:w-[1304px] h-auto lg:h-[700px] mx-auto
                    bg-inherit  overflow-hidden mt-26 mb-22"
      >
        {/* Left Section: Contact Form */}
        <div className="flex flex-col p-4 md:p-11 lg:w-1/2 w-full lg:items-start items-center text-center lg:text-left">
          <h3 className="text-sm uppercase tracking-wider text-secondary mb-2">
            Contact Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-secondary mb-6 leading-tight">
            Let&apos;s Create Something Great Together
          </h1>
          <p className="text-secondary mb-8 max-w-md">
            Slando is a full-service landscape company. Our established systems
            allow us to deliver industry.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="p-4 border bg-white text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="p-4 border bg-white text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Enter Your Message"
                rows={5}
                className="w-full p-4 border bg-white border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-secondary text-white px-8 py-4 rounded-lg
                       hover:bg-orange-600 transition duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Section: Image with Color Palette */}
        <div className="lg:w-1/2 w-full h-[400px] lg:h-full relative overflow-hidden">
          <img
            src="images/contactus.jpg" // Replace with your image path
            alt="Glorious Sunset Color Combination"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
