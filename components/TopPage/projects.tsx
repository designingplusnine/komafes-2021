import { NextPage } from 'next';
import styles from './projects.module.scss';

export const Projects: NextPage = () => (
  <>
    <div className={styles.projects}>
      <h2 className={styles.projects__p}>ゆらぐ3つの企画</h2>
    </div>
    <div className={styles.button}>
      <div className={styles.button__colour}>色のゆらぎ</div>
      <div className={styles.button__time}>時間のゆらぎ</div>
      <div className={styles.button__diff}>常識の揺らぎ</div>
    </div>
    <div className={styles.box}>
      <div className={styles.colour}>
        <img src="/img/topPage/colour.png" className={styles.colour__img} />
        <img src="/img/topPage/colour.svg" className={styles.colour__button} />
      </div>
      <div className={styles.time}>
        <img src="/img/topPage/time.png" className={styles.time__img} />
        <img src="/img/topPage/time.svg" className={styles.time__button} />
      </div>
      <div className={styles.diff}>
        <img src="/img/topPage/diff.png" className={styles.diff__img} />
        <img src="/img/topPage/diff.svg" className={styles.diff__button} />
      </div>
    </div>
  </>
);
