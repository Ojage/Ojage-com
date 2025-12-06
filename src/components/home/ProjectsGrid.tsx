import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGlobe, FiCode, FiDatabase } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';

export default function ProjectsGrid() {
  const projects = [
    {
      title: 'CPidgin-150',
      description: 'A comprehensive dataset for Cameroon Pidgin English with 150K+ parallel sentences for translation and TTS.',
      icon: FiDatabase,
      href: ROUTES.RESEARCH_DATASETS,
      color: 'emerald',
    },
    {
      title: 'Language Map',
      description: 'Interactive visualization of all 273 Cameroon languages, their regions, and current coverage status.',
      icon: FiGlobe,
      href: ROUTES.LANGUAGES,
      color: 'blue',
    },
    {
      title: 'Translation Demo',
      description: 'Try our live translation system for Cameroon Pidgin English with real-time feedback and improvements.',
      icon: FiCode,
      href: ROUTES.DEMO,
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our current initiatives and see how we're building NLP resources for Cameroon languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={project.href}
                  className="block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      project.color === 'emerald'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30'
                        : project.color === 'blue'
                        ? 'bg-blue-100 dark:bg-blue-900/30'
                        : 'bg-purple-100 dark:bg-purple-900/30'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        project.color === 'emerald'
                          ? 'text-emerald-600 dark:text-emerald-500'
                          : project.color === 'blue'
                          ? 'text-blue-600 dark:text-blue-500'
                          : 'text-purple-600 dark:text-purple-500'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-medium">
                    Learn more
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

