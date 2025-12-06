import { useState } from 'react';
import { motion } from 'framer-motion';
import TranslationPanel from '../../components/demo/TranslationPanel';
import TTSPanel from '../../components/demo/TTSPanel';
import FeedbackBar from '../../components/demo/FeedbackBar';
import SEO from '../../components/seo/SEO';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<'translation' | 'tts'>('translation');

  return (
    <>
      <SEO
        title="Try CPidgin-150 - Translation & Text-to-Speech Demo"
        description="Experience our live translation and text-to-speech models for Cameroon Pidgin English. Try translating between English and Pidgin, and generate natural-sounding speech."
        keywords="translation demo, text-to-speech, Cameroon Pidgin, NLP demo, machine translation, TTS, language technology"
        url={`${SITE_CONFIG.url}/demo`}
      />
      <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Try CPidgin-150</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience our translation and text-to-speech models for Cameroon Pidgin English.
          </p>
        </motion.div>

        <div className="mb-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('translation')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'translation'
                ? 'text-emerald-600 dark:text-emerald-500 border-b-2 border-emerald-600 dark:border-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Translation
          </button>
          <button
            onClick={() => setActiveTab('tts')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'tts'
                ? 'text-emerald-600 dark:text-emerald-500 border-b-2 border-emerald-600 dark:border-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Text-to-Speech
          </button>
        </div>

        {activeTab === 'translation' ? <TranslationPanel /> : <TTSPanel />}

        <FeedbackBar />
      </div>
    </div>
    </>
  );
}

