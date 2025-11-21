"use client";

import ContactForm from "@/component/common/ContactForm";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contactform() {
  return (
    <section className="w-full bg-[#173049] py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Left Side - Contact Info + Socials */}
        <div className="md:w-1/2 flex flex-col justify-between text-white">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-gray-300">
              Have questions or want to book an inspection? Reach out to us
              through the form or via our social media channels.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiPhone className="text-cyan-400" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-cyan-400" />
                <span>info@hamacon.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-cyan-400" />
                <span>123 Main Street, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <div className="relative z-10 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-cyan-300/20 shadow-[0_0_40px_rgba(0,150,255,0.2)] transform">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto ">
        {/* Map */}
        <div className="mt-12 w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902159987595!2d90.39350921543103!3d23.750867784588113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1b7f29fef%3A0x1c2de43e5cf16b38!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1696193650453!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
