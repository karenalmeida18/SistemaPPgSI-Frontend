import React, { FC } from 'react';

import * as S from './styles';
import { Input, Button } from '../../components';

import { pallet } from '../../styles/theme';
import UspLogo from '../../assets/usp-logo.png';

const Login: FC = () => (
  <S.Wrapper>
    <S.Form>
      <S.Image src={UspLogo} alt="usp university logo" />
      <Input
        required
        color={pallet.primaryBlue}
        name="code"
        label="Código USP"
        placeholder="Insira seu código USP"
      />
      <Input
        required
        color={pallet.primaryBlue}
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
      />
      <Button text="Entrar" />
    </S.Form>
  </S.Wrapper>
);

export default Login;
