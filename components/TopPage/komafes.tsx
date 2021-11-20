import { NextPage } from 'next';
import styles from './komafes.module.scss';

export const Komafes: NextPage = () => (
  <div>
    <h2 className={styles.deco1}>駒場グランプリ</h2>
    <p className={styles.p}>ご来場の皆さまの投票で、駒場祭で最も魅力的な企画を決定する</p>
    <h3 className={styles.deco2}>駒場グランプリ</h3>
    <p className={styles.p}>が開催されています</p>
    <p className={styles.p}>
      「ゆらぎ」の展示が良かったなと思っていただけましたら、以下のリンクまたはQRコードからぜひ投票をお願いします。
    </p>
    <a href="https://www.komabasai.net/72/visitor/prix">投票はこちら</a>
    {/* リンクがこれで良いか確認していただけると幸いです　*/}
    <p className={styles.p}>
      <img src="/public/img/topPage/QR.png"></img>
    </p>
  </div>
);
