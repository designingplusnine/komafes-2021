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
        <img className={classes.content__image} key={image} src={image} alt="" />
      ))}
    </div>
  </div>
);

export const ColourContent: NextPage = () => (
  <>
    <p className={classes.description}>
      私たちが色から受け取る印象は多岐に渡ります。そこで、この企画では、身の回りのものの色だけを変えた作品を展示しています。「色のゆらぎ」から受ける新鮮な印象をお楽しみください。
    </p>
    {colourData.map(datum => (
      <ColourItem datum={datum} key={datum.title} />
    ))}
  </>
);
