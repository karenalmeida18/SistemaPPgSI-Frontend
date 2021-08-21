import React, { useState } from 'react';
import { Button, Input, Select } from '../../components';

import * as S from './styles';

const UserRegistration: React.FC = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [codeUsp, setCodeUsp] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.Container>
      <S.GridTitle> CADASTRO DE USUÁRIOS </S.GridTitle>
      <S.FormCard>
        <Select
          label="Usuário"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        >
          <option value="aluno">Aluno</option>
          <option value="orientador">Orientador</option>
          <option value="ccp">CCP</option>
        </Select>
        <Input
          name="nome"
          label="Nome"
          color=""
          required
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          name="code"
          label="Código USP"
          placeholder="Insira seu código USP"
          value={codeUsp}
          onChange={(e) => setCodeUsp(e.target.value)}
        />
        <Input
          name="password"
          label="Senha"
          required
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.GridButton>
          <Button
            text="Cadastrar"
            onClick={() => {}}
          />
        </S.GridButton>
      </S.FormCard>
    </S.Container>
  );
};

export default UserRegistration;
