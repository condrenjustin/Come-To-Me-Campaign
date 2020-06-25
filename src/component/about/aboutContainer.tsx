import React from 'react';
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