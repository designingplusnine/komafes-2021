import { NextPage } from 'next';
import Image from 'next/image' ;
import styles from './kv.module.scss';



export const Kv: NextPage = () => (
  <div>
    <img srcSet="img/topPage/kv_pc.png"className={styles.kv_pc}/>
    <img srcSet="img/topPage/kv_smart.png"className={styles.kv_smart}/>
  </div>
);
