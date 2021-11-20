import { NextPage } from 'next';
import Image from 'next/image';
import Colour from '/public/img/topPage/colour.png'
import styles from './concept.module.scss';

export const Projects: NextPage = () =>
<div>
<Image src={Colour} width={800}/>

</div>;
