import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ClockScreen from './clock/ClockScreen';

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
