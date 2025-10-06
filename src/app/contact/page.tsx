export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          We would love to hear from you! Whether you have questions about our services, need support, or want to discuss a potential partnership, our team is here to help.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Email:</strong> <a href="mailto:info@cryptonova.in" className="text-blue-600 hover:underline"> email</a></li>
          <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline"> +123-456-7890</a></li>
          <li><strong>Address:</strong> 123 Cyber St, Secure City, SC 12345</li>    
            <li><strong>Social Media:</strong>
                <ul className="list-disc list-inside ml-5 space-y-1">
                    <li><a href="https://www.linkedin.com/company/cryptonova" className="text-blue-600 hover:underline">LinkedIn</a></li>
                    <li><a href="https://twitter.com/cryptonova" className="text-blue-600 hover:underline">Twitter</a></li>
                    <li><a href="https://www.facebook.com/cryptonova" className="text-blue-600 hover:underline">Facebook</a></li>   
                </ul>
            </li>
        </ul>
        <p className="text-lg text-gray-700 mt-6"> 
            Our team is available Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24-48 hours. For urgent matters, please call us directly.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          Thank you for considering Cryptonova for your cybersecurity needs. We look forward to connecting with you!    
        </p>
      </div>
    </div>
  );
}
