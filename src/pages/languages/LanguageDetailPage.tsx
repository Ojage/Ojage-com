import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';
import SEO from '../../components/seo/SEO';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function LanguageDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - replace with actual data fetching
  const language = {
    id: slug || 'cpidgin',
    name: 'Cameroon Pidgin English',
    nativeName: 'Cameroon Pidgin',
    code: 'wes',
    region: 'Southwest, Northwest',
    speakers: 5000000,
    status: 'covered' as const,
    resources: {
      dataset: true,
      model: true,
      tts: true,
    },
  };

  return (
    <>
      <SEO
        title={`${language.name} - Language Resources & NLP Tools`}
        description={`Learn about ${language.name} (${language.nativeName}), spoken by ${language.speakers.toLocaleString()} people in ${language.region}. Explore available datasets, translation models, and TTS resources.`}
        keywords={`${language.name}, ${language.nativeName}, Cameroon languages, language resources, NLP, translation, TTS`}
        url={`${SITE_CONFIG.url}/languages/${slug}`}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={ROUTES.LANGUAGES}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
          <FiArrowLeft className="h-4 w-4" />
          Back to Languages
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {language.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">{language.nativeName}</p>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Region</dt>
                <dd className="text-lg text-gray-900 dark:text-white">{language.region}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Speakers</dt>
                <dd className="text-lg text-gray-900 dark:text-white">
                  {language.speakers.toLocaleString()}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">ISO Code</dt>
                <dd className="text-lg text-gray-900 dark:text-white">{language.code}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                <dd className="text-lg">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {language.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Resources</h2>
            <div className="space-y-4">
              {language.resources.dataset && (
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Dataset</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CPidgin-150 available</p>
                  </div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                    <FiDownload className="h-4 w-4" />
                    Download
                  </button>
                </div>
              )}
              {language.resources.model && (
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Translation Model</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Available on Hugging Face</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg"
                  >
                    View
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
              {language.resources.tts && (
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">TTS Model</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Text-to-Speech available</p>
                  </div>
                  <Link
                    to={ROUTES.DEMO}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                  >
                    Try Demo
                    <FiExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

