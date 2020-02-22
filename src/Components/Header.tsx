import React from 'react';

import clsx from 'clsx';
import {styles} from '../theme';

import { AppBar,
         Toolbar,
         Typography,
         IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

interface IProps {
  open: boolean;
  handleDrawerOpenCallback: any
}

const Header: React.FC<IProps> = (props) => {

  const {
    open
  } = props;

  const classes = styles();

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpenCallback}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Fox's Passport
        </Typography>
        <IconButton color="inherit">
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
