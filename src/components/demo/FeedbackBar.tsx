import { useState } from 'react';
import { FiThumbsUp, FiThumbsDown, FiX } from 'react-icons/fi';

export default function FeedbackBar() {
  const [showFeedback, setShowFeedback] = useState(true);
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);

  if (!showFeedback) return null;

  return (
    <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Was this helpful?
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setFeedback('positive')}
              className={`p-2 rounded-lg transition-colors ${
                feedback === 'positive'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiThumbsUp className="h-5 w-5" />
            </button>
            <button
              onClick={() => setFeedback('negative')}
              className={`p-2 rounded-lg transition-colors ${
                feedback === 'negative'
                  ? 'bg-red-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiThumbsDown className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowFeedback(false)}
          className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

