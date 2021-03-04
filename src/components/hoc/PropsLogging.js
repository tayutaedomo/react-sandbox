import React from 'react';

// function logProps(InputComponent) {
//   InputComponent.prototype.componentDidUpdate = function(prevProps) {
//     console.log('Current props: ', this.props);
//     console.log('Previous props: ', prevProps);
//   };
//   // The fact that we're returning the original input is a hint that it has
//   // been mutated.
//   return InputComponent;
// }
// // EnhancedComponent will log whenever props are received
// const EnhancedComponent = logProps(InputComponent);

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
}

function PropsLogging(props) {
  return <div>PropsLogging:Count: {props.count}</div>;
}

export default logProps(PropsLogging);
