import React from "react";

export default function Description() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          About Hama Con AI Defect Detector
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hama Con AI Defect Detector is a smart tool that helps homeowners
          quickly spot common issues in their homes, such as cracks, water
          stains, mould, broken tiles, rust, or loose roof parts. Simply upload
          a photo, and our AI provides an easy-to-understand report in seconds.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">What You Get</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-2 text-left md:text-center mb-6">
          <li>
            Identify the defect: cracks, moisture, mould, paint issues, and more
          </li>
          <li>Understand the seriousness: low, medium, or high urgency</li>
          <li>Step-by-step instructions to fix it</li>
          <li>Which professional to call: plumber, handyman, roofer, etc.</li>
          <li>Confidence level of AI analysis (e.g., 80% sure)</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Why Use It</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          This tool gives you a quick, free assessment of your home's issues. It
          doesn't replace a professional inspection, but it helps you:
          <strong>
            spot problems early, save money, and plan repairs efficiently
          </strong>
          .
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">How It Works</h3>
        <ol className="text-gray-700 list-decimal list-inside space-y-2 text-left md:text-center">
          <li>Enter your name, email, and phone number to get your report.</li>
          <li>Upload a photo of the problem area in your home.</li>
          <li>The AI scans the photo and detects possible defects.</li>
          <li>
            Receive a simple report with the problem, urgency, fixes, and tradie
            recommendations.
          </li>
          <li>
            Optionally, book a full inspection with Hama Con for a professional
            check.
          </li>
        </ol>
      </div>
    </section>
  );
}
