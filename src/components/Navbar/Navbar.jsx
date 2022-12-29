import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg';
import { ReactComponent as SocksIcon } from '../../assets/svg/socks.svg';
import { ReactComponent as ContactIcon } from '../../assets/svg/contact.svg';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = route => {
    if (route === location.pathname) {
      return true;
    }
  };

  console.log(location.pathname);

  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li
          className={`navbar__item ${pathMatchRoute('/') && 'on-this-page'}`}
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeIcon className="navbar__item-icon"></HomeIcon>
          Domů
        </li>
        <li
          className={`navbar__item ${
            pathMatchRoute('/products') && 'on-this-page'
          }`}
          onClick={() => {
            navigate('/products');
          }}
        >
          <SocksIcon className="navbar__item-icon"></SocksIcon>
          Produkty
        </li>
        <li
          className={`navbar__item ${
            pathMatchRoute('/contact') && 'on-this-page'
          }`}
          onClick={() => {
            navigate('/contact');
          }}
        >
          <ContactIcon className="navbar__item-icon"></ContactIcon>
          Kontakt
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
