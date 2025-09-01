
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPostPage: React.FC = () => {
  const { postId } = ReactRouterDOM.useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(postId));

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary">Post not found</h1>
        <p className="mt-4 text-lg text-accent">Sorry, we couldn't find the blog post you're looking for.</p>
        <ReactRouterDOM.Link to="/blog" className="mt-8 inline-block bg-highlight text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition-colors">
          Back to Blog
        </ReactRouterDOM.Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article>
          <header className="mb-8 text-center">
             <ReactRouterDOM.Link to="/blog" className="text-highlight font-semibold hover:underline mb-4 inline-block">
                &larr; Back to all posts
              </ReactRouterDOM.Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">{post.title}</h1>
            <div className="text-accent">
              <span>By {post.author}</span>
              <span className="mx-2">&bull;</span>
              <span>{post.date}</span>
            </div>
          </header>
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8" />
          <div className="text-lg text-primary leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;