import { App } from '@store/data/apps';
import { FC } from 'react';

export const Hero: FC<{ apps: App[]; categories: string[] }> = ({
  apps = [],
  categories = [],
}) => {
  return (
    <section className="bg-base-100 mb-8 rounded-2xl p-6 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">Explore Apps</h1>
      <p className="mt-2 max-w-xl text-sm opacity-70">
        A curated collection of privacy-first, in-browser tools. No tracking. No
        accounts.
      </p>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="badge badge-primary">{apps.length} apps</span>
        <span className="badge badge-primary">
          {categories.length} categories
        </span>
        <span className="badge badge-primary">Open source</span>
      </div>
    </section>
  );
};
