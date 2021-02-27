import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ClockScreen from './clock/ClockScreen';
import TempBeforeScreen from './temperature/TempBeforeScreen';
import TempAfterScreen from './temperature/TempAfterScreen';
import FormScreen from './form/FormScreen';
import FormMaterialUIScreen from './form_materialui/FormMaterialUIScreen';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Switch>
            <Route path="/clock">
              <ClockScreen />
            </Route>
            <Route path="/temperature_before">
              <TempBeforeScreen />
            </Route>
            <Route path="/temperature_after">
              <TempAfterScreen />
            </Route>
            <Route path="/form">
              <FormScreen />
            </Route>
            <Route path="/form_materialui">
              <FormMaterialUIScreen />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}
