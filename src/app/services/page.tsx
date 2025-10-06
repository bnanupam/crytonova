export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          At Cryptonova, we offer a comprehensive suite of cybersecurity services designed to protect your digital assets and ensure your business remains secure in an ever-evolving threat landscape.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Key Services Include:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Risk Assessment & Management:</strong> Identify vulnerabilities and implement strategies to mitigate risks.</li>
          <li><strong>Penetration Testing:</strong> Simulate cyberattacks to evaluate the security of your systems and applications.</li>
          <li><strong>Security Audits & Compliance:</strong> Ensure your organization meets industry standards and regulatory requirements.</li>
          <li><strong>Incident Response & Recovery:</strong> Rapid response to security breaches to minimize damage and restore operations.</li>    
            <li><strong>AI-Driven Security Solutions:</strong> Leverage artificial intelligence to enhance threat detection and response capabilities.</li> 
            <li><strong>Training & Awareness Programs:</strong> Educate your team on best practices to reduce human error and enhance security culture.</li>    
        </ul>
        <p className="text-lg text-gray-700 mt-6">
          Our team of certified experts utilizes the latest tools and methodologies to deliver tailored solutions that meet your unique needs. Whether you're a startup, enterprise, or government entity, Cryptonova is committed to safeguarding your digital future. Contact us today to learn how we can help you enhance your cybersecurity posture.
        </p>
      </div>
    </div>
  );
}