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
  );
};

export default Home;
