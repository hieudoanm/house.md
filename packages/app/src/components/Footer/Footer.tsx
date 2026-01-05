import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="border-base-300 mt-16 border-t py-8 text-center text-sm opacity-60">
      Built with Next.js, Tailwind & DaisyUI · © {new Date().getFullYear()}
    </footer>
  );
};
