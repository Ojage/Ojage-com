import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
              <span>Open Source Initiative</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {SITE_CONFIG.tagline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              {SITE_CONFIG.description}. Building NLP resources, datasets, and models to preserve and empower
              linguistic diversity across Cameroon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ROUTES.DEMO}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Try Demo
                <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to={ROUTES.CONTRIBUTE}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiPlay className="h-5 w-5" />
                Get Involved
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-emerald-500 rounded w-2/3 mt-4"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

