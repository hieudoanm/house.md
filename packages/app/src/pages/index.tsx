import apps from '@store/data/apps.json';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

type TagBrowser = 'extension' | 'web';
type TagMobile = 'android' | 'ios';
type TagNative = 'cli' | 'linux' | 'macos' | 'windows';
type Tag = TagBrowser | TagMobile | TagNative;

enum Category {
  SAAS = 'saas',
  TEMPLATE = 'template',
}

type App = {
  id: string;
  href: string;
  github: string;
  image: string;
  name: string;
  category: Category;
  tags: Tag[];
};

/* ---------- Theme (no useEffect) ---------- */

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
};

const featuredApps = (apps as App[]).slice(0, 5);

const HomePage: NextPage = () => {
  const [{ query }, setState] = useState({ query: '' });
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  // apply theme synchronously
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const filteredApps: App[] = (apps as App[]).filter(
    ({ name = '', tags = [] }) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Navbar */}
      <header className="bg-base-100 sticky top-0 z-10 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-black">
            App Store
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <span>Light</span>
              <input
                type="checkbox"
                className="toggle toggle-sm"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span>Dark</span>
            </label>

            <Link
              href="https://hieudoanm.github.io"
              target="_blank"
              className="text-sm opacity-70 hover:opacity-100">
              Hieu Doan
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Search */}
        <div className="mb-6">
          <input
            placeholder="Search apps…"
            className="input input-bordered w-full"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({ query: e.target.value })
            }
          />
        </div>

        {/* App List */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map(({ id, href, github, image, name, category }) => (
            <div
              key={id}
              className="card bg-base-100 shadow-sm transition hover:shadow-md">
              <div className="card-body p-4">
                <div className="flex gap-4">
                  <div className="border-base-300 flex h-20 w-20 items-center justify-center rounded-xl border text-3xl font-bold">
                    {name.at(0)?.toUpperCase() ?? 'A'}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h2 className="leading-tight font-semibold">{name}</h2>
                    <div className="mt-1 text-xs capitalize opacity-70">
                      {category}
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-3">
                      <Link
                        href={href}
                        target="_blank"
                        className="btn btn-sm btn-primary">
                        View
                      </Link>
                      <Link
                        href={github}
                        target="_blank"
                        className="text-xs opacity-70 hover:underline">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredApps.length === 0 && (
            <div className="col-span-full text-center opacity-60">
              No apps found
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
