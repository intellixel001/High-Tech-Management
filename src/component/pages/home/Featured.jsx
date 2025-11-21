import React from "react";
import { FaBolt, FaCheckCircle, FaTools } from "react-icons/fa";

export default function Featured() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Why Homeowners Love This Tool
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Built to give instant clarity and confidence — without waiting for a
          full inspection.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-transparent hover:border-blue-500">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <FaBolt size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Quick & Easy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your photo and get instant AI feedback — no waiting, no
              technical knowledge needed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-transparent hover:border-green-500">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition">
              <FaCheckCircle size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Clear, Simple Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get easy-to-understand explanations of possible defects and how
              serious they may be.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-transparent hover:border-orange-500">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition">
              <FaTools size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Helps You Take Action
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Know whether to fix it yourself, call a tradie, or book a full
              Hama Con inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
