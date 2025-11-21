// "use client";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/service" },
//     { name: "Project", path: "/project" },
//     { name: "Contact", path: "/contact" },
//   ];
//   return (
//     <nav className="bg-[#0C2845] dark:bg-gray-900 shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-2xl font-bold text-blue-600 dark:text-white"
//           >
//             <img className="w-[100px]" src="/logo.png" alt="logo" />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setOpen(!open)}
//               className="text-gray-700 dark:text-gray-200"
//             ></button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//           <div className="px-4 py-3 space-y-2">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 onClick={() => setOpen(false)}
//                 className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "Home", href: "/landing-page" },
  { id: "About", href: "/about" },
  {
    id: "Services",
    href: "/services",
    subLinks: [
      { id: "Building Inspector", href: "/services/building-inspector" },
      { id: "Building and Pest Inspections", href: "/services/building-pest" },
      { id: "New Home Inspection", href: "/services/new-home" },
      {
        id: "Pre Purchase Building Inspections",
        href: "/services/pre-purchase",
      },
      { id: "Pre Sale Building Inspection", href: "/services/pre-sale" },
      { id: "Pre Auction Building Inspection", href: "/services/pre-auction" },
      {
        id: "Practical Completion Inspection",
        href: "/services/practical-completion",
      },
      { id: "Residential Building Inspections", href: "/services/residential" },
    ],
  },
  { id: "CoreLogic Report", href: "/coreLogicReport" },
  { id: "FAQs", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Auto-close drawer after 5 seconds
  useEffect(() => {
    let timer;
    if (menuOpen) timer = setTimeout(() => setMenuOpen(false), 5000);
    return () => clearTimeout(timer);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = (id) => setOpenSubMenu(openSubMenu === id ? null : id);
  const isActive = (href) => pathname.startsWith(href);

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={1200}
            height={640}
            className="h-8 md:h-10 lg:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => item.subLinks && setOpenSubMenu(item.id)}
              onMouseLeave={() => item.subLinks && setOpenSubMenu(null)}
            >
              <Link
                href={item.href}
                className={`font-work-sans font-medium text-base lg:text-lg relative pb-2 transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-white"
                } ${
                  isActive(item.href)
                    ? "font-bold"
                    : "hover:text-gray-300 font-medium"
                }`}
              >
                {item.id}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isActive(item.href)
                      ? "w-full bg-white"
                      : "w-0 bg-white group-hover:w-full"
                  }`}
                ></span>
              </Link>

              {/* Dropdown */}
              {item.subLinks && (
                <div
                  className={`absolute left-0 mt-2 w-64 sm:w-72 bg-black border border-white/20 text-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 ${
                    openSubMenu === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  {item.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      href={subLink.href}
                      className={`block px-3 sm:px-4 py-2 sm:py-3 font-work-sans text-sm sm:text-base transition-colors duration-200 ${
                        isActive(subLink.href)
                          ? "bg-white/10 font-semibold"
                          : "hover:bg-white/5"
                      }`}
                    >
                      {subLink.id}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call + Quote */}
        <div className="flex items-center space-x-2">
          <Link href="tel:+610428278835">
            <span className="font-work-sans font-medium bg-white rounded-md text-black py-1.5 px-3 text-xs sm:text-sm">
              Call Now
            </span>
          </Link>

          <Link href="//#inspectionForm">
            <button className="px-3 cursor-pointer py-1.5 rounded-md bg-gray-900 text-amber-400 border border-amber-400/30 hover:bg-black hover:border-amber-400/50 transition-all duration-300 font-work-sans font-medium shadow-lg hover:shadow-amber-400/20 active:scale-95 text-xs sm:text-sm lg:text-base">
              Quick Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`md:hidden fixed top-12 right-0 h-full w-56 sm:w-64 bg-slate-500 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col px-4 pt-16 pb-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.id}>
              <div
                className="flex justify-between items-center"
                onClick={() => item.subLinks && toggleSubMenu(item.id)}
              >
                <Link
                  href={item.href}
                  className={`block py-2 text-sm sm:text-base font-work-sans ${
                    isActive(item.href)
                      ? "font-bold text-white"
                      : "font-medium text-gray-300 hover:text-white"
                  }`}
                  onClick={() => !item.subLinks && setMenuOpen(false)}
                >
                  {item.id}
                </Link>
                {item.subLinks && (
                  <span className="text-white">
                    {openSubMenu === item.id ? "−" : "+"}
                  </span>
                )}
              </div>

              {item.subLinks && (
                <div
                  className={`pl-3 sm:pl-4 mt-1 sm:mt-2 space-y-2 border-l-2 border-white/20 overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubMenu === item.id
                      ? "opacity-100 max-h-fit"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  {item.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      href={subLink.href}
                      className={`block py-2 px-2 sm:px-3 font-work-sans text-xs sm:text-sm ${
                        isActive(subLink.href)
                          ? "font-semibold text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {subLink.id}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
