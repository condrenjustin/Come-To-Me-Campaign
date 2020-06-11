import React from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
// import { connect } from 'react-redux';
import Home from '../home/home';

export interface HomeContainerProps {
  // dispatch: (action:any) => any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default (HomeContainer);
