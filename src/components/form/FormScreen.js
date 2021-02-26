import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Radio from './Radio';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

export default function () {
  const classes = useStyles();

  const [val, setVal] = useState('cat');
  const handleRadioChange = (e) => setVal(e.target.value);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Radio />
      </Container>
    </div>
  );
}
