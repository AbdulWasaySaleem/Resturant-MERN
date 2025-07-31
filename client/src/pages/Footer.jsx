import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-purple-900 text-white px-4 py-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-2">FoodieHub</h2>
          <p className="text-gray-300 leading-relaxed">
            Taste the difference with every bite. Fresh, fast, and flavorful meals delivered daily.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/food" className="hover:text-white">Menu</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/" className="hover:text-white">Newsletter</a></li>
            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-base font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 text-lg text-gray-300">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-300"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-sky-300"><FaTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} FoodieHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
