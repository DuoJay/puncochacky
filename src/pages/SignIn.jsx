import { useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate('/admin');
      }
    } catch (error) {
      toast.error('Špatné jméno nebo heslo.');
    }
  };

  return (
    <div className="signIn__container">
      <form onSubmit={onSubmit} className="signIn__form">
        <label className="signIn__label" htmlFor="email">
          email
        </label>
        <input
          className="signIn__input"
          type="email"
          value={email}
          id="email"
          onChange={onChange}
        />
        <label className="signIn__label" htmlFor="password">
          heslo
        </label>
        <input
          className="signIn__input"
          type="password"
          value={password}
          id="password"
          onChange={onChange}
        ></input>
        <button className="signIn__button" type="submit">
          přihlásit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
