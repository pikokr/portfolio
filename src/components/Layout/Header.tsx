import React from 'react';
import {
  Link as RouterLink,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import classes from './Header.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from './Drawer';

const Link = withRouter(({ to, children }: any & RouteComponentProps<any>) => {
  return (
    <RouterLink
      to={to}
      className={clsx({
        [classes.active]: location.pathname === to,
      })}
    >
      {children}
    </RouterLink>
  );
});

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </>
  );

  return (
    <>
      <div className={classes.container}>
        <h2><RouterLink to="/" style={{
          color: '#000',
          textDecoration: 'none'
        }}>파랑이</RouterLink></h2>
        <div style={{ flexGrow: 1 }} />
        <ul className={`${classes.menuContainer} d-lg-block d-md-none`}>
          {menu}
        </ul>
        <div className={'d-lg-none d-md-block'}>
          <FontAwesomeIcon
            icon={['fas', 'bars']}
            size="2x"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>
      <Drawer open={drawerOpen} close={() => setDrawerOpen(false)}>
        {menu}
      </Drawer>
    </>
  );
};

export default Header;
