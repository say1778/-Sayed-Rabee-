
import React, { useState } from 'react';
// FIX: Changed import to wildcard to resolve module export issue.
import * as ReactRouterDOM from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = ReactRouterDOM.useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };
  
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-10">
            <div className="flex-shrink-0">
              <ReactRouterDOM.Link to="/" className="text-2xl font-bold text-highlight flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                E-Fusion
              </ReactRouterDOM.Link>
            </div>
            <nav className="hidden md:flex md:items-center md:space-x-8">
              {NAV_LINKS.map((link) => (
                <ReactRouterDOM.NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-highlight' : 'text-primary hover:text-highlight'}`
                  }
                >
                  {link.label}
                </ReactRouterDOM.NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
             <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-48 lg:w-64 py-2 pl-4 pr-10 text-primary bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-white transition-all duration-300"
                  aria-label="Search products"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-highlight" aria-label="Submit search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </button>
            </form>
            <ReactRouterDOM.Link to="/cart" className="relative text-primary hover:text-highlight transition-colors p-2" aria-label={`Shopping cart with ${totalItemsInCart} items`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {totalItemsInCart > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {totalItemsInCart}
                </span>
              )}
            </ReactRouterDOM.Link>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-highlight focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="p-4 border-b border-gray-200">
             <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full py-2 pl-4 pr-10 text-primary bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-white"
                  aria-label="Search products"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500" aria-label="Submit search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </button>
             </form>
           </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <ReactRouterDOM.NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-highlight text-white' : 'text-primary hover:bg-gray-100'
                  }`
                }
              >
                {link.label}
              </ReactRouterDOM.NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;