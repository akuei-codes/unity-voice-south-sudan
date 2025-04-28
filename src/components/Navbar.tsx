
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'SSPLM', path: '/ssplm' },
    { name: 'SSPLA', path: '/sspla' },
    { name: 'News', path: '/news' },
    { name: 'Documents', path: '/documents' },
    { name: 'Join', path: '/join' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <div className="emblem-colors w-full h-full"></div>
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl">SSPLM/A</h1>
            <p className="text-xs text-gray-600 hidden md:block">South Sudan People's Liberation Movement and Army</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden container mx-auto px-4 pb-4 border-t border-gray-200 animate-fade-in">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="block py-3 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
