import { NextPage } from 'next';
import classes from './index.module.scss';

export const Footer: NextPage = () => (
  <footer className={classes.footer}>
    <a href="http://designingplusnine.com/" target="_blank" rel="noopener noreferrer">
      <img src="/img/dp9logo/dp9_logo.svg" className={classes.footer_dp9logo} />
    </a>
    <div className={classes.footer_text}>
      <p className={classes.footer_text_01}>
        DESIGN FOR EVERYONE -「すべての人が、デザインを。」東京大学 × 東京藝術大学 のデザインサークル
      </p>
      <p className={classes.footer_text_02}>Copyright (C) designing plus nine. All Rights Reserved.</p>
    </div>
    <div className={classes.sns_icon}>
      <a
        href="https://note.com/dp9"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footer_shareicon_wrapper}
      >
        <img src="/img/sns_icon/note.svg" className={classes.footer_shareicon} />
      </a>
      <a
        href="https://twitter.com/DP9_Official"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footer_shareicon_wrapper}
      >
        <img src="/img/sns_icon/twitter.svg" className={classes.footer_shareicon} />
      </a>
    </div>
  </footer>
);
