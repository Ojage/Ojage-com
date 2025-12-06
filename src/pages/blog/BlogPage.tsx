import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogPostCard from '../../components/blog/BlogPostCard';
import { BlogPost } from '../../lib/types';
import { ROUTES } from '../../lib/constants/routes';

// Mock data
const mockPosts: BlogPost[] = [];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'updates', 'research', 'community', 'tutorials'];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stories, updates, and insights from the OJAGE journey.
          </p>
        </motion.div>

        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {mockPosts.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts
              .filter((post) => selectedCategory === 'all' || post.category === selectedCategory)
              .map((post) => (
                <Link key={post.id} to={ROUTES.BLOG_POST(post.id)}>
                  <BlogPostCard post={post} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

