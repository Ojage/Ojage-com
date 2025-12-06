import { useState, useEffect } from 'react';
import { Language } from '../../lib/types';
import { FiGrid, FiList } from 'react-icons/fi';

interface LanguageFiltersProps {
  languages: Language[];
  onFilterChange: (filtered: Language[]) => void;
  viewMode: 'map' | 'table';
  onViewModeChange: (mode: 'map' | 'table') => void;
}

export default function LanguageFilters({
  languages,
  onFilterChange,
  viewMode,
  onViewModeChange,
}: LanguageFiltersProps) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = languages;

    if (statusFilter !== 'all') {
      filtered = filtered.filter((lang) => lang.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (lang) =>
          lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lang.region.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    onFilterChange(filtered);
  }, [statusFilter, searchQuery, languages, onFilterChange]);

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="flex flex-1 gap-4 items-center">
        <input
          type="text"
          placeholder="Search languages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">All Status</option>
          <option value="covered">Covered</option>
          <option value="in-progress">In Progress</option>
          <option value="planned">Planned</option>
        </select>
      </div>
      <div className="flex gap-2 border border-gray-300 dark:border-gray-700 rounded-lg p-1">
        <button
          onClick={() => onViewModeChange('map')}
          className={`p-2 rounded ${
            viewMode === 'map'
              ? 'bg-emerald-600 text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <FiGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => onViewModeChange('table')}
          className={`p-2 rounded ${
            viewMode === 'table'
              ? 'bg-emerald-600 text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <FiList className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

