import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DefaultLayout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
