import { NextPage } from 'next';
import { colours } from '../../pages/_app';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import classes from './index.module.scss';

const pathName = {
  '/diff': 'ゆらぐ間違い探し',
  '/time': '時間のゆらぎ',
  '/colour': '色のゆらぎ',
};

export const Header: NextPage = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      {/* <Link href="/">
      <a className={classes.header__logotype__link}> */}
      <img
        src="/img/logo/logotype.svg"
        className={classes.header__logotype}
        onClick={() => {
          router.push('/');
        }}
      />
      {/* </a>
    </Link> */}
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
        style={{ background: `#${colours[path]}` }}
      >
        {display}
      </a>
    </Link>
  );
};
