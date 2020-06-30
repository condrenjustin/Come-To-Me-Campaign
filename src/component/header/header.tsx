/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../images/logo.png';
import {
  Drawer,
  MenuItem,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import styles from './header.module.scss';
import {
  Link
} from "react-router-dom";

export interface HeaderProps {
  handleDrawerToggle: () => void;
  handleDrawerClose: () => void;
  handleDrawerClick: () => void;
  open: boolean;
}

const Header = (props:HeaderProps) => {
  const {
    handleDrawerClick,
    handleDrawerToggle,
    handleDrawerClose,
    open,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={handleDrawerClose}>
      <AppBar>
        <Toolbar variant="dense" className={styles.headerStyle}>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;