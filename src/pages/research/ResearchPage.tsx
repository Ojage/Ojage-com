import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBook, FiDatabase, FiBarChart2, FiArrowRight } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';
import SEO from '../../components/seo/SEO';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function ResearchPage() {
  const sections = [
    {
      title: 'Research Papers',
      description: 'Published papers, preprints, and research findings from the OJAGE team.',
      icon: FiBook,
      href: ROUTES.RESEARCH_PAPERS,
      count: 0,
    },
    {
      title: 'Datasets',
      description: 'Open datasets for NLP research, available under CC-BY-4.0 license.',
      icon: FiDatabase,
      href: ROUTES.RESEARCH_DATASETS,
      count: 1,
    },
    {
      title: 'Benchmarks',
      description: 'Evaluation metrics, leaderboards, and performance comparisons.',
      icon: FiBarChart2,
      href: ROUTES.RESEARCH_BENCHMARKS,
      count: 0,
    },
  ];

  return (
    <>
      <SEO
        title="Research - Papers, Datasets & Benchmarks"
        description="Explore OJAGE research outputs including published papers, open datasets, and performance benchmarks for NLP models on Cameroon languages."
        keywords="NLP research, research papers, datasets, benchmarks, machine learning, natural language processing, academic research"
        url={`${SITE_CONFIG.url}/research`}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our research outputs, datasets, and benchmarks for Cameroon languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={section.href}
                  className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow h-full"
                >
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {section.count} {section.count === 1 ? 'item' : 'items'}
                    </span>
                    <FiArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}

