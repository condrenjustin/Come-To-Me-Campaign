import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import activeMinds from './activeminds.jpeg'
import csw from './csw.jpeg'
import hidden from './hidden.png'
import mhrt from './mhrt.jpg'
import mindingYourMind from './mindingyourmind.jpg'
import oscc from './oscc.jpeg'
import support from './support.jpeg'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'orange',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function Partners(props) {
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
              <Typography variant="h1" className={classes.title}>
                Our Partners
              </Typography>
              <Typography variant="subtitle1" className={classes.item}>
                The Come to Me Campaign was a huge community effort, taking months of planning and organization. Below is a list of organizations without which, this campaign could not have happened. Click the pictures of the organization for a description of how they support mental health efforts as a whole, and for information about how to get involved.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.title}>
                Mental Health Organizations
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.item}>
              <img
                src={oscc}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Office of Student Care Coordination (OSCC)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.item}>
              <img
                src={csw}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Vanderbilt Center for Student Wellbeing
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.item}>
              <img
                src={activeMinds}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Vanderbilt Active Minds
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.item}>
              <img
                src={support}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Vanderbilt Recovery Support (VRS)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>
              <img
                src={hidden}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Hidden Dores
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>
              <img
                src={mindingYourMind}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Minding Your Mind
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>
              <img
                src={mhrt}
              />
              <Typography variant="subtitle1" className={classes.title}>
                Vanderbilt Mental Health Round Table (MHRT)
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partners);

