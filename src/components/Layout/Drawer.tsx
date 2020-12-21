import clsx from 'clsx';
import React from 'react';
import styles from './Drawer.module.scss';

const Drawer = ({
  open,
  children,
  close,
}: {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={clsx(styles.backdrop, {
          [styles.active]: open,
        })}
        onClick={close}
      />
      <div
        className={clsx(styles.container, {
          [styles.active]: open,
        })}
      >
        <div className={styles.wrapper} onClick={close}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
