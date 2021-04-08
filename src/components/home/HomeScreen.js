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

const renderCard = (card) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={card.to}>
      <HomeCard headline={card.headline} content={card.content} to={card.to} />
    </Grid>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {cards.map((card) => {
          return renderCard(card);
        })}
      </Grid>
    </React.Fragment>
  );
};

const cards = [
  {
    headline: 'State and Lifecycle',
    content: (
      <a
        href="https://reactjs.org/docs/state-and-lifecycle.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/clock',
  },
  {
    headline: 'Lifting state up, before',
    content: (
      <a
        href="https://ja.reactjs.org/docs/lifting-state-up.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/temperature_before',
  },
  {
    headline: 'Form',
    content: (
      <a
        href="https://ja.reactjs.org/docs/forms.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/form',
  },
  {
    headline: 'Form material-ui',
    content: (
      <a
        href="https://material-ui.com/components/checkboxes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/form_materialui',
  },
  {
    headline: 'Context',
    content: (
      <a
        href="https://reactjs.org/docs/context.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/context',
  },
  {
    headline: 'Composition',
    content: (
      <a
        href="https://reactjs.org/docs/composition-vs-inheritance.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/composition',
  },
  {
    headline: 'Higher-Order Component',
    content: (
      <a
        href="https://reactjs.org/docs/higher-order-components.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/hoc',
  },
  {
    headline: 'Re-rendering',
    content: (
      <>
        memo, useCallback, useMemo
        <br />
        <a
          href="https://www.udemy.com/course/react_stepup/learn/lecture/24823308"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reference
        </a>
      </>
    ),
    to: '/re-rendering',
  },
  {
    headline: 'Style Coding',
    content:
      'Inline Styles, CSS Modules, Styled JSX, Styled components, Emotion',
    to: '/styles',
  },
  {
    headline: 'Router',
    content: 'Basic, Nested, Refactoring, Params, 404',
    to: '/router',
  },
];

export default Home;
