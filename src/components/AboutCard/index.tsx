import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './aboutCard.module.scss'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

const AboutCard = ({icon,desc,title}: {title: string, icon: IconProp, desc: React.ReactNode}) => {
  return (
    <div className={styles.card}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <FontAwesomeIcon icon={icon}/>
        <span style={{paddingLeft: 10}}>{title}</span>
      </h2>
      <div>
        {desc}
      </div>
    </div>
  );
};

export default AboutCard;