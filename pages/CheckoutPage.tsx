import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { CartItem } from '../types';

interface CheckoutPageProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, clearCart }) => {
  const navigate = ReactRouterDOM.useNavigate();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Redirect if cart is empty
    if (cartItems.length === 0 && !submitted) {
      navigate('/products');
    }
  }, [cartItems, navigate, submitted]);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 4000); // Redirect to homepage after 4 seconds
  };
  
  if (submitted) {
    return (
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold text-primary">Thank You For Your Order!</h1>
        <p className="mt-4 text-lg text-accent">Your purchase has been completed successfully.</p>
        <p className="mt-2 text-accent">You will be redirected to the homepage shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
          {/* Shipping and Payment Forms */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            {/* Shipping Information */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input type="text" id="address" name="address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                 <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" id="city" name="city" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
                  <input type="text" id="zip" name="zip" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
              </div>
            </section>
            
            {/* Payment Details */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">Payment Details</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                 <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="123" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
               </div>
            </section>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-primary border-b pb-4 mb-4">Your Order</h2>
              <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
                        <div>
                            <p className="font-semibold text-primary">{item.name}</p>
                            <p className="text-accent">Qty: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="text-primary font-medium">{(item.price * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-accent">
                    <span>Subtotal</span>
                    <span>{totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                  </div>
                  <div className="flex justify-between text-accent">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-primary border-t pt-4 mt-2">
                    <span>Total</span>
                    <span>{totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                  </div>
              </div>
              <button type="submit" className="w-full bg-highlight text-white py-3 mt-6 rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors">
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
