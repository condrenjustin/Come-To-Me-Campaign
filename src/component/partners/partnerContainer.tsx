import React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
} from '@material-ui/core';
// import { connect } from 'react-redux';
import Partners from './partners';

export interface PartnerContainerProps {
  // dispatch: (action:any) => any;
}

class PartnerContainer extends React.Component<PartnerContainerProps> {
  
  render() {
    return (
      <div>
        <Partners/>
      </div>
    );
  }
}

export default (PartnerContainer);