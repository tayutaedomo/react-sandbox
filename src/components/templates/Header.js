import React, { useState } from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      // zIndex: theme.zIndex.drawer + 1,
      zIndex: theme.zIndex.modal + 1,
    },
  })
);

export default function Header() {
  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <MenuDrawer open={open} onOpen={onDrawerOpen} onClose={onDrawerClose} />
        <Typography variant="h6" color="inherit" noWrap>
          <Link color="inherit" href="/">
            React Sandbox
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
