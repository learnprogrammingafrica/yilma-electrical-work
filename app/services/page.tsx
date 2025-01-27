import React from "react";
import {
  Lightbulb,
  PenToolIcon,
  HardHat,
  Settings,
  Clock,
  Users,
  Settings as Gear,
  PlaySquare,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      category: "Residential Electrical Services",
      icon: Lightbulb,
      description: "Comprehensive electrical solutions for your home",
      services: [
        "Wiring and Rewiring",
        "Lighting Installation",
        "Electrical Panel Upgrades",
        "Home Automation",
      ],
    },
    {
      category: "Commercial Electrical Services",
      icon: PenToolIcon,
      description: "Reliable electrical services for businesses",
      services: [
        "Office Lighting",
        "Data Cabling",
        "Electrical Maintenance",
        "Energy Management",
      ],
    },
    {
      category: "Industrial Electrical Services",
      icon: HardHat,
      description: "Robust electrical installations for industrial facilities",
      services: [
        "Motor Control Systems",
        "Power Distribution",
        "Automation Systems",
        "Safety Compliance",
      ],
    },
    {
      category: "Maintenance & Repair",
      icon: Gear,
      description:
        "Ongoing support to keep your electrical systems running smoothly",
      services: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "System Inspections",
        "Upgrades and Retrofits",
      ],
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Electrical Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional electrical installation and maintenance solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {service.category}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <PlaySquare className="h-5 w-5 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Consultation",
                description:
                  "Understanding your electrical needs and project requirements",
              },
              {
                icon: Settings,
                title: "Design & Planning",
                description:
                  "Creating detailed electrical plans and ensuring compliance",
              },
              {
                icon: Lightbulb,
                title: "Installation",
                description:
                  "Professional installation by certified electricians",
              },
              {
                icon: Clock,
                title: "Testing & Handover",
                description:
                  "Thorough testing to ensure safety and functionality",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <step.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-500" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
