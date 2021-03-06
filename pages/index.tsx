import { Concept } from '../components/TopPage/concept';
import { Komafes } from '../components/TopPage/komafes';
import { Kv } from '../components/TopPage/Kv';
import { NextPage } from 'next';
import { Projects } from '../components/TopPage/projects';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>ゆらぎ | designing plus nine</title>
    </Head>
    <Kv />
    <Concept />
    <Projects />
    <Komafes />
  </div>
);

export default Home;
