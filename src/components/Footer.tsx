
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Blue gradient top border */}
      <div className="h-16 bg-gradient-to-b from-[#006fff] to-black"></div>
      
      {/* Main footer content */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and company info */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-4">TDIA Agency</h3>
              <p className="text-gray-400 max-w-md">
                Premier email marketing agency for e-commerce brands looking to scale.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="mb-8 md:mb-0">
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#006fff] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-400 hover:text-[#006fff] transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#006fff] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <a href="mailto:info@lovableagency.com" className="hover:text-[#006fff] transition-colors">
                    info@lovableagency.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="tel:+1234567890" className="hover:text-[#006fff] transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Lovable Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
