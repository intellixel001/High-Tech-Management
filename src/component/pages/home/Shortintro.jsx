import React from "react";

export default function Shortintro() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Quick AI Check for Home Defects
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hama Con’s AI Defect Detector lets homeowners get instant feedback on
          cracks, stains, leaks, mould, damaged tiles and other common issues —
          simply by uploading a photo. It’s fast, easy, and gives you clear
          advice on what the problem might be, how serious it is, and what to do
          next.
        </p>

        <div className="mt-8">
          <p className="text-gray-700 text-lg">
            Not a replacement for a full inspection — just a smart first step.
          </p>
        </div>
      </div>
    </section>
  );
}
