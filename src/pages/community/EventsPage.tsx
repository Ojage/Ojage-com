import { motion } from 'framer-motion';
import EventCard from '../../components/community/EventCard';
import { Event } from '../../lib/types';

// Mock data
const mockEvents: Event[] = [];

export default function EventsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Events</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join our weekly meetings, workshops, and community events.
          </p>
        </motion.div>

        {mockEvents.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No upcoming events. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

