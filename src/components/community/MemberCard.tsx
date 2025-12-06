import { Contributor } from '../../lib/types';

interface MemberCardProps {
  member: Contributor;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <span className="text-2xl font-semibold text-emerald-600 dark:text-emerald-500">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
        </div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>{member.contributions} contributions</p>
        <p className="mt-1">{member.languages.length} languages</p>
      </div>
    </div>
  );
}

