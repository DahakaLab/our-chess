import React from 'react';

import { Chess } from '../../components/chess/Chess';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Chess />
    </div>
  );
}

export default App;
