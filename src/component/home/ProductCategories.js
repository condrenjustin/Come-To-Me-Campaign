import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core';
import { Router } from 'react-router-dom';
import {
  Typography,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Our On-Campus Partnerships
      </Typography>
      <div className={classes.images}>
        <Button
          key='Center for Student Wellbeing'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Center for Student Wellbeing
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='Active Minds'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              Active Minds
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='Recovery Support'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              Recovery Support
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='Mental Health Round Table'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              Mental Health Round Table
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='Minding Your Mind'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              Minding Your Mind
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='IFC'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              IFC
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='NPHC'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              NPHC
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='Panhellenic Council'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              Panhellenic Council
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
        <Button
          key='VSG'
          className={classes.imageWrapper}
          style={{
            width: '33%',
          }}
          
        >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.skinit.com/media/catalog/product/cache/9dbe6a0c16a5b581719a1aa389879cfc/f/a/fall1509_1.jpg)`,
          }}
        />
        <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              VSG
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Button>
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
