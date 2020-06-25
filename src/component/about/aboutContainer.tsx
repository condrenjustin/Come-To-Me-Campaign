import React from 'react';
import {
  Grid,
  Paper,
  Box,
} from '@material-ui/core';
// import { connect } from 'react-redux';
import About from './about';

export interface AboutContainerProps {
  // dispatch: (action:any) => any;
}

class AboutContainer extends React.Component<AboutContainerProps> {
  
  render() {
    return (
      <div>
        <About/>
      </div>
    );
  }
}

export default (AboutContainer);