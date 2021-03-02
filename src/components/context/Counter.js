import React from 'react';

import CounterContext from '../../contexts/counter';

function Counter() {
  return (
    <CounterContext.Consumer>
      {({ count, increment, decrement }) => {
        return (
          <React.Fragment>
            <div>Count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </React.Fragment>
        );
      }}
    </CounterContext.Consumer>
  );
}

export default Counter;
