import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi';

export default function TTSPanel() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Text-to-Speech (Cameroon Pidgin)
        </h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text in Cameroon Pidgin..."
          className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-4"
        />
        <div className="flex gap-4 items-center">
          <button
            onClick={handleGenerate}
            disabled={!text.trim() || isGenerating}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {isGenerating ? (
              <>
                <FiRefreshCw className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Audio'
            )}
          </button>
          {!isGenerating && (
            <button
              onClick={handlePlay}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {isPlaying ? (
                <>
                  <FiPause className="h-4 w-4" />
                  Pause
                </>
              ) : (
                <>
                  <FiPlay className="h-4 w-4" />
                  Play
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

