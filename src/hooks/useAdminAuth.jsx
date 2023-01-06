import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getAuth().onAuthStateChanged(user => {
      if (user && user.email === 'puncochacky.db@gmail.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  return isAdmin;
}

export default useAdminAuth;
