import Link from 'next/link';

export const Navbar = ({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) => {
  return (
    <header className="bg-base-100 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-black tracking-tight">App Store</span>
          <span className="text-xs opacity-60">
            Privacy-first in-browser utilities
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="btn btn-ghost btn-sm tooltip"
            data-tip="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <Link
            href="https://hieudoanm.github.io"
            target="_blank"
            className="text-sm opacity-70 hover:opacity-100">
            Hieu Doan
          </Link>
        </div>
      </div>
    </header>
  );
};
