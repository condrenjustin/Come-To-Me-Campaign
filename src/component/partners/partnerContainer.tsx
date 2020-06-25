import React from 'react';
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