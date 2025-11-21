import React from "react";

export default function BeforeAndAfterPhotos() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Before & After Photos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Example photo pair */}
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex-1">
              <img
                src="/images/before1.jpg"
                alt="Before"
                className="w-full h-64 object-cover"
              />
              <p className="text-center mt-2 text-gray-700">Before</p>
            </div>
            <div className="flex-1">
              <img
                src="/images/after1.jpg"
                alt="After"
                className="w-full h-64 object-cover"
              />
              <p className="text-center mt-2 text-gray-700">After</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex-1">
              <img
                src="/images/before2.jpg"
                alt="Before"
                className="w-full h-64 object-cover"
              />
              <p className="text-center mt-2 text-gray-700">Before</p>
            </div>
            <div className="flex-1">
              <img
                src="/images/after2.jpg"
                alt="After"
                className="w-full h-64 object-cover"
              />
              <p className="text-center mt-2 text-gray-700">After</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
