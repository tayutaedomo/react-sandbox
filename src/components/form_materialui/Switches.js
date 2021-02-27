import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    console.log('Switches:', event.target.name, event.target.checked, state);
    setState({ ...state, [event.target.name]: event.target.checked });
    //setState({ [event.target.name]: event.target.checked }); // checkedB removed?
  };

  return (
    <fieldset>
      <legend>Switch:</legend>
      <div>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div>State: {state.checkedA.toString()}</div>
      </div>
    </fieldset>
  );
}

export default Switches;
