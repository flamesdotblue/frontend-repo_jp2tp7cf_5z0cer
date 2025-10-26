import React from 'react';
import { Hash, Trophy, Flame } from 'lucide-react';

const Sidebar = ({ trending, communities }) => {
  return (
    <aside className="hidden w-full max-w-xs space-y-6 md:block">
      <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-3 font-semibold">Trending today</h3>
        <ul className="space-y-3">
          {trending.map((item) => (
            <li key={item.id} className="group">
              <a
                href="#"
                className="flex items-start gap-3 rounded-md p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Flame className="mt-0.5 h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium group-hover:underline">{item.title}</p>
                  <p className="text-xs text-zinc-500">{item.subreddit} • {item.upvotes.toLocaleString()} upvotes</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-3 font-semibold">Top Communities</h3>
        <ul className="space-y-2">
          {communities.map((c) => (
            <li key={c.name}>
              <a
                href="#"
                className="flex items-center justify-between rounded-md p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-xs text-zinc-500">{c.members.toLocaleString()} members</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
          <Trophy className="h-4 w-4" /> View Top
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
