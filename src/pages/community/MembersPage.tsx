import { motion } from 'framer-motion';
import MemberCard from '../../components/community/MemberCard';
import { Contributor } from '../../lib/types';

// Mock data
const mockMembers: Contributor[] = [];

export default function MembersPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Community Members</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Meet the contributors making OJAGE possible.
          </p>
        </motion.div>

        {mockMembers.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No members yet. Be the first to join!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {mockMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

