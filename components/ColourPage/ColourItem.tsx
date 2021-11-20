import { ColourDatum, colourData } from './colourData';
import { NextPage } from 'next';
import Image from 'next/image';
import classes from './ColourItem.module.scss';

export const ColourItem: NextPage<{ datum: ColourDatum }> = ({ datum }) => (
  <div className={classes.container}>
    <h2>
      {datum.title}
      <span className={classes.category}>#{datum.category}</span>
    </h2>
    <p style={{ lineHeight: 1.4 }}>
      {datum.description.split('\n').map(l => (
        <span key={l}>
          {l}
          <br />
        </span>
      ))}
    </p>
    <div className={classes.content__container}>
      {datum.after.map(image => (
        <img className={classes.content__image} key={image} src={image} />
      ))}
    </div>
  </div>
);

export const ColourContent: NextPage = () => (
  <>
    {colourData.map(datum => (
      <ColourItem datum={datum} key={datum.title} />
    ))}
  </>
);
