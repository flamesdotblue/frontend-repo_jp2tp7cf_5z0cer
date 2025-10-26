import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const CreatePost = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [subreddit, setSubreddit] = useState('r/javascript');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, body, subreddit });
    setTitle('');
    setBody('');
  };

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center gap-2">
          <select
            value={subreddit}
            onChange={(e) => setSubreddit(e.target.value)}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800"
          >
            <option value="r/javascript">r/javascript</option>
            <option value="r/reactjs">r/reactjs</option>
            <option value="r/webdev">r/webdev</option>
            <option value="r/design">r/design</option>
          </select>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Create a post"
            className="flex-1 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-orange-500 focus:bg-white focus:ring-2 dark:border-zinc-700 dark:bg-zinc-800"
          />
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Text (optional)"
          rows={3}
          className="w-full rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm outline-none ring-orange-500 focus:bg-white focus:ring-2 dark:border-zinc-700 dark:bg-zinc-800"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            <Plus className="h-4 w-4" /> Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
