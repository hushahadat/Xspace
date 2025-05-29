import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16 text-gray-800 rounded-lg shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left Section: Logo, Tagline, Social Icons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          {/* Logo/Placeholder for the four-dot grid "X" icon */}
          <div className="flex items-center justify-center w-12 h-12 mb-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="16" height="16" rx="4" fill="#1A202C" />
              <rect x="24" y="0" width="16" height="16" rx="4" fill="#1A202C" />
              <rect x="0" y="24" width="16" height="16" rx="4" fill="#1A202C" />
              <rect
                x="24"
                y="24"
                width="16"
                height="16"
                rx="4"
                fill="#1A202C"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-4 max-w-xs">
            Crafting Interiors with Elegance and Precision
          </p>
          {/* Social Media Icons - Simplified to match design */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Changed to a simple 'X' for Twitter/X platform */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.75 11.24H14.68l-5.746-7.03L2.25 21.75H.98L9.358 9.309 2.25 2.25h7.599l4.48 5.48L18.244 2.25zm-4.408 15.195l.83-1.015 5.821 7.12H18.24L8.97 7.029l-.83 1.015-5.821-7.12H2.25l8.46 10.4L18.244 2.25h-3.308l-7.227 8.26 8.75 11.24h-3.308l-5.746-7.03L2.25 21.75z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section: Navigation and Contact Info */}
        <div className="flex flex-row lg:flex-col md:lg:flex-col justify-between md:items-end gap-8 w-full lg:w-auto mt-8 lg:mt-0">
          <div className="flex flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-6 lg:text-center  md:text-center  mb-8 lg:mb-0 lg:ml-auto font-semibold">
            <Link href="#" className="hover:text-orange-600 transition-colors">
              Explore Ideas
            </Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">
              Find Professionals
            </Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">
              Ask Expert
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:items-end md:text-center lg:text-left">
            <p>123 Design Street, Creativity City</p>
            <p>+123-456-7890</p>
            <p>hello@xspace.com</p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section: Copyright and Legal Links */}
      <div className="flex flex-col  lg:flex-row md:lg:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>&copy; XSpace 2025 all rights reserved</p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-orange-600 transition-colors">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-orange-600 transition-colors">
            Privacy & Policy
          </a>
          <a href="#" className="hover:text-orange-600 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
