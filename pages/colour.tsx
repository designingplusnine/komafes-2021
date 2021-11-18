import { NextPage } from 'next';
import { Paper } from '@material-ui/core';
import classes from '../styles/pages/Colour.module.scss';
import paperStyles from '../styles/pages/Paper.module.scss';

const Colour: NextPage = () => (
  <div className={classes.container}>
    <Paper className={paperStyles.paper}>aaa</Paper>
  </div>
);

export default Colour;
