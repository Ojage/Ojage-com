import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../lib/constants/config';
import SEO from '../components/seo/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About OJAGE - Our Mission & Vision"
        description={`Learn about ${SITE_CONFIG.fullName} (${SITE_CONFIG.name}), our mission to build NLP resources for all 273 Cameroon languages, and how you can get involved.`}
        keywords="about OJAGE, mission, vision, open source, NLP initiative, Cameroon languages, linguistic diversity"
        url={`${SITE_CONFIG.url}/about`}
      />
      <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About OJAGE</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {SITE_CONFIG.fullName} ({SITE_CONFIG.name}) is an open-source initiative dedicated to
              creating comprehensive NLP resources for all 273 languages of Cameroon.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {SITE_CONFIG.tagline}. We believe that linguistic diversity is a treasure that must be
              preserved and empowered through technology. By building open datasets, models, and tools,
              we aim to make NLP accessible for all Cameroon languages.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What We Do
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Build and curate high-quality datasets for Cameroon languages</li>
              <li>Develop and release open-source NLP models</li>
              <li>Create tools and demos for translation and text-to-speech</li>
              <li>Foster a community of contributors and researchers</li>
              <li>Publish research findings and best practices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              OJAGE is a community-driven project. Whether you're a researcher, developer, or language
              enthusiast, there's a place for you. Contribute data, code, or expertise to help us reach
              our goal of covering all 273 Cameroon languages.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

