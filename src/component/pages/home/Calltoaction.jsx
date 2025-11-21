import React from "react";

export default function Calltoaction() {
  return (
    <section className="w-full bg-blue-600 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Check Your Home for Defects?
        </h2>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Upload a photo and get an instant AI-powered assessment. Fast, simple,
          and completely free — a smart first step before a full inspection.
        </p>

        <a
          href="/upload"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition"
        >
          Try the AI Defect Detector
        </a>

        <p className="mt-6 text-blue-100">
          Prefer a full inspection?{" "}
          <a href="/book" className="underline font-medium text-white">
            Book with Hama Con
          </a>
        </p>
      </div>
    </section>
  );
}
