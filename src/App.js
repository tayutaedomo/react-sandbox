import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import HeaderLink from './components/HeaderLink';
import Home from './components/Home';
import Clock from './components/Clock';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/tayutaedomo/react-sandbox"
        target="_blank"
        rel="noopener"
      >
        tayutaedomo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <HeaderLink />
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/clock">
              <Clock />
            </Route>
          </Switch>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
          {/* <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </Router>
  );
}
