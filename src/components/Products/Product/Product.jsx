import React from 'react';
import {
  Card, CardMedia, CardContent, CardActions, Typography, IconButton,
  createMuiTheme, ThemeProvider,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const sansFont = createMuiTheme({
    typography: {
      fontFamily: [
        'Roboto',
        'regular',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={sansFont}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="body2">
              {product.name}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
          <div className={classes.cardPrice}>
            <Typography variant="body2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Product;
