"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Cryptonova</h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden px-6 pb-4 space-y-2">
          <Link href="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/about" className="block text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/services" className="block text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
      )}
    </header>
  );
}
