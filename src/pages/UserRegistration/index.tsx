import React, { useState, SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, Select } from '../../components';
import * as S from './styles';

import api from '../../services/axios';
import { mapErrorsRegister } from '../../utils';

const UserRegistration: React.FC = () => {
  const history = useHistory();
  const [userType, setUserType] = useState('student');
  const [name, setName] = useState('');
  const [uspCode, setUspCode] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [lattes, setLattes] = useState('');
  const [lattesDate, setLattesDate] = useState('');
  const [advisor, setAdvisor] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState({
    uspCode: '',
    password: '',
    name: '',
    userType: '',
    email: '',
    lattes: '',
    lattesDate: '',
    advisor: '',
    course: '',
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
      email: '',
      lattes: '',
      lattesDate: '',
      advisor: '',
      course: '',
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
        const req = {
          name,
          usp_code: uspCode,
          password,
          user_type: userType,
          email,
          lattes,
          lattes_date: userType === 'student' ? new Date(lattesDate) : '',
          advisor,
          course,
        };

        await api.post('/user/create', {
          ...req,
        });
      } catch (err) {
        setError({ ...error, general: mapErrorsRegister(err) });
      }
      setLoading(false);
      history.push('/login');
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
          error={error.email}
          name="email"
          label="Email"
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {
          userType === 'student'
          && (
          <>
            <Input
              required
              error={error.lattes}
              name="lattes"
              label="Curriculum lattes"
              type="text"
              placeholder="Insira o link para o curriculum lattes"
              value={lattes}
              onChange={(e) => setLattes(e.target.value)}
            />
            <Input
              required
              error={error.lattesDate}
              name="lattes_date"
              label="Data da última atualização do lattes"
              type="date"
              value={lattesDate}
              onChange={(e) => setLattesDate(e.target.value)}
            />
            <Input
              required
              error={error.advisor}
              name="advisor"
              label="Orientador"
              type="text"
              placeholder="Insira o nome do orientador"
              value={advisor}
              onChange={(e) => setAdvisor(e.target.value)}
            />
            <Input
              required
              error={error.advisor}
              name="course"
              label="Curso"
              type="text"
              placeholder="Insira o seu seu curso"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </>
          )
        }
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
