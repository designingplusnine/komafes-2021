import { NextPage } from 'next';
import classes from './contents.module.scss';

export const Contents: NextPage = () => (
  <div className={classes.contents}>
    <h1 className={classes.contents__title}>タイトル</h1>
    <p className={classes.contents__para}>paragraph</p>
  </div>
);
