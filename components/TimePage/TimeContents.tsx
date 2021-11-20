import { NextPage } from 'next';
import { TimeDatum, timeData } from './timeData';
import classes from './TimeContent.module.scss';

const TimeDatum: NextPage<{ datum: TimeDatum }> = ({ datum }) => (
  <>
    <h2>{datum.title}</h2>
    <div className={classes.content__container}>
      <div>
        <p>{datum.description}</p>
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
