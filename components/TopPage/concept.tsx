import { NextPage } from 'next';
import styles from './concept.module.scss';

const arr = [
  { content: 'ゆらぎゆらめく時代に、', marginLeft: '30%', isFlag: true },
  { content: 'わたしたちは生きている。', marginLeft: '40%', isFlag: true },
  { content: '不確実な世の中、', marginLeft: '10%', isFlag: false ,marginFirst:'10%'},
  { content: '正解も不正解もわからない時代……', marginLeft: '0%', isFlag: false },
  { content: 'そんなことが言われて久しくなりました。', marginLeft: '20%', isFlag: true  },
  { content: 'そして今、私たちを取り巻く不確かさは、', marginLeft: '5%', isFlag: true },
  { content: '日に日に増しているように感じられます。', marginLeft: '15%', isFlag: true },
  { content: '２つの対立するものが、', marginLeft: '25%', isFlag: false },
  { content: '混ざり、跳ね返り、また交わる。', marginLeft: '0%', isFlag: false },
  { content: '私たちは、そんなゆらぎの中を', marginLeft: '20%', isFlag: true },
  { content: '歩いていかなければならないのかもしれません。', marginLeft: '5%', isFlag: true },
  { content: 'しかしゆらぎは、', marginLeft: '10%', isFlag: false },
  { content: '自由がある証拠ともいえます。', marginLeft: '0%', isFlag: false },
  { content: '', marginLeft: '10%', isFlag: true },
  { content: 'そこにこそ、私たちは、新しい価値を', marginLeft: '0%', isFlag: false },
  { content: '見出せるのではないでしょうか。', marginLeft: '0%', isFlag: false },
  { content: '', marginLeft: '10%', isFlag: true },
  { content: 'そんな世の中にあふれる', marginLeft: '40%', isFlag: false },
  { content: '「ゆらぎ」を、', marginLeft: '0%', isFlag: false },
  { content: 'デザインを通して考えました。', marginLeft: '28%', isFlag: true },
];

export const Concept: NextPage = () => (
  <div className={styles.concept}>
    <div className={styles.concept__statement}>
      {arr.map((paragraph, i) => (
        <div
          style={{marginLeft:paragraph.marginLeft}}
          className={paragraph.isFlag ? styles.concept__normal : styles.concept__indention}
          key={i}
        >
          {paragraph.content}
        </div>
      ))}
    </div>
  </div>
);
