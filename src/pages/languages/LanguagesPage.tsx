import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageMap from '../../components/languages/LanguageMap';
import LanguageTable from '../../components/languages/LanguageTable';
import LanguageFilters from '../../components/languages/LanguageFilters';
import SEO from '../../components/seo/SEO';
import { SITE_CONFIG } from '../../lib/constants/config';
import { Language } from '../../lib/types';

// Mock data - replace with actual data source
const mockLanguages: Language[] = [
  {
    id: 'cpidgin',
    name: 'Cameroon Pidgin English',
    nativeName: 'Cameroon Pidgin',
    code: 'wes',
    region: 'Southwest, Northwest',
    speakers: 5000000,
    status: 'covered',
    resources: {
      dataset: true,
      model: true,
      tts: true,
    },
  },
];

export default function LanguagesPage() {
  const [filteredLanguages, setFilteredLanguages] = useState<Language[]>(mockLanguages);
  const [viewMode, setViewMode] = useState<'map' | 'table'>('map');

  return (
    <>
      <SEO
        title="Cameroon Languages - Explore All 273 Languages"
        description="Explore all 273 languages of Cameroon. View language details, regions, speaker counts, and available NLP resources including datasets, models, and TTS systems."
        keywords="Cameroon languages, language map, linguistic diversity, language resources, African languages, language documentation"
        url={`${SITE_CONFIG.url}/languages`}
      />
      <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cameroon Languages
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore all 273 languages of Cameroon. Currently covering {mockLanguages.length} language(s).
          </p>
        </motion.div>

        <LanguageFilters
          languages={mockLanguages}
          onFilterChange={setFilteredLanguages}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {viewMode === 'map' ? (
          <LanguageMap languages={filteredLanguages} />
        ) : (
          <LanguageTable languages={filteredLanguages} />
        )}
      </div>
    </div>
    </>
  );
}

