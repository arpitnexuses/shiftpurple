import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';
import logo from './asset/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="ShiftPurple Logo" className="ml-2 h-14" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link>
            <Link to="/benefits" className="text-gray-600 hover:text-gray-900">Benefits</Link>
            <Link to="/use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</Link>
            <Link to="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
          </nav>

          {/* CTA Button */}
          <div>
            <button className="bg-[#900D24] hover:bg-red-800 text-white px-6 py-2 rounded-md text-sm font-medium pt-3 pb-3">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header