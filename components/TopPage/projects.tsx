import { NextPage } from 'next';
import Image from 'next/image';
import Colour from '/public/img/topPage/colour.png'
import Time from '/public/img/topPage/time.png'
import Diff from '/public/img/topPage/diff.png'
import styles from './concept.module.scss';

export const Projects: NextPage = () =>
<div>
<div>
<Image src={Colour} width={800}/>
<Image src={Time} width={800}/>
<Image src={Diff} width={800}/>
</div>

</div>;
