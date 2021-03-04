import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HomeCard from './HomeCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
        <Grid item xs={12} sm={6} md={4}>
          <HomeCard
            headline={'Context'}
            content={'Ref: https://reactjs.org/docs/context.html'}
            to={'/context'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HomeCard
            headline={'Composition'}
            content={
              'Ref: https://reactjs.org/docs/composition-vs-inheritance.html'
            }
            to={'/composition'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HomeCard
            headline={'Higher-Order Component'}
            content={
              'Ref: https://reactjs.org/docs/higher-order-components.html'
            }
            to={'/hoc'}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
