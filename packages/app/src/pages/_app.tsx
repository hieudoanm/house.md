import '@house.md/styles/globals.css';
import { HeadTemplate } from '../templates/HeadTemplate';
import type { AppProps } from 'next/app';
import { Roboto_Condensed } from 'next/font/google';
import { FC } from 'react';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeadTemplate basic={{ title: 'House, M.D.' }} />
      <div className={robotoCondensed.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
