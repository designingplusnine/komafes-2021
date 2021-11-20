import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { adobeFontsLoader } from '../lib/adobeFonts';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import classes from '../styles/pages/Layout.module.scss';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { existsGaId, pageview } from '../lib/gtag'


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
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])



  return (
    <>
      <DefaultSeo
        defaultTitle="ゆらぎ | designing plus nine"
        description={`ゆらぎゆらめく時代に、わたしたちは生きている。
不確実な世の中、正解も不正解もわからない時代……そんなことが言われて久しくなりました。そして今、私たちを取り巻く不確かさは、日に日に増しているように感じられます。
２つの対立するものが、混ざり、跳ね返り、また交わる。
私たちは、そんなゆらぎの中を歩いていかなければならないのかもしれません。
しかしゆらぎは、自由がある証拠ともいえます。そこにこそ、私たちは、新しい価値を見出せるのではないでしょうか。
そんな世の中にあふれる「ゆらぎ」を、デザインを通して考えました。`}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
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
      <GoogleAnalytics />
      <Header />

      <div className={classes.background__container} style={{ backgroundColor: `#${colours[router.pathname]}` }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
