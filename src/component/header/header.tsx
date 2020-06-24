import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HelpIcon from '@material-ui/icons/Help';
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
                  <HomeIcon className={styles.iconSpacing} />
                  Home
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/aboutUs'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <GroupIcon className={styles.iconSpacing} />
                  About Us
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/communityPartners'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <GroupWorkIcon className={styles.iconSpacing} />
                  Community Partners
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/interactiveResourceGuide'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <HelpIcon className={styles.iconSpacing} />
                  Interactive Resource Guide
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/gallery'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <LibraryBooksIcon className={styles.iconSpacing} />
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