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

export const DiffLand: NextPage = () => (
  // const classes = useStyles();
  <>
    <img
      // className={classes.head}
      src="/img/landing/color_head.svg"
      style={{ width: '100vw' }}
    />
    <img
      // className={classes.landing_wide}
      src="/img/landing/sense_land.svg"
      alt="常識のゆらぎ"
      style={{ width: '60%', maxWidth: 600, display: 'block', margin: '0 auto' }}
    />
  </>
);
