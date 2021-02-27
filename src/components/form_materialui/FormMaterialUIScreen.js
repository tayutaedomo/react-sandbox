import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import TextFields from './TextFields';
import Sliders from './Sliders';
import Switches from './Switches';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

function FormMaterialUIScreen() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <TextFields />
        <Sliders />
        <Switches />
      </Container>
    </div>
  );
}

export default FormMaterialUIScreen;
