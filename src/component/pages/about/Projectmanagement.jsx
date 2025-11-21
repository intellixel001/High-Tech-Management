import React from "react";
import {
  FaRegClipboard,
  FaProjectDiagram,
  FaTasks,
  FaCheck,
} from "react-icons/fa";

export default function Projectmanagement() {
  const steps = [
    {
      title: "Plan",
      description:
        "We assess your needs and define a clear plan for each inspection, ensuring nothing is missed.",
      icon: <FaRegClipboard size={28} />,
      image: "https://images.unsplash.com/photo-1581092334673-6b5d3f7fc3d5",
    },
    {
      title: "Organize",
      description:
        "Schedules, resources, and logistics are coordinated seamlessly for efficient inspections.",
      icon: <FaProjectDiagram size={28} />,
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      title: "Execute",
      description:
        "Inspections are performed professionally with expert guidance and AI-assisted analysis.",
      icon: <FaTasks size={28} />,
      image: "https://images.unsplash.com/photo-1581091215363-473f7c949e6f",
    },
    {
      title: "Deliver",
      description:
        "We provide clear, actionable reports and ensure your issues are resolved efficiently.",
      icon: <FaCheck size={28} />,
      image: "https://images.unsplash.com/photo-1601582586268-307bcb2a14ff",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          How We Manage Your Projects
        </h2>

        <div className="flex flex-col space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
