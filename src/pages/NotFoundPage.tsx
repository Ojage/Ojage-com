import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import { ROUTES } from '../lib/constants/routes';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <FiHome className="h-5 w-5" />
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

