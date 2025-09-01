import React from 'react';
// FIX: Changed import to wildcard to resolve module export issue.
import * as ReactRouterDOM from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import BlogPostCard from '../components/BlogPostCard';
import { FEATURED_PRODUCTS, BLOG_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url('https://picsum.photos/id/1062/1920/1080')"}}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Discover Your Next Favorite Thing</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Quality products, unbeatable prices, and a shopping experience you'll love.</p>
          <ReactRouterDOM.Link to="/promotions" className="bg-highlight text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition-transform duration-300 inline-block transform hover:scale-105">
            Shop Promotions
          </ReactRouterDOM.Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotion Callout */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Big Savings this Season!</h2>
            <p className="text-accent text-lg mb-6">Check out our latest deals and get the best prices on top products.</p>
            <ReactRouterDOM.Link to="/promotions" className="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-highlight transition-colors duration-300 inline-block">
                View All Deals
            </ReactRouterDOM.Link>
        </div>
      </section>

      {/* From the Blog Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
            <ReactRouterDOM.Link to="/blog" className="text-highlight font-semibold text-lg hover:underline">
                Read more posts
            </ReactRouterDOM.Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;