import { ColourContent } from '../components/ColourPage/ColourItem';
import { ColourLand } from '../components/ColourPage/colourLand';
import { NextPage } from 'next';
import { Paper } from '@material-ui/core';
import classes from '../styles/pages/Colour.module.scss';
import paperStyles from '../styles/pages/Paper.module.scss';

const Colour: NextPage = () => (
  <div>
    <ColourLand />
    <Paper className={paperStyles.paper}>
      <ColourContent />
    </Paper>
  </div>
);

export default Colour;
