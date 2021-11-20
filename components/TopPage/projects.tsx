import { NextPage } from 'next';
import styles from './projects.module.scss';
import Link from 'next/link'

export const Projects: NextPage = () => (
  <>
    <div className={styles.projects}>
      <h2 className={styles.projects__p}>ゆらぐ3つの企画</h2>
    </div>
    <div className={styles.box}>
      <div className={styles.colour}>
        <img src="/img/topPage/colour.png" className={styles.colour__img} />
        <Link href="/colour">
        <a>
        <img src="/img/topPage/colour.svg" className={styles.colour__button} />
        </a>
        </Link>
        <img src="/img/landing/color_land.svg" className={styles.colour__land} />
      </div>
      <div className={styles.time}>
        <img src="/img/topPage/time.png" className={styles.time__img} />
        <Link href="/time">
        <a>
        <img src="/img/topPage/time.svg" className={styles.time__button} />
        </a>
        </Link>
        <img src="/img/landing/time_land.svg" className={styles.time__land} />
      </div>
      <div className={styles.diff}>
        <img src="/img/topPage/diff.png" className={styles.diff__img} />
        <Link href="/diff">
        <a>
        <img src="/img/topPage/diff.svg" className={styles.diff__button} />
        </a>
        </Link>
        <img src="/img/landing/sense_land.svg" className={styles.diff__land} />
      </div>
    </div>
  </>
);
