import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Overview() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
          How the AI Defect Detector Works
        </h2>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1581091222447-1e6adc9a57c5"
            alt="Upload Photo"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Step 1: Upload a Photo
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Capture a photo of any visible issue — cracks, leaks, moisture
              spots, mould, stains, or anything unusual. Upload it instantly
              from your phone.
            </p>
            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
              Try Uploading <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Step 2 (Reverse Layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Step 2: AI Scans for Issues
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our AI analyzes your photo and identifies possible defects. It
              explains everything in simple, easy-to-understand language — no
              engineering jargon.
            </p>
            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
              See How It Works <FaArrowRight />
            </button>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="AI scanning"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Report"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Step 3: Get a Simple Report
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Receive a clear summary showing what the issue might be, how
              serious it is, recommended fixes, and which trade professional to
              call if needed.
            </p>
            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
              View Example Report <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-700 mt-12 text-lg">
          A quick, free defect check to help you decide if you need a full
          inspection.
        </p>
      </div>
    </section>
  );
}
