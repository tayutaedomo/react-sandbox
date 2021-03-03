import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ClockScreen from './clock/ClockScreen';
import TempBeforeScreen from './temperature/TempBeforeScreen';
import TempAfterScreen from './temperature/TempAfterScreen';
import FormScreen from './form/FormScreen';
import FormMaterialUIScreen from './form_materialui/FormMaterialUIScreen';
import ContextScreen from './context/ContextScreen';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Switch>
            <Route path="/clock">
              <Container className={classes.cardGrid} maxWidth="sm">
                <ClockScreen />
              </Container>
            </Route>
            <Route path="/temperature_before">
              <Container className={classes.cardGrid} maxWidth="sm">
                <TempBeforeScreen />
              </Container>
            </Route>
            <Route path="/temperature_after">
              <Container className={classes.cardGrid} maxWidth="sm">
                <TempAfterScreen />
              </Container>
            </Route>
            <Route path="/form">
              <Container className={classes.cardGrid} maxWidth="sm">
                <FormScreen />
              </Container>
            </Route>
            <Route path="/form_materialui">
              <Container className={classes.cardGrid} maxWidth="sm">
                <FormMaterialUIScreen />
              </Container>
            </Route>
            <Route path="/context">
              <Container className={classes.cardGrid} maxWidth="sm">
                <ContextScreen />
              </Container>
            </Route>
            <Route exact path="/">
              <Container className={classes.cardGrid} maxWidth="md">
                <Home />
              </Container>
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}
