
import React from 'react';
import type { Product, BlogPost, Service, TeamMember, Promotion, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/add-product', label: 'Add Product' },
  { path: '/services', label: 'Services' },
  { path: '/promotions', label: 'Promotions' },
  { path: '/blog', label: 'Blog' },
  { path: '/affiliates', label: 'Affiliates' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

export const FEATURED_PRODUCTS: Product[] = [
  { id: 1, name: 'Smart Watch', price: 299.99, imageUrl: 'https://picsum.photos/id/180/400/400', category: 'Electronics' },
  { id: 2, name: 'Leather Backpack', price: 149.99, imageUrl: 'https://picsum.photos/id/1025/400/400', category: 'Accessories' },
  { id: 3, name: 'Wireless Headphones', price: 199.99, imageUrl: 'https://picsum.photos/id/1082/400/400', category: 'Electronics' },
  { id: 4, name: 'Modern Desk Chair', price: 350.00, imageUrl: 'https://picsum.photos/id/274/400/400', category: 'Furniture' },
];

export const ALL_PRODUCTS: Product[] = [
  { id: 1, name: 'Smart Watch', price: 299.99, imageUrl: 'https://picsum.photos/id/180/400/400', category: 'Electronics' },
  { id: 2, name: 'Leather Backpack', price: 149.99, imageUrl: 'https://picsum.photos/id/1025/400/400', category: 'Accessories' },
  { id: 3, name: 'Wireless Headphones', price: 199.99, imageUrl: 'https://picsum.photos/id/1082/400/400', category: 'Electronics' },
  { id: 4, name: 'Modern Desk Chair', price: 350.00, imageUrl: 'https://picsum.photos/id/274/400/400', category: 'Furniture' },
  { id: 5, name: 'Classic T-Shirt', price: 29.99, imageUrl: 'https://picsum.photos/id/1066/400/400', category: 'Apparel' },
  { id: 6, name: 'Ceramic Mug Set', price: 45.50, imageUrl: 'https://picsum.photos/id/312/400/400', category: 'Home Goods' },
  { id: 7, name: 'Bluetooth Speaker', price: 89.99, imageUrl: 'https://picsum.photos/id/203/400/400', category: 'Electronics' },
  { id: 8, name: 'Leather Wallet', price: 75.00, imageUrl: 'https://picsum.photos/id/21/400/400', category: 'Accessories' },
  { id: 9, name: 'Ergonomic Keyboard', price: 129.99, imageUrl: 'https://picsum.photos/id/175/400/400', category: 'Electronics' },
  { id: 10, name: 'Linen Throw Pillow', price: 39.99, imageUrl: 'https://picsum.photos/id/327/400/400', category: 'Home Goods' },
  { id: 11, name: 'Denim Jacket', price: 110.00, imageUrl: 'https://picsum.photos/id/431/400/400', category: 'Apparel' },
  { id: 12, name: 'Bookshelf', price: 250.00, imageUrl: 'https://picsum.photos/id/433/400/400', category: 'Furniture' },
  { id: 13, name: 'Sunglasses', price: 180.00, imageUrl: 'https://picsum.photos/id/445/400/400', category: 'Accessories' },
  { id: 14, name: 'Yoga Mat', price: 55.00, imageUrl: 'https://picsum.photos/id/488/400/400', category: 'Sports' },
  { id: 15, name: 'Gaming Mouse', price: 65.00, imageUrl: 'https://picsum.photos/id/42/400/400', category: 'Electronics' },
  { id: 16, name: 'Scented Candle', price: 24.99, imageUrl: 'https://picsum.photos/id/550/400/400', category: 'Home Goods' },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: '10 Reasons to Upgrade Your Tech Today', excerpt: 'Discover why investing in new gadgets can boost your productivity and entertainment.', author: 'Jane Doe', date: 'Oct 24, 2023', imageUrl: 'https://picsum.photos/id/237/600/400', content: '<h2>The Future is Now</h2><p>Technology evolves at a breakneck speed. What was science fiction yesterday is today\'s reality. Upgrading your tech isn\'t just about having the latest toys; it\'s about enhancing efficiency, connectivity, and your overall quality of life. From smart home devices that automate your daily routines to powerful laptops that let you work from anywhere, modern gadgets are designed to solve real-world problems.</p><p>Consider your smartphone. It\'s no longer just a communication device. It\'s your personal assistant, your camera, your navigation system, and your entertainment hub. A newer model often means a better camera for capturing memories, a faster processor for seamless multitasking, and improved battery life to get you through the day. In this post, we\'ll explore ten key areas where a tech upgrade can make a significant difference.</p>' },
  { id: 2, title: 'The Ultimate Guide to Minimalist Home Decor', excerpt: 'Learn how to create a stylish and clutter-free living space with our expert tips.', author: 'John Smith', date: 'Oct 22, 2023', imageUrl: 'https://picsum.photos/id/219/600/400', content: '<h2>Less is More</h2><p>Minimalist design is more than just an aesthetic; it\'s a philosophy. It\'s about decluttering your space to declutter your mind. By focusing on essential items and clean lines, you can create a home that feels calm, organized, and intentional. The key is to choose pieces that are both functional and beautiful, avoiding unnecessary ornamentation.</p><p>Start by evaluating each room. What can you remove? What items serve a purpose, and which just take up space? We\'ll guide you through the process of selecting a neutral color palette, investing in multi-functional furniture, and using texture to add warmth and interest. A minimalist home is not about deprivation; it\'s about creating a sanctuary that reflects clarity and peace.</p>' },
  { id: 3, title: 'Accessorize Like a Pro: A Style Guide', excerpt: 'From watches to bags, find out how the right accessories can complete your look.', author: 'Alex Johnson', date: 'Oct 20, 2023', imageUrl: 'https://picsum.photos/id/305/600/400', content: '<h2>The Finishing Touch</h2><p>Accessories are the exclamation point of an outfit. They have the power to transform a simple look into a statement. Whether it\'s a classic leather watch, a bold necklace, or the perfect handbag, the right accessories can express your personality and elevate your style. But how do you choose the right pieces without overdoing it?</p><p>This guide will teach you the art of accessorizing. We\'ll cover the basics of balancing proportions, mixing metals, and choosing accessories that complement your outfit\'s neckline and color scheme. Learn how to invest in timeless pieces that you\'ll wear for years to come and how to play with trendy items to keep your look fresh and exciting. It\'s all about the details!</p>' },
];

export const SERVICES: Service[] = [
  { id: 1, title: 'Worldwide Shipping', description: 'We ship to over 100 countries, ensuring your products arrive safely and on time.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 16.707l-1.414-1.414A1 1 0 015 14.586V11" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z" /></svg> },
  { id: 2, title: '24/7 Customer Support', description: 'Our dedicated support team is here to help you around the clock with any questions or issues.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" /></svg> },
  { id: 3, title: 'Easy Returns & Exchanges', description: 'Not satisfied with your purchase? We offer a hassle-free 30-day return policy.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9a9 9 0 0114.13-6.36M20 15a9 9 0 01-14.13 6.36" /></svg> },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { id: 1, name: 'Alice Johnson', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/id/64/400/400', bio: 'Alice founded the company with a vision to revolutionize online shopping.' },
    { id: 2, name: 'Bob Williams', role: 'Head of Marketing', imageUrl: 'https://picsum.photos/id/65/400/400', bio: 'Bob is a marketing guru with a passion for connecting with customers.' },
    { id: 3, name: 'Charlie Brown', role: 'Lead Developer', imageUrl: 'https://picsum.photos/id/66/400/400', bio: 'Charlie builds the amazing experiences you see on our site.' },
];

export const PROMOTIONS: Promotion[] = [
    { id: 1, title: 'Autumn Sale - 25% Off', description: 'Get 25% off all items in our fall collection. Limited time offer!', imageUrl: 'https://picsum.photos/id/431/600/400', code: 'AUTUMN25' },
    { id: 2, title: 'Free Shipping Weekend', description: 'Enjoy free shipping on all orders over $50 this weekend only.', imageUrl: 'https://picsum.photos/id/532/600/400', code: 'FREESHIP' },
    { id: 3, title: 'Tech Deals', description: 'Save up to 40% on select electronics, including headphones, smart watches, and more.', imageUrl: 'https://picsum.photos/id/12/600/400', code: 'TECH40' },
];