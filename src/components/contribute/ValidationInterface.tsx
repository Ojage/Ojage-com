import { useState } from 'react';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';

export default function ValidationInterface() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock validation tasks
  const tasks = [
    {
      id: 1,
      source: 'How are you?',
      target: 'How you dey?',
      type: 'translation',
    },
    {
      id: 2,
      source: 'Good morning',
      target: 'Mornin',
      type: 'translation',
    },
  ];

  const currentTask = tasks[currentIndex];

  const handleApprove = () => {
    // Approve task
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleReject = () => {
    // Reject task
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    // Skip task
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Validate Translation</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {tasks.length}
          </span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-3">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Source (English)</p>
            <p className="text-gray-900 dark:text-white">{currentTask.source}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Target (Cameroon Pidgin)</p>
            <p className="text-gray-900 dark:text-white">{currentTask.target}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleApprove}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          <FiCheck className="h-5 w-5" />
          Approve
        </button>
        <button
          onClick={handleReject}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          <FiX className="h-5 w-5" />
          Reject
        </button>
        <button
          onClick={handleSkip}
          className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium"
        >
          <FiArrowRight className="h-5 w-5" />
          Skip
        </button>
      </div>
    </div>
  );
}

