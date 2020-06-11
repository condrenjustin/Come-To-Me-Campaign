import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AcUnit, AccessAlarm } from '@material-ui/icons';
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

const linkStyle = {
  color: 'black'
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
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            The Come To Me Campaign
          </Typography>
          <Drawer
            open={open}
          >
            <div style={{ minWidth: '20vw' }}>
              <Link style ={linkStyle} to='/'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AcUnit className={styles.iconSpacing} />
                  Home
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/Partners'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AcUnit className={styles.iconSpacing} />
                  Community Partners
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/Guide'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AcUnit className={styles.iconSpacing} />
                  Interactive Resource Guide
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/Gallery'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AcUnit className={styles.iconSpacing} />
                  Gallery
                </MenuItem>
              </Link>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;