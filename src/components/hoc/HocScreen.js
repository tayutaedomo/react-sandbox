import React, { Component } from 'react';
import PropsLogging from './PropsLogging';

export class HocScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <React.Fragment>
        {/* <label>Count: {this.state.count}</label> */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count +1
        </button>
        <PropsLogging foo="foo" count={this.state.count} />
      </React.Fragment>
    );
  }
}

export default HocScreen;
