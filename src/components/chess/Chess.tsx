import React from 'react';

import { FigureLosses } from './figure-losses/FigureLosses';
import { Board } from './board/Board';
import styles from './Chess.module.scss';

const Chess: React.FC = () => {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Шахматы</h1>
      <div className={styles.container}>
        <FigureLosses title='Белые' />
        <Board />
        <FigureLosses title='Черные' />
      </div>
    </div>
  )
};

export { Chess };
