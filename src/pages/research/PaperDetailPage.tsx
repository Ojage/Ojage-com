import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';

export default function PaperDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - replace with actual data fetching
  const paper = {
    id: slug || '1',
    title: 'Sample Paper Title',
    authors: ['Author 1', 'Author 2'],
    venue: 'Conference Name',
    year: 2024,
    abstract: 'Paper abstract goes here...',
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.RESEARCH_PAPERS}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Papers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{paper.title}</h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {paper.authors.join(', ')} • {paper.venue} {paper.year}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Abstract</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{paper.abstract}</p>
          </div>

          <div className="flex gap-4">
            {paper.pdfUrl && (
              <a
                href={paper.pdfUrl}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                <FiDownload className="h-4 w-4" />
                Download PDF
              </a>
            )}
            {paper.arxivId && (
              <a
                href={`https://arxiv.org/abs/${paper.arxivId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium"
              >
                View on arXiv
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

