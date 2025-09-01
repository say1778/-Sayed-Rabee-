
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute top-0 right-0 bg-highlight text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-accent text-lg font-semibold mb-4">
          {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
        <button className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-highlight transition-colors duration-300 group-hover:bg-highlight">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;