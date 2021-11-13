import { NextPage } from 'next';
import styles from './concept.module.scss';

const arr = [
    {content:'ゆらぎゆらめく時代に、',marginLeft:'10%'},
    {content:'わたしたちは生きている。',marginLeft:'10%'},
    {content:'不確実な世の中',marginLeft:'10%'},
    {content:'正解も不正解もわからない時代……',marginLeft:'10%'},
    {content:'そんなことが言われて久しくなりました。',marginLeft:'10%'},
    {content:'そして今、私たちを取り巻く不確かさは、',marginLeft:'10%'},
    {content:'日に日に増しているように感じられます。',marginLeft:'10%'},
    {content:'２つの対立するものが、',marginLeft:'10%'},
    {content:'混ざり、跳ね返り、また交わる。',marginLeft:'10%'},
    {content:'私たちは、そんなゆらぎの中を',marginLeft:'10%'},
    {content:'歩いていかなければならないのかもしれません。',marginLeft:'10%'},
    {content:'しかしゆらぎは、',marginLeft:'10%'},
    {content:'自由がある証拠ともいえます。',marginLeft:'10%'},
    {content:'そこにこそ、私たちは、新しい価値を',marginLeft:'10%'},
    {content:'見出せるのではないでしょうか。',marginLeft:'30%'},
    {content:'そんな世の中にあふれる',marginLeft:'10%'},
    {content:'「ゆらぎ」',marginLeft:'10%'},
    {content:'を、デザインを通して考えました。',marginLeft:'10%'},
];

export const Concept: NextPage = () =>
<div className={styles.concept__box}>
    <div className={styles.concept__statement}>
    {arr.map((paragraph, i) => <div style={{marginLeft: paragraph.marginLeft}} className={styles.concept__statement}key={i}>{paragraph.content}</div>)}
    </div>
</div>;
