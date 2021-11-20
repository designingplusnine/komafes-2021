import { NextPage } from 'next';
import { TimeDatum, timeData } from './timeData';
import classes from './TimeContent.module.scss';

const TimeDatum: NextPage<{ datum: TimeDatum }> = ({ datum }) => (
  <>
    <h2>
      {datum.title}
      <span className={classes.category}>#{datum.category}</span>
    </h2>
    <div className={classes.content__container}>
      <div>
        <p>{datum.description}</p>
        <p>作：{datum.designer}</p>
      </div>
    </div>
  </>
);

export const TimeContents: NextPage = () => (
  <>
    {timeData.map(datum => (
      <TimeDatum key={datum.title} datum={datum} />
    ))}
  </>
);
