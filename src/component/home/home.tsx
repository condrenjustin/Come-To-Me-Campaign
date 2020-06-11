import React from 'react';
import styles from './home.module.scss';
import {
  Grid,
  Paper,
} from '@material-ui/core';


const Home = () => {
  return (
    <div className={styles.gridStyle}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Paper 
            style={{backgroundColor: '#e49f1f'}}
            elevation={3}
            className={styles.paperStyle}
          >
            yo yo yo does this work
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
