import React from 'react';
import {
  Link as RouterLink,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import classes from './Header.module.scss';
import clsx from 'clsx';

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
  return (
    <div className={classes.container}>
      <h2>파랑이</h2>
      <div style={{ flexGrow: 1 }} />
      <ul className={`${classes.menuContainer} d-lg-block d-md-none`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <div className={'d-lg-none d-md-block'}>
        Menu
      </div>
    </div>
  );
};

export default Header;
