"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function MobileDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
const handleNavClick = (href: string) => {
  setOpen(false); // close drawer
  router.push(href);  // navigate
};


  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden p-2 text-gray-700"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Fullscreen Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-6 py-6 space-y-6 text-lg">
          <Link href="/" onClick={() => handleNavClick("/")} className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" onClick={() => handleNavClick("/about")} className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/services" onClick={() => handleNavClick("/services")} className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/contact" onClick={() => handleNavClick("/contact")} className="text-gray-700 hover:text-blue-600">Contact</Link>
          {/* Add more links or content here to test scrolling */}
        </nav>
      </div>
    </>
  );
}
