import React from 'react';
import {
  AppBar, Toolbar, IconButton, Badge, Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

// import logo from '../../assets/commerce.png';
import useStyles from './styles';

function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
            Boston Tea Company
          </Typography>
          <Typography component={Link} to="/shop" variant="h6" className={classes.menuItem} color="inherit">Search</Typography>
          <Typography component={Link} to="/shop" variant="h6" className={classes.menuItem} color="inherit">Shop</Typography>
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
