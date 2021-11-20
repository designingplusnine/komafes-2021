import { NextPage } from 'next';
import Image from 'next/image' ;
import Kv_png from "../../public/img/topPage/kv.png"
import styles from './concept.module.scss';

export const Kv: NextPage = () => (
  <div>
    <Image src={Kv_png} layout="intrinsic"/>
  </div>
);
