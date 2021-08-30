import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
  const { userLogged: { id: isLogged = null } = {} } = useContext(AuthContext);

  return (
    <>
      {!isLogged && <Redirect to="/login" />}
      <h1> Home </h1>
    </>
  );
};

export default Home;
