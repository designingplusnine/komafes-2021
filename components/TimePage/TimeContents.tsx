import { NextPage } from 'next';
import { TimeDatum, timeData } from './timeData';
import Image from 'next/image';
import classes from './TimeContent.module.scss';

const TimeDatum: NextPage<{ datum: TimeDatum }> = ({ datum }) => (
  <div className={classes.container}>
    <h2>{datum.title}</h2>
    <div className={classes.content__container}>
      <div>
        <p style={{ lineHeight: 1.4 }}>
          {datum.description.split('\n').map(l => (
            <span key={l}>
              {l}
              <br />
            </span>
          ))}
        </p>
        <img src={datum.image} className={classes.img} alt="" />
      </div>
    </div>
  </div>
);

export const TimeContents: NextPage = () => (
  <>
    <p className={classes.description}>
      今と昔が融合する時間のゆらぎを表現しました。懐かしくも新しいような作品が展示されています。異なる時代の雰囲気が重なり合う、時間を超えたゆらぎから生まれる不思議な世界観をぜひお楽しみください。
    </p>
    {timeData.map(datum => (
      <TimeDatum key={datum.title} datum={datum} />
    ))}
  </>
);
