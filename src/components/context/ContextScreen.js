import React, { Component } from 'react';

import CounterContext from '../../contexts/counter';
import Counter from './Counter';

export class ContextScreen extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}

export default ContextScreen;
