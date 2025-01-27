"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Ideally, you'd fetch or import this array from a shared source
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

export default function PortfolioDetailPage() {
  const params = useParams();
  const itemId = Number(params.id);
  const item = portfolioItems.find((itm) => itm.id === itemId);

  if (!item) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="mt-4">Oops! The requested project does not exist.</p>
          <Link href="/portfolio">
            <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading / Title */}
        <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

        {/* If it's a video */}
        {item.type === "video" ? (
          <div className="w-full aspect-video mb-8">
            {/* If you use YouTube iframe */}
            <iframe
              width="100%"
              height="100%"
              src={item.videoUrl}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ) : (
          // If it's an image
          <div className="mb-8">
            <Image
              src={item.image ?? "/images/default-image.webp"}
              alt={item.title}
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-gray-700">{item.description}</p>

        {/* Category */}
        <p className="mt-4 italic text-gray-500">Category: {item.category}</p>

        {/* Back to All Work */}
        <div className="mt-8">
          <Link href="/portfolio">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
