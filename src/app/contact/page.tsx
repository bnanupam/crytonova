import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { SiArattai } from "react-icons/si"; 


export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you! Whether you have questions, need support, or want to explore a partnership, our team is here to help.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <a href="mailto:info@cryptonova.in" className="text-blue-600 hover:underline">info@cryptonova.in</a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
            <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+91-412-7187</a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 sm:col-span-2">
            <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-700">1804, Tower-P, Hyde Park, Sector-78 Noida, UP INDIA-201301</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
       <div className="mb-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Us</h2>
   <ul className="space-y-3 text-gray-700">
    <li className="flex items-center space-x-2">
      <FaLinkedin className="text-blue-700 h-5 w-5" />
      <a href="https://www.linkedin.com/company/cryptonova" className="text-blue-600 hover:underline">
        LinkedIn
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <FaTwitter className="text-blue-500 h-5 w-5" />
      <a href="https://twitter.com/cryptonova" className="text-blue-600 hover:underline">
        Twitter
      </a>
    </li>
    {/* <li className="flex items-center space-x-2">
      <FaFacebook className="text-blue-800 h-5 w-5" />
      <a href="https://www.facebook.com/cryptonova" className="text-blue-600 hover:underline">
        Facebook
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <FaWhatsapp className="text-green-600 h-5 w-5" />
      <a href="https://wa.me/1234567890" className="text-blue-600 hover:underline">
        WhatsApp
      </a>
    </li> */}
    <li className="flex items-center space-x-2">
      <FaDiscord className="text-indigo-600 h-5 w-5" />
      <a href="https://discord.gg/cryptonova" className="text-blue-600 hover:underline">
        Discord
      </a>
    </li>
    <li className="flex items-center space-x-2">
       {/* <SiArattai className="text-purple-600 h-5 w-5" /> */}
  <a href="https://arattai.app/cryptonova" className="text-blue-600 hover:underline">
    Arattai
  </a>
    </li>
  </ul>
</div>


        {/* Footer Note */}
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            Our team is available Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24–48 hours. For urgent matters, please call us directly.
          </p>
          <p>
            Thank you for considering Cryptonova for your cybersecurity needs. We look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
}
