import React, { useState } from 'react';

export default function () {
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
      <p>Selected: {val}</p>
    </fieldset>
  );
}
