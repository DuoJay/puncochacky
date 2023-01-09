import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';

import logo from '../assets/logo/logo.png';

function Header() {
  const isAdmin = useAdminAuth();

  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const headerAdminButtons = (
    <div className="header__admin-buttons">
      <button
        onClick={() => {
          navigate('/admin');
        }}
        className="header__button"
      >
        seznam položek
      </button>
      <button
        onClick={() => {
          navigate('/db');
        }}
        className="header__button"
      >
        přidat položku
      </button>
      <button onClick={onLogout} className="header__button">
        odhlásit
      </button>
    </div>
  );

  return (
    <header className="header">
      <Link className="header__logo" to={'/'}>
        <img src={logo} alt="" className="header__logo-img" />
      </Link>
      {isAdmin && headerAdminButtons}
    </header>
  );
}

export default Header;
