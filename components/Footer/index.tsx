import classes from './index.module.scss';
import { NextPage } from 'next';


export const Footer: NextPage = () =>
<footer className={classes.footer}>
    <img
        src="/img/dp9logo/dp9logo_white"
        className="classes.footer_dp9logo"
    />
    <img
        src="/img/dp9logo/dp9logotype_white"
        className="classes.footer_dp9logotype"
    />
    <div class="footer_text">
        <p>"DESIGN FOR EVERYONE -「すべての人が、デザインを。」 　　東京大学 × 東京藝術大学 のデザインサークル"</p>
        <p>"Copyright (C) designing plus nine. All Rights Reserved."</p>
    </div>
    <div class="snsicon">
        <img src="" className="classes.footer_shere_note" />
        <img src="" className="classes.footer_shere_twitter" />
        <img src="" className="classes.footer_shere_facebook" />
    </div>
  </footer>
);
