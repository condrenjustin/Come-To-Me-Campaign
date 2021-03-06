import React from 'react';
// import { connect } from 'react-redux';
import Home from '../home/home';
import AboutContainer from '../about/aboutContainer';
import ProductCategories from '../home/ProductCategories.js';
import PartnerContainer from '../partners/partnerContainer';
import ProductCTA from '../home/ProductCTA';

export interface HomeContainerProps {
  // dispatch: (action:any) => any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  
  render() {
    return (
      <div>
        <Home/>
        <AboutContainer/>
        <ProductCategories/>
        <ProductCTA/>
      </div>
    );
  }
}

export default (HomeContainer);
