import React from 'react';

import classes from './Header.module.css';

import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" className={classes.logoImg} />
      </div>
    </header>
  );
}

export default Header;
