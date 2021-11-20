import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import classes from '../styles/pages/Layout.module.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
    }
  }, []);

  const colours = {
    '/': 'f7fdfd',
    '/diff': 'beb399',
    '/time': 'f3e6e9',
    '/colour': 'aec8d4',
  };
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
