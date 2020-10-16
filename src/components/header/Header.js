import React, { useContext, useState, useEffect } from 'react';
import './header.scss';
import { AuthContext } from '../../auth/AuthContext';
const logo = require('../../assets/qilogo.png');

const Header = () => {
  const auth = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    profile: '',
    error: '',
  });

  useEffect(() => {
    if (auth.isAuthenticated()) {
      auth.getProfile((profile, error) =>
        setState((prev) => ({ ...prev, profile, error }))
      );
    }
  }, [auth]);

  return (
    <div className='container'>
      <div className='header'>
        <img src={logo} alt='logo' className='logo' /> <p>Platform</p>
      </div>
      {state.profile ? (
        <div className={`container__button ${open ? 'open' : ''}`}>
          <img
            src={state.profile.picture}
            alt='logo'
            className='profile__picture'
          />
          <button className='open__logout' onClick={() => setOpen(!open)}>
            +
          </button>
          <button
            className={`button__logout ${open ? 'button__logout--open' : ''}`}
            onClick={() => auth.logout()}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className='container__button' onClick={() => auth.login()}>
          <button className='button__login'>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Header;
