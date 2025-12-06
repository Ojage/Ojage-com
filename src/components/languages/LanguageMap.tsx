import { motion } from 'framer-motion';
import { Language } from '../../lib/types';

interface LanguageMapProps {
  languages: Language[];
}

export default function LanguageMap({ languages }: LanguageMapProps) {
  // Placeholder for map - would integrate with react-map-gl + mapbox-gl
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 h-96 flex items-center justify-center"
    >
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-2">Interactive Map Coming Soon</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Mapbox integration will show language locations across Cameroon
        </p>
      </div>
    </motion.div>
  );
}

