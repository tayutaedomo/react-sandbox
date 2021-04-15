import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { cards } from '../home/Home';

const MenuDrawer = (props) => {
  const { open, onOpen, onClose } = props;

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Divider />
      <List>
        {cards
          .slice()
          .reverse()
          .map((card) => (
            <NavLink key={card.to} to={card.to}>
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
