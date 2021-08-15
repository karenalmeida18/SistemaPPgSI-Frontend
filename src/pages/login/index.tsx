import React, { FC } from 'react';

import * as S from './styles';
import { Input } from '../../components';

import { pallet } from '../../styles/theme';

const Login: FC = () => (
  <S.Wrapper>
    <S.Form>
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
    </S.Form>
  </S.Wrapper>
);

export default Login;
