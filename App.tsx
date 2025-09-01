import React, { useEffect, useState } from 'react';
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
import BlogPostPage from './pages/BlogPostPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import { ALL_PRODUCTS } from './constants';
import type { Product, NewProductData, CartItem } from './types';

const ScrollToTop = () => {
  const { pathname } = ReactRouterDOM.useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addProduct = (newProductData: NewProductData) => {
    const newProduct: Product = {
      ...newProductData,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  const editProduct = (productId: number, updatedData: NewProductData) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...updatedData, id: productId } : product
      )
    );
  };

  const deleteProduct = (productId: number) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };
  
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
        const itemInCart = prevItems.find(item => item.id === product.id);
        if (itemInCart) {
            return prevItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems => 
        prevItems.map(item => 
            item.id === productId ? { ...item, quantity } : item
        ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <ReactRouterDOM.HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header cartItems={cartItems} />
        <main className="flex-grow">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<HomePage addToCart={addToCart} />} />
            <ReactRouterDOM.Route path="/products" element={<ProductListingPage products={products} deleteProduct={deleteProduct} addToCart={addToCart} />} />
            <ReactRouterDOM.Route path="/about" element={<AboutPage />} />
            <ReactRouterDOM.Route path="/services" element={<ServicesPage />} />
            <ReactRouterDOM.Route path="/blog" element={<BlogPage />} />
            <ReactRouterDOM.Route path="/contact" element={<ContactPage />} />
            <ReactRouterDOM.Route path="/promotions" element={<PromotionsPage />} />
            <ReactRouterDOM.Route path="/affiliates" element={<AffiliatesPage />} />
            <ReactRouterDOM.Route path="/blog/:postId" element={<BlogPostPage />} />
            <ReactRouterDOM.Route path="/add-product" element={<AddProductPage addProduct={addProduct} />} />
            <ReactRouterDOM.Route path="/edit-product/:productId" element={<EditProductPage products={products} editProduct={editProduct} deleteProduct={deleteProduct} />} />
            <ReactRouterDOM.Route path="/cart" element={<CartPage cartItems={cartItems} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />} />
            <ReactRouterDOM.Route path="/checkout" element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />} />
          </ReactRouterDOM.Routes>
        </main>
        <Footer />
      </div>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;