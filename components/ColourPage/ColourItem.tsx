import { ColourDatum } from './colourData';
import { NextPage } from 'next';
import Image from 'next/image';
import classes from './ColourItem.module.scss';

export const ColourItem: NextPage<{ datum: ColourDatum }> = ({ datum }) => (
  <div>
    <h2>
      {datum.title}
      <span>{datum.category}</span>
    </h2>
    <div className={classes.content__container}>
      <div>
        <p>{datum.description}</p>
        <p>作：{datum.designer}</p>
      </div>
    </div>
  </div>
);