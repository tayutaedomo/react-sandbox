import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './MenuDrawer';

export default function Header() {
  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="relative">
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
