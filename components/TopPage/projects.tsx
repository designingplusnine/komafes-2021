import { NextPage } from 'next';
import styles from './concept.module.scss';


export const Projects: NextPage = () =>
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
        <img src="/img/topPage/colour.png" />
    </div>
    <div  className={styles.time} >
        <img src="/img/topPage/time.png" />
    </div>
    <div className={styles.diff} >
        <img src="/img/topPage/diff.png" />
    </div>
</div>
</>;
