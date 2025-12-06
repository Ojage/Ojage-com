import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

export default function TranslationForm() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');

  const handleSubmit = () => {
    if (sourceText && targetText) {
      alert('Translation submitted! Thank you for your contribution.');
      setSourceText('');
      setTargetText('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Translate this sentence
        </h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
          <p className="text-gray-700 dark:text-gray-300">"How are you doing today?"</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">English → Cameroon Pidgin</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Translation
          </label>
          <textarea
            value={targetText}
            onChange={(e) => setTargetText(e.target.value)}
            placeholder="Enter translation in Cameroon Pidgin..."
            className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            disabled={!targetText.trim()}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium"
          >
            <FiCheck className="h-4 w-4" />
            Submit Translation
          </button>
          <button
            onClick={() => setTargetText('')}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg font-medium"
          >
            <FiX className="h-4 w-4" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

