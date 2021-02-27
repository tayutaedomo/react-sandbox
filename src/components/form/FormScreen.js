import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';
import FileInput from './FileInput';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

function FormScreen() {
  const classes = useStyles();

  const [val, setVal] = useState('cat');
  const handleRadioChange = (e) => setVal(e.target.value);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <RadioButton />
        <Checkbox />
        <FileInput />
      </Container>
    </div>
  );
}

export default FormScreen;
