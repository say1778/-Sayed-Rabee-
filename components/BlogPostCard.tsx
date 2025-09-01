
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.author} • {post.date}</p>
        <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
        <p className="text-accent mb-4">{post.excerpt}</p>
        <a href="#" className="font-semibold text-highlight hover:text-teal-700 transition-colors duration-200">Read More &rarr;</a>
      </div>
    </div>
  );
};

export default BlogPostCard;
