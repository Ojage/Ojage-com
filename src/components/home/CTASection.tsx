import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function CTASection() {
  return (
    <section className="py-20 bg-emerald-600 dark:bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
            Help us build NLP resources for all 273 Cameroon languages. Contribute data, code, or expertise
            to preserve linguistic diversity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ROUTES.CONTRIBUTE}
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white border border-emerald-500 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              <FiGithub className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

