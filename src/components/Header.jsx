import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
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
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo-img" />
      </div>
      {isAdmin && headerAdminButtons}
    </header>
  );
}

export default Header;
