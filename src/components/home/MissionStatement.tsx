import { motion } from 'framer-motion';
import { FiGlobe, FiCode, FiUsers, FiBook } from 'react-icons/fi';

export default function MissionStatement() {
  const pillars = [
    {
      icon: FiGlobe,
      title: 'Linguistic Diversity',
      description: 'Preserving and documenting all 273 Cameroon languages for future generations.',
    },
    {
      icon: FiCode,
      title: 'Open Source',
      description: 'Building transparent, accessible NLP tools and resources for everyone.',
    },
    {
      icon: FiUsers,
      title: 'Community Driven',
      description: 'Empowering local communities to contribute and shape the future of their languages.',
    },
    {
      icon: FiBook,
      title: 'Research Excellence',
      description: 'Advancing NLP research with high-quality datasets and reproducible methods.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            OJAGE is committed to building comprehensive NLP resources for all 273 languages of Cameroon,
            ensuring linguistic diversity is preserved and empowered through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

