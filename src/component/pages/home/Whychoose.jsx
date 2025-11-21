import React from "react";

export default function Whychoose() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Why Choose Hama Con?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Point 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Experienced Inspectors
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team brings years of hands-on experience in identifying real
              structural issues, not just surface-level defects.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Trusted by Homeowners
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Thousands of homeowners rely on our inspections and reports to
              make confident decisions about their property’s safety.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Clear & Simple Reports
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No confusing engineering terms — just clear findings, photos, and
              practical recommendations you can act on.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 mt-12 text-lg max-w-3xl mx-auto">
          Hama Con combines real expertise with modern AI tools to give
          homeowners fast answers and reliable inspections when it matters most.
        </p>
      </div>
    </section>
  );
}
