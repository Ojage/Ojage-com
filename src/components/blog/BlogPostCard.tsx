import { BlogPost } from '../../lib/types';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {new Date(post.date).toLocaleDateString()} • {post.category}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

