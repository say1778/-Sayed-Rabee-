
import React, { useState, useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../constants';

const ProductListingPage: React.FC = () => {
    const categories = useMemo(() => ['All', ...new Set(ALL_PRODUCTS.map(p => p.category))], []);
    const maxPossiblePrice = useMemo(() => Math.ceil(Math.max(...ALL_PRODUCTS.map(p => p.price))), []);
    
    const [searchParams] = ReactRouterDOM.useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState(maxPossiblePrice);

    const filteredProducts = useMemo(() => {
        return ALL_PRODUCTS.filter(product => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesPrice = product.price <= maxPrice;
            const matchesSearch = searchQuery
                ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            
            return matchesCategory && matchesPrice && matchesSearch;
        });
    }, [selectedCategory, maxPrice, searchQuery]);

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                        {searchQuery ? `Results for "${searchQuery}"` : 'Our Products'}
                    </h1>
                     {!searchQuery && (
                        <p className="text-lg text-accent max-w-3xl mx-auto">
                            Explore our curated selection of high-quality products.
                        </p>
                    )}
                </div>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Filters Sidebar */}
                    <aside className="md:w-1/4 lg:w-1/5">
                        <div className="p-6 bg-white rounded-lg shadow-md sticky top-24">
                            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Filters</h2>
                            {/* Category Filter */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3">Category</h3>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${selectedCategory === category ? 'bg-highlight text-white font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
                                            aria-pressed={selectedCategory === category}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Price Filter */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Max Price</h3>
                                <input
                                    type="range"
                                    min="0"
                                    max={maxPossiblePrice}
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="text-center mt-2 text-accent font-medium">
                                    Up to ${maxPrice}
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* Products Grid */}
                    <main className="md:w-3/4 lg:w-4/5">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-accent">No Products Found</h2>
                                <p className="text-gray-500 mt-2">Try adjusting your filters or checking back later.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;
