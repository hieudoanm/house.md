import { FC } from 'react';

export const EmptyState: FC = () => {
  return (
    <div className="col-span-full py-20 text-center">
      <div className="text-5xl">🧭</div>
      <p className="mt-3 text-lg font-medium">Nothing matches your search</p>
      <p className="text-sm opacity-60">
        Try different keywords or reset filters
      </p>
    </div>
  );
};
