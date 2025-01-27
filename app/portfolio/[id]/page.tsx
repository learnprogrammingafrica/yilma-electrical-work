"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    image: "/images/p_maintenance.webp",
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

export default function PortfolioDetailPage() {
  const params = useParams();
  const itemId = Number(params.id);
  const item = portfolioItems.find((itm) => itm.id === itemId);

  if (!item) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-600">
            Project Not Found
          </h1>
          <p className="mt-4 text-gray-700">
            Oops! The requested project does not exist.
          </p>
          <Link href="/portfolio">
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{item.title}</h1>

        {/* If it's a video */}
        {item.type === "video" ? (
          <div className="w-full aspect-video mb-8">
            {/* YouTube iframe */}
            <iframe
              width="100%"
              height="100%"
              src={item.videoUrl}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
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
              loading="lazy"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-gray-700">{item.description}</p>

        {/* Category */}
        <p className="mt-4 italic text-gray-500">
          Category: {formatCategory(item.category)}
        </p>

        {/* Back to All Work */}
        <div className="mt-8">
          <Link href="/portfolio">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper function to format category labels
const formatCategory = (category: string) => {
  switch (category) {
    case "residential":
      return "Residential";
    case "commercial":
      return "Commercial";
    case "industrial":
      return "Industrial";
    case "maintenance":
      return "Maintenance";
    case "smart-home":
      return "Smart Home";
    case "emergency":
      return "Emergency";
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
};
