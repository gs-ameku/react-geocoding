import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'ClassComponent',
    }
  }

  render() {
    return (
      <h2>ClassComponent</h2>
    );
  }
}

export default ClassComponent;
