import React from 'react';
import { Home, Search, Plus, User, ChevronDown } from 'lucide-react';

const Navbar = ({ onOpenCreate, onChangeSort, sort }) => {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/80 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-orange-600" />
          <span className="font-bold tracking-tight">Reddit Clone</span>
        </div>

        <div className="relative ml-4 hidden flex-1 items-center md:flex">
          <Search className="absolute left-3 h-5 w-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search posts, communities, people"
            className="w-full rounded-md border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-3 text-sm outline-none ring-orange-500 transition focus:bg-white focus:ring-2 dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder-zinc-400"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onOpenCreate}
            className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-orange-700"
          >
            <Plus className="h-4 w-4" /> Create
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => onChangeSort('hot')}
              className={`rounded-md px-3 py-2 text-sm ${
                sort === 'hot' ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              Hot
            </button>
            <button
              onClick={() => onChangeSort('new')}
              className={`rounded-md px-3 py-2 text-sm ${
                sort === 'new' ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              New
            </button>
            <button
              onClick={() => onChangeSort('top')}
              className={`rounded-md px-3 py-2 text-sm ${
                sort === 'top' ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              Top
            </button>
          </div>

          <button className="ml-2 inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Account</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
