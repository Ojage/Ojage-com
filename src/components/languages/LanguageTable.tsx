import { Link } from 'react-router-dom';
import { Language } from '../../lib/types';
import { ROUTES } from '../../lib/constants/routes';

interface LanguageTableProps {
  languages: Language[];
}

export default function LanguageTable({ languages }: LanguageTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Language
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Region
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Speakers
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Resources
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {languages.map((language) => (
            <tr key={language.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={ROUTES.LANGUAGE_DETAIL(language.id)}
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-500 hover:underline"
                >
                  {language.name}
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400">{language.nativeName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {language.region}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {language.speakers.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    language.status === 'covered'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                      : language.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {language.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                <div className="flex gap-2">
                  {language.resources.dataset && (
                    <span className="text-emerald-600 dark:text-emerald-500">Dataset</span>
                  )}
                  {language.resources.model && (
                    <span className="text-blue-600 dark:text-blue-500">Model</span>
                  )}
                  {language.resources.tts && (
                    <span className="text-purple-600 dark:text-purple-500">TTS</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

