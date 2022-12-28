import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';

import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg';
import { ReactComponent as SocksIcon } from '../../assets/svg/socks.svg';
import { ReactComponent as ContactIcon } from '../../assets/svg/contact.svg';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li
          className={classes.navbarListItem}
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeIcon className={classes.navbarIcon}></HomeIcon>
          Domů
        </li>
        <li
          className={classes.navbarListItem}
          onClick={() => {
            navigate('/products');
          }}
        >
          <SocksIcon className={classes.navbarIcon}></SocksIcon>
          Produkty
        </li>
        <li
          className={classes.navbarListItem}
          onClick={() => {
            navigate('/contact');
          }}
        >
          <ContactIcon className={classes.navbarIcon}></ContactIcon>
          Kontakt
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
