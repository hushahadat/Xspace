"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 bg-primary flex justify-center py-3 md:py-6">
      <nav className="w-full max-w-6xl flex items-center justify-between px-4 md:px-12 py-3 md:py-5 bg-primary20 backdrop-blur-sm rounded-full shadow-sm relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-secondary">✺</span>
          <span className="text-lg md:text-xl font-semibold text-secondary">
            XSpace
          </span>
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-secondary font-medium">
          <li>
            <a href="#" className="hover:text-secondary">
              Explore Ideas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              Find Professionals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              Ask Experts
            </a>
          </li>
        </ul>
        {/* Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-5 py-2 rounded-full border border-secondary text-secondary font-semibold bg-white hover:bg-[#e5e7eb] transition text-sm md:text-base">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-secondary text-white font-semibold hover:bg-secondary90 transition text-sm md:text-base">
            Sign Up
          </button>
        </div>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-secondary"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary20 rounded-b-2xl shadow-md flex flex-col items-center py-4 md:hidden z-50">
            <ul className="flex flex-col gap-4 text-secondary font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  Explore Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  Find Professionals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  Ask Experts
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-4 w-4/5">
              <button className="w-full px-5 py-2 rounded-full border border-secondary text-secondary font-semibold bg-white hover:bg-[#e5e7eb] transition text-sm">
                Login
              </button>
              <button className="w-full px-5 py-2 rounded-full bg-secondary text-white font-semibold hover:bg-secondary90 transition text-sm">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
