import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "400",
    color: isActive 
      ? theme === "light" ? "#4F46E5" : "#A5B4FC" 
      : theme === "light" ? "#1F2937" : "#E5E7EB",
    position: "relative",
  });

  return (
    <div className={`sticky top-0 z-50 w-full ${theme === "light" ? "bg-white shadow-sm" : "bg-gray-800 shadow-gray-900"} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L5 20L12 32" stroke={theme === "light" ? "#4F46E5" : "#A5B4FC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 8L35 20L28 32" stroke={theme === "light" ? "#4F46E5" : "#A5B4FC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                
                <path d="M22 6L18 34" stroke={theme === "light" ? "#06B6D4" : "#22D3EE"} strokeWidth="3" strokeLinecap="round" />
            
                <circle cx="10" cy="16" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                <circle cx="30" cy="16" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                <circle cx="20" cy="20" r="3" fill={theme === "light" ? "#06B6D4" : "#22D3EE"} />
                <circle cx="10" cy="24" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
                <circle cx="30" cy="24" r="2" fill={theme === "light" ? "#4F46E5" : "#A5B4FC"} />
              </svg>
            </div>
            <span className={`font-bold text-xl ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Code<span className="text-cyan-500">Morph</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" style={navLinkStyles} className="py-2 hover:text-indigo-600 transition-colors">
              Home
            </NavLink>
            <NavLink to="/visualizer" style={navLinkStyles} className="py-2 hover:text-indigo-600 transition-colors">
              Visualizer
            </NavLink>
            <NavLink to="/about" style={navLinkStyles} className="py-2 hover:text-indigo-600 transition-colors">
              About
            </NavLink>
            <NavLink to="/contact" style={navLinkStyles} className="py-2 hover:text-indigo-600 transition-colors">
              Contact
            </NavLink>
          </div>

          {/* Right side with theme toggle and mobile menu button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? 
                <FiX className={`w-6 h-6 ${theme === "light" ? "text-gray-900" : "text-white"}`} /> : 
                <FiMenu className={`w-6 h-6 ${theme === "light" ? "text-gray-900" : "text-white"}`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${theme === "light" ? "bg-white" : "bg-gray-800"} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/" 
              style={navLinkStyles}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/visualizer" 
              style={navLinkStyles}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visualizer
            </NavLink>
            <NavLink 
              to="/about" 
              style={navLinkStyles}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              style={navLinkStyles}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;