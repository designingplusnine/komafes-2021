import { NextPage } from 'next';
import Link from 'next/link';
import classes from './index.module.scss';

export const Header: NextPage = () => (
  <header className={classes.header}>
    <img src="/img/logo/logotype.svg" className={classes.header__logotype} />
    <Link href="/colour">
      <a>色のゆらぎ</a>
    </Link>
    <Link href="/time">
      <a>時間のゆらぎ</a>
    </Link>
    <Link href="/diff">
      <a>ゆらぐ間違い探し</a>
    </Link>
  </header>
);
