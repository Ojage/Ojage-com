import { useState } from 'react';
import { motion } from 'framer-motion';
import AudioRecorder from '../../components/contribute/AudioRecorder';

export default function RecordPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Record Audio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Record Pidgin sentences to help build our TTS dataset. Your contributions help preserve
            linguistic diversity.
          </p>
        </motion.div>

        <AudioRecorder />
      </div>
    </div>
  );
}

