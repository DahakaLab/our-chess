import React from 'react';
import clsx from 'clsx';

import styles from './Numbers.module.scss';

interface Props {
  isHorizontal?: boolean;
}
const Numbers: React.FC<Props> = ({ isHorizontal = false }) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const items = letters.map((letter, index) => {
    return (
      <span className={clsx(
        styles.item, {
          [styles.itemVertical]: !isHorizontal,
          [styles.itemHorizontal]: isHorizontal,
        }
      )}>{isHorizontal ? letter : index + 1}</span>
    );
  });

  return (
    <div className={clsx(
      styles.parent,
      {
        [styles.parentVertical]: !isHorizontal,
        // [styles.parentHorizontal]: isHorizontal,
      }
      )}
    >
        {items}
      </div>
  );
}

export { Numbers };
