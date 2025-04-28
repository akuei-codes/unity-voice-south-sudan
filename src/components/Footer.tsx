
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700">
                <div className="emblem-colors w-full h-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">SSPLM/A</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              South Sudan People's Liberation Movement and Army - Building a united, democratic South Sudan through discipline, clarity, and purpose.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/ssplmsspla" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/ssplmsspla" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/ssplmsspla" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/ssplmsspla" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ssplm" className="hover:text-white transition-colors">SSPLM - Political Wing</Link></li>
              <li><Link to="/sspla" className="hover:text-white transition-colors">SSPLA - Military Wing</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Statements</Link></li>
              <li><Link to="/join" className="hover:text-white transition-colors">Join the Movement</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>General Enquiries: ssplmsspla@gmail.com</li>
              <li>Information Desk: info@ssplmsspla.org</li>
              <li>Political Coordination: ssplm@ssplmsspla.org</li>
              <li>Military Coordination: sspla@ssplmsspla.org</li>
              <li>WhatsApp: +8109051787871</li>
            </ul>
          </div>

          {/* Column 4 - Websites */}
          <div>
            <h3 className="text-white font-bold mb-4">Official Websites</h3>
            <ul className="space-y-2">
              <li><a href="https://www.ssplmsspla.org" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">www.ssplmsspla.org</a></li>
              <li><a href="https://www.ssplmsspla.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">www.ssplmsspla.com</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xs">#ssplmsspla</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© {new Date().getFullYear()} SSPLM/A. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
