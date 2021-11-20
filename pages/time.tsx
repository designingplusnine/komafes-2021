import { NextPage } from 'next';
import { Paper } from '@material-ui/core';
import { TimeContents } from '../components/TimePage/TimeContents';
import paperStyles from '../styles/pages/Paper.module.scss';
import styles from '../styles/pages/Time.module.scss';

const Time: NextPage = () => (
  <div className={styles.container}>
    <Paper className={paperStyles.paper}>
      <TimeContents />
    </Paper>
  </div>
);

export default Time;
