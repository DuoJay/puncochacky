import { useNavigate } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';

function Admin() {
  const isAdmin = useAdminAuth();

  const navigate = useNavigate();

  if (isAdmin) {
    return (
      <div className="admin__container">
        <div className="h1">Admin</div>
      </div>
    );
  } else {
    return (
      <div className="admin__container">
        <div className="h1">Nonono</div>
      </div>
    );
  }
}

export default Admin;
