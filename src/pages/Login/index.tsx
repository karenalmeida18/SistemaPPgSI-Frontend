import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { Input, Button } from '../../components';

const Login: FC = () => (
  <S.Wrapper>
    <S.Form>
      <S.Header> Login </S.Header>
      <Input
        required
        name="code"
        label="Código USP"
        placeholder="Insira seu código USP"
      />
      <Input
        required
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
      />
      <Button text="Entrar" />
      <S.CardFooter>
        ou faça seu
        {' '}
        <Link to="/user_registration"> cadastro </Link>
      </S.CardFooter>
    </S.Form>
  </S.Wrapper>
);

export default Login;
