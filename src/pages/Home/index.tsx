import React from 'react';
import { Redirect } from 'react-router-dom';

import { getToken } from '../../services/auth';

const Home = () => {
  const isLogged = getToken();

  return (
    <>
      {!isLogged && <Redirect to="/login" />}
      <h1> Home </h1>
    </>
  );
};

export default Home;
