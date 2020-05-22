import React, { useEffect } from 'react';
import Loading from '../components/loading/Loading';

function Callback({ location, auth }) {
  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error('invalid callback URL');
    }
  }, [auth, location.hash]);
  return <Loading />;
}

export default Callback;
