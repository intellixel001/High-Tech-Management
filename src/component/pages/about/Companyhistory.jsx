import React from "react";

export default function Companyhistory() {
  return (
    <section className="w-full bg-[#173049] py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581091012184-2f12d0f1e0b2"
            alt="Company History"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Hama Con started with a vision: to help homeowners identify
            structural defects quickly and accurately. From humble beginnings,
            we’ve grown into a trusted name in property inspections, combining
            expert knowledge with the latest AI technology.
          </p>
          <p className="text-white/90 leading-relaxed mb-6">
            Over the years, our team has inspected thousands of homes, helping
            clients save time, money, and stress. Every inspection is backed by
            thorough experience, innovation, and a commitment to excellence.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
