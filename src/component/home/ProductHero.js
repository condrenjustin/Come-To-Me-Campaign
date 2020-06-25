import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProductHeroLayout from './ProductHeroLayout';
import {
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const backgroundImage =
  'https://d279m997dpfwgl.cloudfront.net/wp/2016/11/SHEEHAN-Collin-Sunrise-Banner-1.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        The Come To Me Campaign
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy a judgement-free community to openly discuss mental health practices
      </Typography>
      <Button
        color="default"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="https://forms.gle/iQQPooUPcmDyyzTG7"
      >
        Join The Team
      </Button>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
