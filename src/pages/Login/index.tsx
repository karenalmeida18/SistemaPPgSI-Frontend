import React, { FC, useState, SyntheticEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as S from './styles';
import { Input, Button } from '../../components';

import api from '../../services/axios';
import { mapErrorsLogin, setUserToken } from '../../utils';
import { getToken } from '../../services/auth';

const Login: FC = () => {
  const [values, setValues] = useState({
    usp_code: '',
    password: '',
  });
  const [error, setError] = useState({
    usp_code: '',
    password: '',
    general: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (prop: string) => (event: {
    target: HTMLInputElement
  }) => {
    setError({ ...error, [prop]: '' });
    setValues({ ...values, [prop]: event.target.value });
  };

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
    setError({ usp_code: '', password: '', general: '' });
    e.preventDefault();
    const { usp_code: uspCode, password } = values;
    if (!uspCode || !password) validateRequiredFields(values);
    else {
      setLoading(true);
      try {
        const {
          data: {
            user: { user_type: userType },
            token,
          },
        } = await api.post('/user/login', values);
        setUserToken({ userType, token });
      } catch (err) {
        setError({ ...error, general: mapErrorsLogin(err) });
      }
      setLoading(false);
    }
  };

  return (
    <>
      {getToken() && <Redirect to="/" />}
      <S.Wrapper>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.Header> Login </S.Header>
          <Input
            required
            name="code"
            error={error.usp_code}
            label="Código USP"
            placeholder="Insira seu código USP"
            onChange={handleChange('usp_code')}
          />
          <Input
            required
            error={error.password}
            name="password"
            label="Senha"
            type="password"
            placeholder="Insira sua senha"
            onChange={handleChange('password')}
          />

          {error.general && <S.FormError>{error.general}</S.FormError>}

          <Button text="Entrar" type="submit" loading={loading} />
          <S.CardFooter>
            ou faça seu
            {' '}
            <Link to="/user_registration"> cadastro </Link>
          </S.CardFooter>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Login;
