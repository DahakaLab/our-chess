import React from 'react';
import clsx from 'clsx';

import styles from './Cell.module.scss';

interface Props {
  // TODO: Допилить систему id
  id: string;
  isLight?: boolean;
}
const Cell: React.FC<Props> = ({ isLight = false }) => {
  return (
    <div className={clsx(styles.parent, {
      [styles.light]: isLight,
    })}></div>
  )
}

export { Cell };
