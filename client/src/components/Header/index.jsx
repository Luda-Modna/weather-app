import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <Link className={styles.logoContainer} to='/'>
        <img className={styles.logo} src='./logo.png' alt='logo' />
      </Link>
      <nav className={styles.navHeader}>
        <NavLink className={styles.bttn} to='/login'>
          Login
        </NavLink>
        <NavLink className={styles.bttn} to='/signup'>
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
