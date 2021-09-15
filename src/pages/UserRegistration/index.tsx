import React, { useState, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Select } from '../../components';
import * as S from './styles';

import api from '../../services/axios';
import { mapErrorsRegister } from '../../utils';

const UserRegistration: React.FC = () => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [uspCode, setUspCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    uspCode: '',
    password: '',
    name: '',
    userType: '',
    general: '',
  });
  const [loading, setLoading] = useState(false);

  const validateRequiredFields = (requiredFields: object) => {
    const fieldsArr = Object.keys(requiredFields);

    fieldsArr.forEach((field) => {
      if (!field) {
        setError({
          ...error,
          [field]: 'Esse campo é de preenchimento obrigatório',
        });
      }
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError({
      uspCode: '',
      password: '',
      general: '',
      userType: '',
      name: '',
    });

    if (!uspCode || !password) {
      validateRequiredFields({
        name,
        uspCode,
        password,
        user_type: userType,
      });
    } else {
      setLoading(true);
      try {
        await api.post('/user/create', {
          name,
          usp_code: uspCode,
          password,
          userType,
        });
      } catch (err) {
        setError({ ...error, general: mapErrorsRegister(err) });
      }
      setLoading(false);
    }
  };
  return (
    <S.Container>
      <S.GridTitle> CADASTRO DE USUÁRIOS </S.GridTitle>
      <S.FormCard onSubmit={(e) => handleSubmit(e)}>
        <Select
          label="Usuário"
          name="userType"
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
          required
        >
          <option value="student">Aluno</option>
          <option value="advisor">Orientador</option>
          <option value="ccp">CCP</option>
        </Select>
        <Input
          name="name"
          label="Nome"
          color=""
          error={error.name}
          required
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          error={error.uspCode}
          name="uspCode"
          label="Código USP"
          placeholder="Insira seu código USP"
          value={uspCode}
          onChange={(e) => setUspCode(e.target.value)}
        />
        <Input
          required
          error={error.password}
          name="password"
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.general && <S.FormError>{error.general}</S.FormError>}
        <S.GridButton>
          <Button
            type="submit"
            loading={loading}
            text="Cadastrar"
          />
        </S.GridButton>

        <S.Link>
          Voltar para
          <Link to="/login"> login </Link>
        </S.Link>

      </S.FormCard>
    </S.Container>
  );
};

export default UserRegistration;
