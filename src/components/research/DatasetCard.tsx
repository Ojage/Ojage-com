import { Dataset } from '../../lib/types';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

interface DatasetCardProps {
  dataset: Dataset;
}

export default function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{dataset.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{dataset.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">Language:</span>
          <span className="ml-2 text-gray-900 dark:text-white">{dataset.language}</span>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Size:</span>
          <span className="ml-2 text-gray-900 dark:text-white">{dataset.size}</span>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">License:</span>
          <span className="ml-2 text-gray-900 dark:text-white">{dataset.license}</span>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Sentences:</span>
          <span className="ml-2 text-gray-900 dark:text-white">
            {dataset.stats.sentences.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <a
          href={dataset.downloadUrl}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm"
        >
          <FiDownload className="h-4 w-4" />
          Download
        </a>
        {dataset.huggingFaceUrl && (
          <a
            href={dataset.huggingFaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium text-sm"
          >
            <FiExternalLink className="h-4 w-4" />
            Hugging Face
          </a>
        )}
      </div>
    </div>
  );
}

