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
  const linkClass = (href: string) =>
    `relative group px-2 py-1 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
      pathname === href ? "text-blue-600 font-semibold" : ""
    }`;

  const underlineClass = (href: string) =>
    `absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
      pathname === href ? "scale-x-100" : ""
    }`;
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Cryptonova</h1>
        <nav className="hidden sm:flex space-x-6">
            {navLinks.map(({ href, label }) => (
     <Link key={href} href={href} className={linkClass(href)}>
              {label}
              <span className={underlineClass(href)} />
            </Link>
  ))}
        </nav>
        <MobileDrawer />
      </div>
    </header>
  );
}
