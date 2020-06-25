import React from 'react';
import styles from './home.module.scss';
import ProductHero from './ProductHero';
import ProductCategories from './ProductCategories';
import AppFooter from '../footer/AppFooter';
import {
  Grid,
  Typography,
  Box,
} from '@material-ui/core';


const Home = () => {
  return (
    <div>
      <ProductHero />
      <ProductCategories />
      {/* <AppFooter /> */}
    </div>
  
    // <div className={styles.gridStyle}>
    //   <Grid
    //     container
    //     direction='column'
    //   >
    //     <Grid item>
    //       <Box 
    //         className={styles.paperStyle}
    //         textAlign='center'
    //       >
    //         <Typography
    //           variant='h2'
    //         >
    //           Who We Are
    //         </Typography>
    //         <Typography
    //           variant='body1'
    //         >
    //           The Come to Me Campaign is a mental health awareness campaign at Vanderbilt University that aims to unify organizations that support mental health under a shared banner, assist students in navigating the resources available to Vanderbilt students, and galvanize the community as a whole to engage in dialogue and initiatives that support mental health.
    //         </Typography>
    //       </Box>
    //     </Grid>
    //     <Grid item>
    //       <Box 
    //         className={styles.paperStyle}
    //         textAlign='center'
    //       >
    //         <Typography
    //           variant='h2'
    //         >
    //           Where We Started
    //         </Typography>
    //         <Typography
    //           variant='body1'
    //         >
    //           Come to Me was started at Vanderbilt in the Fall of 2016, as a response to the friend of a community member taking their own life. Since then, Come to Me has aimed to unify organizations around proactive education and dialogue about mental health.
    //         </Typography>
    //       </Box>
    //     </Grid>
    //     <Grid item>
    //       <Box 
    //         className={styles.paperStyle}
    //         textAlign='center'
    //       >
    //         <Typography
    //           variant='h2'
    //         >
    //           Where We Are Now
    //         </Typography>
    //         <Typography
    //           variant='body1'
    //         >
    //           Over the past 4 years, The Come To Me Campaign has extended past IFC to not only all of Greek Life, but many other spheres of campus including the Ingram Commons, religious groups on campus, and student government. In addition to the orange bracelet awareness campaign, Come To Me has organized panels, speaker events, and presentations on the prevalence and impact of mental illness in today's society.
    //         </Typography>
    //       </Box>
    //     </Grid>
    //     <Grid item>
    //       <Box 
    //         className={styles.paperStyle}
    //         textAlign='center'
    //       >
    //         <Typography
    //           variant='h2'
    //         >
    //           Where We Are Going
    //         </Typography>
    //         <Typography
    //           variant='body1'
    //         >
    //           Come To Me hopes to continue to expand and reach an even larger population of the Vanderbilt community. We aim to continue giving presentations to various student groups and begin to engage graduate students. In the past we have primarily operated in the fall semester, throughout the month of october. This year we hope to continue to operate throughout the spring semester to maintain the presence of mental health advocacy on campus.
    //         </Typography>
    //       </Box>
    //     </Grid> 
    //     <Grid item>
    //       <Box 
    //         className={styles.paperStyle}
    //         textAlign='center'
    //       >
    //         <Typography
    //           variant='h2'
    //         >
    //           How Can You Help
    //         </Typography>
    //         <Typography
    //           variant='body1'
    //         >
    //           To accomplish our goals and continue to educate and support the Vanderbilt Community about mental health, we welcome new team members to help us.
    //         </Typography>
    //       </Box>
    //     </Grid>  
    //     {/* // add form here     */}
    //   </Grid>
    // </div>
  );
};

export default Home;
