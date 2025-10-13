import Services from "./services/page";

const links = [
  { href: "/", label: "Cyber Security", icon: "/file.svg" },
  { href: "/", label: "Our Services", icon: "/window.svg" },
];
export default function Home() {
  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16">
      <section className="w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-6 py-8 text-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 drop-shadow-lg">Cybersecurity That Powers Confidence</h1>
          <p className="text-lg sm:text-xl mb-12 text-purple-100">Protect your business with AI-driven security and ethical hacking.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>
      <Services />
      {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
  <li className="bg-white p-6 rounded shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-2">VAPT & Ethical Hacking</h3>
    <p>Identify vulnerabilities before attackers do. Our certified experts simulate real-world threats.</p>
  </li>
  <li className="bg-white p-6 rounded shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-2">AI Threat Detection</h3>
    <p>Leverage machine learning to detect anomalies and prevent breaches in real time.</p>
  </li>
  <li className="bg-white p-6 rounded shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-2">Security Audits</h3>
    <p>Stay compliant and secure with deep audits tailored to your industry and infrastructure.</p>
  </li>
  <li className="bg-white p-6 rounded shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-2">Training & Awareness</h3>
    <p>Empower your team with cybersecurity workshops, phishing simulations, and best practices.</p>
  </li>
</ul> */}
      {/* <ul className="space-y-4 text-gray-700 mt-8">
        <li>✅ Trusted by startups, enterprises, and government agencies</li>
        <li>✅ 24/7 incident response and support</li>
        <li>✅ Transparent pricing and tailored solutions</li>
        <li>✅ 100% client satisfaction rate</li>
      </ul> */}
      <blockquote className="bg-gray-100 p-6 rounded shadow mt-10">
        <p className="text-lg italic text-gray-800">"Cryptonova helped us uncover critical vulnerabilities before launch. Their team is sharp, responsive, and truly cares about our security."</p>
        <footer className="mt-4 text-gray-600">...</footer>
      </blockquote>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Let’s build a safer digital world together.</h2>

      </div>

    </main>

  );
}
