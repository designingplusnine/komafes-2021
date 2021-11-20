import { NextPage } from 'next';
import Link from 'next/link';
import styles from './projects.module.scss';

export const Projects: NextPage = () => (
  <>
    <div className={styles.projects}>
      <h2 className={styles.projects__p}>ゆらぐ3つの企画</h2>
    </div>
    <div className={styles.box}>
      <div className={styles.colour}>
        <img src="/img/topPage/colour.png" className={styles.colour__img} alt="color" />
        <Link href="/colour">
          <a>
            <img src="/img/topPage/colour.svg" className={styles.colour__button} alt="color" />
          </a>
        </Link>
        <img src="/img/landing/color_land.svg" className={styles.colour__land} alt="color" />
      </div>
      <div className={styles.time}>
        <img src="/img/topPage/time.png" className={styles.time__img} alt="time" />
        <Link href="/time">
          <a>
            <img src="/img/topPage/time.svg" className={styles.time__button} alt="time" />
          </a>
        </Link>
        <img src="/img/landing/time_land.svg" className={styles.time__land} alt="time" />
      </div>
      <div className={styles.diff}>
        <img src="/img/topPage/diff.png" className={styles.diff__img} alt="diff" />
        <Link href="/diff">
          <a>
            <img src="/img/topPage/diff.svg" className={styles.diff__button} alt="diff" />
          </a>
        </Link>
        <img src="/img/landing/sense_land.svg" className={styles.diff__land} alt="diff" />
      </div>
    </div>
  </>
);
