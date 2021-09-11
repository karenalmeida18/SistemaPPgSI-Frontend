import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogoUsp from '../../assets/usp-logo.png';

import {
  Container, LogoUSP, GridOptions, Button,
} from './styles';

// import { getToken } from '../../services/auth';
import { AuthContext } from '../../contexts/AuthContext';

const Menu: React.FC = () => {
  const { userLogged, signOut } = useContext(AuthContext);

  const isLogged = !!userLogged?.id;

  const history = useHistory();

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
            history.push('/login');
            window.location.reload();
            signOut();
          }}
        >
          Sair
        </Button>
      )}
    </Container>
  );
};

export default Menu;
