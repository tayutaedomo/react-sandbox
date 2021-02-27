import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
}));

function TextFields() {
  const classes = useStyles();
  const [standard, setStandard] = useState('');
  const handleChange = (event) => {
    setStandard(event.target.value);
  };

  return (
    <fieldset>
      <legend>TextField:</legend>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={handleChange}
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <div>Standard: {standard}</div>
    </fieldset>
  );
}

export default TextFields;
