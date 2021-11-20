import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  (function(d) {
    var config = {
      kitId: 'hja2lby',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/%27+config.kitId+%27.js%27;tk.async=true;tk.onload=tk.onreadystatechange=function()%7Ba=this.readyState;if(f%7C%7Ca&&a!=%22complete%22&&a!=%22loaded%22)return;f=true;clearTimeout(t);try%7BTypekit.load(config)%7Dcatch(e)%7B%7D%7D;s.parentNode.insertBefore(tk,s)
  })(document);`,
          }}
        ></script>
      </Head>
      <Header />
      <div className={classes.background__container} style={{ backgroundColor: `#${colours[router.pathname]}` }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
