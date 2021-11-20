import { NextPage } from 'next';
import classes from './contents.module.scss';

export const Contents: NextPage = () => (
    <>
        <div className={classes.concept}>
            <p className={classes.concept_text}>
                常識というのは、あまりに"自然に"日常に溶け込んでいます。常識を疑い、問うためには、まずは何が常識なのかを発見することが不可欠です。
                ここでは私たちの常識が揺らぐような、「何かがおかしい」動画や写真を紹介しています。普段通りじゃない動きや振る舞いをするものを見つけてみてください。
            </p>
        </div>
        <div className={classes.time}>
            <div className={classes.time_work}>
                <h3 className={classes.time_work_title}>ゆらぐ一分間</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/AjARSNuN2Pk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <p className={classes.time_work_comment}>
                    時計は動く。規則正しく、正確に。早送りでも、逆再生でも、動画がカクカクでもお構いなしに。時間は決してゆらがない。時計は決して間違えない。
                    再生時間の一分間、一定のリズムで、文字盤を一周、ぐるりと廻る……？
                </p>
            </div>
        </div>
        <div className={classes.time}>
            <div className={classes.time_work}>
                <h3 className={classes.time_work_title}>ちょっとおかしい？折り紙の折り方講座</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P1YwFBkECkE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <p className={classes.time_work_comment}>
                    一枚の折り紙を折っていくと鶴になり、開くと一枚の折り紙に戻る。それは時間が揺らぐ中でも同じ。
                </p>
            </div>
        </div>
        <div className={classes.unstable}>
            <div className={classes.unstable_work}>
                <h3 className={classes.unstable_work_title}>超安定している不安定</h3>
                <p className={classes.unstable_work_comment}>超安定している不安定を書きました。</p>
            </div>
        </div>
    </>
);
