import { Link } from 'react-router-dom';
import { Paper } from '../../lib/types';
import { ROUTES } from '../../lib/constants/routes';
import { FiArrowRight } from 'react-icons/fi';

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <Link
      to={ROUTES.RESEARCH_PAPER_DETAIL(paper.id)}
      className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{paper.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {paper.authors.join(', ')} • {paper.venue} {paper.year}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{paper.abstract}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <FiArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
      </div>
    </Link>
  );
}

