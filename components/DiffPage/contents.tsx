import { NextPage } from 'next';
import classes from './contents.module.scss';

export const Contents: NextPage = () => (
    <>
        <div className={classes.concept}>
            <p className={classes.concept_text}>
                「何かがおかしい」動画や写真を紹介しています。普段通りじゃない動きや振る舞いをするものを見つけてみてください。
            </p>
        </div>
        <div className={classes.time}>
            <h2 className={classes.time_title}>時間？</h2>
            <div className={classes.time_work}></div>
        </div>
        <div className={classes.gravity}>
            <h2 className={classes.gravity_title}>重力？</h2>
        </div>
        <div className={classes.unstable}>
            <h2 className={classes.unstable_title}>不安定？</h2>
        </div>
    </>
);
