import React, { useState } from 'react';

import { Cell } from './cell/Cell';
import styles from './Place.module.scss';

type Cells = Record<string, React.ReactElement>

const getCells = () => {
  const templateArr = Array.from({ length: 8 });
  const state: Cells = {}

  const els = templateArr.map((_, indexRow) => {
    const isReverse = indexRow % 2 === 1;

    const items =  templateArr.map((_, indexColumn) => {
      const remainder = isReverse ? 1 : 0;
      const isLight = indexColumn % 2 === remainder;

      const id = `${indexRow}${indexColumn}`;
      const el = <Cell id={id} isLight={isLight} />

      state[id] = el;

      return (
        <div key={`${indexRow}${indexColumn}`} className={styles.cell}>
          {el}
        </div>
      );
    });

    return (
      <div key={`${indexRow}`} className={styles.row}>
        {items}
      </div>
    );
  })

  return { state, els };
}

const cells = getCells()

const Place: React.FC = () => {
  const [cellstest, setCells] = useState(cells.state);

  console.log(cellstest);

  return (
    <div className={styles.parent}>
      <div className={styles.rowsContainer}>{cells.els}</div>
      <div className={styles.figuresContainer}>
        <span className={styles.figure} />
      </div>
    </div>
  );
}

export { Place };