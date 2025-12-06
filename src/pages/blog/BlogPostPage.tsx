import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - replace with actual data fetching
  const post = {
    id: slug || '1',
    title: 'Sample Blog Post',
    excerpt: 'This is a sample blog post excerpt.',
    content: 'Full blog post content goes here...',
    author: 'OJAGE Team',
    date: '2024-01-01',
    category: 'updates',
    tags: ['news', 'update'],
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.BLOG}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-8">
            <span>{post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

