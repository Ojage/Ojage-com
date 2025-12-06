import { motion } from 'framer-motion';
import DatasetCard from '../../components/research/DatasetCard';
import { Dataset } from '../../lib/types';

// Mock data
const mockDatasets: Dataset[] = [
  {
    id: 'cpidgin-150',
    name: 'CPidgin-150',
    description:
      'A comprehensive parallel dataset for Cameroon Pidgin English with 150K+ sentence pairs for translation and TTS tasks.',
    language: 'Cameroon Pidgin English',
    size: '150K sentences',
    license: 'CC-BY-4.0',
    downloadUrl: '#',
    huggingFaceUrl: '#',
    stats: {
      sentences: 150000,
      words: 2000000,
      speakers: 5000000,
    },
  },
];

export default function DatasetsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Datasets</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Open datasets for NLP research, available under CC-BY-4.0 license.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {mockDatasets.map((dataset) => (
            <DatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      </div>
    </div>
  );
}

