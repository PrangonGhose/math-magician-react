import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
