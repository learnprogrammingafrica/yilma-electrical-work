"use client";
import React from "react";
import {
  Lightbulb,
  PenBoxIcon,
  HardHat,
  Settings,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-[url('/path-to-electrical-background.jpg')] bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-electrical-background.jpg')",
          }}
        />
        <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Powering Your Future
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional Electrical Installation & Maintenance Services
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Electrical Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Residential Electrical Services
              </h3>
              <p className="text-gray-600">
                Comprehensive electrical solutions for your home, ensuring
                safety and efficiency.
              </p>
            </div>

            {/* Commercial Electrical Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <PenBoxIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Commercial Electrical Services
              </h3>
              <p className="text-gray-600">
                Reliable electrical services tailored for businesses and
                commercial establishments.
              </p>
            </div>

            {/* Industrial Electrical Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HardHat className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Industrial Electrical Services
              </h3>
              <p className="text-gray-600">
                Robust electrical installations and maintenance for industrial
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LightBulbIcon className="h-8 w-8 text-blue-500" />,
                title: "Expert Team",
                description:
                  "Skilled electricians with years of industry experience.",
              },
              {
                icon: <HardHat className="h-8 w-8 text-blue-500" />,
                title: "Latest Technology",
                description: "Utilizing state-of-the-art tools and techniques.",
              },
              {
                icon: <Settings className="h-8 w-8 text-blue-500" />,
                title: "Quality Assurance",
                description:
                  "Ensuring high-quality standards in every project.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
                title: "Customer Satisfaction",
                description: "Committed to exceeding client expectations.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
