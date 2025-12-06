import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Community</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our growing community of researchers, developers, and language enthusiasts working
            together to preserve Cameroon's linguistic diversity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to={ROUTES.COMMUNITY_MEMBERS}
              className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow h-full"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Members</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Meet our contributors and see who's making a difference.
              </p>
              <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-medium">
                View Members
                <FiArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to={ROUTES.COMMUNITY_EVENTS}
              className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow h-full"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <FiCalendar className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Events</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join our weekly meetings, workshops, and community events.
              </p>
              <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-medium">
                View Events
                <FiArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

