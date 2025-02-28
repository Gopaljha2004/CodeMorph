import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <footer
      className={`w-full ${
        theme === "light" ? "bg-white border-t border-gray-200" : "bg-gray-800 border-t border-gray-700"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8L5 20L12 32"
                    stroke={theme === "light" ? "#4F46E5" : "#A5B4FC"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 8L35 20L28 32"
                    stroke={theme === "light" ? "#4F46E5" : "#A5B4FC"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L18 34"
                    stroke={theme === "light" ? "#06B6D4" : "#22D3EE"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="16" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                  <circle cx="30" cy="16" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                  <circle cx="20" cy="20" r="3" fill={theme === "light" ? "#06B6D4" : "#22D3EE"} />
                  <circle cx="10" cy="24" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                  <circle cx="30" cy="24" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                </svg>
              </div>
              <span
                className={`font-bold text-lg ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                Code<span className="text-cyan-500">Morph</span>
              </span>
            </NavLink>
            <p
              className={`text-sm text-center md:text-left ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Visualizing Data Structures & Algorithms for better understanding
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`font-semibold mb-3 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={`text-sm hover:text-indigo-600 transition-colors ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/visualizer"
                className={`text-sm hover:text-indigo-600 transition-colors ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Visualizer
              </NavLink>
              <NavLink
                to="/about"
                className={`text-sm hover:text-indigo-600 transition-colors ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-sm hover:text-indigo-600 transition-colors ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`font-semibold mb-3 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Contact Us
            </h3>
            <div className="flex flex-col space-y-2">
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Email: support@codemorph.com
              </p>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Twitter: @CodeMorphDSA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-8 pt-4 border-t ${
            theme === "light" ? "border-gray-200" : "border-gray-700"
          }`}
        >
          <p
            className={`text-sm text-center ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            © {new Date().getFullYear()} CodeMorph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;