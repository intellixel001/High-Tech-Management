"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

const ContactForm = ({ review = false }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdklajjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          Phone: formData.phone,
          Email: formData.email,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your message has been sent successfully!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        setFormData({ fullName: "", phone: "", email: "", project: "" });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
      console.error(error);
    }
  };

  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200 hover:-translate-y-2 hover:scale-[.98] duration-500 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] ">
      <h3 className="text-xl sm:text-2xl mx-auto text-center font-bold mb-4">
        Get Your Inspection Report in 24 Hours
      </h3>
      <hr className="border-gray-200 mb-6" />

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full shadow-lg bg-[#cea004] text-white py-3 rounded-lg font-bold hover:bg-yellow-400 hover:scale-[.98] duration-500 transition-all hover:shadow-xl"
        >
          Book My Inspection Today
        </button>
      </form>

      {/* Customer Review Section */}
      {review && (
        <div className="flex items-center gap-3 pt-6 pb-3">
          <div className="flex -space-x-2">
            <Image
              src="/hero/avatar1.jpg"
              alt="Customer"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <Image
              src="/hero/avatar2.jpg"
              alt="Customer"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <Image
              src="/hero/avatar3.jpeg"
              alt="Customer"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
          </div>
          <span className="font-bold text-gray-700 ml-2">
            100% Satisfaction • 100% Success
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
