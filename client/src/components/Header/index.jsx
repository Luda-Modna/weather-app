import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signin'>Sign In</Link>
      <Link to='/favorite'>Favorite</Link>
    </nav>
  );
}

export default Header;
