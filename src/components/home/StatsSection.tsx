import { motion } from 'framer-motion';
import { STATS } from '../../lib/constants/config';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function StatsSection() {
  const stats = [
    { label: 'Total Languages', value: STATS.totalLanguages, suffix: '' },
    { label: 'Languages Covered', value: STATS.coveredLanguages, suffix: '' },
    { label: 'Open Datasets', value: STATS.datasets, suffix: '' },
    { label: 'Contributors', value: STATS.contributors, suffix: '+' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-500 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

