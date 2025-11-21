"use client";
import React from "react";
import Link from "next/link";
import ContactForm from "../../common/ContactForm";
import { FiPhoneCall } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="inspectionForm"
      className="relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#18314a] to-[#001F3F] text-white min-h-[90vh] flex items-center"
    >
      {/* Floating Magical Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 magical-orbs"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 py-16 lg:py-28 flex flex-col lg:flex-row gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 w-full lg:w-[65%] pt-10 sm:pt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase drop-shadow-[0_0_20px_rgba(0,100,255,0.4)]">
            Same-Day Building{" "}
            <span className="text-[#d0a102] font-semibold">Inspections –</span>{" "}
            Certified Reports in 24 hours{" "}
            <span className="text-[#d0a102] font-semibold">Guaranteed</span>
          </h1>

          <p className="text-lg text-blue-100 max-w-[700px] leading-relaxed">
            Don’t risk hidden defects. Protect your{" "}
            <span className="text-[#d0a102] font-semibold">
              investment with
            </span>{" "}
            Sydney’s most trusted inspectors.
          </p>

          <div className="grid grid-cols-2 gap-3 text-blue-100 text-base sm:text-lg">
            <p className="flex items-center gap-2">✅ 10+ Years Experience</p>
            <p className="flex items-center gap-2">✅ Same Day Reports</p>
            <p className="flex items-center gap-2">✅ 12 Month Free Advice</p>
            <p className="flex items-center gap-2">✅ All Sydney Areas</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="tel:0428278835"
              className="bg-[#cea004] flex items-center text-white hover:bg-yellow-400 font-bold py-4 px-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500"
            >
              <FiPhoneCall className="text-white mr-2 w-6 h-6 transition-transform duration-300" />
              <span>Call Now</span>
            </Link>

            <Link
              href="/#inspectionForm"
              className="bg-[#cea004] text-white hover:bg-yellow-400 font-bold py-4 px-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500"
            >
              Book My Inspection Now
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[35%] relative">
          <div className="relative z-10 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-cyan-300/20 shadow-[0_0_40px_rgba(0,150,255,0.2)] transform">
            <ContactForm />
          </div>
          <p className="text-base text-cyan-300 font-bold pt-4 text-center">
            ⚡{" "}
            <span className="font-semibold">
              Only 3 Spots Left This Week – Reserve Yours Now!
            </span>
          </p>
        </div>
      </div>

      {/* Magical Orbs CSS */}
      <style jsx>{`
        .magical-orbs {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        /* 20 floating particles */
        .magical-orbs::before,
        .magical-orbs::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-repeat: repeat;
          background-size: 50px 50px;
          border-radius: 50%;
        }

        /* Layer 1 */
        .magical-orbs::before {
          background-image: radial-gradient(
            circle,
            rgba(208, 161, 2, 0.4) 1px,
            transparent 0
          );
          animation: floatOrbs 60s linear infinite;
        }

        /* Layer 2 */
        .magical-orbs::after {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 1px,
            transparent 0
          );
          animation: floatOrbsReverse 80s linear infinite;
        }

        /* Keyframes with random-ish movement */
        @keyframes floatOrbs {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -30px) rotate(45deg);
          }
          50% {
            transform: translate(-40px, 25px) rotate(90deg);
          }
          75% {
            transform: translate(-20px, -50px) rotate(135deg);
          }
          100% {
            transform: translate(0, 0) rotate(180deg);
          }
        }

        @keyframes floatOrbsReverse {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-30px, 40px) rotate(-45deg);
          }
          50% {
            transform: translate(50px, -25px) rotate(-90deg);
          }
          75% {
            transform: translate(-60px, 20px) rotate(-135deg);
          }
          100% {
            transform: translate(0, 0) rotate(-180deg);
          }
        }

        /* Glow effect */
        .magical-orbs::before,
        .magical-orbs::after {
          filter: drop-shadow(0 0 10px rgba(208, 161, 2, 0.6))
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.4));
        }
      `}</style>
    </section>
  );
}
