
import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import type { BlogPost } from '../types';

interface BlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ blogPosts }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">The E-Fusion Blog</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            Stay updated with the latest product news, industry trends, and tips from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;