"use client";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SplitText from "../ui/SplitText";
import BlurText from "../ui/BlurText";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-10 px-6 lg:px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Business Info */}
        <div className="space-y-6">
          <div className="text-3xl uppercase font-bold font-mono">
            <SplitText
              text={`HAMA CON BUILDING INSPECTIONS`}
              className="text-center"
              delay={20}
              heighlightsword={[2, 4]}
              heighlightclass={"text-[#D0A102]"}
            />
          </div>
          <div className="text-lg font-work mb-8">
            <BlurText
              text={
                "Sydney's expert building inspection service. 10+ years experience. Same-day reports."
              }
              className="!text-left"
              delay={200}
            />
          </div>

          <div className="space-y-4">
            <Link href="tel:+610428278835">
              <p className="text-[#D0A102] font-work font-bold text-lg">
                +610428278835
              </p>
            </Link>
            <p>19 Burton Avenue Chesterhill 2162 NSW Australia</p>

            <div className="flex items-center space-x-4  cursor-pointer">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="hover:scale-105"
                />
              </a>
              <span className="text-sm font-work">Follow us</span>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="h-64 md:h-full w-full hover:!scale-105 transition-all duration-500 ">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4139249273417!2d151.0050435!3d-33.878992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc55eb40a06f%3A0x3f535381f3a981ae!2s19%20Burton%20Ave%2C%20Chester%20Hill%20NSW%202162%2C%20Australia!5e0!3m2!1sen!2sbd!4v1752845207828!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="rounded-lg opacity-90 hover:opacity-100  "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Hama Con Building Inspections Map"
          /> */}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-[1320px] flex items-center justify-center mx-auto ">
        <p className="text-gray-400 font-work text-sm">
          © 2025 Hama Con Building Inspections. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
