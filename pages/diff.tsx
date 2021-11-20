import { Contents } from '../components/DiffPage/contents';
import { NextPage } from 'next';
import { Paper } from '@material-ui/core';

import { DiffLand } from '../components/DiffPage/diffLand';
import paperStyles from '../styles/pages/Paper.module.scss';
import styles from '../styles/pages/Diff.module.scss';

const Diff: NextPage = () => (
  <>
    <DiffLand />
    <Paper className={paperStyles.paper}>
      <Contents />
    </Paper>
  </>
);

export default Diff;
