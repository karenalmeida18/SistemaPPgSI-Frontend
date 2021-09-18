import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LogoUsp from '../../assets/usp-logo.png';

import {
  Container, LogoUSP, Button,
} from './styles';

// import { getToken } from '../../services/auth';
import { AuthContext } from '../../contexts/AuthContext';

const Menu: React.FC = () => {
  const { userLogged, signOut } = useContext(AuthContext);

  const isLogged = !!userLogged?.id;

  const history = useHistory();

  return (
    <Container>
      <LogoUSP
        src={LogoUsp}
        alt="usp university logo"
        aria-label="voltar para a página principal"
        onClick={() => {
          history.push('/');
          window.location.reload();
        }}
      />
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
