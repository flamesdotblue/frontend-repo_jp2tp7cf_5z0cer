import React, { useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';

const initialPosts = [
  {
    id: '1',
    subreddit: 'r/javascript',
    author: 'dev_guru',
    title: '10 lesser-known array methods you should know',
    body: 'Some handy methods: at(), toSorted(), toReversed(), with(), flatMap() and more. Here are examples and when to use them... ',
    image: '',
    votes: 1520,
    userVote: 0,
    comments: 238,
    createdAt: Date.now() - 1000 * 60 * 60 * 8,
    timeAgo: '8 hours ago',
  },
  {
    id: '2',
    subreddit: 'r/reactjs',
    author: 'hooks_master',
    title: 'Stop prop-drilling with Context + hooks',
    body: '',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1470&auto=format&fit=crop',
    votes: 980,
    userVote: 0,
    comments: 112,
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
    timeAgo: '2 hours ago',
  },
  {
    id: '3',
    subreddit: 'r/webdev',
    author: 'css_artist',
    title: 'Glassmorphism with just a few utility classes',
    body: 'Blur + background opacity + subtle borders = ✨',
    image: '',
    votes: 320,
    userVote: 0,
    comments: 44,
    createdAt: Date.now() - 1000 * 60 * 30,
    timeAgo: '30 minutes ago',
  },
];

const trending = [
  { id: 't1', title: 'Typescript 5.x release features', subreddit: 'r/typescript', upvotes: 12500 },
  { id: 't2', title: 'React Server Components explained', subreddit: 'r/reactjs', upvotes: 8700 },
  { id: 't3', title: 'Best CSS tricks of 2025', subreddit: 'r/css', upvotes: 6400 },
];

const communities = [
  { name: 'r/javascript', members: 2400000 },
  { name: 'r/reactjs', members: 2200000 },
  { name: 'r/webdev', members: 1800000 },
  { name: 'r/design', members: 900000 },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [sort, setSort] = useState('hot');
  const createRef = useRef(null);

  const sortedPosts = useMemo(() => {
    const arr = [...posts];
    if (sort === 'new') {
      return arr.sort((a, b) => b.createdAt - a.createdAt);
    }
    if (sort === 'top') {
      return arr.sort((a, b) => b.votes - a.votes);
    }
    // hot: blend of votes and recency
    return arr.sort((a, b) => b.votes / Math.pow((Date.now() - b.createdAt) / 3600000 + 2, 1.2) - a.votes / Math.pow((Date.now() - a.createdAt) / 3600000 + 2, 1.2));
  }, [posts, sort]);

  const handleVote = (id, userVote) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, userVote } : p)));
  };

  const handleCreate = ({ title, body, subreddit }) => {
    const newPost = {
      id: Math.random().toString(36).slice(2),
      title: title.trim(),
      body: body.trim(),
      subreddit,
      author: 'you',
      image: '',
      votes: 1,
      userVote: 1,
      comments: 0,
      createdAt: Date.now(),
      timeAgo: 'just now',
    };
    setPosts((prev) => [newPost, ...prev]);
    // scroll to top of feed to show the new post
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const focusCreate = () => {
    createRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar onOpenCreate={focusCreate} onChangeSort={setSort} sort={sort} />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[1fr_320px]">
        <section className="space-y-4">
          <div ref={createRef}>
            <CreatePost onCreate={handleCreate} />
          </div>

          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} onVote={handleVote} />
          ))}
        </section>

        <Sidebar trending={trending} communities={communities} />
      </main>

      <footer className="border-t py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Built as a demo. Sign in, comments, and communities are simulated locally.
      </footer>
    </div>
  );
}
