"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Commercial - Sports Brand",
      category: "commercials",
      type: "video",
      thumbnail: "/images/p_sport.webp",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Dynamic sports commercial showcasing athlete performance",
    },
    {
      id: 2,
      title: "Product Photography",
      category: "photography",
      type: "image",
      image: "/images/p_product.webp",
      description: "High-end product photography for luxury brand",
    },
    {
      id: 3,
      title: "Short Film - 'The Journey'",
      category: "films",
      type: "video",
      thumbnail: "/images/p_film.webp",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Award-winning short film about self-discovery",
    },
    {
      id: 4,
      title: "Corporate Event Coverage",
      category: "events",
      type: "image",
      image: "/images/p_event.webp",
      description: "Annual tech conference documentary",
    },
    {
      id: 5,
      title: "Music Video - 'Harmony'",
      category: "music",
      type: "video",
      thumbnail: "/images/p_music.webp",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Visual storytelling through music",
    },
    {
      id: 6,
      title: "Fashion Lookbook",
      category: "photography",
      type: "image",
      image: "/images/p_fashion.webp",
      description: "Summer collection photography series",
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "commercials", label: "Commercials" },
    { id: "films", label: "Films" },
    { id: "photography", label: "Photography" },
    { id: "music", label: "Music Videos" },
    { id: "events", label: "Events" },
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
          style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing our creative excellence
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
                    ? "bg-red-600 text-white"
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
                    width={100}
                    height={100}
                    alt={item.title}
                    className="w-full h-full object-cover"
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
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
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
