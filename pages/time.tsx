import { NextPage } from 'next';
import { Paper } from '@material-ui/core';
import { TimeContents } from '../components/TimePage/TimeContents';
import { TimeLand } from '../components/TimePage/timeLand';
import paperStyles from '../styles/pages/Paper.module.scss';
import styles from '../styles/pages/Time.module.scss';

const Time: NextPage = () => (
  <>
    <TimeLand />
    <Paper className={paperStyles.paper}>
      <TimeContents />
    </Paper>
  </>
);

export default Time;
