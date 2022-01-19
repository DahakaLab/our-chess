import React from 'react';

import { Cell } from './cell/Cell';
import styles from './Place.module.scss';

const Place: React.FC = () => {
  const templateArr = Array.from({ length: 8 });

  const getSells = (isReverse: boolean) => {
    return templateArr.map((_, index) => {
      const remainder = isReverse ? 1 : 0;
      const isLight = index % 2 === remainder;
  
      return (
        <div className={styles.cell}>
          <Cell isLight={isLight} />
        </div>
      )
    })
  };

  const rows = templateArr.map((_, index) => {
    const isReverse = index % 2 === 1;
    return (
      <div className={styles.row}>
        {getSells(isReverse)}
      </div>
    );
  });

  console.log(rows);
  return (
    <div className={styles.parent}>{rows}</div>
  );
}

export { Place };