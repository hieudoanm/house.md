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

const HomePage: NextPage = () => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredApps: App[] = (apps as App[]).filter(
    ({ name = '', tags = [] }) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Navbar */}
      <div className="bg-base-100 rounded-lg shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="text-xl font-black">
            Store
          </Link>
          <Link
            href="https://hieudoanm.github.io"
            className="text-sm"
            target="_blank">
            Hieu Doan
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="container mx-auto p-4 md:p-8">
        <input
          id="filter"
          name="filter"
          placeholder="Search apps..."
          className="input mb-6 w-full"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setState((prev) => ({ ...prev, query: event.target.value }));
          }}
        />

        {/* App Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredApps.map(
            ({ id, href, github, image, name, category, tags }) => (
              <div
                key={id}
                className="card bg-base-100 overflow-hidden rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                <figure>
                  <img
                    src={image}
                    alt={name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="card-title text-lg md:text-xl">
                      <Link href={href} target="_blank">
                        {name}
                      </Link>
                    </h2>
                    <Link
                      href={github}
                      target="_blank"
                      className="text-primary text-sm underline">
                      GitHub
                    </Link>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="badge badge-primary">{category}</span>
                    {tags.map((tag) => (
                      <span key={tag} className="badge badge-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
