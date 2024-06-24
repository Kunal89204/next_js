import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="mb-2">1234 Street Name</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Newsletter</h2>
            <p className="mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-4">Instagram Feed</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">1</div>
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">2</div>
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">3</div>
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">4</div>
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">5</div>
            <div className="w-full h-24 bg-gray-700 flex items-center justify-center">6</div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
