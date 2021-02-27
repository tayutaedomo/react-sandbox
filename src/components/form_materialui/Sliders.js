import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function Sliders() {
  const classes = useStyles();
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    console.log('Sliders:', event.target.value, value, newValue);
    setValue(newValue);
  };

  return (
    <fieldset>
      <legend>Slider:</legend>
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <div>Slider: {value}</div>
      </div>
    </fieldset>
  );
}

export default Sliders;
