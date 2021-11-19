import { NextPage } from 'next';
import styles from './concept.module.scss';

const arr = [
  { content: 'ゆらぎゆらめく時代に、', marginLeft: '10%' ,isFlag:true },
  { content: 'わたしたちは生きている。', marginLeft: '10%' ,isFlag:true  },
  { content: '不確実な世の中、', marginLeft: '10%' ,isFlag:false },
  { content: '正解も不正解もわからない時代……', marginLeft: '10%'  ,isFlag:false},
  { content: 'そんなことが言われて久しくなりました。', marginLeft: '10%' ,isFlag:true  },
  { content: 'そして今、私たちを取り巻く不確かさは、', marginLeft: '10%'  ,isFlag:true },
  { content: '日に日に増しているように感じられます。', marginLeft: '10%'  ,isFlag:true },
  { content: '２つの対立するものが、', marginLeft: '10%'  ,isFlag:false },
  { content: '混ざり、跳ね返り、また交わる。', marginLeft: '10%' ,isFlag:false },
  { content: '私たちは、そんなゆらぎの中を', marginLeft: '10%' ,isFlag:true },
  { content: '歩いていかなければならないのかもしれません。', marginLeft: '10%'  ,isFlag:true },
  { content: 'しかしゆらぎは、', marginLeft: '10%'  ,isFlag:false },
  { content: '自由がある証拠ともいえます。', marginLeft: '10%' ,isFlag:false ,br:<br/>},
  { content: 'そこにこそ、私たちは、新しい価値を', marginLeft: '10%' ,isFlag:false },
  { content: '見出せるのではないでしょうか。', marginLeft: '30%' ,isFlag:false  },
  { content: 'そんな世の中にあふれる', marginLeft: '10%' ,isFlag:true  },
  { content: '「ゆらぎ」', marginLeft: '10%'  ,isFlag:true },
  { content: 'を、デザインを通して考えました。', marginLeft: '10%' ,isFlag:true  },
];

export const Concept: NextPage = () => (
  <div className={styles.concept}>
    <div className={styles.concept__statement}>
      {arr.map((paragraph, i) => (
        <div style={ {marginLeft: paragraph.isFlag ? paragraph.marginLeft:"0%"} } className={paragraph.isFlag ? styles.concept__normal:styles.concept__indention} key={i}>
          {paragraph.content}
          {paragraph.br}
        </div>
      ))}
    </div>
  </div>
);
