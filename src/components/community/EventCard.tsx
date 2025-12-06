import { Event } from '../../lib/types';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getColorClasses = (type: Event['type']) => {
    switch (type) {
      case 'meeting':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'workshop':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'conference':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'hackathon':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(event.type)} mb-2`}
          >
            {event.type}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <FiCalendar className="h-4 w-4" />
          {new Date(event.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="h-4 w-4" />
          {event.location}
        </div>
      </div>
      {event.url && (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 mt-4"
        >
          Learn more
          <FiExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

