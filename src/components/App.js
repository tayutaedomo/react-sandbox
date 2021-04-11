import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Footer from './Footer';
import Router from '../router/Router';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Router />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
