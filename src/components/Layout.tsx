
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users, Calendar, Vote, Mail, CreditCard } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/about', label: 'About', icon: Users },
    { path: '/leadership', label: 'Leadership', icon: Users },
    { path: '/membership', label: 'Membership', icon: Users },
    { path: '/welfare', label: 'Welfare', icon: Heart },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/elections', label: 'Elections', icon: Vote },
    { path: '/transparency', label: 'Finance', icon: CreditCard },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-red-500 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-600">DeKUMSA</h1>
                <p className="text-xs text-green-600 font-medium">Together We Can</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navItems.slice(0, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-red-100 text-red-700'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-red-100 text-red-700'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">DeKUMSA</h3>
                  <p className="text-sm text-yellow-400">Together We Can</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Dedan Kimathi University Mulembe Students Association - Building unity, culture, and excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About DeKUMSA</Link></li>
                <li><Link to="/membership" className="text-gray-300 hover:text-white text-sm">Join Us</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white text-sm">Events</Link></li>
                <li><Link to="/welfare" className="text-gray-300 hover:text-white text-sm">Welfare Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 dekumsafamily@gmail.com</p>
                <p>📍 Dedan Kimathi University, Nyeri</p>
                <p>📱 WhatsApp: +254 741 224 547</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2025 DeKUMSA. All rights reserved. | Together We Can</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
