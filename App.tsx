import React, { useEffect } from 'react';
// FIX: Changed import to wildcard to resolve module export issue.
import * as ReactRouterDOM from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PromotionsPage from './pages/PromotionsPage';
import AffiliatesPage from './pages/AffiliatesPage';
import ProductListingPage from './pages/ProductListingPage';

const ScrollToTop = () => {
  const { pathname } = ReactRouterDOM.useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <ReactRouterDOM.HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<HomePage />} />
            <ReactRouterDOM.Route path="/products" element={<ProductListingPage />} />
            <ReactRouterDOM.Route path="/about" element={<AboutPage />} />
            <ReactRouterDOM.Route path="/services" element={<ServicesPage />} />
            <ReactRouterDOM.Route path="/blog" element={<BlogPage />} />
            <ReactRouterDOM.Route path="/contact" element={<ContactPage />} />
            <ReactRouterDOM.Route path="/promotions" element={<PromotionsPage />} />
            <ReactRouterDOM.Route path="/affiliates" element={<AffiliatesPage />} />
          </ReactRouterDOM.Routes>
        </main>
        <Footer />
      </div>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;