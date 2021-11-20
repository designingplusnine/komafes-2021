import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { adobeFontsLoader } from '../lib/adoneFonts';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import classes from '../styles/pages/Layout.module.scss';

export const colours = {
  '/': 'f7fdfd',
  '/colour': 'aec8d4',
  '/time': 'f3e6e9',
  '/diff': 'beb399',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      adobeFontsLoader(document);
    }
  }, []);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: 'http://dp9.tokyo/komafes2021/',
          site_name: 'designing plus nine',
        }}
        twitter={{
          handle: '@DP9_Official',
          site: '@DP9_Official',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <div className={classes.background__container} style={{ backgroundColor: `#${colours[router.pathname]}` }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
