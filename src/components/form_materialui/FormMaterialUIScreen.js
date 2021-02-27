import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

function FormMaterialUIScreen() {
  const classes = useStyles();

  const [val, setVal] = useState('cat');
  const handleRadioChange = (e) => setVal(e.target.value);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <div>FormMaterialUIScreen</div>
      </Container>
    </div>
  );
}

export default FormMaterialUIScreen;
