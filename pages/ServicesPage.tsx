
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            We are dedicated to providing you with an exceptional shopping experience from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-primary">Electronics</h3>
                    <p className="text-accent mt-1">Latest gadgets and tech.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-primary">Fashion</h3>
                    <p className="text-accent mt-1">Trendy apparel and accessories.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-primary">Home Goods</h3>
                    <p className="text-accent mt-1">Stylish decor and furniture.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-primary">Sports & Outdoors</h3>
                    <p className="text-accent mt-1">Gear for your adventures.</p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
