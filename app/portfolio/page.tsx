"use client";
import React, { useState } from "react";
import { Lightbulb, Settings, HardHat, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Residential Wiring Upgrade",
      category: "residential",
      type: "image",
      image: "/images/p_residential.webp",
      description:
        "Comprehensive wiring upgrade for modern homes ensuring safety and efficiency.",
    },
    {
      id: 2,
      title: "Commercial Lighting Installation",
      category: "commercial",
      type: "video",
      thumbnail: "/images/p_commercial.webp",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description:
        "State-of-the-art lighting solutions for commercial spaces to enhance ambiance and functionality.",
    },
    {
      id: 3,
      title: "Industrial Power Systems",
      category: "industrial",
      type: "image",
      image: "/images/p_industrial.webp",
      description:
        "Robust power system installations tailored for industrial facilities.",
    },
    {
      id: 4,
      title: "Maintenance Service Agreement",
      category: "maintenance",
      type: "image",
      image: "/images/p_maintenance1.webp",
      description:
        "Ongoing maintenance services to ensure electrical systems run smoothly and efficiently.",
    },
    {
      id: 5,
      title: "Smart Home Automation",
      category: "smart-home",
      type: "video",
      thumbnail: "/images/p_smart-home.webp",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description:
        "Integrating smart technology for seamless home automation and control.",
    },
    {
      id: 6,
      title: "Emergency Electrical Repairs",
      category: "emergency",
      type: "image",
      image: "/images/p_emergency.webp",
      description:
        "Quick and reliable emergency repair services to handle unexpected electrical issues.",
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "maintenance", label: "Maintenance" },
    { id: "smart-home", label: "Smart Home" },
    { id: "emergency", label: "Emergency" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/electrical-hero.jpg')" }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing our electrical expertise
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={
                      item.type === "video"
                        ? item.thumbnail ?? "/images/default-thumbnail.webp"
                        : item.image ?? "/images/default-image.webp"
                    }
                    width={500}
                    height={400}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    <div className="mt-4">
                      <Link href={`/portfolio/${item.id}`}>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          View Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
