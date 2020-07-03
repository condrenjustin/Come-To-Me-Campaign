import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import bracelet from '../images/bracelet.jpg';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(13),
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#ffe3a0",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Container className={classes.root} component="section">
        <Grid container>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={handleSubmit} className={classes.cardContent}>
                <Typography variant="h3" component="h2" gutterBottom>
                  Do You Want Help?
                </Typography>
                <Typography variant="h5">
                  Take our interactive quiz to find curated resources.
                </Typography>
                <Link to='/interactiveResourceGuide'>
                  <Button type="submit" color="primary" variant="contained" className={classes.button}>
                    Take me there
                  </Button>
                </Link>
              </form>
            </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src={bracelet}
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
