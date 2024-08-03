// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import './header.css';
import SearchBar from './SearchBar.js';

const Header = () => {
  return (
    <AppBar position="static" >
      <Toolbar className='emart-header'>
        <Typography variant='h4' className='emart-typography'>
          Emart
        </Typography>
        <SearchBar />
        <Link to="/" className='linkto-textbutton'>
          Home
        </Link>
        <Link to="/signup" className='linkto-textbutton'>
          Sign Up
        </Link>
        <Link to="/orders" className='linkto-textbutton'>
          Orders
        </Link>
        <Link to="/shoppingcart" >
          <IconButton className='linkto-iconbutton'>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
        <Link to="/favorite" >
        <IconButton className='linkto-iconbutton'>
          <FavoriteIcon />
        </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;