import { motion } from 'framer-motion';

export default function BenchmarksPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Benchmarks</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Evaluation metrics, leaderboards, and performance comparisons for our models.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">Benchmarks coming soon!</p>
        </div>
      </div>
    </div>
  );
}

