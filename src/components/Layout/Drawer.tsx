import clsx from 'clsx';
import React from 'react';
import styles from './Drawer.module.scss';

const Drawer = ({
  open,
  children,
  close
}: {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
    <div className={clsx(styles.backdrop, {
        [styles.active]: open
    })} onClick={close}/>
      <div>{children}</div>
    </>
  );
};

export default Drawer;
