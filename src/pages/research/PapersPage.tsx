import { motion } from 'framer-motion';
import PaperCard from '../../components/research/PaperCard';
import { Paper } from '../../lib/types';

// Mock data
const mockPapers: Paper[] = [];

export default function PapersPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research Papers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Published papers and preprints from the OJAGE research team.
          </p>
        </motion.div>

        {mockPapers.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No papers published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {mockPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

