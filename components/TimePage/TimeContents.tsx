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
        <img src={datum.image} className={classes.img} />
      </div>
    </div>
  </div>
);

export const TimeContents: NextPage = () => (
  <>
    {timeData.map(datum => (
      <TimeDatum key={datum.title} datum={datum} />
    ))}
  </>
);
