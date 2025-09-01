import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  updateCartQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary">Your Cart is Empty</h1>
        <p className="mt-4 text-lg text-accent">Looks like you haven't added anything to your cart yet.</p>
        <ReactRouterDOM.Link to="/products" className="mt-8 inline-block bg-highlight text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition-colors duration-300">
          Continue Shopping
        </ReactRouterDOM.Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Your Shopping Cart</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="hidden sm:grid grid-cols-6 gap-4 font-semibold text-accent p-4 border-b">
                    <div className="col-span-3">Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div className="text-right">Total</div>
                </div>
                {cartItems.map(item => (
                    <div key={item.id} className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0">
                        {/* Product Details */}
                        <div className="col-span-6 sm:col-span-3 flex items-center gap-4">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                            <div>
                                <h3 className="font-bold text-primary">{item.name}</h3>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm font-semibold">
                                    Remove
                                </button>
                            </div>
                        </div>
                         {/* Price */}
                        <div className="col-span-2 sm:col-span-1 text-primary">
                            <span className="sm:hidden font-semibold text-accent mr-2">Price: </span>
                            {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </div>
                        {/* Quantity */}
                        <div className="col-span-2 sm:col-span-1 flex items-center">
                             <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="px-3 py-1 border rounded-l-md hover:bg-gray-100">-</button>
                             <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                             <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="px-3 py-1 border rounded-r-md hover:bg-gray-100">+</button>
                        </div>
                        {/* Subtotal */}
                        <div className="col-span-2 sm:col-span-1 text-right font-bold text-primary">
                             <span className="sm:hidden font-semibold text-accent mr-2">Total: </span>
                            {(item.price * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </div>
                    </div>
                ))}
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
             <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-primary border-b pb-4 mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2 text-accent">
                    <span>Subtotal</span>
                    <span>{totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>
                 <div className="flex justify-between mb-6 text-accent">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-xl text-primary border-t pt-4">
                    <span>Total</span>
                    <span>{totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>
                <ReactRouterDOM.Link to="/checkout" className="w-full block text-center bg-highlight text-white py-3 mt-6 rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors">
                    Proceed to Checkout
                </ReactRouterDOM.Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;