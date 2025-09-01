
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-3">
          {/* Contact Form */}
          <div className="p-8 md:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">Thank You!</h2>
                <p className="text-accent text-lg">Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-highlight focus:border-highlight" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-highlight focus:border-highlight" placeholder="Your Email" />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-highlight focus:border-highlight" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={6} value={formData.message} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-highlight focus:border-highlight" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-highlight text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-teal-600 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="p-8 bg-secondary text-light">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <p className="ml-3">123 Tech Avenue<br/>Silicon Valley, CA 94000</p>
              </div>
              <div className="flex items-center">
                <p className="ml-3">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <p className="ml-3">support@e-fusion.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-accent pt-6">
                <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
