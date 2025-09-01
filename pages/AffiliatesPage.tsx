
import React, { useState } from 'react';

const AffiliatesPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', website: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Affiliate application submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Join Our Affiliate Program</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            Partner with E-Fusion and earn commissions by promoting our products to your audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Why Partner With Us?</h2>
            <div>
              <h3 className="text-xl font-semibold text-primary">Generous Commissions</h3>
              <p className="text-accent">Earn a competitive commission rate on every sale you refer.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">High-Quality Products</h3>
              <p className="text-accent">Promote products your audience will love, from a brand they can trust.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Marketing Support</h3>
              <p className="text-accent">Get access to a library of creative assets, tracking links, and support from our team.</p>
            </div>
          </div>

          {/* Sign-up Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-primary mb-2">Thank You!</h2>
                <p className="text-accent">Your application has been received. We will review it and get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center text-primary mb-6">Apply Now</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website or Social Media Profile</label>
                    <input type="url" name="website" id="website" value={formData.website} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your audience</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-highlight text-white py-3 px-4 rounded-md font-semibold hover:bg-teal-600 transition-colors duration-300">
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatesPage;
