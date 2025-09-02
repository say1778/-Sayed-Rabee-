import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { NewProductData } from '../types';

interface AddProductPageProps {
  addProduct: (product: NewProductData) => void;
}

const AddProductPage: React.FC<AddProductPageProps> = ({ addProduct }) => {
  const navigate = ReactRouterDOM.useNavigate();
  const [formData, setFormData] = useState<NewProductData>({
    name: '',
    price: 0,
    category: '',
    imageUrl: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  // This function handles the file upload.
  // It uses FileReader to convert the selected image into a base64 data URL.
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      // The onloadend callback updates the component's state with the data URL.
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageUrl: reader.result as string
        }));
      };
      // This initiates the file reading process.
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.price <= 0 || !formData.category || !formData.imageUrl) {
        alert('Please fill out all fields correctly and upload an image.');
        return;
    }
    
    addProduct(formData);
    setSubmitted(true);
    
    setTimeout(() => {
        navigate('/products');
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Add a New Product</h1>
            <p className="text-accent mt-2">Fill in the details below to add a new item to the store catalog.</p>
          </div>
          
          {submitted ? (
             <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Product Added Successfully!</h2>
                <p className="text-accent">Redirecting you to the product list...</p>
              </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                 <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required min="0.01" step="0.01" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                 <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Product Image</label>
                    <div className="mt-1 flex items-center space-x-4">
                      {/* The image preview is displayed here. It's only rendered when a file has been selected and processed. */}
                      {formData.imageUrl && (
                        <img src={formData.imageUrl} alt="Product Preview" className="h-24 w-24 object-cover rounded-md shadow-sm" />
                      )}
                      {/* The file input is triggered by this styled label, replacing the old text input for a URL. */}
                      <label htmlFor="imageUpload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight">
                          <span>Upload Image</span>
                          <input id="imageUpload" name="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
                      </label>
                    </div>
                </div>
                <button type="submit" className="w-full bg-highlight text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-teal-600 transition-colors duration-300">
                    Add Product
                </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;