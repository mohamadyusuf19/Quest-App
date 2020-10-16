import React, { useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from './Auth';
import Loading from '../components/loading/Loading';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const [state, setState] = useState({
    auth: new Auth(history),
    tokenRenewalComplete: false,
  });
  const { auth, tokenRenewalComplete } = state;

  useEffect(() => {
    auth.renewToken(() =>
      setState((state) => ({ ...state, tokenRenewalComplete: true }))
    );
  });

  if (!tokenRenewalComplete) return <Loading />;

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
