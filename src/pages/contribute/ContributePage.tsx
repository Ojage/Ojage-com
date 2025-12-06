import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMic, FiEdit, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { ROUTES } from '../../lib/constants/routes';
import SEO from '../../components/seo/SEO';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function ContributePage() {
  const waysToContribute = [
    {
      title: 'Record Audio',
      description: 'Record Pidgin sentences to help build our TTS dataset.',
      icon: FiMic,
      href: ROUTES.CONTRIBUTE_RECORD,
      color: 'emerald',
    },
    {
      title: 'Translate Sentences',
      description: 'Help translate sentences between English and Cameroon Pidgin.',
      icon: FiEdit,
      href: ROUTES.CONTRIBUTE_TRANSLATE,
      color: 'blue',
    },
    {
      title: 'Validate Data',
      description: 'Review and validate contributions from the community.',
      icon: FiCheckCircle,
      href: ROUTES.CONTRIBUTE_VALIDATE,
      color: 'purple',
    },
  ];

  return (
    <>
      <SEO
        title="Contribute - Help Build NLP Resources for Cameroon Languages"
        description="Join the OJAGE community and help build NLP resources for all 273 Cameroon languages. Record audio, translate sentences, or validate data. Every contribution matters!"
        keywords="contribute, open source, community, volunteer, data collection, translation, audio recording"
        url={`${SITE_CONFIG.url}/contribute`}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contribute</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us build NLP resources for all 273 Cameroon languages. Every contribution matters!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {waysToContribute.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={way.href}
                  className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      way.color === 'emerald'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30'
                        : way.color === 'blue'
                        ? 'bg-blue-100 dark:bg-blue-900/30'
                        : 'bg-purple-100 dark:bg-purple-900/30'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        way.color === 'emerald'
                          ? 'text-emerald-600 dark:text-emerald-500'
                          : way.color === 'blue'
                          ? 'text-blue-600 dark:text-blue-500'
                          : 'text-purple-600 dark:text-purple-500'
                      }`}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {way.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{way.description}</p>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-500 font-medium">
                    Get Started
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}

