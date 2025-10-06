import MobileDrawer from "./MobileDrawer";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Cryptonova</h1>
        <nav className="hidden sm:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <MobileDrawer />
      </div>
    </header>
  );
}
