import React from 'react';

import { Numbers } from './numbers/Numbers';
import styles from './Board.module.scss';

const Board: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.wrapperNumber}>
        <div className={styles.row}>
          <Numbers isHorizontal />
        </div>
        <div className={styles.row}>
          <Numbers />
          <span>Board</span>
          <Numbers />
        </div>
        <div className={styles.row}>
          <Numbers isHorizontal />
        </div>
      </div>
    </div>
  );
};

export { Board };
