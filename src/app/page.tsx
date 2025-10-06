import Image from "next/image";
import Header from "./components/Header";
import AboutUs from "./pages/aboutus";
const links = [
  { href: "/", label: "Cyber Security", icon: "/file.svg" },
  // { href: "/", label: "Our Services", icon: "/window.svg" },
];
export default function Home() {
  return (
  
     <div className="min-h-screen font-sans grid grid-rows-[auto_1fr_auto] gap-16 p-8 sm:p-20">
      <Header />
      <main className="row-start-2 flex flex-col gap-8 items-center sm:items-start">
        <AboutUs />
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              src={icon}
              alt={`${label} icon`}
              width={16}
              height={16}
              aria-hidden
            />
            {label}
          </a>
        ))}
      </footer>
    </div>
  );
}
