"use client";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];
if (pathname !== "/") {
  navLinks.unshift({ href: "/", label: "Home" });
}
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Cryptonova</h1>
        <nav className="hidden sm:flex space-x-6">
            {navLinks.map(({ href, label }) => (
    <Link key={href} href={href} className="text-gray-600 hover:text-blue-600">
      {label}
    </Link>
  ))}
        </nav>
        <MobileDrawer />
      </div>
    </header>
  );
}
