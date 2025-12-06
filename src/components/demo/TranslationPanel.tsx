import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCopy, FiRefreshCw } from 'react-icons/fi';

export default function TranslationPanel() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);
    // Simulate API call
    setTimeout(() => {
      setTargetText(`[Translation of: ${sourceText}]`);
      setIsTranslating(false);
    }, 1000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-6"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">English</h3>
          <button
            onClick={() => handleCopy(sourceText)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            title="Copy"
          >
            <FiCopy className="h-4 w-4" />
          </button>
        </div>
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Enter text in English..."
          className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cameroon Pidgin</h3>
          <button
            onClick={() => handleCopy(targetText)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            title="Copy"
          >
            <FiCopy className="h-4 w-4" />
          </button>
        </div>
        <div className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto">
          {isTranslating ? (
            <div className="flex items-center justify-center h-full">
              <FiRefreshCw className="h-6 w-6 animate-spin text-emerald-600" />
            </div>
          ) : targetText ? (
            <p>{targetText}</p>
          ) : (
            <p className="text-gray-400">Translation will appear here...</p>
          )}
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center">
        <button
          onClick={handleTranslate}
          disabled={!sourceText.trim() || isTranslating}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Translate
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}

