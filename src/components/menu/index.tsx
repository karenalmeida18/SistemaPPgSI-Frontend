import React from 'react';
import { Link } from 'react-router-dom';
import LogoUsp from '../../assets/usp-logo.png';

import {
  Container, LogoUSP, GridOptions, Button,
} from './styles';

import { getToken } from '../../services/auth';

const Menu: React.FC = () => {
  const isLogged = getToken();

  return (
    <Container>
      <LogoUSP src={LogoUsp} alt="usp university logo" />
      <GridOptions>
        <Link to="/user_registration">{/* Cadastro de usuários */}</Link>
      </GridOptions>

      {isLogged && (
        /* temporary  until connect with context to know how token clear */
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Sair
        </Button>
      )}
    </Container>
  );
};

export default Menu;
