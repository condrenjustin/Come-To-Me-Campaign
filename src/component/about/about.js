import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/Users/nextchoice/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
        <Grid item xs={12}>
            <div className={classes.item}>
              <Typography variant="h3" className={classes.title}>
                About Us
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Typography variant="h5" className={classes.title}>
                Our Identity
              </Typography>
              <Typography variant="body1">
                The Come to Me Campaign is a mental health awareness campaign at Vanderbilt University that aims to unify organizations that support mental health under a shared banner, assist students in navigating the resources available to Vanderbilt students, and galvanize the community as a whole to engage in dialogue and initiatives that support mental health.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Typography variant="h5" className={classes.title}>
                Our Beginnings
              </Typography>
              <Typography variant="body1">
                Come to Me was started at Vanderbilt in the Fall of 2016, as a response to the friend of a community member taking their own life. Since then, Come to Me has aimed to unify organizations around proactive education and dialogue about mental health.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Typography variant="h5" className={classes.title}>
                Our Progress
              </Typography>
              <Typography variant="body1">
                Over the past 4 years, The Come To Me Campaign has extended past IFC to not only all of Greek Life, but many other spheres of campus including the Ingram Commons, religious groups on campus, and student government. In addition to the orange bracelet awareness campaign, Come To Me has organized panels, speaker events, and presentations on the prevalence and impact of mental illness in today's society.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Typography variant="h5" className={classes.title}>
                Our Vision
              </Typography>
              <Typography variant="body1">
                Come To Me hopes to continue to expand and reach an even larger population of the Vanderbilt community. We aim to continue giving presentations to various student groups and begin to engage graduate students.
                In the past we have primarily operated in the fall semester, throughout the month of october. This year we hope to continue to operate throughout the spring semester to maintain the presence of mental health advocacy on campus.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

