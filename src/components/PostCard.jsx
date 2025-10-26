import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const PostCard = ({ post, onVote }) => {
  const handleUpvote = () => onVote(post.id, post.userVote === 1 ? 0 : 1);
  const handleDownvote = () => onVote(post.id, post.userVote === -1 ? 0 : -1);

  const score = post.votes + (post.userVote || 0);

  return (
    <article className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex w-12 flex-col items-center rounded-md bg-zinc-50 py-2 dark:bg-zinc-800">
        <button onClick={handleUpvote} className={`p-1 ${post.userVote === 1 ? 'text-orange-600' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}>
          <ArrowUp className="h-5 w-5" />
        </button>
        <div className="text-sm font-semibold">{score}</div>
        <button onClick={handleDownvote} className={`p-1 ${post.userVote === -1 ? 'text-sky-600' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2 text-xs text-zinc-500">
          <a href="#" className="font-medium text-zinc-900 hover:underline dark:text-zinc-50">{post.subreddit}</a>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
          <span>•</span>
          <span>{post.timeAgo}</span>
        </div>
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold leading-snug">{post.title}</h2>
        {post.image && (
          <img src={post.image} alt="post" className="mb-2 max-h-80 w-full rounded-md object-cover" />
        )}
        {post.body && (
          <p className="mb-2 whitespace-pre-line text-sm text-zinc-700 dark:text-zinc-300">{post.body}</p>
        )}

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
          <button className="inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <MessageSquare className="h-4 w-4" /> {post.comments} Comments
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Bookmark className="h-4 w-4" /> Save
          </button>
          <div className="ml-auto">
            <button className="inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
