import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
