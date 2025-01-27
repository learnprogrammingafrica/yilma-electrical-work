"use client";
import React from "react";
import { Award, Users, Star, Trophy } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting Visual Stories Since 2015
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>

          <div className="space-y-24">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description:
                  "Started with a single camera and a dream to tell stories through film.",
                image: "/images/about1.webp",
              },
              {
                year: "2017",
                title: "First Major Project",
                description:
                  "Produced our first award-winning commercial campaign.",
                image: "/images/about2.webp",
              },
              {
                year: "2019",
                title: "Expansion",
                description:
                  "Opened our state-of-the-art studio and expanded our equipment inventory.",
                image: "/images/about3.webp",
              },
              {
                year: "2022",
                title: "International Recognition",
                description:
                  "Began serving international clients and won multiple industry awards.",
                image: "/images/about4.webp",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="text-red-600 text-5xl font-bold">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, stat: "150+", label: "Projects Completed" },
              { icon: Star, stat: "50+", label: "Awards Won" },
              { icon: Users, stat: "100+", label: "Happy Clients" },
              { icon: Award, stat: "10+", label: "Years Experience" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-8 w-8 mx-auto mb-4 text-red-500" />
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Kumsa Tamana",
                role: "Creative Director",
                image: "/images/kumsa.jpg",
              },
              {
                name: "Kumsa Tamana",
                role: "Lead Cinematographer",
                image: "/images/kumsa.jpg",
              },
              {
                name: "Kumsa Tamana",
                role: "Production Manager",
                image: "/images/kumsa.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
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
