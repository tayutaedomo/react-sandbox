import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Footer from './Footer';
import HomeScreen from './home/HomeScreen';

import ClockScreen from './clock/ClockScreen';
import TempBeforeScreen from './temperature/TempBeforeScreen';
import TempAfterScreen from './temperature/TempAfterScreen';
import FormScreen from './form/FormScreen';
import FormMaterialUIScreen from './form_materialui/FormMaterialUIScreen';
import ContextScreen from './context/ContextScreen';
import CompositionScreen from './composition/CompositionScreen';
import HocScreen from './hoc/HocScreen';
import Rerendering from './re-rendering/Rerendering';

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
            <Route exact path="/">
              <Container className={classes.cardGrid} maxWidth="md">
                <HomeScreen />
              </Container>
            </Route>
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
            <Route path="/composition">
              <Container className={classes.cardGrid} maxWidth="sm">
                <CompositionScreen />
              </Container>
            </Route>
            <Route path="/hoc">
              <Container className={classes.cardGrid} maxWidth="sm">
                <HocScreen />
              </Container>
            </Route>
            <Route path="/re-rendering">
              <Container className={classes.cardGrid} maxWidth="sm">
                <Rerendering />
              </Container>
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}
