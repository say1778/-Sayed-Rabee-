import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { NewBlogPostData } from '../types';

interface AddBlogPostPageProps {
  addBlogPost: (post: NewBlogPostData) => void;
}

const AddBlogPostPage: React.FC<AddBlogPostPageProps> = ({ addBlogPost }) => {
  const navigate = ReactRouterDOM.useNavigate();
  const [formData, setFormData] = useState<NewBlogPostData>({
    title: '',
    excerpt: '',
    author: '',
    imageUrl: '',
    content: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageUrl: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt || !formData.author || !formData.content || !formData.imageUrl) {
        alert('Please fill out all fields and upload an image.');
        return;
    }
    
    addBlogPost(formData);
    setSubmitted(true);
    
    setTimeout(() => {
        navigate('/blog');
    }, 2000);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Write a New Blog Post</h1>
            <p className="text-accent mt-2">Share your thoughts and updates with your audience.</p>
          </div>
          
          {submitted ? (
             <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Blog Post Published!</h2>
                <p className="text-accent">Redirecting you to the blog...</p>
              </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input type="text" name="author" id="author" value={formData.author} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" />
                </div>
                <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Excerpt</label>
                    <textarea name="excerpt" id="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" placeholder="A short summary of the post..."></textarea>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Featured Image</label>
                    <div className="mt-1 flex items-center space-x-4">
                      {formData.imageUrl && (
                        <img src={formData.imageUrl} alt="Blog post preview" className="h-24 w-24 object-cover rounded-md shadow-sm" />
                      )}
                      <label htmlFor="imageUpload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight">
                          <span>Upload Image</span>
                          <input id="imageUpload" name="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
                      </label>
                    </div>
                </div>
                 <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea name="content" id="content" rows={10} value={formData.content} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight focus:border-highlight" placeholder="Write your blog post here. You can use basic HTML tags like <h2> or <p> for formatting."></textarea>
                </div>
                <button type="submit" className="w-full bg-highlight text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-teal-600 transition-colors duration-300">
                    Publish Post
                </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBlogPostPage;