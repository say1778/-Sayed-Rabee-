import React from 'react';
// FIX: Changed import to wildcard to resolve module export issue.
import * as ReactRouterDOM from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-light">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-Fusion</h3>
            <p className="text-gray-400">Your one-stop shop for the latest and greatest products. Quality and customer satisfaction are our top priorities.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map(link => (
                <li key={link.path}>
                  <ReactRouterDOM.Link to={link.path} className="text-gray-400 hover:text-highlight transition-colors duration-200">{link.label}</ReactRouterDOM.Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@e-fusion.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Tech Avenue, Silicon Valley, CA</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-2">Get the latest updates and promotions.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 text-primary rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-highlight text-white px-4 py-2 rounded-r-md hover:bg-teal-600 transition-colors duration-200">Go</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} E-Fusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;