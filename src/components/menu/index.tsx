import React from 'react';
import { Link } from 'react-router-dom';
import LogoUsp from '../../assets/usp-logo.png';

import {
  Container,
  LogoUSP,
  GridOptions,
} from './styles';

const Menu: React.FC = () => {
  const teste = '';

  return (
    <Container>
      <LogoUSP src={LogoUsp} alt="usp university logo" />
      <GridOptions>
        <Link to="/user_registration">
          {/* Cadastro de usuários */}
        </Link>
      </GridOptions>
      {teste}
    </Container>
  );
};

export default Menu;
