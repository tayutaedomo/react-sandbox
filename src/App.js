import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Clock from './components/Clock';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Switch>
            <Route path="/clock">
              <Clock />
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
