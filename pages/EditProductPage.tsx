import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { Product, NewProductData } from '../types';

interface EditProductPageProps {
  products: Product[];
  editProduct: (productId: number, updatedData: NewProductData) => void;
  deleteProduct: (productId: number) => void;
}

const EditProductPage: React.FC<EditProductPageProps> = ({ products, editProduct, deleteProduct }) => {
  const { productId } = ReactRouterDOM.useParams();
  const navigate = ReactRouterDOM.useNavigate();

  const [formData, setFormData] = useState<NewProductData>({
    name: '',
    price: 0,
    category: '',
    imageUrl: '',
  });
  const [originalProductName, setOriginalProductName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [productFound, setProductFound] = useState(true);

  useEffect(() => {
    const productToEdit = products.find(p => p.id === Number(productId));
    if (productToEdit) {
      const { id, ...productData } = productToEdit;
      setFormData(productData);
      setOriginalProductName(productData.name);
    } else {
      setProductFound(false);
    }
  }, [productId, products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
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
        alert('Please fill out all fields correctly and ensure an image is present.');
        return;
    }
    
    if(productId) {
        editProduct(Number(productId), formData);
        setSubmitted(true);
        
        setTimeout(() => {
            navigate('/products');
        }, 2000);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${originalProductName}"? This action cannot be undone.`)) {
      if (productId) {
        deleteProduct(Number(productId));
        navigate('/products');
      }
    }
  };

  if (!productFound) {
    return (
      <div className="bg-gray-100 py-16 flex-grow flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">Product Not Found</h1>
            <p className="mt-4 text-lg text-accent">Sorry, we couldn't find the product you're trying to edit.</p>
            <ReactRouterDOM.Link to="/products" className="mt-8 inline-block bg-highlight text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition-colors">
            Back to Products
            </ReactRouterDOM.Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Edit Product</h1>
            <p className="text-accent mt-2">Update the details for "{originalProductName}".</p>
          </div>
          
          {submitted ? (
             <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Product Updated Successfully!</h2>
                <p className="text-accent">Redirecting you to the product list...</p>
              </div>
          ) : (
            <>
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
                        {/* The image preview is displayed here. It shows the existing image initially and updates when a new one is selected. */}
                        {formData.imageUrl && (
                          <img src={formData.imageUrl} alt="Product Preview" className="h-24 w-24 object-cover rounded-md shadow-sm" />
                        )}
                        {/* The file input is triggered by this styled label. */}
                        <label htmlFor="imageUpload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight">
                            <span>Change Image</span>
                            <input id="imageUpload" name="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
                        </label>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-highlight text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-teal-600 transition-colors duration-300">
                      Update Product
                  </button>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
                  aria-label="Delete this product"
                >
                  Delete Product
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;