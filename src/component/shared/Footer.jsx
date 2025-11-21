"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SplitText from "../ui/SplitText";
import BlurText from "../ui/BlurText";

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com" },
  { icon: <FaInstagram />, href: "https://www.instagram.com" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com" },
  { icon: <FaTwitter />, href: "https://www.twitter.com" },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Info */}
        <div className="space-y-6">
          <div className="text-3xl uppercase font-bold font-mono">
            <SplitText
              text="HAMA CON BUILDING INSPECTIONS"
              className="text-left md:text-left"
              delay={20}
              heighlightsword={[2, 4]}
              heighlightclass="text-[#D0A102]"
            />
          </div>
          <div className="text-lg font-work">
            <BlurText
              text="Sydney's expert building inspection service. 10+ years experience. Same-day reports."
              className="!text-left"
              delay={200}
            />
          </div>

          <div className="space-y-3">
            <Link href="tel:+610428278835">
              <p className="text-[#D0A102] font-bold text-lg cursor-pointer">
                +61 0428 278 835
              </p>
            </Link>
            <p>19 Burton Avenue, Chesterhill 2162 NSW, Australia</p>

            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#D0A102] transition text-lg"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-[#D0A102] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="h-64 md:h-full w-full rounded-lg overflow-hidden shadow-md">
          {/* Uncomment iframe to enable Google Map */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            className="rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Hama Con Map"
          /> */}
          <div className="flex items-center justify-center h-full text-gray-500 italic">
            Map will appear here
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hama Con Building Inspections. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
