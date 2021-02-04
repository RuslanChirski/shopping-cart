import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = ({numItems, total}) => {
  return (
    <header className='shop-header row'>
      <Link to='/'>
        <p className='logo text-dark'>ReStore</p>
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart'/>
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  )
}

Header.propTypes = {
  numItems: PropTypes.number,
  total: PropTypes.number,
}

export default Header;