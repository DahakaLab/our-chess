import React from 'react';

import styles from './FigureLosses.module.scss';

interface Props {
  title: string;
  // TODO: Пока нет модели фигуры, как появится - добавить реализацию
  // figure: Figure;
}
const FigureLosses: React.FC<Props> = ({ title }) => {
 return (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <span>FigureLosses</span>
  </div>
 );
}

export { FigureLosses };
