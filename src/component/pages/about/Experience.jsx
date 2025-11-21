import React from "react";

export default function Experience() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Hama Con was founded with a vision to make property inspections smarter and more reliable.",
    },
    {
      year: "2015",
      title: "1000+ Homes Inspected",
      description:
        "We reached a major milestone, having inspected over a thousand homes across the region.",
    },
    {
      year: "2018",
      title: "AI Integration",
      description:
        "Introduced AI-assisted defect detection, making inspections faster and more accurate.",
    },
    {
      year: "2023",
      title: "Trusted by Thousands",
      description:
        "Became a trusted partner for homeowners, real estate agencies, and property managers.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-600 ml-4 md:ml-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-12 relative">
              {/* Dot */}
              <div className="absolute -left-7 md:-left-10 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

              {/* Content */}
              <div className="ml-6 md:ml-12">
                <span className="text-blue-600 font-bold text-lg">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
