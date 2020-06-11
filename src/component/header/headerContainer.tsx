import React from 'react';
// import { connect } from 'react-redux';
import Header from '../header/header';

export interface HeaderContainerProps {
  // dispatch: (action:any) => any;
}

export interface HeaderContainerState {
  open: boolean;
}

class HeaderContainer extends React.Component<
  HeaderContainerProps, HeaderContainerState
> {

  constructor(props:HeaderContainerProps) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
  }

  handleDrawerToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  handleDrawerClose = () => {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false });
    }
  }

  handleDrawerClick = () => {
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Header
          open={open}
          handleDrawerToggle={this.handleDrawerToggle}
          handleDrawerClose={this.handleDrawerClose}
          handleDrawerClick={this.handleDrawerClick}
        />
      </div>
    );
  }
}

export default HeaderContainer;