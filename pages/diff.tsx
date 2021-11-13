import { Contents } from '../components/DiffPage/contents';
import { NextPage } from 'next';
import { Paper } from '@material-ui/core';
import styles from '../styles/pages/Diff.module.scss';

const Diff: NextPage = () => (
  <div className={styles.container}>
    <Paper>
      <Contents />
    </Paper>
  </div>
);

export default Diff;
