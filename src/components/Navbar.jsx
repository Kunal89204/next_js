import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-300 py-4 fixed w-full top-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            MyCompany
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Search
          </button>
        </div>

        {/* Social Media Links */}
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

      {/* Mobile Menu */}
      <div className="md:hidden px-4 py-2 bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <Link href="/">
              MyCompany
            </Link>
          </div>
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-2 space-y-2">
          <Link href="/" className="block text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="block text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/blog" className="block text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
