import React, { useState } from "react";

const faqData = [
  {
    question: "What is Hama Con AI Defect Detector?",
    answer:
      "Hama Con AI Defect Detector is a smart tool that allows homeowners to quickly identify common home issues like cracks, water stains, mould, broken tiles, rust, and loose roof parts by simply uploading a photo.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the initial defect detection and report are free. It provides a quick assessment to help homeowners spot potential problems early.",
  },
  {
    question: "Does this replace a professional inspection?",
    answer:
      "No. The AI provides guidance and a simple report. For a thorough and accurate assessment, booking a professional inspection with Hama Con is recommended.",
  },
  {
    question: "What kind of defects can the AI detect?",
    answer:
      "Initially, the AI can detect wall cracks, water stains, mould, concrete spalling, rust, loose/broken roof tiles, rotten timber, missing or blocked weep holes, and bubbling or peeling paint.",
  },
  {
    question: "How do I get my full report?",
    answer:
      "After uploading a photo, the AI generates a report showing the defect, urgency, step-by-step fixes, recommended tradie, and confidence level. You can also download it as a PDF or book a full inspection.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
