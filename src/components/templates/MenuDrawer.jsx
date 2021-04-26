import React from 'react';
import {
  createStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { cards } from '../home/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    link: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
    },
  })
);

const MenuDrawer = (props) => {
  const { open, onOpen, onClose } = props;
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbar} />
      <List>
        {cards
          .slice()
          .reverse()
          .map((card) => (
            <NavLink key={card.to} to={card.to} className={classes.link}>
              <ListItem button>
                <ListItemText primary={card.headline} />
              </ListItem>
            </NavLink>
          ))}
      </List>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
