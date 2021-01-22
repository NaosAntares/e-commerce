import React from 'react';
import './homepage.scss';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import hero from '../../assets/teapot-bg.png';

const Homepage = () => (
  <>
    <div className="container">
      <img src={hero} alt="" className="hero-image" />
      <Typography variant="h6" className="headline">The essence of chiiran on every leaf.</Typography>
      <Button
        component={Link}
        to="/products"
        type="button"
        className="btn"
      >
        Shop
      </Button>
    </div>
  </>
);

export default Homepage;
