import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class ContextScreen extends Component {
  render() {
    return (
      <div>
        <Toolbar theme="dark" />
      </div>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends Component {
  render() {
    return <Button theme={this.props.theme}>Button</Button>;
  }
}

export default ContextScreen;
