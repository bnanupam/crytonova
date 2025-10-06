"use client";

import {
  FaShieldAlt,
  FaBug,
  FaBrain,
  FaUserSecret,
  FaLaptopCode,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "VAPT & Ethical Hacking",
      description:
        "Simulate real-world attacks to uncover vulnerabilities before they’re exploited.",
      icon: <FaBug className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "AI Threat Detection",
      description:
        "Leverage machine learning to detect anomalies and prevent breaches in real time.",
      icon: <FaBrain className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Security Audits",
      description:
        "Comprehensive audits tailored to your infrastructure and compliance needs.",
      icon: <FaShieldAlt className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Cyber Awareness Training",
      description:
        "Empower your team with workshops, phishing simulations, and best practices.",
      icon: <FaUserSecret className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Secure App Development",
      description:
        "Build secure-by-design applications with our expert development team.",
      icon: <FaLaptopCode className="h-8 w-8 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16">
      <section className="w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-6 py-8 text-white">
  <div className="text-center">
    <h1 className="text-3xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
      Our Cybersecurity Services
    </h1>
    <p className="text-lg sm:text-xl mb-12 text-purple-100">
      At Cryptonova, we deliver cutting-edge protection with AI, ethical hacking, and secure development.
    </p>
    <a
      href="/contact"
      className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
    >
      Get Started
    </a>
  </div>
</section>

      <div className="max-w-6xl mx-auto text-center  py-6">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
