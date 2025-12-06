import { useState } from 'react';
import { FiMic, FiSquare, FiPlay, FiPause, FiUpload } from 'react-icons/fi';

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setHasRecording(true);
    }
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSubmit = () => {
    // Submit recording
    alert('Recording submitted! Thank you for your contribution.');
    setHasRecording(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Sentence to Record
        </h3>
        <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          "How are you doing today?"
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="w-32 h-32 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <button
            onClick={handleRecord}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-colors ${
              isRecording
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {isRecording ? (
              <FiSquare className="h-12 w-12" />
            ) : (
              <FiMic className="h-12 w-12" />
            )}
          </button>
        </div>

        {isRecording && (
          <p className="text-red-600 dark:text-red-400 font-medium">Recording...</p>
        )}

        {hasRecording && !isRecording && (
          <>
            <div className="flex gap-4">
              <button
                onClick={handlePlay}
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg font-medium"
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
            </div>
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              <FiUpload className="h-5 w-5" />
              Submit Recording
            </button>
          </>
        )}
      </div>
    </div>
  );
}

