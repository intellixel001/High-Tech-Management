import React from "react";

export default function Extensions({ slug }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{slug}</h1>
          <p className="text-lg text-gray-300">
            Professional inspection and management services for residential
            duplex projects.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Overview</h2>
        <p className="text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Steps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p className="text-gray-300">Initial consultation and planning.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p className="text-gray-300">On-site evaluation and inspection.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p className="text-gray-300">Final report and recommendations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
