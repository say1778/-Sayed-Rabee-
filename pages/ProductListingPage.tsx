import React, { useState, useMemo, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import type { Product } from '../types';

interface ProductListingPageProps {
    products: Product[];
    deleteProduct: (productId: number) => void;
    addToCart: (product: Product) => void;
}

const PRODUCTS_PER_PAGE = 9;

const SORT_OPTIONS = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
];

const ProductListingPage: React.FC<ProductListingPageProps> = ({ products, deleteProduct, addToCart }) => {
    const [adminSearch, setAdminSearch] = useState('');
    const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products]);
    const maxPossiblePrice = useMemo(() => products.length > 0 ? Math.ceil(Math.max(...products.map(p => p.price))) : 1000, [products]);
    
    const [searchParams] = ReactRouterDOM.useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: maxPossiblePrice });
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('featured');
    
    useEffect(() => {
        setPriceRange({ min: 0, max: maxPossiblePrice });
    }, [maxPossiblePrice]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
            const matchesSearch = searchQuery
                ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            
            const matchesAdminSearch = adminSearch
                ? product.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
                  product.category.toLowerCase().includes(adminSearch.toLowerCase()) ||
                  product.id.toString().includes(adminSearch)
                : true;
            
            return matchesCategory && matchesPrice && matchesSearch && matchesAdminSearch;
        });
    }, [products, selectedCategory, priceRange, searchQuery, adminSearch]);

    const sortedProducts = useMemo(() => {
        const productsToSort = [...filteredProducts];
        switch (sortOption) {
            case 'price-asc':
                productsToSort.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                productsToSort.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                productsToSort.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                productsToSort.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'featured':
            default:
                break;
        }
        return productsToSort;
    }, [filteredProducts, sortOption]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, priceRange, searchQuery, sortOption, adminSearch]);

    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return sortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    }, [sortedProducts, currentPage]);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= priceRange.max) {
             setPriceRange(prev => ({ ...prev, min: value }));
        }
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= priceRange.min && value <= maxPossiblePrice) {
            setPriceRange(prev => ({ ...prev, max: value }));
        } else if (value > maxPossiblePrice) {
            setPriceRange(prev => ({ ...prev, max: maxPossiblePrice }));
        }
    };

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
                    <aside className="md:w-1/4 lg:w-1/5">
                        <div className="p-6 bg-white rounded-lg shadow-md sticky top-24">
                            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Filters</h2>
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
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                                <div className="flex items-center space-x-2">
                                    <input 
                                      type="number" 
                                      placeholder="Min" 
                                      value={priceRange.min} 
                                      onChange={handleMinPriceChange} 
                                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-highlight"
                                      aria-label="Minimum price"
                                    />
                                    <span className="text-gray-500">-</span>
                                    <input 
                                      type="number" 
                                      placeholder="Max" 
                                      value={priceRange.max} 
                                      onChange={handleMaxPriceChange} 
                                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-highlight"
                                      aria-label="Maximum price"
                                    />
                                </div>
                                <div className="text-center mt-2 text-accent font-medium">
                                    ${priceRange.min} - ${priceRange.max}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <main className="md:w-3/4 lg:w-4/5">
                         <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b gap-4">
                            <div className="w-full sm:w-auto">
                                <input
                                    type="search"
                                    value={adminSearch}
                                    onChange={(e) => setAdminSearch(e.target.value)}
                                    placeholder="Admin Search (Name, Category, ID)..."
                                    className="w-full px-4 py-2 text-primary bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight"
                                    aria-label="Admin search for products"
                                />
                            </div>
                            <div className="flex items-center space-x-2 w-full sm:w-auto">
                                <label htmlFor="sort-options" className="text-sm font-medium text-gray-700 shrink-0">Sort by:</label>
                                <select
                                    id="sort-options"
                                    name="sort-options"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-highlight focus:border-highlight sm:text-sm rounded-md shadow-sm"
                                    aria-label="Sort products"
                                >
                                    {SORT_OPTIONS.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <p className="text-accent text-sm mb-6">
                            Showing {paginatedProducts.length} of {sortedProducts.length} results
                        </p>
                        {paginatedProducts.length > 0 ? (
                           <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {paginatedProducts.map(product => (
                                    <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} addToCart={addToCart} />
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <div className="mt-12">
                                    <Pagination 
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                    />
                                </div>
                            )}
                           </>
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