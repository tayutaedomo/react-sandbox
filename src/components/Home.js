import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import HomeCard from './HomeCard';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            React Sandbox
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'State and Lifecycle'}
              content={'Ref: https://reactjs.org/docs/state-and-lifecycle.html'}
              to={'/clock'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'Lifting state up, before'}
              content={'Ref: https://ja.reactjs.org/docs/lifting-state-up.html'}
              to={'/temperature_before'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'Lifting state up, after'}
              content={'Ref: https://ja.reactjs.org/docs/lifting-state-up.html'}
              to={'/temperature_after'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'Form'}
              content={'Ref: https://ja.reactjs.org/docs/forms.html'}
              to={'/form'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'Form material-ui'}
              content={'Ref: https://material-ui.com/components/checkboxes/'}
              to={'/form_materialui'}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
