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
        常識というのは、あまりに"自然に"日常に溶け込んでいます。常識を疑い、問うためには、まずは何が常識なのかを発見することが不可欠です。
ここでは私たちの常識がゆらぐような、「何かがおかしい」動画や写真を紹介しています。普段通りじゃない動きや振る舞いをするものを見つけてみてください。
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
