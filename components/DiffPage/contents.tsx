import { NextPage } from 'next';
import classes from './contents.module.scss';

export const Contents: NextPage = () => (
    <div className={classes.page}>
        <div className={classes.concept}>
            <p className={classes.concept_text}>小企画説明文</p>
            <hr className={classes.hr}></hr>
        </div>
        <div className={classes.time}>
            <h1 className={classes.time_title}>時間？</h1>
            <div className={classes.time_work}>
                <img src=""></img>
            </div>
            <hr className={classes.hr}></hr>
        </div>

        <div className={classes.gravity}>
            <h1 className={classes.gravity_title}>重力？</h1>
            <hr className={classes.hr}></hr>
        </div>

        <div className={classes.unstable}>
            <h1 className={classes.unstable_title}>不安定？</h1>
        </div>
    </div>
);
