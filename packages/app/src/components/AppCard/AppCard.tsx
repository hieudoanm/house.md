import { App } from '@store/data/apps';
import Link from 'next/link';
import { FC, memo } from 'react';

type AppCardProps = {
  app: App;
  featured?: boolean;
};

export const AppCard: FC<AppCardProps> = memo(({ app, featured }) => {
  const { name, category, href, github } = app;

  return (
    <article
      tabIndex={0}
      aria-label={`${name} app`}
      className={[
        'group card bg-base-100 shadow-sm transition',
        'hover:-translate-y-0.5 hover:shadow-lg',
        'focus:ring-primary focus:ring-2 focus:outline-none',
        featured && 'ring-primary/40 ring-2',
      ]
        .filter(Boolean)
        .join(' ')}>
      {/* Body */}
      <div className="card-body p-4">
        <div className="flex gap-4">
          {/* Icon */}
          <div
            aria-hidden
            className="bg-primary text-primary-content flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-xl font-bold">
            {name.at(0)?.toUpperCase() ?? 'A'}
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="truncate leading-tight font-semibold">{name}</h2>

            <span className="badge badge-primary badge-sm mt-1 w-fit">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Footer (actions bottom-right) */}
      <div className="card-footer group-hover:border-base-300 flex justify-end gap-2 border-t border-transparent px-4 pt-3 pb-4">
        <Link
          href={github}
          target="_blank"
          className="btn btn-sm btn-ghost opacity-70">
          GitHub
        </Link>

        <Link href={href} target="_blank" className="btn btn-sm btn-primary">
          Open
        </Link>
      </div>
    </article>
  );
});

AppCard.displayName = 'AppCard';
