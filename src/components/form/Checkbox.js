import { Check } from '@material-ui/icons';
import React from 'react';

// Reference: https://www.hypertextcandy.com/react-tutorial-04-form-and-events
function Checkbox() {
  const [val, setVal] = React.useState(['js']);

  const handleChange = (e) => {
    console.log('handleChange', val);

    if (val.includes(e.target.value)) {
      setVal(val.filter((item) => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }
  };

  return (
    <fieldset>
      <legend>Checkbox:</legend>
      <label>
        <input
          type="checkbox"
          value="js"
          onChange={handleChange}
          checked={val.includes('js')}
        />
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          value="python"
          onChange={handleChange}
          checked={val.includes('python')}
        />
        Python
      </label>
      <label>
        <input
          type="checkbox"
          value="java"
          onChange={handleChange}
          checked={val.includes('java')}
        />
        Java
      </label>
      <div>Checked: {val.join(', ')}</div>
    </fieldset>
  );
}

export default Checkbox;
