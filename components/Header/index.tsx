import { NextPage } from 'next';
import { colours } from '../../pages/_app';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import classes from './index.module.scss';

const pathName = {
  '/diff': '常識',
  '/time': '時間',
  '/colour': '色',
};

export const Header: NextPage = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <a href="http://designingplusnine.com/" target="_blank" rel="noreferrer" className={classes.header__logo}>
        <img src="/img/logo/dp9logo.svg" className={classes.header__logo__content} />
        <img src="/img/logo/dp9logo_short.svg" className={classes.header__logo__contentshort} />
      </a>

      <Link href="/">
        <a className={classes.header__logotype__link}>
          <img src="/img/logo/logotype.svg" className={classes.header__logotype} />
        </a>
      </Link>
      <div style={{ marginBottom: router.pathname === '/' ? '15px' : '0px' }}>
        {Object.keys(colours)
          .filter(c => c !== '/')
          .map(c => (
            <HeaderLink key={c} display={pathName[c]} path={c} />
          ))}
      </div>
    </header>
  );
};

export const HeaderLink: NextPage<{ display: string; path: string }> = ({ display, path }) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        className={[classes.header__link, path === router.pathname ? classes.header__link__current : ''].join(' ')}
        style={{ background: path === router.pathname ? `#${colours[path]}` : 'white' }}
      >
        {display}
        <span className={classes.header__link__yuragi}>のゆらぎ</span>
      </a>
    </Link>
  );
};
