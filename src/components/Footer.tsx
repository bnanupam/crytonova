export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-12">   
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Cryptonova. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>     
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
        </div>    
    </footer>
  );
}