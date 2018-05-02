import React, { Component } from 'react';
import styles from './App.css';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.app}>Hello React</h1>
        <FunctionalComponent />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
