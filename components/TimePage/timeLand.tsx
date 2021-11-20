import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  head: {
    width: '100vw',
  },
  landing_wide: {
    width: '60%',
    maxWidth: 600,
    display: 'block',
    margin: '0 auto',
  },
}));

export const TimeLand: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <img className={classes.head} src="/img/landing/time_head.svg" alt="時間のゆらぎ" />
      <img className={classes.landing_wide} src="/img/landing/time_land.svg" />
    </>
  );
};
