import React from "react";
import { FaHandsHelping, FaLightbulb, FaShieldAlt } from "react-icons/fa";

export default function Values() {
  const coreValues = [
    {
      icon: <FaHandsHelping size={28} />,
      title: "Integrity",
      description:
        "We are honest, transparent, and always put the homeowner’s best interest first.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Innovation",
      description:
        "We embrace new technology and ideas to deliver smarter, faster inspection solutions.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Reliability",
      description:
        "Our team is trusted, experienced, and committed to providing accurate, actionable results.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          The principles that guide everything we do at Hama Con, ensuring
          trust, innovation, and reliability for every homeowner.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition border border-transparent hover:border-gray-200"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${value.color}`}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
