import React from 'react';
import {
  AppBar, Toolbar, IconButton, Badge, Typography, Box,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import logo from '../../assets/commerce.png';
import useStyles from './styles';

function Navbar({ totalItems }) {
  const classes = useStyles();

  const serifFont = createMuiTheme({
    typography: {
      h5: {
        fontFamily: 'Amiri',
      },
      h6: {
        fontFamily: 'Amiri',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={serifFont}>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              fontWeight="fontWeightBold"
              className={classes.title}
              color="inherit"
            >
              <Box fontWeight="fontWeightBold" display="inline">TeaLeaf</Box>
            </Typography>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.menuItem}
              color="inherit"
            >
              Search

            </Typography>
            <Typography
              component={Link}
              to="/products"
              variant="h6"
              className={classes.menuItem}
              color="inherit"
            >
              Shop

            </Typography>
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
