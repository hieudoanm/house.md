import '@house.md/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto_Condensed } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>House, M.D.</title>
      </Head>
      <div className={robotoCondensed.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
