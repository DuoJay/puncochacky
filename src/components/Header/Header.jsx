import React from 'react';

import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo-img" />
      </div>
    </header>
  );
}

export default Header;
