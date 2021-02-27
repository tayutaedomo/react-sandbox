import React, { useState } from 'react';

// Reference: https://www.hypertextcandy.com/react-tutorial-04-form-and-events
function RadioButton() {
  const [val, setVal] = useState('cat');
  const handleRadioChange = (e) => setVal(e.target.value);

  return (
    <fieldset>
      <legend>Radio Button:</legend>
      <label>
        <input
          type="radio"
          value="cat"
          onChange={handleRadioChange}
          checked={val === 'cat'}
        />
        Like CAT
      </label>
      <label>
        <input
          type="radio"
          value="dog"
          onChange={handleRadioChange}
          checked={val === 'dog'}
        />
        Like DOG
      </label>
      <div>Selected: {val}</div>
    </fieldset>
  );
}

export default RadioButton;
