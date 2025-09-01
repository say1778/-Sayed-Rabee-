
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { Product } from '../types';

// FIX: Made the `deleteProduct` prop optional to allow the `ProductCard` component to be used in display-only contexts (like the homepage) where administrative actions are not available.
interface ProductCardProps {
  product: Product;
  deleteProduct?: (productId: number) => void;
  addToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, deleteProduct, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleDelete = () => {
    if (deleteProduct && window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      deleteProduct(product.id);
    }
  };
  
  const handleAddToCart = () => {
    if (addToCart) {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1500);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute top-0 right-0 bg-highlight text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">
          {product.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-accent text-lg font-semibold mb-4">
          {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
            {addToCart && (
                 <button 
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`w-full text-white py-2 px-4 rounded-md transition-colors duration-300 ${isAdded ? 'bg-green-500 cursor-not-allowed' : 'bg-secondary hover:bg-highlight group-hover:bg-highlight'}`}
                >
                    {isAdded ? 'Added!' : 'Add to Cart'}
                </button>
            )}
            {/* FIX: Conditionally render the "Edit" and "Delete" buttons only when the `deleteProduct` prop is provided, hiding them in display-only views. */}
            {deleteProduct && (
              <div className="flex space-x-2">
                  <ReactRouterDOM.Link 
                    to={`/edit-product/${product.id}`} 
                    className="flex-1 text-center bg-gray-200 text-primary py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
                    aria-label={`Edit ${product.name}`}
                  >
                      Edit
                  </ReactRouterDOM.Link>
                  <button
                    onClick={handleDelete}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                    aria-label={`Delete ${product.name}`}
                  >
                      Delete
                  </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;