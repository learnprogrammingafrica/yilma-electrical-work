"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-10 w-10 relative">
                {/* Stylized L logo */}
                <div className="absolute inset-0 bg-blue-600 transform rotate-45"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  Y
                </span>
              </div>
              <span className="ml-3 text-white font-bold text-xl">
                YILMA ELECTRICAL SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <Link
                key={name}
                href={path}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm uppercase tracking-wider">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  href={path}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 text-sm uppercase tracking-wider"
                >
                  {name}
                </Link>
              ))}
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
